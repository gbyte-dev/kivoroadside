import type { ReactNode } from "react";
import ContentBlock from "./content-block";
import HorizontalRule from "./horizontal-rule";

// Section title (26px, centered from 768px) followed by the red center bar.
// className is for the title, for the few pages that space it differently.
export default function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <>
      <ContentBlock>
        <h2 className={className}>{children}</h2>
      </ContentBlock>
      <HorizontalRule variant="center-red" />
    </>
  );
}
