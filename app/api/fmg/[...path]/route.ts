import type { NextRequest } from "next/server";

const UPSTREAM = "https://digitalapi.safelite.io";

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
];

export async function GET(_request: NextRequest, ctx: RouteContext<"/api/fmg/[...path]">) {
  const { path } = await ctx.params;
  // Keep each segment encoded (makes and styles can contain spaces and "/")
  const joined = path.map((segment) => encodeURIComponent(decodeURIComponent(segment))).join("/");
  for (const [pattern, target] of ROUTES) {
    const match = joined.match(pattern);
    if (!match) continue;
    try {
      const response = await fetch(UPSTREAM + target(match.slice(1)), { next: { revalidate: 86400 } });
      const body = await response.text();
      return new Response(body, {
        status: response.status,
        headers: { "content-type": response.headers.get("content-type") ?? "application/json" },
      });
    } catch {
      return Response.json({ error: "Lookup unavailable" }, { status: 502 });
    }
  }
  return Response.json({ error: "Not found" }, { status: 404 });
}
