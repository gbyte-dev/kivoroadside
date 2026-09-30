import type { ReactNode } from "react";
import styles from "./services.module.css";
import { cx } from "./class-names";
import ContentBlock from "./content-block";

type NarrowLeftHalvesProps = {
  heading: ReactNode;
  children: ReactNode;
  // Most rows wrap each side in a content block (adds 20px below). A few rows
  // on the reference use plain wrappers instead, so this can be turned off.
  contentBlock?: boolean;
  // On the reference, one row per page gets 1rem padding around its heading
  // column from a site-wide ID rule. Turn this on for that row.
  paddedLeftColumn?: boolean;
};

// Red 22px heading in a 37% column, text in a 63% column (stacked on mobile).
export default function NarrowLeftHalves({
  heading,
  children,
  contentBlock = true,
  paddedLeftColumn = false,
}: NarrowLeftHalvesProps) {
  const Wrapper = contentBlock ? ContentBlock : "div";
  return (
    <div className={styles.narrowLeftHalves}>
      <div
        className={cx(styles.contentContainer, styles.contentContainerLeft)}
        style={paddedLeftColumn ? { padding: "1rem" } : undefined}
      >
        <Wrapper>
          <h3>{heading}</h3>
        </Wrapper>
      </div>
      <div className={cx(styles.contentContainer, styles.contentContainerRight)}>
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}

// An empty row kept from the reference. From 768px its right column's 5px
// top padding still adds a 5px gap, so it is needed for exact spacing.
export function NarrowLeftSpacer() {
  return (
    <div className={styles.narrowLeftHalves}>
      <div className={cx(styles.contentContainer, styles.contentContainerLeft)} />
      <div className={cx(styles.contentContainer, styles.contentContainerRight)} />
    </div>
  );
}
