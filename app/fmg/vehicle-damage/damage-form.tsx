"use client";

import { useEffect, useState } from "react";
import { fetchDamageOptions, type DamageOptions } from "../api";
import { useFmg, useFmgGuard, type DamageLocation, type FmgState, type VehicleSide } from "../fmg-state";
import { glassPieces, isRepairOnly, vehicleType } from "../order";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import OptionCards from "../ui/option-cards";
import QuestionText from "../ui/question-text";
import SegmentedButtons from "../ui/segmented-buttons";
import { HALF_COLUMN } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import { useNextStep } from "../ui/use-next-step";
import { DRIVER_WINDOWS, LOCATION_IMAGES, PASSENGER_WINDOWS, SIDE_IMAGES } from "./damage-options";

type Damage = FmgState["damage"];
type ErrorKey = "location" | "windshield" | "chips" | "part" | "side" | "driver" | "passenger" | "rear";

const MESSAGES: Record<ErrorKey, string> = {
  location: "Please select damage location",
  windshield: "Please select windshield damage",
  chips: "Please select chip(s)",
  part: "Please select windshield part",
  side: "Please select vehicle side",
  driver: "Please select window",
  passenger: "Please select window",
  rear: "Please select rear window type",
};

const WINDSHIELD_PARTS = [
  { value: "Single", label: "Single windshield", image: "/image/fmg/damage-options/windshield-full.svg" },
  { value: "Driver", label: "Split windshield, driver side", image: "/image/fmg/damage-options/windshield-split-right.svg" },
  {
    value: "Passenger",
    label: "Split windshield, passenger side",
    image: "/image/fmg/damage-options/windshield-split-left.svg",
  },
];

const REAR_TYPES = [
  { value: "Stationary", label: "Stationary", image: "/image/fmg/damage-options/truck-back-single.svg" },
  { value: "Slider", label: "Glass with slider", image: "/image/fmg/damage-options/truck-back-multi.svg" },
];

const toggle = <T,>(list: T[], value: T) => (list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);

const hasVehicle = (state: FmgState) => Boolean(state.vehicle);

// Step 1, "What do you need fixed?": damage location cards, then the
// follow-up questions for each location chosen.
export default function DamageForm() {
  const allowed = useFmgGuard(hasVehicle);
  const { state, update } = useFmg();
  const { loading, go } = useNextStep();
  const [options, setOptions] = useState<DamageOptions | null>(null);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const damage = state.damage;
  const type = vehicleType(state.vehicle?.category);

  useEffect(() => {
    const carId = state.vehicle?.carId;
    if (carId) fetchDamageOptions(carId).then(setOptions).catch(() => setOptions(null));
  }, [state.vehicle?.carId]);

  if (!allowed) return null;

  const windshieldParts = options?.windshieldOptions?.availableReplacementOptions ?? ["Single"];
  const rearTypes = options?.backGlassOptions?.availableReplacementOptions ?? ["Stationary"];
  const windowsFor = (side: "driver" | "passenger") => {
    const available = (side === "driver" ? options?.driverSideOptions : options?.passengerSideOptions)
      ?.availableReplacementOptions;
    const all = (side === "driver" ? DRIVER_WINDOWS : PASSENGER_WINDOWS)[type];
    return available ? all.filter((option) => available.includes(option.value)) : all;
  };

  const change = (patch: Partial<Damage>, cleared: ErrorKey[]) => {
    update({ damage: { ...damage, ...patch } });
    setErrors((current) => {
      const next = { ...current };
      cleared.forEach((key) => delete next[key]);
      return next;
    });
  };

  const has = (location: DamageLocation) => damage.locations.includes(location);
  const showPart = has("Windshield") && damage.windshieldDamage === "Replace" && windshieldParts.length > 1;
  const showRear = has("RearWindow") && rearTypes.length > 1;

  const onContinue = () => {
    const missing: Partial<Record<ErrorKey, string>> = {};
    if (damage.locations.length === 0) missing.location = MESSAGES.location;
    if (has("Windshield")) {
      if (!damage.windshieldDamage) missing.windshield = MESSAGES.windshield;
      else if (damage.windshieldDamage === "Repair" && !damage.chipCount) missing.chips = MESSAGES.chips;
      else if (showPart && !damage.windshieldPart) missing.part = MESSAGES.part;
    }
    if (has("SideDoor")) {
      if (damage.sides.length === 0) missing.side = MESSAGES.side;
      if (damage.sides.includes("DriverSide") && damage.driverWindows.length === 0) missing.driver = MESSAGES.driver;
      if (damage.sides.includes("PassengerSide") && damage.passengerWindows.length === 0)
        missing.passenger = MESSAGES.passenger;
    }
    if (showRear && !damage.rearWindow) missing.rear = MESSAGES.rear;
    if (Object.keys(missing).length > 0) {
      setErrors(missing);
      return;
    }
    // Answers that no longer apply are dropped before moving on
    const cleaned: Damage = {
      ...damage,
      windshieldDamage: has("Windshield") ? damage.windshieldDamage : undefined,
      chipCount: has("Windshield") && damage.windshieldDamage === "Repair" ? damage.chipCount : undefined,
      windshieldPart:
        has("Windshield") && damage.windshieldDamage === "Replace" ? (showPart ? damage.windshieldPart : "Single") : undefined,
      sides: has("SideDoor") ? damage.sides : [],
      driverWindows: has("SideDoor") && damage.sides.includes("DriverSide") ? damage.driverWindows : [],
      passengerWindows: has("SideDoor") && damage.sides.includes("PassengerSide") ? damage.passengerWindows : [],
      rearWindow: has("RearWindow") ? (showRear ? damage.rearWindow : rearTypes[0]) : undefined,
    };
    update({ damage: cleaned, partAnswers: {} });
    // Replacing glass asks for the VIN first; a chip repair goes straight on
    if (glassPieces(cleaned).length > 0) go("/fmg/estimate");
    else go(state.serviceZip && isRepairOnly(cleaned) ? "/fmg/quote" : "/fmg/service-zip");
  };

  const locationCards = (["Windshield", "SideDoor", "RearWindow"] as const).map((value) => ({
    value,
    label: value === "Windshield" ? "Windshield" : value === "SideDoor" ? "Side window" : "Rear window",
    image: LOCATION_IMAGES[type][value],
  }));
  const sideCards = (["DriverSide", "PassengerSide"] as const).map((value) => ({
    value,
    label: value === "DriverSide" ? "Driver side" : "Passenger side",
    image: SIDE_IMAGES[type][value],
  }));

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader title="What do you need fixed?" className="mb-4" />
        </QuestionColumn>
      </Row>
      <Row>
        <div className={HALF_COLUMN}>
          <OptionCards
            name="DamageLocationQuestion"
            type="checkbox"
            legend="Select one or more options below."
            width="third"
            options={locationCards}
            selected={damage.locations}
            error={errors.location}
            onToggle={(value) =>
              change({ locations: toggle(damage.locations, value as DamageLocation) }, ["location"])
            }
          />
        </div>
      </Row>
      <Row>
        <div className={HALF_COLUMN}>
          {has("Windshield") && (
            <div aria-live="polite">
              <QuestionText>What&apos;s your windshield damage?</QuestionText>
              <OptionCards
                name="WindshieldDamageTypeQuestion"
                type="radio"
                legend="What's your windshield damage? Select an option below."
                options={[
                  {
                    value: "Replace",
                    label: "My damage is larger than six inches.",
                    subText: "Replace my windshield",
                    image: "/image/fmg/damage-options/windshield-replace.svg",
                  },
                  {
                    value: "Repair",
                    label: "I have three or fewer chips or cracks smaller than six inches.",
                    subText: "Repair my windshield",
                    image: "/image/fmg/damage-options/windshield-repair.svg",
                  },
                ]}
                selected={damage.windshieldDamage ? [damage.windshieldDamage] : []}
                error={errors.windshield}
                onToggle={(value) => change({ windshieldDamage: value as Damage["windshieldDamage"] }, ["windshield"])}
              />
              {damage.windshieldDamage === "Repair" && (
                <div aria-live="polite">
                  <QuestionText>How many chips are we repairing?</QuestionText>
                  <SegmentedButtons
                    name="WindshieldChipCountQuestion"
                    legend="How many chips are we repairing? Select an option below."
                    options={[
                      { value: "One", label: "1" },
                      { value: "Two", label: "2" },
                      { value: "Three", label: "3" },
                    ]}
                    value={damage.chipCount}
                    error={errors.chips}
                    onChange={(value) => change({ chipCount: value as Damage["chipCount"] }, ["chips"])}
                  />
                </div>
              )}
              {showPart && (
                <div aria-live="polite">
                  <QuestionText>Which windshield part needs fixed?</QuestionText>
                  <OptionCards
                    name="WindshieldReplaceOptions"
                    type="checkbox"
                    layout="list"
                    legend="Which windshield part needs fixed? Select an option below."
                    options={WINDSHIELD_PARTS.filter((part) => windshieldParts.includes(part.value))}
                    selected={damage.windshieldPart ? [damage.windshieldPart] : []}
                    error={errors.part}
                    onToggle={(value) =>
                      change(
                        { windshieldPart: damage.windshieldPart === value ? undefined : (value as Damage["windshieldPart"]) },
                        ["part"],
                      )
                    }
                  />
                </div>
              )}
            </div>
          )}
          {has("SideDoor") && (
            <div aria-live="polite">
              <QuestionText>Which side is your damage on?</QuestionText>
              <OptionCards
                name="SideDoorSideQuestion"
                type="checkbox"
                legend="Which side is your damage on? Select one or more options below."
                options={sideCards}
                selected={damage.sides}
                error={errors.side}
                onToggle={(value) => change({ sides: toggle(damage.sides, value as VehicleSide) }, ["side"])}
              />
              {damage.sides.includes("DriverSide") && (
                <div aria-live="polite">
                  <QuestionText>Which driver side window needs fixed?</QuestionText>
                  <OptionCards
                    name="DriverSideReplaceOptionsQuestion"
                    type="checkbox"
                    legend="Which driver side window needs fixed? Select one or more options below."
                    options={windowsFor("driver")}
                    selected={damage.driverWindows}
                    error={errors.driver}
                    onToggle={(value) => change({ driverWindows: toggle(damage.driverWindows, value) }, ["driver"])}
                  />
                </div>
              )}
              {damage.sides.includes("PassengerSide") && (
                <div aria-live="polite">
                  <QuestionText>Which passenger side window needs fixed?</QuestionText>
                  <OptionCards
                    name="PassengerSideReplaceOptionsQuestion"
                    type="checkbox"
                    legend="Which passenger side window needs fixed? Select one or more options below."
                    options={windowsFor("passenger")}
                    selected={damage.passengerWindows}
                    error={errors.passenger}
                    onToggle={(value) =>
                      change({ passengerWindows: toggle(damage.passengerWindows, value) }, ["passenger"])
                    }
                  />
                </div>
              )}
            </div>
          )}
          {showRear && (
            <div aria-live="polite">
              <QuestionText>Select your type of rear window</QuestionText>
              <OptionCards
                name="RearReplaceOptionsQuestion"
                type="radio"
                legend="Select your type of rear window. Select an option below."
                options={REAR_TYPES.filter((rear) => rearTypes.includes(rear.value))}
                selected={damage.rearWindow ? [damage.rearWindow] : []}
                error={errors.rear}
                onToggle={(value) => change({ rearWindow: value }, ["rear"])}
              />
            </div>
          )}
        </div>
      </Row>
      <Row>
        <div className={HALF_COLUMN}>
          <NavBar onContinue={onContinue} backHref="/fmg/vehicle" loading={loading} />
        </div>
      </Row>
    </FunnelPage>
  );
}
