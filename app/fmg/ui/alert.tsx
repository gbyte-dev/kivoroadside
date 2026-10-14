import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import { SEMIBOLD } from "./styles";

const TONES = {
  warning: { box: "bg-[#fff5eb]", heading: "text-[#bb4b06]", rule: "border-[#602d00]" },
  danger: { box: "bg-[#fdecea]", heading: "text-[#ac160b]", rule: "border-[#ac160b]" },
  success: { box: "bg-[#e3f2ea]", heading: "text-[#006a36]", rule: "border-[#004f28]" },
  info: { box: "bg-[#e4f1f7]", heading: "text-[#06577c]", rule: "border-[#0070d1]" },
};

type AlertProps = {
  heading: ReactNode;
  children?: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
};

// Centered notice with a colored headline and an optional body under a rule
// (the reference's ".alert.text-center"), e.g. "ZIP code is not valid."
export default function Alert({ heading, children, tone = "warning", className }: AlertProps) {
  const colors = TONES[tone];
  return (
    <div role="alert" className={cx("mb-4 rounded-lg px-4 py-[0.675rem] text-center", colors.box, className)}>
      <p className={cx(SEMIBOLD, "m-0 font-semibold", colors.heading)}>{heading}</p>
      {children && (
        <>
          <hr className={cx("mx-4 my-2 border-t", colors.rule)} />
          <div className="text-[14px]">{children}</div>
        </>
      )}
    </div>
  );
}
