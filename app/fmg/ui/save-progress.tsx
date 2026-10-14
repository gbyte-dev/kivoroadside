"use client";

import { useState } from "react";
import { cx } from "@/app/components/services/class-names";
import { useFmg, vehicleName } from "../fmg-state";
import Alert from "./alert";
import ContactModal from "./contact-modal";
import { REGULAR, SEMIBOLD } from "./styles";

// Gray "Save your progress and continue from here later" bar. It opens the
// phone/email dialog; once saved it turns into a green note.
export default function SaveProgress({ className }: { className?: string }) {
  const { state, update } = useFmg();
  const [open, setOpen] = useState(false);
  const saved = Boolean(state.progressSaved);

  return (
    <div
      className={cx(
        "mb-6 mt-8 flex h-12 flex-row items-center justify-center rounded-lg text-center",
        saved ? "h-auto" : "bg-[#f5f5f5] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)]",
        className,
      )}
    >
      {saved ? (
        <Alert tone="success" heading="Got it! We'll continue to save your progress as you go." className="m-0 w-full" />
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mx-auto inline-block rounded-full p-4 text-left text-[14px] font-medium leading-4 text-[#0070d1] focus-visible:outline-none min-[768px]:text-base [&:focus-visible>span]:rounded [&:focus-visible>span]:outline-2 [&:focus-visible>span]:outline-[#005fcc]"
        >
          <span className={cx(REGULAR, "m-0 text-[#4d5151]")}>
            <span className={cx(SEMIBOLD, "text-[#0070d1]")}>Save your progress</span> and continue from here later
          </span>
        </button>
      )}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        title="Save your progress"
        intro={
          <>
            Enter your details below to save time when you return to finish your {vehicleName(state.vehicle)}{" "}
            service&nbsp;request.
          </>
        }
        submitLabel="Save my progress"
        defaultMethod="phone"
        onSubmit={(contact) => {
          update({ contact, progressSaved: true });
          setOpen(false);
        }}
      />
    </div>
  );
}
