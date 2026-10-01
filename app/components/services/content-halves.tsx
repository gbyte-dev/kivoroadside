import type { CSSProperties, ReactNode } from "react";
import styles from "./services.module.css";
import { cx } from "./class-names";
import ContentBlock from "./content-block";
import HorizontalRule from "./horizontal-rule";

type ContentHalvesProps = {
  left: ReactNode;
  right: ReactNode;
  // On the reference, one block per page gets 1rem padding around its left
  // column from a site-wide ID rule. Turn this on for that block.
  paddedLeftColumn?: boolean;
  style?: CSSProperties;
};

// Two equal columns (each 50% minus 15px) from 768px; stacked below that.
export default function ContentHalves({ left, right, paddedLeftColumn = false, style }: ContentHalvesProps) {
  return (
    <div className={styles.contentHalves} style={style}>
      <div
        className={cx(styles.contentContainer, styles.contentContainerLeft)}
        style={paddedLeftColumn ? { padding: "1rem" } : undefined}
      >
        {left}
      </div>
      <div className={cx(styles.contentContainer, styles.contentContainerRight)}>{right}</div>
    </div>
  );
}

// Left-column title (left-aligned 26px) with the short red bar under it.
export function HalvesHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <ContentBlock>
        <h2>{children}</h2>
      </ContentBlock>
      <HorizontalRule variant="left-red" />
    </>
  );
}
