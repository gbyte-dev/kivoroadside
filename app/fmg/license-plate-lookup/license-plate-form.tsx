"use client";

import { useState } from "react";
import { useFmg, useFmgGuard, type FmgState } from "../fmg-state";
import { glassPieces } from "../order";
import { findParts } from "../parts";
import { checkServiceZip, type ZipAlert } from "../service-zip/check-zip";
import Alert from "../ui/alert";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import SubHeader from "../ui/sub-header";
import TextboxQuestion from "../ui/textbox-question";
import { useNextStep } from "../ui/use-next-step";

const replacesGlass = (state: FmgState) => Boolean(state.vehicle) && glassPieces(state.damage).length > 0;

type Errors = { plate?: string; zip?: string };

// "Great! Let's look up your VIN with your license plate." The plate and the
// registration ZIP are kept with the order; the plate isn't sent anywhere
// (looking up a VIN by plate needs Safelite's own service), and the
// registration ZIP serves as the service ZIP.
export default function LicensePlateForm() {
  const allowed = useFmgGuard(replacesGlass);
  const { state, update } = useFmg();
  const { loading, setLoading, go } = useNextStep();
  const [plate, setPlate] = useState(state.licensePlate ?? "");
  const [zip, setZip] = useState(state.registrationZip ?? state.serviceZip ?? "");
  const [errors, setErrors] = useState<Errors>({});
  const [alert, setAlert] = useState<ZipAlert>();

  if (!allowed) return null;

  const onContinue = async () => {
    const found: Errors = {};
    if (!plate.trim()) found.plate = "Please enter your license plate number";
    if (!zip) found.zip = "Please enter your registration ZIP code";
    else if (!/^\d{5}$/.test(zip)) found.zip = "Please enter a valid ZIP";
    if (found.plate || found.zip) return setErrors(found);
    setLoading(true);
    let zipPatch: Partial<FmgState> = {};
    if (state.serviceZip !== zip) {
      const check = await checkServiceZip(zip);
      if (!check.ok) {
        setLoading(false);
        return setAlert(check.alert);
      }
      zipPatch = check.patch;
    }
    const plateInfo = { licensePlate: plate.trim().toUpperCase(), registrationZip: zip };
    const { patch, href } = await findParts({ ...state, ...zipPatch, ...plateInfo }, zipPatch.serviceZip ?? zip);
    update({ ...zipPatch, ...plateInfo, ...patch });
    go(href);
  };

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader title="Great! Let’s look up your VIN with your license plate." titleClassName="mb-4" />
          {alert && (
            <Alert heading={alert.heading} className="mt-6">
              {alert.body}
            </Alert>
          )}
          <TextboxQuestion
            id="licensePlate"
            label="License plate number"
            value={plate}
            autoCapitalize="characters"
            error={errors.plate}
            className="mt-6"
            onChange={(value) => {
              setPlate(value);
              setErrors((current) => ({ ...current, plate: undefined }));
            }}
          />
          <TextboxQuestion
            id="zip"
            label="ZIP code on vehicle registration"
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
          <NavBar onContinue={onContinue} backHref="/fmg/estimate" loading={loading} />
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
