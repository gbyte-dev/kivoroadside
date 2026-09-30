import type { ReactNode } from "react";
import ContentBlock from "./content-block";
import HorizontalRule from "./horizontal-rule";

// Section title (26px, centered from 768px) followed by the red center bar.
export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <ContentBlock>
        <h2>{children}</h2>
      </ContentBlock>
      <HorizontalRule variant="center-red" />
    </>
  );
}
