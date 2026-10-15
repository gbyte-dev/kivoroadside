"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import FieldError from "./field-error";
import Modal from "./modal";
import { REGULAR, SEMIBOLD } from "./styles";
import type { Contact } from "../fmg-state";
import ConsentCheckboxes from "./consent-checkboxes";
import { INPUT_BASE, INPUT_ERROR, INPUT_OK } from "./textbox-question";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  intro: ReactNode;
  submitLabel: string;
  defaultMethod: Contact["method"];
  // The red price tag above the title ("Your quote is almost ready!")
  withTag?: boolean;
  // "Skip" link under the button
  onSkip?: () => void;
  onSubmit: (contact: Contact) => void;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// "000-000-0000" as the visitor types
export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const DISCLAIMER_LINK = "text-[#0070d1] no-underline pb-1";

// The phone-or-email dialog the reference uses to send a quote or save the
// visitor's progress. The answer stays in this browser (it is not sent).
export default function ContactModal({
  open,
  onClose,
  title,
  intro,
  submitLabel,
  defaultMethod,
  withTag = false,
  onSkip,
  onSubmit,
}: ContactModalProps) {
  const [method, setMethod] = useState(defaultMethod);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceUpdates, setServiceUpdates] = useState(false);
  const [promoOffers, setPromoOffers] = useState(false);
  const [error, setError] = useState<string>();

  const submit = () => {
    if (method === "email") {
      if (!email.trim()) return setError("Please enter your email address");
      if (!EMAIL.test(email.trim())) return setError("Please enter a valid email address");
      return onSubmit({ method, value: email.trim(), serviceUpdates: false, promoOffers: false });
    }
    if (!phone) return setError("Please enter your phone number");
    if (phone.replace(/\D/g, "").length !== 10) return setError("Please enter a valid phone number");
    onSubmit({ method, value: phone, serviceUpdates, promoOffers });
  };

  const fieldLabel = method === "email" ? "Enter your email address" : "Enter your phone number";

  return (
    <Modal open={open} onClose={onClose} label={title}>
      <div className="mt-8 flex flex-col overflow-y-auto pt-4">
        {withTag && (
          <Image
            src="/image/fmg/ui/quote-ready-tag.svg"
            alt=""
            width={62}
            height={62}
            unoptimized
            className="absolute left-[calc(50%-31px)] top-10 size-[62px]"
          />
        )}
        <p
          className={cx(
            REGULAR,
            "m-0 flex w-full justify-center text-[20px] font-medium leading-8 text-black",
            withTag && "pt-[68px]",
          )}
        >
          {title}
        </p>
        <div className="flex flex-col px-6 pt-2">
          <p className="mb-2 text-center">{intro}</p>
          <fieldset className="mb-4 border-0 p-0">
            <legend className="sr-only">Where should we send it?</legend>
            <div className="flex w-full" role="radiogroup">
              {(["phone", "email"] as const).map((option) => {
                const active = method === option;
                return (
                  <label key={option} className="grid min-h-[3.25rem] flex-[1_1_50%] cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={option}
                      checked={active}
                      onChange={() => {
                        setMethod(option);
                        setError(undefined);
                      }}
                      className="peer col-start-1 row-start-1 m-0 size-full cursor-pointer opacity-0"
                    />
                    <span
                      className={cx(
                        REGULAR,
                        "col-start-1 row-start-1 flex w-full items-center justify-center border-b-[3px] px-2 py-3.5 text-center text-[14px] font-semibold uppercase leading-5 transition-colors duration-150 peer-focus-visible:rounded peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#0070d1]",
                        active ? "border-[#db0020] text-[#db0020]" : "border-transparent text-[#4d5151]",
                      )}
                    >
                      {option === "phone" ? "Phone" : "Email"}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className={cx("mb-6", method === "phone" && "flex flex-col gap-2")}>
            <div>
              <label
                htmlFor="contactValue"
                className={cx(SEMIBOLD, "mb-1 inline-block font-black leading-6 text-black", method === "email" && "w-full")}
              >
                {fieldLabel}
              </label>
              <input
                id="contactValue"
                type={method === "email" ? "email" : "tel"}
                autoComplete={method === "email" ? "email" : "tel"}
                aria-label={fieldLabel}
                aria-invalid={Boolean(error)}
                value={method === "email" ? email : phone}
                onChange={(event) => {
                  setError(undefined);
                  if (method === "email") setEmail(event.target.value);
                  else setPhone(formatPhone(event.target.value));
                }}
                className={cx(REGULAR, INPUT_BASE, error ? INPUT_ERROR : INPUT_OK)}
              />
              <FieldError variant="input" message={error} />
            </div>
            {method === "phone" && (
              <ConsentCheckboxes
                className="mt-4"
                serviceUpdates={serviceUpdates}
                promoOffers={promoOffers}
                onChange={(patch) => {
                  if (patch.serviceUpdates !== undefined) setServiceUpdates(patch.serviceUpdates);
                  if (patch.promoOffers !== undefined) setPromoOffers(patch.promoOffers);
                }}
              />
            )}
          </div>
        </div>
        <div className="mb-6 flex flex-col px-6">
          <button
            type="button"
            onClick={submit}
            className={cx(
              SEMIBOLD,
              "mb-6 flex h-12 w-full items-center justify-center rounded-full bg-[#db0020] px-4 py-3 leading-6 text-white focus-visible:shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#db0020] focus-visible:outline-none",
            )}
          >
            <span className="leading-6">{submitLabel}</span>
          </button>
          {onSkip && (
            <button
              type="button"
              onClick={onSkip}
              className={cx(
                SEMIBOLD,
                "mx-auto mb-4 rounded-full p-0 text-[14px] font-semibold leading-4 text-[#0070d1] hover:text-[#06577c] focus-visible:shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#9fcee6] focus-visible:outline-none min-[768px]:text-base",
              )}
            >
              <span>Skip</span>
            </button>
          )}
          <p className="m-0 text-left text-[13px] leading-[1.625] text-[#525656]">
            {method === "phone" ? (
              <>
                By selecting the checkboxes and clicking &apos;{submitLabel}&apos;, I give my electronic signature and consent
                to receive text messages about my vehicle and service,&nbsp;promotional offers and product
                updates&nbsp;from Safelite AutoGlass at my mobile telephone number submitted here,&nbsp;including via
                autodialer and I agree to receive the{" "}
                <a href="/terms-of-service" target="_blank" className={DISCLAIMER_LINK}>
                  Electronic Communication Disclosure &amp; Consent
                </a>{" "}
                information electronically. Consent is not a condition of purchase and message frequency may vary.
                Message and data rates may apply. I also agree to Safelite’s{" "}
                <a href="/privacy-center" target="_blank" className={DISCLAIMER_LINK}>
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-of-service" target="_blank" className={DISCLAIMER_LINK}>
                  Terms of Service
                </a>
                .
              </>
            ) : (
              <>
                By selecting &apos;{submitLabel},&apos; I agree to Safelite&apos;s{" "}
                <a href="/privacy-center" target="_blank" className={DISCLAIMER_LINK}>
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-of-service" target="_blank" className={DISCLAIMER_LINK}>
                  Terms of Use
                </a>{" "}
                and to receive communications from Safelite about my vehicle.
              </>
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
}
