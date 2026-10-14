import type { FmgState, ServicePackage, Vaps } from "./fmg-state";
import { glassPieces } from "./order";

// Local price model. safelite.com prices a quote only for a booking session
// it opens on its servers, so the funnel here builds its own figures with
// the same line items: glass and labor per piece, camera recalibration,
// wipers and rain repellent for the higher packages, a $75 premium special
// for visitors paying on their own, and promo codes. Prices are stable for
// a given vehicle and part.

export const WIPERS = 69.98; // two front beam blades at $34.99
export const REAR_WIPER = 24.99;
export const RAIN_REPEL = 44.99;
export const RECALIBRATION = 395;
export const PREMIUM_SPECIAL = 75;
export const FIRST_STOP_FEE = 29.99;
export const LABOR = 60;

export const PROMO_CODES: Record<string, number> = { SAVENOW2026: 25 };

const round = (value: number) => Math.round(value * 100) / 100;

// A repeatable number in [0, 1) for a vehicle and part
function seeded(key: string) {
  let hash = 2166136261;
  for (const char of key) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return ((hash >>> 0) % 100000) / 100000;
}

const GLASS_RANGES: Record<string, [number, number]> = {
  Windshield: [180, 240],
  Front: [110, 150],
  Back: [110, 150],
  Vent: [90, 130],
  Quarter: [90, 130],
  SideDoor: [120, 160],
  Stationary: [210, 260],
  Slider: [260, 300],
};

const REPAIR_PRICES = { One: 99.99, Two: 119.99, Three: 139.99 };

type Line = { glass: number; labor: number; recalibration: number };

function lines(state: FmgState): Line[] {
  const carId = state.vehicle?.carId ?? `${state.vehicle?.year}${state.vehicle?.model}`;
  return glassPieces(state.damage).map((piece) => {
    const part = state.parts?.find((p) => p.location === piece.location && p.name === piece.name);
    const kind = piece.location === "Windshield" ? "Windshield" : piece.name;
    const [low, spread] = GLASS_RANGES[kind] ?? [120, 160];
    const glass = round(low + seeded(`${carId}-${part?.partNumber ?? kind}`) * spread);
    // Without the catalog's answer, newer windshields are assumed to carry a camera
    const needsRecal = part ? part.requiresRecalibration : piece.location === "Windshield" && Number(state.vehicle?.year) >= 2016;
    return { glass, labor: LABOR, recalibration: needsRecal ? RECALIBRATION : 0 };
  });
}

export function needsRecalibration(state: FmgState) {
  return lines(state).some((line) => line.recalibration > 0);
}

// Extra cost of OEM instead of equivalent (OEE) glass
export function oemExtra(state: FmgState) {
  return round(lines(state).reduce((sum, line) => sum + line.glass * 1.46, 0));
}

export type PackagePrice = { total: number; original?: number; perPayment: number };

// Cash prices of the three packages, before any promo code
export function cashPrices(state: FmgState): Record<ServicePackage, PackagePrice> {
  const repair = state.damage.windshieldDamage === "Repair" && state.damage.chipCount ? REPAIR_PRICES[state.damage.chipCount] : 0;
  const glass = lines(state).reduce((sum, line) => sum + line.glass + line.labor + line.recalibration, 0);
  const oem = state.oemGlass ? oemExtra(state) : 0;
  const wipers = WIPERS + (state.damage.locations.includes("RearWindow") ? REAR_WIPER : 0);
  const base = round(repair + glass + oem);
  const promo = state.promoCode ? (PROMO_CODES[state.promoCode] ?? 0) : 0;
  const price = (total: number, original?: number): PackagePrice => ({
    total: round(total - promo),
    original: original !== undefined ? round(original - promo) : undefined,
    perPayment: round((total - promo) / 4),
  });
  const premium = round(base + wipers + RAIN_REPEL);
  return {
    TierOne: price(base),
    TierTwo: price(base + wipers),
    TierThree: price(premium - PREMIUM_SPECIAL, premium),
  };
}

// With insurance the glass work is covered; the visitor pays for add-ons
export function insurancePrices(state: FmgState): Record<ServicePackage, number> {
  const wipers = WIPERS + (state.damage.locations.includes("RearWindow") ? REAR_WIPER : 0);
  return { TierOne: 0, TierTwo: round(wipers), TierThree: round(wipers + RAIN_REPEL) };
}

export const money = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Fees and tax the review page adds to the package price
export const RECYCLE_FEE = 4.99;
const SALES_TAX: Record<string, number> = { OH: 0.0725, IN: 0.07, KY: 0.06, MI: 0.06, PA: 0.06, TX: 0.0825, CA: 0.0825, FL: 0.07, NY: 0.08875 };
const DEFAULT_SALES_TAX = 0.07;

// The add-ons a package comes with
export function packageVaps(servicePackage: ServicePackage = "TierOne"): Vaps {
  return { wipers: servicePackage !== "TierOne", rainRepel: servicePackage === "TierThree" };
}

// The package the cart's add-ons amount to, as the reference works it out
export const packageLevel = (vaps: Vaps): ServicePackage =>
  vaps.wipers ? (vaps.rainRepel ? "TierThree" : "TierTwo") : "TierOne";

export type CartItem = { key: string; name: string; amount?: number; removable?: keyof Vaps; tooltip?: "recycling" };

export type Cart = {
  level: ServicePackage;
  packagePrice: number;
  // Package price before the promo code, shown struck out
  packageOriginal?: number;
  // Add-ons and promo codes listed under the package (no price of their own)
  packageItems: CartItem[];
  // Lines with their own price: an add-on outside the package, recycling,
  // the early-bird appointment
  otherItems: CartItem[];
  subtotal: number;
  salesTax: number;
  total: number;
};

// The review page's cart. With insurance the glass work waits on coverage,
// so only the add-ons and fees carry a price.
export function buildCart(state: FmgState): Cart {
  const vaps = state.vaps ?? packageVaps(state.servicePackage);
  const level = packageLevel(vaps);
  const insurance = state.payment === "Insurance";
  const rearWiper = state.damage.locations.includes("RearWindow");
  const repair = state.damage.windshieldDamage === "Repair" && state.damage.chipCount ? REPAIR_PRICES[state.damage.chipCount] : 0;
  const glass = lines(state).reduce((sum, line) => sum + line.glass + line.labor + line.recalibration, 0);
  const oem = state.oemGlass ? oemExtra(state) : 0;
  const promo = state.promoCode ? (PROMO_CODES[state.promoCode] ?? 0) : 0;

  const packageItems: CartItem[] = [];
  let vapsPrice = 0;
  if (vaps.wipers) {
    packageItems.push({ key: "wipers", name: rearWiper ? "New front wiper blades" : "New wiper blades", removable: "wipers" });
    if (rearWiper) packageItems.push({ key: "rearWiper", name: "New rear wiper blade", removable: "wipers" });
    vapsPrice += WIPERS + (rearWiper ? REAR_WIPER : 0);
    if (vaps.rainRepel) {
      packageItems.push({ key: "rainRepel", name: "Rain Repel Treatment", removable: "rainRepel" });
      vapsPrice += RAIN_REPEL;
    }
  }
  if (state.promoCode && promo) packageItems.push({ key: "promo", name: state.promoCode });

  const special = level === "TierThree" ? PREMIUM_SPECIAL : 0;
  const packagePrice = round((insurance ? 0 : repair + glass + oem) + vapsPrice - special - promo);

  const otherItems: CartItem[] = [];
  if (vaps.rainRepel && !vaps.wipers) {
    otherItems.push({ key: "rainRepel", name: "Rain Repel Treatment", amount: RAIN_REPEL, removable: "rainRepel" });
  }
  if (glassPieces(state.damage).length > 0) {
    otherItems.push({ key: "recycling", name: "Recycling", amount: RECYCLE_FEE, tooltip: "recycling" });
  }
  if (state.appointment?.premium) {
    otherItems.push({ key: "earlyBird", name: "Early bird appointment", amount: FIRST_STOP_FEE });
  }

  const subtotal = round(packagePrice + otherItems.reduce((sum, item) => sum + (item.amount ?? 0), 0));
  const salesTax = insurance ? 0 : round(subtotal * (SALES_TAX[state.state ?? ""] ?? DEFAULT_SALES_TAX));
  return {
    level,
    packagePrice,
    packageOriginal: promo ? round(packagePrice + promo) : undefined,
    packageItems,
    otherItems,
    subtotal,
    salesTax,
    total: round(subtotal + salesTax),
  };
}
