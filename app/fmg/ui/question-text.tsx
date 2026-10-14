import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import { REGULAR, SEMIBOLD } from "./styles";

type QuestionTextProps = {
  children: ReactNode;
  className?: string;
  // The reference's "span-bold" at weight 600: on the regular face (most
  // pages) or on the semibold face (the mobile address page)
  bold?: boolean | "semibold";
};

// Bold question above a group of option cards or buttons
export default function QuestionText({ children, className, bold = false }: QuestionTextProps) {
  return (
    <div className={cx(SEMIBOLD, "mb-2 mt-6 text-base font-normal leading-[26px] text-black", className)}>
      <span className={cx("w-full", bold ? cx(bold !== "semibold" && REGULAR, "font-semibold") : "font-medium")}>
        {children}
      </span>
    </div>
  );
}
