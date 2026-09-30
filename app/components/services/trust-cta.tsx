import Link from "next/link";
import styles from "./services.module.css";
import { cx } from "./class-names";
import ContentBlock from "./content-block";
import HorizontalRule from "./horizontal-rule";

// "Trust the safety and reliability of Safelite" band: a notched gray line,
// centered title and button, then a plain gray line.
export default function TrustCta() {
  return (
    <div>
      <div>
        <HorizontalRule variant="gray-notch" />
        <ContentBlock style={{ textAlign: "center" }}>
          <h2>Trust the safety and reliability of Safelite </h2>
          <Link className={cx(styles.btn, styles.btnCenter)} href="/schedule-service">
            Get quote + schedule
          </Link>
          {/* The reference has a trailing non-breaking space here, which adds one line of height */}
          {"  "}
        </ContentBlock>
        <HorizontalRule variant="gray-line" />
      </div>
    </div>
  );
}
