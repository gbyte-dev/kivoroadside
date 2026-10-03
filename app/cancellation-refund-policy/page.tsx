import type { Metadata } from "next";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import styles from "./cancellation.module.css";

export const metadata: Metadata = {
  title: "Cancellation policy",
};

export default function CancellationPolicyPage() {
  return (
    <ServicePageShell secondary={null}>
      <ContentBlock className={styles.policy}>
        <h1>Cancellation</h1>
        <p>
          In the case of prepaid service booked through Safelite.com, a cancellation fee, plus applicable taxes, may be
          charged if the service is cancelled in full. You will be refunded your original payment amount minus the
          cancellation fee.
        </p>
        <p>
          Any partial cancellation of prepaid service will be refunded to your credit card after the remaining service
          has been performed.
        </p>
        <h4>Rescheduling</h4>
        <p>You may reschedule service at any time without incurring any cancellation fee.</p>
      </ContentBlock>
    </ServicePageShell>
  );
}
