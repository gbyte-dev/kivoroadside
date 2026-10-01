import ContentBlock from "./content-block";
import ServiceButton from "./service-button";
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
          <ServiceButton href="/schedule-service" center>
            Get quote + schedule
          </ServiceButton>
          {/* The reference has a trailing non-breaking space here, which adds one line of height */}
          {"\u00a0 "}
        </ContentBlock>
        <HorizontalRule variant="gray-line" />
      </div>
    </div>
  );
}
