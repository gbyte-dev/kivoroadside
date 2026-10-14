"use client";

import { useState } from "react";
import { cx } from "@/app/components/services/class-names";
import { useFmg, useFmgGuard, type FmgState } from "../fmg-state";
import { glassPieces } from "../order";
import { findParts } from "../parts";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import OptionButtons from "../ui/option-buttons";
import { SEMIBOLD, TEXT_LINK } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import { useNextStep } from "../ui/use-next-step";

type VinMethod = NonNullable<FmgState["vinMethod"]>;

const METHODS = [
  { value: "ManualVin", label: "Provide my VIN", subText: "Most specific to your vehicle" },
  { value: "LicensePlate", label: "Provide my license plate #", subText: "Most accurate VIN match" },
  { value: "Decline", label: "I'd rather not share my VIN" },
];

const replacesGlass = (state: FmgState) => Boolean(state.vehicle) && glassPieces(state.damage).length > 0;

// The page after the damage questions when glass is replaced: the VIN picks
// the exact part, so the visitor can type it, look it up by plate, or skip.
export default function EstimateForm() {
  const allowed = useFmgGuard(replacesGlass);
  const { state, update } = useFmg();
  const { loading, setLoading, go } = useNextStep();
  const [method, setMethod] = useState<VinMethod | undefined>(state.vinMethod);
  const [error, setError] = useState<string>();

  if (!allowed || !state.vehicle) return null;
  const { year, make, model, style } = state.vehicle;

  const onContinue = async () => {
    if (!method) {
      setError("Please select an option");
      return;
    }
    update({ vinMethod: method });
    if (method === "ManualVin") go("/fmg/vin-lookup");
    else if (method === "LicensePlate") go("/fmg/license-plate-lookup");
    else if (!state.serviceZip) go("/fmg/service-zip");
    else {
      // The ZIP came from the home page: look up the glass right away
      setLoading(true);
      const { patch, href } = await findParts({ ...state, vinMethod: method }, state.serviceZip);
      update(patch);
      go(href);
    }
  };

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader
            className="pt-4"
            titleClassName="mb-4"
            title="There are multiple windshield options available, but only one has features that match your vehicle."
            subText={
              <>
                <p className="mb-4 text-[16px] leading-[26px]">
                  Please enter your VIN so we pick the right windshield for your{" "}
                  <strong className="font-normal uppercase">
                    {year} {make} {model} {style}
                  </strong>
                  .
                </p>
                <p className="mb-4 text-[16px] leading-[26px]">Or we can look it up for you!</p>
              </>
            }
          />
          <p className={cx(SEMIBOLD, "mb-2 font-semibold text-black")}>Select an option:</p>
          <OptionButtons
            name="vinLookupMethodOption"
            legend="Select an option below."
            options={METHODS}
            value={method}
            error={error}
            onChange={(value) => {
              setMethod(value as VinMethod);
              setError(undefined);
            }}
          />
          <NavBar onContinue={onContinue} backHref="/fmg/vehicle-damage" loading={loading} />
          <div className="mb-6 text-center">
            We take your VIN security seriously and will protect it consistent with our&nbsp;
            <a href="/privacy-center" target="_blank" className={TEXT_LINK}>
              Privacy Policy
            </a>
            .
          </div>
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
