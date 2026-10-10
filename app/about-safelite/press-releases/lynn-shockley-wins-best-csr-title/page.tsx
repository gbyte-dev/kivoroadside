import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Lynn Shockley Wins 'Best CSR' Title | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p><strong>COLUMBUS, Ohio</strong> - Lynn Shockley, Safelite Auto Glass<sup>&reg;</sup> customer service representative (CSR) and Columbus, Ohio resident, recently won the $2,500 first prize at the inaugural "Best CSR" customer experience competition in Orlando, FL. Six competing CSRs were tested on all facets of their position including quality, customer service and efficiency &ndash; while demonstrating outstanding knowledge of company processes and procedures. The national event showcased competitors taking calls from customers in a clear exhibit booth that allowed observers to see and listen in on the challenge.</p>
<p>"The competition presented different types of customers with various needs," said Brad Welling, national operational trainer for Safelite AutoGlass<sup>&reg;</sup> and the CSR customer service competition coordinator. "This allowed the competitors to demonstrate customer service and telephone skills, along with navigating our point-of-sale computer system. We made an effort to reproduce difficult scenarios to measure core competencies and much more for each of our CSRs."</p>
<p>CSRs from three operational areas including the company's two national contact centers and various field locations were eligible for this event. Those that ranked highest on a series of mystery shopping calls were invited to the national competition. Columbus, Ohio referral CSR Phyllis Holderness was named the runner-up and received $1,000.</p>
<p>"Everyone did so well, it was hard to tell who would come out on top," Shockley said. "It was nice to be able to cheer each other on throughout the day."</p>
<p>The additional CSRs who competed in the national event included: </p>
<ul>
    <li>Judith Carey, Harrisburg, Pa. </li>
    <li>Shannon Hartley, Columbus, Ohio </li>
    <li>Constance Marshall, Raleigh, N.C. </li>
    <li>Doug Tanner, Columbus, Ohio</li>
</ul><p><p><strong>About Safelite AutoGlass<sup>&reg;</sup></strong><br />
Safelite AutoGlass<sup>&reg;</sup>, founded in 1947, is the nation's leading provider of vehicle glass repair and replacement services, providing mobile service to more than 95 percent of the U.S. population in all 50 states. The Columbus, Ohio-based company employs 9,000 people across the United States and serves more than 3.7 million customers each year through its company-owned operations.  </p>`;

export default function Page() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Lynn Shockley Wins 'Best CSR' Title
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            11-02-2023
          </div>

          <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />

          <p>
            <br />
            <Link href="/about-safelite/press-releases">Back to press releases</Link>
          </p>
        </div>

        <HorizontalRule variant="gray-line" />
      </div>
    </ServicePageShell>
  );
}
