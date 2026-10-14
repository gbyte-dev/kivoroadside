"use client";

import { useState } from "react";
import Link from "next/link";
import { cx } from "@/app/components/services/class-names";
import { useFmg, useFmgGuard, type FmgState } from "../fmg-state";
import { appointmentWhen } from "../scheduling/slots";
import DropdownQuestion from "../ui/dropdown-question";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import OptionButtons from "../ui/option-buttons";
import QuestionText from "../ui/question-text";
import { REGULAR, SEMIBOLD } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import TextboxQuestion from "../ui/textbox-question";
import { useNextStep } from "../ui/use-next-step";
import { US_STATES, stateName } from "../us-states";

type Address = NonNullable<FmgState["address"]>;
type Field = "street" | "city" | "covered";

const hasMobileSlot = (state: FmgState) => state.appointment?.type === "Mobile";

const LABEL_BOLD = "font-semibold";
const RULE = "my-3 border-0 border-t border-current opacity-25";

// Step 3 for mobile service: where the technician should come, plus whether
// the vehicle will be under cover.
export default function MobileDetailsForm() {
  const allowed = useFmgGuard(hasMobileSlot);
  const { state, update } = useFmg();
  const { loading, go } = useNextStep();
  const [address, setAddress] = useState<Address>(
    state.address ?? { street: "", apt: "", city: "", state: "", zip: "" },
  );
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  if (!allowed || !state.appointment) return null;

  const set = (patch: Partial<Address>, field?: Field) => {
    setAddress((current) => ({ ...current, ...patch }));
    if (field) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onContinue = () => {
    const missing: Partial<Record<Field, string>> = {};
    if (!address.street.trim()) missing.street = "Please enter your street address";
    if (!address.city.trim()) missing.city = "Please enter your city";
    if (!address.covered) missing.covered = "Please select an option";
    if (Object.keys(missing).length > 0) return setErrors(missing);
    update({ address: { ...address, state: state.state ?? "", zip: state.serviceZip ?? "" } });
    go("/fmg/customer-details");
  };

  return (
    <FunnelPage className="relative">
      <Row>
        <QuestionColumn>
          <SubHeader title="Schedule your service" titleClassName="mb-4" />
          <hr className={RULE} />
          <div className="flex justify-between">
            <div className={cx(SEMIBOLD, "mt-0 w-full font-semibold text-black")}>
              <span>
                <span>Time of service</span>
              </span>
            </div>
            <Link
              href="/fmg/scheduling"
              className={cx(
                SEMIBOLD,
                "whitespace-nowrap pb-1 text-[14px] font-semibold leading-[26px] text-[#0070d1] no-underline min-[768px]:text-base",
              )}
            >
              Edit
            </Link>
          </div>
          <div className="mt-2 w-full">
            <span>
              <span>{appointmentWhen(state.appointment)}</span>
            </span>
          </div>
          <hr className={RULE} />
          <div className={cx(SEMIBOLD, "mt-2 w-full font-semibold leading-[1.625rem] tracking-[0.03rem] text-black")}>
            <span>
              <span>Please provide the address where we&apos;ll be completing your service.</span>
            </span>
          </div>
          <div className="my-5 flex min-h-[3.656rem] items-center justify-center rounded-[5px] bg-[#fff5eb] px-4 py-2 text-center leading-[1.625rem] tracking-normal text-[#4d5151]">
            <span>
              <span>
                Please have your vehicle keys or key card available at the time of service. To ensure a smooth process,
                park your vehicle on a solid surface. If your vehicle is parked on sand or gravel, the technician may need
                to move it to a suitable location.
              </span>
            </span>
          </div>
          <div className="mt-2">
            <TextboxQuestion
              id="streetAddress"
              label="Street address"
              labelClassName={LABEL_BOLD}
              value={address.street}
              autoComplete="street-address"
              error={errors.street}
              onChange={(value) => set({ street: value }, "street")}
            />
            <TextboxQuestion
              id="apartmentNumber"
              label={
                <>
                  Apt. number or business name <span className={cx(REGULAR, "font-normal text-[#4d5151]")}>(optional)</span>
                </>
              }
              labelClassName={LABEL_BOLD}
              value={address.apt}
              onChange={(value) => set({ apt: value })}
            />
            <TextboxQuestion
              id="city"
              label="City"
              labelClassName={LABEL_BOLD}
              value={address.city}
              autoComplete="address-level2"
              error={errors.city}
              onChange={(value) => set({ city: value }, "city")}
            />
            <DropdownQuestion
              id="state"
              label="State"
              labelClassName={LABEL_BOLD}
              placeholder="Select state"
              value={stateName(state.state)}
              options={US_STATES.map(([, name]) => name)}
              disabled
              lockedValue
              onChange={() => {}}
              className="mb-4! mt-0!"
            />
            <TextboxQuestion
              id="zipCode"
              label="ZIP code"
              labelClassName={LABEL_BOLD}
              value={state.serviceZip ?? ""}
              disabled
              onChange={() => {}}
            />
          </div>
          <div aria-live="polite">
            <QuestionText bold="semibold" className="mb-4!">
              Will your vehicle be protected from rain or snow?
            </QuestionText>
            <OptionButtons
              name="isVehicleProtected"
              legend="Will your vehicle be protected from rain or snow? Select an option below."
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              value={address.covered}
              error={errors.covered}
              onChange={(value) => set({ covered: value as Address["covered"] }, "covered")}
            />
          </div>
          <div className="mt-2 w-full text-[14px] leading-[1.7]">
            <span>
              <span>
                Your technician needs 5 feet of space on all sides of the vehicle and 7 feet of clearance from the ground
                up.
              </span>
            </span>
          </div>
          <NavBar className="mt-4" onContinue={onContinue} backHref="/fmg/scheduling" loading={loading} />
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}

