import styles from "./services.module.css";
import { cx } from "./class-names";

export type HorizontalRuleVariant = "center-red" | "left-red" | "gray-line" | "gray-notch" | "section-divider";

const variantClass: Record<HorizontalRuleVariant, string> = {
  "center-red": styles.centerRed,
  "left-red": styles.leftRed,
  "gray-line": styles.grayLine,
  "gray-notch": styles.grayNotch,
  "section-divider": styles.sectionDivider,
};

// Divider lines: a 120x5 red bar (centered from 768px or always left),
// a 1px gray line, a gray line with a notch, or a spaced section divider.
export default function HorizontalRule({ variant }: { variant: HorizontalRuleVariant }) {
  return (
    <div className={cx(styles.horizontalRule, variantClass[variant])} aria-hidden="true">
      <div />
    </div>
  );
}
