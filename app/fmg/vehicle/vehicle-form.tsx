"use client";

import { useEffect, useState } from "react";
import { cx } from "@/app/components/services/class-names";
import { fetchMakes, fetchModels, fetchStyles, fetchYears, lookupVehicle } from "../api";
import { useFmg } from "../fmg-state";
import DropdownQuestion from "../ui/dropdown-question";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import { SEMIBOLD } from "../ui/styles";
import SubHeader from "../ui/sub-header";
import { useNextStep } from "../ui/use-next-step";
import CantFindVehicle from "./cant-find-vehicle";

type Field = "year" | "make" | "model" | "style";

const MESSAGES: Record<Field, string> = {
  year: "Please select your vehicle year",
  make: "Please select your vehicle make",
  model: "Please select your vehicle model",
  style: "Please select your vehicle style",
};

// Year, make, model and style drop-downs; each one unlocks the next, with
// the lists coming from safelite.com's vehicle catalog.
export default function VehicleForm() {
  const { state, ready, update } = useFmg();
  const { loading, setLoading, go } = useNextStep();
  const [years, setYears] = useState<string[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [styles, setStyles] = useState<string[]>([]);
  const [values, setValues] = useState<Record<Field, string>>({ year: "", make: "", model: "", style: "" });
  // A message per field; "" marks a locked drop-down that only turns red
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  useEffect(() => {
    fetchYears()
      .then((list) => setYears(list.map(String)))
      .catch(() => setYears([]));
  }, []);

  // Bring back an earlier choice, and keep a ZIP passed from the home page
  useEffect(() => {
    if (!ready) return;
    const zip = new URLSearchParams(window.location.search).get("zipcode");
    if (zip && /^\d{5}$/.test(zip)) update({ serviceZip: zip });
    const saved = state.vehicle;
    if (!saved) return;
    setValues({ year: saved.year, make: saved.make, model: saved.model, style: saved.style });
    fetchMakes(saved.year).then(setMakes).catch(() => {});
    fetchModels(saved.year, saved.make).then(setModels).catch(() => {});
    fetchStyles(saved.year, saved.make, saved.model).then(setStyles).catch(() => {});
    // Only when the saved answers first arrive
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const choose = (field: Field, value: string) => {
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (field === "year") {
      setValues({ year: value, make: "", model: "", style: "" });
      setMakes([]);
      setModels([]);
      setStyles([]);
      if (value) fetchMakes(value).then(setMakes).catch(() => setMakes([]));
    } else if (field === "make") {
      setValues((current) => ({ ...current, make: value, model: "", style: "" }));
      setModels([]);
      setStyles([]);
      if (value) fetchModels(values.year, value).then(setModels).catch(() => setModels([]));
    } else if (field === "model") {
      setValues((current) => ({ ...current, model: value, style: "" }));
      setStyles([]);
      if (value) fetchStyles(values.year, values.make, value).then(setStyles).catch(() => setStyles([]));
    } else {
      setValues((current) => ({ ...current, style: value }));
    }
  };

  const enabled: Record<Field, boolean> = {
    year: years.length > 0,
    make: makes.length > 0,
    model: models.length > 0,
    style: styles.length > 0,
  };

  const onContinue = async () => {
    // Every empty drop-down turns red; the year, and any other whose list is
    // open, also shows its message
    const missing: Partial<Record<Field, string>> = {};
    (Object.keys(MESSAGES) as Field[]).forEach((field) => {
      if (!values[field]) missing[field] = field === "year" || enabled[field] ? MESSAGES[field] : "";
    });
    if (Object.keys(missing).length > 0 || !values.style) {
      setErrors(missing);
      return;
    }
    setLoading(true);
    const lookup = await lookupVehicle(values.year, values.make, values.model, values.style).catch(() => null);
    const sameVehicle =
      state.vehicle?.year === values.year &&
      state.vehicle?.make === values.make &&
      state.vehicle?.model === values.model &&
      state.vehicle?.style === values.style;
    update({
      vehicle: { ...values, carId: lookup?.carId, category: lookup?.category },
      // A different vehicle starts the damage questions over
      ...(sameVehicle
        ? {}
        : { damage: { locations: [], sides: [], driverWindows: [], passengerWindows: [] }, partAnswers: {} }),
    });
    go("/fmg/vehicle-damage");
  };

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader
            title="Tell us about your vehicle"
            subText={<span>Find your vehicle by entering the year, make, model and style.</span>}
          />
          <DropdownQuestion
            id="yearQuestionField"
            label="Year"
            placeholder="Select year"
            value={values.year}
            options={years}
            disabled={!enabled.year}
            error={errors.year || undefined}
            invalid={errors.year !== undefined}
            onChange={(value) => choose("year", value)}
          />
          <DropdownQuestion
            id="makeQuestionField"
            label="Make"
            placeholder="Select make"
            value={values.make}
            options={makes}
            disabled={!enabled.make}
            error={errors.make || undefined}
            invalid={errors.make !== undefined}
            onChange={(value) => choose("make", value)}
          />
          <DropdownQuestion
            id="modelQuestionField"
            label="Model"
            placeholder="Select model"
            value={values.model}
            options={models}
            disabled={!enabled.model}
            error={errors.model || undefined}
            invalid={errors.model !== undefined}
            onChange={(value) => choose("model", value)}
          />
          <DropdownQuestion
            id="styleQuestionField"
            label="Style"
            placeholder="Select style"
            value={values.style}
            options={styles}
            disabled={!enabled.style}
            error={errors.style || undefined}
            invalid={errors.style !== undefined}
            onChange={(value) => choose("style", value)}
          />
          <NavBar onContinue={onContinue} loading={loading} />
        </QuestionColumn>
      </Row>
      <CantFindVehicle className={cx(SEMIBOLD)} />
    </FunnelPage>
  );
}
