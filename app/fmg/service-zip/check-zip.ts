import { lookupZip } from "../api";
import type { FmgState } from "../fmg-state";

export type ZipAlert = { heading: string; body: string };

export type ZipCheck =
  | { ok: true; patch: Pick<FmgState, "serviceZip" | "city" | "state"> }
  | { ok: false; alert: ZipAlert };

// Is the ZIP a real one where Safelite works? The answer carries the city and
// state for the order, or the reference's notice for a bad or unserved ZIP.
export async function checkServiceZip(zip: string): Promise<ZipCheck> {
  const result = await lookupZip(zip).catch(() => null);
  if (!result?.isValid) {
    return { ok: false, alert: { heading: "ZIP code is not valid.", body: "Please re-enter your correct service ZIP." } };
  }
  if (!result.isServiceable) {
    return {
      ok: false,
      alert: {
        heading: `We don't currently provide service within ${zip}.`,
        body: "Please enter a different ZIP code where you'd like service so we can get you scheduled.",
      },
    };
  }
  return { ok: true, patch: { serviceZip: zip, city: result.city ?? undefined, state: result.state ?? undefined } };
}
