"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";
import { Roboto } from "next/font/google";

// Form fields are set in Roboto, as on the reference
const roboto = Roboto({ subsets: ["latin"], weight: "400", display: "swap" });

// Google reCAPTCHA v2 checkbox. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your own
// key; without it Google's public test key is used, which always passes and
// shows a "for testing purposes only" note inside the box.
const RECAPTCHA_TEST_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || RECAPTCHA_TEST_KEY;

type Grecaptcha = {
  ready: (callback: () => void) => void;
  render: (
    container: HTMLElement,
    options: { sitekey: string; callback: (token: string) => void; "expired-callback": () => void },
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

const SUBJECTS = [
  "Quotes and Questions about your order",
  "Customer Service",
  "Technician Compliment",
  "Media Relations",
  "Other",
  "Warranty",
];

const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/;
const PHONE_PATTERN = /^\+?(\d[\d\-.\s]+)?(\([\d\-.\s]+\))?[\d\-.\s]+\d$/;

type Field = "FirstName" | "LastName" | "EmailAddress" | "PhoneNumber" | "Subject" | "Message";
type Values = Record<Field, string>;

const EMPTY: Values = { FirstName: "", LastName: "", EmailAddress: "", PhoneNumber: "", Subject: "", Message: "" };

// Error texts copied from the reference form
function validate(values: Values): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  if (!values.FirstName.trim()) errors.FirstName = "First name is required.";
  if (!values.LastName.trim()) errors.LastName = "Last name is required.";
  if (!values.EmailAddress.trim()) errors.EmailAddress = "Email address is required.";
  else if (!EMAIL_PATTERN.test(values.EmailAddress.trim())) errors.EmailAddress = "Email address is invalid";
  if (!values.PhoneNumber.trim()) errors.PhoneNumber = "Phone number is required.";
  else if (!PHONE_PATTERN.test(values.PhoneNumber.trim())) errors.PhoneNumber = "Phone number is invaild.";
  if (!values.Subject) errors.Subject = "Subject is required.";
  if (!values.Message.trim()) errors.Message = "Message is required.";
  return errors;
}

const CONTROL =
  "h-[45px] w-full min-w-0 appearance-none rounded-[4px] border border-[#cacbcc] bg-white px-[15px] py-[9px] text-base leading-[25px] text-[#525656] shadow-[0_1px_5px_rgba(0,0,0,.2)] outline-0 transition-all duration-150 ease-out focus:shadow-[0_0_0_5px_#b9d7e6]";

function FormGroup({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className="relative pb-5">
      <label htmlFor={id} className="block pb-[5px] font-medium text-black">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" aria-live="assertive" className="pb-0! pt-[5px] text-[#db0020]">
          {error}
        </p>
      )}
    </div>
  );
}

// "Contact us online" form. There is no backend for it yet, so a valid form
// is not sent anywhere; it shows the confirmation message instead.
export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaBox = useRef<HTMLDivElement>(null);
  const captchaWidget = useRef<number | null>(null);

  const update = (field: Field) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  // Draw the checkbox once the reCAPTCHA script is ready (also after client-side navigation)
  function renderCaptcha() {
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return;
    grecaptcha.ready(() => {
      if (!captchaBox.current || captchaWidget.current !== null || captchaBox.current.childElementCount) return;
      captchaWidget.current = grecaptcha.render(captchaBox.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token) => {
          setCaptchaToken(token);
          setCaptchaError(false);
        },
        "expired-callback": () => setCaptchaToken(null),
      });
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setCaptchaError(!captchaToken);
    if (Object.keys(found).length === 0 && captchaToken) setSent(true);
  }

  const control = (field: Field) => `${roboto.className} ${CONTROL} ${errors[field] ? "border-[#0070d1]" : ""}`;

  return (
    // .form-container
    <div className="mx-auto max-w-[510px] px-[15px] pb-[30px] md:max-w-[750px]">
      <form noValidate onSubmit={handleSubmit}>
        <h2>Contact us online </h2>
        <div className="relative flex w-full justify-start pb-0 mb-[30px] md:justify-center" aria-hidden="true">
          <div className="h-[5px] w-[120px] flex-none bg-[#db0020]" />
        </div>
        <p className="pb-5!">
          Need help with something? Check out our <Link href="/help-center">FAQs</Link> or complete the form below to
          send us a message. To find the store nearest you and make an appointment or find a phone number, visit our{" "}
          <Link href="/store-locator">store locator</Link> page.&nbsp;
        </p>

        {sent ? (
          <p role="status" className="pb-[30px]! font-medium text-black">
            Success! Thanks for filling out our form!
          </p>
        ) : (
          <>
            {/* First and last name side by side from 768px */}
            <div className="md:flex md:flex-wrap md:items-start md:justify-between">
              <div className="md:w-[calc(50%-15px)]">
                <FormGroup id="contact-first-name" label="First name" error={errors.FirstName}>
                  <input
                    id="contact-first-name"
                    type="text"
                    name="FirstName"
                    maxLength={255}
                    required
                    value={values.FirstName}
                    onChange={update("FirstName")}
                    className={control("FirstName")}
                  />
                </FormGroup>
              </div>
              <div className="md:w-[calc(50%-15px)]">
                <FormGroup id="contact-last-name" label="Last name" error={errors.LastName}>
                  <input
                    id="contact-last-name"
                    type="text"
                    name="LastName"
                    maxLength={255}
                    required
                    value={values.LastName}
                    onChange={update("LastName")}
                    className={control("LastName")}
                  />
                </FormGroup>
              </div>
            </div>

            <div className="px-[10px]">
              <FormGroup id="contact-email" label="Email address" error={errors.EmailAddress}>
                <input
                  id="contact-email"
                  type="email"
                  name="EmailAddress"
                  maxLength={255}
                  required
                  value={values.EmailAddress}
                  onChange={update("EmailAddress")}
                  className={control("EmailAddress")}
                />
              </FormGroup>
              <FormGroup id="contact-phone" label="Phone number" error={errors.PhoneNumber}>
                <input
                  id="contact-phone"
                  type="tel"
                  name="PhoneNumber"
                  maxLength={255}
                  required
                  value={values.PhoneNumber}
                  onChange={update("PhoneNumber")}
                  className={control("PhoneNumber")}
                />
              </FormGroup>
              <FormGroup id="contact-subject" label="Subject" error={errors.Subject}>
                <select
                  id="contact-subject"
                  name="Subject"
                  required
                  value={values.Subject}
                  onChange={update("Subject")}
                  className={`${control("Subject")} cursor-pointer`}
                >
                  <option value="">- Select -</option>
                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                {/* Up and down chevrons on the right of the box */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[10px] top-[45px] h-2 w-2 -rotate-[135deg] border-b-2 border-r-2 border-[#0070d1] bg-white shadow-[0_0_0_3px_#fff]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[10px] top-[52px] h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#0070d1] bg-white shadow-[0_0_0_3px_#fff]"
                />
              </FormGroup>
              <FormGroup id="contact-message" label="Message" error={errors.Message}>
                <textarea
                  id="contact-message"
                  name="Message"
                  required
                  value={values.Message}
                  onChange={update("Message")}
                  className={`${control("Message")} overflow-auto`}
                />
              </FormGroup>
              <div className="pb-5">
                <Script src="https://www.google.com/recaptcha/api.js?render=explicit" onReady={renderCaptcha} />
                <div ref={captchaBox} className="min-h-[78px]" />
                {captchaError && (
                  <p role="alert" className="pb-0! pt-[5px] text-[#db0020]">
                    Either you forgot to check the box or you are a robot.
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex h-[56px] w-[177px] cursor-pointer items-center justify-center rounded-[16px] border border-[#db0020] bg-[#db0020] px-12 text-base font-medium leading-none tracking-normal text-white transition-all duration-150 ease-out hover:bg-[#bf0f1d] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#95c2e9]"
            >
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
}
