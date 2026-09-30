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
};

// Shared frame for the service pages: header, article, secondary content,
// the "Don't wait" band, footer, and the feedback tab.
export default function ServicePageShell({ children, secondary }: ServicePageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <article>{children}</article>
      </main>
      <div className={cx(styles.page, styles.siteSecondary)}>{secondary}</div>
      <DontWaitCta />
      <SiteFooter />
      <FeedbackButton />
    </>
  );
}
