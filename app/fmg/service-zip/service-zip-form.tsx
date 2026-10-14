"use client";

import { useState, type ReactNode } from "react";
import { lookupZip } from "../api";
import { useFmg, useFmgGuard, vehicleName, type FmgState } from "../fmg-state";
import { backFromServiceZip } from "../order";
import { findParts } from "../parts";
import Alert from "../ui/alert";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import SubHeader from "../ui/sub-header";
import TextboxQuestion from "../ui/textbox-question";
import { useNextStep } from "../ui/use-next-step";

const hasDamage = (state: FmgState) => Boolean(state.vehicle) && state.damage.locations.length > 0;

// "Where do you need service?" — the ZIP decides the shops, the mobile
// area and the price, and unlocks the part lookup.
export default function ServiceZipForm() {
  const allowed = useFmgGuard(hasDamage);
  const { state, update } = useFmg();
  const { loading, setLoading, go } = useNextStep();
  const [zip, setZip] = useState(state.serviceZip ?? "");
  const [error, setError] = useState<string>();
  const [alert, setAlert] = useState<{ heading: string; body: ReactNode }>();

  if (!allowed) return null;

  const onContinue = async () => {
    if (!zip) return setError("Please enter your service ZIP");
    if (!/^\d{5}$/.test(zip)) return setError("Please enter a valid service ZIP");
    setLoading(true);
    const result = await lookupZip(zip).catch(() => null);
    if (!result?.isValid) {
      setLoading(false);
      return setAlert({ heading: "ZIP code is not valid.", body: "Please re-enter your correct service ZIP." });
    }
    if (!result.isServiceable) {
      setLoading(false);
      return setAlert({
        heading: `We don't currently provide service within ${zip}.`,
        body: "Please enter a different ZIP code where you'd like service so we can get you scheduled.",
      });
    }
    const zipPatch = { serviceZip: zip, city: result.city ?? undefined, state: result.state ?? undefined };
    const { patch, href } = await findParts({ ...state, ...zipPatch }, zip);
    update({ ...zipPatch, ...patch });
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
