import type { ReactNode } from "react";
import styles from "./services.module.css";

// Full-width text area (up to 1020px). Put one or more ContentBlocks inside.
export default function WideContent({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className={styles.contentContainerWide}>{children}</div>
    </div>
  );
}
