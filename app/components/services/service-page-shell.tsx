import type { ReactNode } from "react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import DontWaitCta from "@/app/components/dont-wait-cta";
import FeedbackButton from "@/app/components/feedback-button";
import styles from "./services.module.css";
import { cx } from "./class-names";

type ServicePageShellProps = {
  // Main article content
  children: ReactNode;
  // Content after the article (additional services, FAQs, cards)
  secondary: ReactNode;
  // Bold text weight. Most reference pages use 700; some keep it at 500.
  strongWeight?: "bold" | "medium";
  // Some reference pages hide the "Don't wait" band
  showDontWaitCta?: boolean;
  // Content between the "Don't wait" band and the footer (e.g. a disclaimer)
  additional?: ReactNode;
};

// Shared frame for the service pages: header, article, secondary content,
// the "Don't wait" band, footer, and the feedback tab.
export default function ServicePageShell({
  children,
  secondary,
  strongWeight = "bold",
  showDontWaitCta = true,
  additional,
}: ServicePageShellProps) {
  const weightClass = strongWeight === "medium" ? styles.strongMedium : undefined;
  return (
    <>
      <SiteHeader />
      <main className={cx(styles.page, weightClass)}>
        <article>{children}</article>
      </main>
      <div className={cx(styles.page, weightClass, styles.siteSecondary)}>{secondary}</div>
      {showDontWaitCta && <DontWaitCta />}
      {additional && <div className={cx(styles.page, weightClass)}>{additional}</div>}
      <SiteFooter />
      <FeedbackButton />
    </>
  );
}
