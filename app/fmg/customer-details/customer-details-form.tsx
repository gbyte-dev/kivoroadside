"use client";

import { useState } from "react";
import { useFmg, useFmgGuard, type Customer, type FmgState } from "../fmg-state";
import ConsentCheckboxes from "../ui/consent-checkboxes";
import { formatPhone } from "../ui/contact-modal";
import { FunnelPage, QuestionColumn, Row } from "../ui/layout";
import NavBar from "../ui/nav-bar";
import SubHeader from "../ui/sub-header";
import TextboxQuestion from "../ui/textbox-question";
import { useNextStep } from "../ui/use-next-step";

type Field = "firstName" | "lastName" | "email" | "phone";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LINK = "text-[#0070d1] underline";

const hasAppointment = (state: FmgState) => Boolean(state.appointment);

// Step 3: "How can we reach you?" — name, email and phone for the
// confirmation. Everything stays in this browser.
export default function CustomerDetailsForm() {
  const allowed = useFmgGuard(hasAppointment);
  const { state, update } = useFmg();
  const { loading, go } = useNextStep();
  const [customer, setCustomer] = useState<Customer>(
    state.customer ?? {
      firstName: "",
      lastName: "",
      email: state.contact?.method === "email" ? state.contact.value : "",
      phone: state.contact?.method === "phone" ? state.contact.value : "",
      serviceUpdates: state.contact?.serviceUpdates ?? false,
      promoOffers: state.contact?.promoOffers ?? false,
    },
  );
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  if (!allowed) return null;

  const set = (patch: Partial<Customer>, field?: Field) => {
    setCustomer((current) => ({ ...current, ...patch }));
    if (field) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onContinue = () => {
    const missing: Partial<Record<Field, string>> = {};
    if (!customer.firstName.trim()) missing.firstName = "Please enter your first name";
    if (!customer.lastName.trim()) missing.lastName = "Please enter your last name";
    if (!customer.email.trim()) missing.email = "Please enter your email address";
    else if (!EMAIL.test(customer.email.trim())) missing.email = "Please enter a valid email address";
    if (!customer.phone) missing.phone = "Please enter your phone number";
    else if (customer.phone.replace(/\D/g, "").length !== 10) missing.phone = "Please enter a valid phone number";
    if (Object.keys(missing).length > 0) return setErrors(missing);
    update({ customer: { ...customer, email: customer.email.trim() } });
    go("/fmg/payment-method");
  };

  return (
    <FunnelPage>
      <Row>
        <QuestionColumn>
          <SubHeader
            className="mb-6 mt-4"
            titleClassName="mb-4"
            title="How can we reach you?"
            subText={<span>We&apos;ll send you an appointment confirmation and follow-up details.</span>}
          />
          <TextboxQuestion
            id="firstName"
            label="First name"
            value={customer.firstName}
            autoComplete="given-name"
            error={errors.firstName}
            onChange={(value) => set({ firstName: value }, "firstName")}
          />
          <TextboxQuestion
            id="lastName"
            label="Last name"
            value={customer.lastName}
            autoComplete="family-name"
            error={errors.lastName}
            onChange={(value) => set({ lastName: value }, "lastName")}
          />
          <TextboxQuestion
            id="email"
            label="Email address"
            type="email"
            value={customer.email}
            autoComplete="email"
            error={errors.email}
            onChange={(value) => set({ email: value }, "email")}
          />
          <TextboxQuestion
            id="phone"
            label="Phone number"
            type="tel"
            placeholder="###-###-####"
            value={customer.phone}
            autoComplete="tel"
            inputMode="tel"
            error={errors.phone}
            inputClassName="py-[11px]! min-[768px]:min-h-0 min-[768px]:py-[15px]!"
            onChange={(value) => set({ phone: formatPhone(value) }, "phone")}
          />
          <ConsentCheckboxes
            spacing="page"
            serviceUpdates={customer.serviceUpdates}
            promoOffers={customer.promoOffers}
            onChange={(patch) => set(patch)}
          />
          <NavBar
            className="mt-4"
            onContinue={onContinue}
            backHref={state.appointment?.type === "Mobile" ? "/fmg/mobile-details" : "/fmg/scheduling"}
            loading={loading}
          />
          <div className="mb-6 mt-2 w-full text-[12px] leading-[1.7]">
            <span>
              <span>
                By selecting the checkboxes, I give my electronic signature and consent to receive text messages from
                Safelite AutoGlass (including via autodialer) about about my vehicle and service, promotional&nbsp;offers
                and&nbsp;product&nbsp;updates at the number provided, and to receive the{" "}
                <a href="/terms-of-service" target="_blank" className={LINK}>
                  Electronic Communications Disclosure &amp; Consent
                </a>{" "}
                electronically. Consent isn’t required to purchase. Message frequency may vary. Message and data rates
                may apply. I also agree to Safelite’s{" "}
                <a href="/safelite-group-privacy-policy" target="_blank" className={LINK}>
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-of-service" target="_blank" className={LINK}>
                  Terms of Service
                </a>
                .
              </span>
            </span>
          </div>
        </QuestionColumn>
      </Row>
    </FunnelPage>
  );
}
