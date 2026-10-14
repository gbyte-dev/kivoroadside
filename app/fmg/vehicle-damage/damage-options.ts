import type { DamageLocation, VehicleSide } from "../fmg-state";

// Drawings and window choices for each vehicle type, from the reference's
// damage questions (images live in /public/image/fmg/damage-options).

export const VEHICLE_TYPES = ["Car", "Suv", "Truck", "Van", "Commercial Van"] as const;
export type VehicleType = (typeof VEHICLE_TYPES)[number];

export type WindowOption = { value: string; label: string; image: string };

const img = (file: string) => `/image/fmg/damage-options/${file}`;

export const LOCATION_IMAGES: Record<VehicleType, Record<DamageLocation, string>> = {
  Car: {
    Windshield: img("car.svg"),
    SideDoor: img("car-side-driver.svg"),
    RearWindow: img("car-back.svg"),
  },
  Suv: {
    Windshield: img("suv.svg"),
    SideDoor: img("suv-side-driver.svg"),
    RearWindow: img("suv-back.svg"),
  },
  Truck: {
    Windshield: img("truck.svg"),
    SideDoor: img("truck-side-driver.svg"),
    RearWindow: img("truck-back-single.svg"),
  },
  Van: {
    Windshield: img("van.svg"),
    SideDoor: img("van-side-driver.svg"),
    RearWindow: img("van-back.svg"),
  },
  "Commercial Van": {
    Windshield: img("commercial.svg"),
    SideDoor: img("commercial-side-driver-narrow.svg"),
    RearWindow: img("commercial-back.svg"),
  },
};

export const SIDE_IMAGES: Record<VehicleType, Record<VehicleSide, string>> = {
  Car: {
    DriverSide: img("car-side-driver.svg"),
    PassengerSide: img("car-side-passenger.svg"),
  },
  Suv: {
    DriverSide: img("suv-side-driver.svg"),
    PassengerSide: img("suv-side-passenger.svg"),
  },
  Truck: {
    DriverSide: img("truck-side-driver.svg"),
    PassengerSide: img("truck-side-passenger.svg"),
  },
  Van: {
    DriverSide: img("van-side-driver.svg"),
    PassengerSide: img("van-side-passenger.svg"),
  },
  "Commercial Van": {
    DriverSide: img("commercial-side-driver-narrow.svg"),
    PassengerSide: img("commercial-side-passenger-narrow.svg"),
  },
};

export const DRIVER_WINDOWS: Record<VehicleType, WindowOption[]> = {
  Car: [
    { value: "Vent", label: "Vent glass", image: img("car-side-driver-front-vent.svg") },
    { value: "Front", label: "Front door", image: img("car-side-driver-front.svg") },
    { value: "Back", label: "Back door", image: img("car-side-driver-back.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("car-side-driver-back-vent.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("car-side-driver.svg") },
  ],
  Suv: [
    { value: "Vent", label: "Vent glass", image: img("suv-side-driver-vent.svg") },
    { value: "Front", label: "Front door", image: img("suv-side-driver-front.svg") },
    { value: "Back", label: "Back door", image: img("suv-side-driver-back.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("suv-side-driver-quarter.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("suv-side-driver.svg") },
  ],
  Truck: [
    { value: "Vent", label: "Vent glass", image: img("truck-side-driver-vent.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("truck-side-driver-vent.svg") },
    { value: "Front", label: "Front door", image: img("truck-side-driver-front.svg") },
    { value: "Back", label: "Back door", image: img("truck-side-driver-back.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("truck-side-driver.svg") },
  ],
  Van: [
    { value: "Vent", label: "Vent glass", image: img("van-side-driver-vent.svg") },
    { value: "Front", label: "Front door", image: img("van-side-driver-front.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("van-side-driver-sliding.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("van-side-driver-quarter.svg") },
    { value: "Back", label: "Back door", image: img("van-side-driver.svg") },
  ],
  "Commercial Van": [
    { value: "Vent", label: "Vent glass", image: img("commercial-side-driver-narrow-vent.svg") },
    { value: "Front", label: "Front door", image: img("commercial-side-driver-narrow-front.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("commercial-side-driver-narrow-back-front.svg") },
    { value: "Back", label: "Back door", image: img("commercial-side-driver-narrow-back-back.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("commercial-side-driver-narrow.svg") },
  ],
};

export const PASSENGER_WINDOWS: Record<VehicleType, WindowOption[]> = {
  Car: [
    { value: "Vent", label: "Vent glass", image: img("car-side-passenger-front-vent.svg") },
    { value: "Front", label: "Front door", image: img("car-side-passenger-front.svg") },
    { value: "Back", label: "Back door", image: img("car-side-passenger-back.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("car-side-passenger-back-vent.svg") },
    { value: "SideDoor", label: "Sliding Door", image: img("car-side-passenger.svg") },
  ],
  Suv: [
    { value: "Vent", label: "Vent glass", image: img("suv-side-passenger-vent.svg") },
    { value: "Front", label: "Front door", image: img("suv-side-passenger-front.svg") },
    { value: "Back", label: "Back door", image: img("suv-side-passenger-back.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("suv-side-passenger-quarter.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("suv-side-passenger.svg") },
  ],
  Truck: [
    { value: "Vent", label: "Vent glass", image: img("truck-side-passenger-vent.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("truck-side-passenger-vent.svg") },
    { value: "Front", label: "Front door", image: img("truck-side-passenger-front.svg") },
    { value: "Back", label: "Back door", image: img("truck-side-passenger-back.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("truck-side-passenger.svg") },
  ],
  Van: [
    { value: "Vent", label: "Vent glass", image: img("van-side-passenger-vent.svg") },
    { value: "Front", label: "Front Door", image: img("van-side-passenger-front.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("van-side-passenger-sliding.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("van-side-passenger-quarter.svg") },
    { value: "Back", label: "Back door", image: img("van-side-passenger.svg") },
  ],
  "Commercial Van": [
    { value: "Vent", label: "Vent glass", image: img("commercial-side-passenger-narrow-vent.svg") },
    { value: "Front", label: "Front door", image: img("commercial-side-passenger-narrow-front.svg") },
    { value: "SideDoor", label: "Sliding door", image: img("commercial-side-passenger-narrow-back-front.svg") },
    { value: "Back", label: "Back door", image: img("commercial-side-passenger-narrow-back-back.svg") },
    { value: "Quarter", label: "Quarter panel", image: img("commercial-side-passenger-narrow.svg") },
  ],
};
