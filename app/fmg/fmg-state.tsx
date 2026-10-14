"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { PartQuestion } from "./api";

export type DamageLocation = "Windshield" | "SideDoor" | "RearWindow";
export type VehicleSide = "DriverSide" | "PassengerSide";
export type ServicePackage = "TierOne" | "TierTwo" | "TierThree";

export type Vehicle = {
  year: string;
  make: string;
  model: string;
  style: string;
  carId?: string;
  // "CAR", "SUV", "TRUCK", "VAN" or "COMMERCIAL VAN" (from the vehicle lookup)
  category?: string;
};

// A phone number or email the visitor left to get the quote or save progress
export type Contact = { method: "phone" | "email"; value: string; serviceUpdates: boolean; promoOffers: boolean };

export type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceUpdates: boolean;
  promoOffers: boolean;
};

export type Appointment = {
  type: "Mobile" | "Shop";
  // "2026-10-15"
  date: string;
  slot: string;
  slotLabel: string;
  // "First stop of the day" adds a fee
  premium?: boolean;
  shop?: { id: string; name: string; address: string; phone: string };
};

export type Vaps = { wipers: boolean; rainRepel: boolean };

// How the visitor chose to pay on the review page
export type PaymentMethod = "PayNow" | "Afterpay" | "Insurance" | "Later";

export type PieceQuestions ={ location: string; name: string; questions: PartQuestion[] };

export type ChosenPart = {
  location: string;
  name: string;
  partNumber: string;
  description: string | null;
  requiresRecalibration: boolean;
};

export type FmgState = {
  vehicle?: Vehicle;
  damage: {
    locations: DamageLocation[];
    windshieldDamage?: "Replace" | "Repair";
    chipCount?: "One" | "Two" | "Three";
    windshieldPart?: "Single" | "Driver" | "Passenger";
    sides: VehicleSide[];
    driverWindows: string[];
    passengerWindows: string[];
    rearWindow?: string;
  };
  vinMethod?: "ManualVin" | "LicensePlate" | "Decline";
  vin?: string;
  licensePlate?: string;
  registrationZip?: string;
  serviceZip?: string;
  city?: string;
  state?: string;
  // Questions the parts catalog asks before it can pick a piece's part
  pieceQuestions?: PieceQuestions[];
  // Answer chosen for each question, keyed "location-name-sequence"
  partAnswers: Record<string, string>;
  // The glass parts found for the damaged pieces
  parts?: ChosenPart[];
  payment?: "Cash" | "Insurance";
  servicePackage?: ServicePackage;
  // Add-ons left in the cart after the visitor removes some on the review
  // page (unset: the ones the chosen package includes)
  vaps?: Vaps;
  oemGlass?: boolean;
  promoCode?: string;
  quoteModalSeen?: boolean;
  contact?: Contact;
  progressSaved?: boolean;
  appointment?: Appointment;
  address?: { street: string; apt: string; city: string; state: string; zip: string; covered?: "Yes" | "No" };
  customer?: Customer;
  paymentMethod?: PaymentMethod;
  // Set once the review page is submitted
  confirmation?: { number: string; submittedAt: string };
};

const EMPTY_STATE: FmgState = {
  damage: { locations: [], sides: [], driverWindows: [], passengerWindows: [] },
  partAnswers: {},
};

const STORAGE_KEY = "fmg-state";

type FmgContextValue = {
  state: FmgState;
  // False until the saved answers are read back from this browser tab
  ready: boolean;
  update: (patch: Partial<FmgState>) => void;
};

const FmgContext = createContext<FmgContextValue | null>(null);

// Keeps the visitor's answers for the whole funnel in this browser tab, like
// the reference keeps its session while the visitor moves between pages.
export function FmgProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FmgState>(EMPTY_STATE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setState({ ...EMPTY_STATE, ...JSON.parse(saved) });
    } catch {}
    setReady(true);
  }, []);

  const update = useCallback((patch: Partial<FmgState>) => {
    setState((current) => {
      const next = { ...current, ...patch };
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  return <FmgContext.Provider value={{ state, ready, update }}>{children}</FmgContext.Provider>;
}

export function useFmg() {
  const value = useContext(FmgContext);
  if (!value) throw new Error("useFmg must be used inside FmgProvider");
  return value;
}

// Sends the visitor back to the first page when a page is opened without the
// answers it depends on (for example, the quote before a vehicle is chosen).
export function useFmgGuard(isReachable: (state: FmgState) => boolean) {
  const { state, ready } = useFmg();
  const router = useRouter();
  const allowed = ready && isReachable(state);
  useEffect(() => {
    if (ready && !isReachable(state)) router.replace("/fmg/vehicle");
  }, [ready, state, isReachable, router]);
  return allowed;
}

// "2020 Toyota Camry"
export function vehicleName(vehicle?: Vehicle) {
  return vehicle ? `${vehicle.year} ${vehicle.make} ${vehicle.model}` : "";
}
