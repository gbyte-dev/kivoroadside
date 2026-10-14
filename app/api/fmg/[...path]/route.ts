import type { NextRequest } from "next/server";

const UPSTREAM = "https://digitalapi.safelite.io";

// safelite.com's consumer account, which its funnel sends with every lookup
const PARENT_ACCOUNT = "167132";

// Read-only lookups the funnel needs, mapped to safelite.com's public API.
// Nothing else is forwarded: quotes, scheduling and orders stay local.
const ROUTES: [RegExp, (match: string[]) => string][] = [
  [/^vehicle\/years$/, () => "/vehicle/api/v1/vehicle/years"],
  [/^vehicle\/makes\/(\d{4})$/, ([year]) => `/vehicle/api/v1/vehicle/Makes/${year}`],
  [/^vehicle\/models\/(\d{4})\/([^/]+)$/, ([year, make]) => `/vehicle/api/v1/vehicle/Models/${year}/${make}`],
  [
    /^vehicle\/styles\/(\d{4})\/([^/]+)\/([^/]+)$/,
    ([year, make, model]) => `/vehicle/api/v1/vehicle/Styles/${year}/${make}/${model}`,
  ],
  [
    /^vehicle\/lookup\/(\d{4})\/([^/]+)\/([^/]+)\/([^/]+)$/,
    ([year, make, model, style]) => `/vehicle/api/v1/vehicle/lookup/${year}/${make}/${model}/${style}`,
  ],
  [/^damage-options\/([A-Za-z0-9]+)$/, ([carId]) => `/parts/api/v2/parts/damage-options/${carId}`],
  [/^zip\/(\d{5})$/, ([zip]) => `/location/api/v1/location/zip/${zip}/Replace`],
  // Safelite shops near a ZIP (the part number only narrows the list, any value works)
  [
    /^shops\/(\d{5})\/(Repair|Replace)\/([A-Za-z0-9]+)$/,
    ([zip, service, carId]) =>
      `/location/api/v1/location/providers/${zip}/${service}/100/${PARENT_ACCOUNT}/true/${carId}/${service.toUpperCase()}/false`,
  ],
];

async function relay(url: string, init?: RequestInit) {
  try {
    const response = await fetch(url, init);
    const body = await response.text();
    return new Response(body, {
      status: response.status,
      headers: { "content-type": response.headers.get("content-type") ?? "application/json" },
    });
  } catch {
    return Response.json({ error: "Lookup unavailable" }, { status: 502 });
  }
}

export async function GET(_request: NextRequest, ctx: RouteContext<"/api/fmg/[...path]">) {
  const { path } = await ctx.params;
  // Keep each segment encoded (makes and styles can contain spaces and "/")
  const joined = path.map((segment) => encodeURIComponent(decodeURIComponent(segment))).join("/");
  for (const [pattern, target] of ROUTES) {
    const match = joined.match(pattern);
    if (match) return relay(UPSTREAM + target(match.slice(1)), { next: { revalidate: 86400 } });
  }
  return Response.json({ error: "Not found" }, { status: 404 });
}

const LOCATIONS = new Set(["Windshield", "Driver", "Passenger", "Rear"]);
const WORD = /^[A-Za-z0-9]{1,20}$/;

type PieceInput = { location?: unknown; name?: unknown; result?: unknown };

// POST /api/fmg/parts: the glass part for each damaged piece, or the questions
// that pick it ("Does your vehicle have a heads-up display?"). With answers,
// the parts those answers lead to. The upstream body is rebuilt here from
// checked values, so nothing else can be sent through.
export async function POST(request: NextRequest, ctx: RouteContext<"/api/fmg/[...path]">) {
  const { path } = await ctx.params;
  if (path.join("/") !== "parts") return Response.json({ error: "Not found" }, { status: 404 });

  const input = (await request.json().catch(() => null)) as {
    carId?: unknown;
    zip?: unknown;
    vin?: unknown;
    pieces?: PieceInput[];
  } | null;
  const carId = typeof input?.carId === "string" && WORD.test(input.carId) ? input.carId : null;
  const zip = typeof input?.zip === "string" && /^\d{5}$/.test(input.zip) ? input.zip : null;
  const vin = typeof input?.vin === "string" && /^[A-HJ-NPR-Z0-9]{17}$/.test(input.vin) ? input.vin : null;
  const pieces = Array.isArray(input?.pieces) ? input.pieces.slice(0, 8) : [];
  const valid = pieces.every(
    (piece) =>
      typeof piece.location === "string" &&
      LOCATIONS.has(piece.location) &&
      typeof piece.name === "string" &&
      WORD.test(piece.name) &&
      (piece.result === undefined || (typeof piece.result === "string" && WORD.test(piece.result))),
  );
  if (!carId || !zip || pieces.length === 0 || !valid) return Response.json({ error: "Bad request" }, { status: 400 });

  const glassPieces = pieces.map(({ location, name }) => ({ location, name }));
  const answerResults = pieces
    .filter((piece) => piece.result !== undefined)
    .map(({ location, name, result }) => ({ location, name, result }));
  const answered = answerResults.length > 0;
  const body = {
    carId,
    glassPieces,
    ...(answered ? { answerResults } : {}),
    zip,
    vin,
    serviceType: answered ? null : "Install",
    parentAccountNumber: PARENT_ACCOUNT,
    oemEndorsementFlag: false,
    AppName: "FixMyGlass",
  };
  const endpoint = answered ? "/parts/api/v1/parts/parts" : "/parts/api/v1/parts/parts-or-questions";
  return relay(UPSTREAM + endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}
