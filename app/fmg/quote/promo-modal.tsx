"use client";

import { useState } from "react";
import { cx } from "@/app/components/services/class-names";
import { PROMO_CODES } from "../pricing";
import Alert from "../ui/alert";
import FieldError from "../ui/field-error";
import Modal from "../ui/modal";
import { REGULAR, SEMIBOLD } from "../ui/styles";
import { INPUT_BASE, INPUT_ERROR, INPUT_OK } from "../ui/textbox-question";

type PromoModalProps = {
  open: boolean;
  onClose: () => void;
  current?: string;
  onApply: (code: string) => void;
  // Dialog title (the review page asks "Enter a promo code")
  title?: string;
};

// "I have a promo code": one field and "Apply promo code". Known codes are
// in the local price model; others get the reference's "not valid" notice.
export default function PromoModal({ open, onClose, current, onApply, title = "I have a promo code" }: PromoModalProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string>();
  const [notice, setNotice] = useState<string>();

  const apply = () => {
    const value = code.trim().toUpperCase();
    setNotice(undefined);
    if (!value) return setError("Please enter a promo code");
    if (value === current) return setNotice("This promo code has been already applied");
    if (!(value in PROMO_CODES)) return setNotice(`Sorry, promo code ${value} is not valid`);
    onApply(value);
    setCode("");
  };

  return (
    <Modal open={open} onClose={onClose} label={title}>
      <div className="mt-8 flex flex-col px-6 pb-6 pt-4">
        <p className={cx(REGULAR, "m-0 text-center text-[20px] font-medium leading-8 text-black")}>{title}</p>
        <div className="mt-4">
          {notice && <Alert heading={notice} tone="danger" />}
          <label htmlFor="promoCode" className={cx(SEMIBOLD, "mb-1 inline-block leading-6 text-black")}>
            Enter a promo code
          </label>
          <input
            id="promoCode"
            type="text"
            aria-label="Enter a promo code"
            aria-invalid={Boolean(error)}
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setError(undefined);
            }}
            className={cx(REGULAR, INPUT_BASE, error ? INPUT_ERROR : INPUT_OK, "uppercase")}
          />
          <FieldError variant="input" message={error} />
        </div>
        <button
          type="button"
          onClick={apply}
          className={cx(
            SEMIBOLD,
            "mt-6 flex h-12 w-full items-center justify-center rounded-full border border-[#0070d1] bg-white px-4 py-3 text-[#0070d1] hover:bg-[#e4f1f7] focus-visible:shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#0070d1] focus-visible:outline-none",
          )}
        >
          Apply promo code
        </button>
      </div>
    </Modal>
  );
}
