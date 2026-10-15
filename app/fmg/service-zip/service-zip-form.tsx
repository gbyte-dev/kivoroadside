"use client";

import { useState } from "react";
import { useFmg, useFmgGuard, vehicleName, type FmgState } from "../fmg-state";
import { backFromServiceZip } from "../order";
import { findParts } from "../parts";
import Alert from "../ui/alert";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import SubHeader from "../ui/sub-header";
import TextboxQuestion from "../ui/textbox-question";
import { useNextStep } from "../ui/use-next-step";
import { checkServiceZip, type ZipAlert } from "./check-zip";

const hasDamage = (state: FmgState) => Boolean(state.vehicle) && state.damage.locations.length > 0;

// "Where do you need service?" — the ZIP decides the shops, the mobile
// area and the price, and unlocks the part lookup.
export default function ServiceZipForm() {
  const allowed = useFmgGuard(hasDamage);
  const { state, update } = useFmg();
  const { loading, setLoading, go } = useNextStep();
  const [zip, setZip] = useState(state.serviceZip ?? "");
  const [error, setError] = useState<string>();
  const [alert, setAlert] = useState<ZipAlert>();

  if (!allowed) return null;

  const onContinue = async () => {
    if (!zip) return setError("Please enter your service ZIP");
    if (!/^\d{5}$/.test(zip)) return setError("Please enter a valid service ZIP");
    setLoading(true);
    const check = await checkServiceZip(zip);
    if (!check.ok) {
      setLoading(false);
      return setAlert(check.alert);
    }
    const { patch, href } = await findParts({ ...state, ...check.patch }, zip);
    update({ ...check.patch, ...patch });
    go(href);
  };

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader title={vehicleName(state.vehicle)} className="pb-4" />
          {alert && <Alert heading={alert.heading}>{alert.body}</Alert>}
          <TextboxQuestion
            id="serviceZipCode"
            label="Service ZIP"
            value={zip}
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            error={error}
            onChange={(value) => {
              setZip(value.replace(/\D/g, "").slice(0, 5));
              setError(undefined);
              setAlert(undefined);
            }}
          />
          <NavBar onContinue={onContinue} backHref={backFromServiceZip(state)} loading={loading} />
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
