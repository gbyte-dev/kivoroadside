import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import { CONTAINER, QUESTION_COLUMN } from "./styles";

// Page container with one Bootstrap-style row
export function FunnelPage({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(CONTAINER, className)}>{children}</div>;
}

export function Row({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("-mx-3 flex flex-wrap", className)}>{children}</div>;
}

// The usual single question column (full width on phones, 7/12 on desktops)
export function QuestionColumn({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(QUESTION_COLUMN, className)}>{children}</div>;
}
