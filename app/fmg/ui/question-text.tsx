import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import { SEMIBOLD } from "./styles";

// Bold question above a group of option cards or buttons
export default function QuestionText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx(SEMIBOLD, "mb-2 mt-6 text-base font-normal leading-[26px] text-black", className)}>
      <span className="w-full font-medium">{children}</span>
    </div>
  );
}
