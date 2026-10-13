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
