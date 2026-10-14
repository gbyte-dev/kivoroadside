// Client helpers for the read-only lookups proxied by /api/fmg (see
// app/api/fmg/[...path]/route.ts).

const segment = (value: string) => encodeURIComponent(value);

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`/api/fmg/${path}`);
  if (!response.ok) throw new Error(`Lookup failed: ${response.status}`);
  return response.json() as Promise<T>;
}

export const fetchYears = () => getJson<number[]>("vehicle/years");
export const fetchMakes = (year: string) => getJson<string[]>(`vehicle/makes/${year}`);
export const fetchModels = (year: string, make: string) => getJson<string[]>(`vehicle/models/${year}/${segment(make)}`);
export const fetchStyles = (year: string, make: string, model: string) =>
  getJson<string[]>(`vehicle/styles/${year}/${segment(make)}/${segment(model)}`);

export type VehicleLookup = { carId: string; category: string };
export const lookupVehicle = (year: string, make: string, model: string, style: string) =>
  getJson<VehicleLookup>(`vehicle/lookup/${year}/${segment(make)}/${segment(model)}/${segment(style)}`);

export type DamageOptions = {
  windshieldOptions?: { availableReplacementOptions: string[]; isRepairAvailable: boolean };
  backGlassOptions?: { availableReplacementOptions: string[] };
  driverSideOptions?: { availableReplacementOptions: string[] };
  passengerSideOptions?: { availableReplacementOptions: string[] };
};
export const fetchDamageOptions = (carId: string) => getJson<DamageOptions>(`damage-options/${segment(carId)}`);

export type ZipLookup = { isValid: boolean; isServiceable: boolean; city: string | null; state: string | null };
export const lookupZip = (zip: string) => getJson<ZipLookup>(`zip/${zip}`);

export type Part = {
  partNumber: string;
  description: string | null;
  partType: string;
  requiresRecalibration: boolean;
  recalibrationType: string | null;
};
export type PartAnswer = { answerResult: string | null; answerText: string; nextQuestionSequence: number | null };
export type PartQuestion = { questionSequence: number; questionText: string; answers: PartAnswer[] };
type PieceRef = { location: string; name: string };

// The part for each damaged piece of glass, or the questions that pick it
export type PartsOrQuestions = {
  partsOrQuestions: { glassPiece: PieceRef; parts: Part[] | null; partQuestions: PartQuestion[] | null }[];
};
// The parts the answers lead to
export type AnsweredParts = { glassPieceParts: { glassPiece: PieceRef; parts: Part[] | null }[] };

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`/api/fmg/${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`Lookup failed: ${response.status}`);
  return response.json() as Promise<T>;
}

type PartsRequest = { carId: string; zip: string; vin?: string; pieces: (PieceRef & { result?: string })[] };
export const lookupPartsOrQuestions = (request: PartsRequest) => postJson<PartsOrQuestions>("parts", request);
export const lookupAnsweredParts = (request: PartsRequest) => postJson<AnsweredParts>("parts", request);

export type Shop = {
  providerNumber: string;
  companyName: string;
  phoneNumber: string;
  distanceInMiles: number;
  address: { streetAddress: string; streetAddress2: string; city: string; state: string; zipCode: string };
};
export const fetchShops = (zip: string, service: "Repair" | "Replace", carId: string) =>
  getJson<{ mobileProviderNumber: string; shopProviders: Shop[] }>(`shops/${zip}/${service}/${segment(carId)}`);
