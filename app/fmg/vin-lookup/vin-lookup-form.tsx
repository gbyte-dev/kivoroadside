"use client";

import { useState } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import { useFmg, useFmgGuard, type FmgState } from "../fmg-state";
import { glassPieces } from "../order";
import { findParts } from "../parts";
import { checkServiceZip, type ZipAlert } from "../service-zip/check-zip";
import Alert from "../ui/alert";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import { SEMIBOLD } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import TextboxQuestion from "../ui/textbox-question";
import { useNextStep } from "../ui/use-next-step";

// 17 letters and digits without I, O or Q (the reference's check)
const VIN = /^[a-hA-Hj-nJ-NpPr-zR-Z0-9]{17}$/;
const VIN_FORMAT =
  "Invalid VIN. Please make sure that you entered the correct 17-digit, alpha-numeric number. VINs do not contain the letters I, O, or Q";

const replacesGlass = (state: FmgState) => Boolean(state.vehicle) && glassPieces(state.damage).length > 0;

type Errors = { vin?: string; zip?: string };

// "Great! Let's get your VIN": the VIN (typed; the camera can't read photos
// here), the service ZIP when it isn't known yet, then the part lookup with
// the VIN.
export default function VinLookupForm() {
  const allowed = useFmgGuard(replacesGlass);
  const { state, update } = useFmg();
  const { loading, setLoading, go } = useNextStep();
  const [vin, setVin] = useState(state.vin ?? "");
  const [zip, setZip] = useState(state.serviceZip ?? "");
  const [askZip] = useState(!state.serviceZip);
  const [errors, setErrors] = useState<Errors>({});
  const [alert, setAlert] = useState<ZipAlert>();
  const [helpOpen, setHelpOpen] = useState(false);

  if (!allowed) return null;

  const onContinue = async () => {
    const found: Errors = {};
    if (!vin) found.vin = "Please enter your VIN";
    else if (!VIN.test(vin)) found.vin = VIN_FORMAT;
    if (askZip) {
      if (!zip) found.zip = "Please enter your service ZIP";
      else if (!/^\d{5}$/.test(zip)) found.zip = "Please enter a valid service ZIP";
    }
    if (found.vin || found.zip) return setErrors(found);
    setLoading(true);
    let zipPatch: Partial<FmgState> = {};
    if (askZip) {
      const check = await checkServiceZip(zip);
      if (!check.ok) {
        setLoading(false);
        return setAlert(check.alert);
      }
      zipPatch = check.patch;
    }
    const serviceZip = zipPatch.serviceZip ?? state.serviceZip!;
    const next = { ...state, ...zipPatch, vin: vin.toUpperCase() };
    const { patch, href } = await findParts(next, serviceZip);
    update({ ...zipPatch, vin: next.vin, ...patch });
    go(href);
  };

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader title="Great! Let’s get your VIN" titleClassName="mb-4" />
          {alert && (
            <Alert heading={alert.heading} className="mt-6">
              {alert.body}
            </Alert>
          )}
          <TextboxQuestion
            id="vin"
            label="Enter your VIN"
            value={vin}
            maxLength={17}
            autoCapitalize="characters"
            error={errors.vin}
            className="mb-2! mt-6"
            inputClassName="pr-12 uppercase"
            onChange={(value) => {
              setVin(value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 17));
              setErrors((current) => ({ ...current, vin: undefined }));
            }}
          >
            <label className="absolute right-4 top-1/2 flex h-full w-4 -translate-y-1/2 cursor-pointer bg-[url(/image/fmg/ui/camera.svg)] bg-center bg-no-repeat">
              <input
                type="file"
                accept="image/jpeg,image/png"
                aria-label="Camera icon/button"
                className="absolute left-[-9999px]"
                onChange={(event) => {
                  // Reading a VIN from a photo needs Safelite's scanner
                  event.target.value = "";
                  setErrors((current) => ({
                    ...current,
                    vin: "VIN scan failed. Please try again or enter your VIN manually.",
                  }));
                }}
              />
            </label>
          </TextboxQuestion>
          <div className="mb-4">
            <div className="inline-flex items-center justify-center">
              <a
                href="#!"
                aria-expanded={helpOpen}
                onClick={(event) => {
                  event.preventDefault();
                  setHelpOpen((open) => !open);
                }}
                className={cx(SEMIBOLD, "whitespace-nowrap pb-1 text-[14px] leading-[2] text-[#0070d1] no-underline")}
              >
                Where can I find my VIN?
              </a>
              <span
                aria-hidden="true"
                onClick={() => setHelpOpen((open) => !open)}
                className={cx(
                  "ml-2 inline-flex size-6 cursor-pointer bg-[url(/image/fmg/ui/vin-toggle-chevron.svg)] bg-right bg-no-repeat transition-all duration-500",
                  helpOpen && "rotate-180",
                )}
              />
            </div>
            <div
              className={cx(
                "overflow-hidden transition-all duration-[250ms]",
                helpOpen ? "visible max-h-[500px] opacity-100 ease-in" : "invisible max-h-0 opacity-0 ease-out",
              )}
            >
              <div className="mt-2 text-[14px] text-[#4d5151]">
                <p className="mb-2">You can find your VIN&nbsp;in a few places:</p>
                <ul className="mb-4 list-disc pl-8 leading-[26px]">
                  <li>Driver side windshield</li>
                  <li>Driver side doorjamb</li>
                  <li>Vehicle registration card</li>
                  <li>Auto insurance card or app</li>
                </ul>
              </div>
              <Image src="/image/fmg/icons/vin_location.svg" alt="" width={571} height={245} unoptimized className="h-auto max-w-full" />
            </div>
          </div>
          {askZip && (
            <TextboxQuestion
              id="serviceZipCode"
              label="Service ZIP"
              value={zip}
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              error={errors.zip}
              onChange={(value) => {
                setZip(value.replace(/\D/g, "").slice(0, 5));
                setErrors((current) => ({ ...current, zip: undefined }));
                setAlert(undefined);
              }}
            />
          )}
          <NavBar onContinue={onContinue} backHref="/fmg/estimate" loading={loading} />
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
