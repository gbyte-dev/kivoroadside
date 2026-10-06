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
  // Wrapper for the heading side only; defaults to contentBlock. Some pages
  // use a plain heading wrapper next to a content block of text.
  headingContentBlock?: boolean;
  // On the reference, one row per page gets 1rem padding around its heading
  // column from a site-wide ID rule. Turn this on for that row.
  paddedLeftColumn?: boolean;
  // Some reference rows have an empty heading after the title (10px taller)
  emptyHeading?: boolean;
};

// Red 22px heading in a 37% column, text in a 63% column (stacked on mobile).
export default function NarrowLeftHalves({
  heading,
  children,
  contentBlock = true,
  headingContentBlock = contentBlock,
  paddedLeftColumn = false,
  emptyHeading = false,
}: NarrowLeftHalvesProps) {
  const Wrapper = contentBlock ? ContentBlock : "div";
  const HeadingWrapper = headingContentBlock ? ContentBlock : "div";
  return (
    <div className={styles.narrowLeftHalves}>
      <div
        className={cx(styles.contentContainer, styles.contentContainerLeft)}
        style={paddedLeftColumn ? { padding: "1rem" } : undefined}
      >
        <HeadingWrapper>
          <h3>{heading}</h3>
          {emptyHeading && <h3 />}
        </HeadingWrapper>
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
