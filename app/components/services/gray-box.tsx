import type { ReactNode } from "react";
import styles from "./services.module.css";
import { cx } from "./class-names";

// Light gray (#f4f4f4) band with 48px padding and a 48px gap below.
// The base styles are unlayered, so Tailwind overrides need "!".
export default function GrayBox({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.grayBox, className)}>{children}</div>;
}
