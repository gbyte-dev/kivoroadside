import type { ReactNode } from "react";
import styles from "./services.module.css";

// Light gray (#f4f4f4) band with 48px padding and a 48px gap below.
export default function GrayBox({ children }: { children: ReactNode }) {
  return <div className={styles.grayBox}>{children}</div>;
}
