import type { FmgState } from "./fmg-state";
import type { VehicleType } from "./vehicle-damage/damage-options";

// Helpers that read the visitor's answers the way the funnel needs them.

// The vehicle lookup's category ("CAR", "SUV", "COMMERCIAL VAN"...) as the
// vehicle type the damage drawings are named after
export function vehicleType(category?: string): VehicleType {
  switch ((category ?? "").toUpperCase()) {
    case "SUV":
      return "Suv";
    case "TRUCK":
      return "Truck";
    case "VAN":
      return "Van";
    case "COMMERCIAL VAN":
      return "Commercial Van";
    default:
      return "Car";
  }
}

export type GlassPiece = { location: "Windshield" | "Driver" | "Passenger" | "Rear"; name: string };

// The pieces of glass to replace, in the parts catalog's terms
// (a windshield repair needs no part)
export function glassPieces(damage: FmgState["damage"]): GlassPiece[] {
  const pieces: GlassPiece[] = [];
  if (damage.locations.includes("Windshield") && damage.windshieldDamage === "Replace") {
    pieces.push({ location: "Windshield", name: damage.windshieldPart ?? "Single" });
  }
  if (damage.locations.includes("SideDoor")) {
    if (damage.sides.includes("DriverSide")) damage.driverWindows.forEach((name) => pieces.push({ location: "Driver", name }));
    if (damage.sides.includes("PassengerSide"))
      damage.passengerWindows.forEach((name) => pieces.push({ location: "Passenger", name }));
  }
  if (damage.locations.includes("RearWindow")) pieces.push({ location: "Rear", name: damage.rearWindow ?? "Stationary" });
  return pieces;
}

// Only a windshield chip repair, nothing replaced
export function isRepairOnly(damage: FmgState["damage"]) {
  return glassPieces(damage).length === 0 && damage.windshieldDamage === "Repair";
}

// Where "Back" on the service ZIP page leads: the VIN step the visitor came
// through, or the damage questions for a chip repair
export function backFromServiceZip(state: FmgState) {
  if (glassPieces(state.damage).length === 0) return "/fmg/vehicle-damage";
  if (state.vinMethod === "ManualVin") return "/fmg/vin-lookup";
  if (state.vinMethod === "LicensePlate") return "/fmg/license-plate-lookup";
  return "/fmg/estimate";
}
