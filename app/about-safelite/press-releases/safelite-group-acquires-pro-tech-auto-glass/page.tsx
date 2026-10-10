import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Safelite Group Acquires Pro Tech Auto Glass | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p style="text-align: left;"><span style="text-align: left;">COLUMBUS, Ohio &ndash; </span><em style="text-align: left;">Deal Closed August 26, 2022 &ndash;&nbsp;</em><span style="text-align: left;">Safelite</span><sup style="text-align: left;">&reg; </sup><span style="text-align: left;">Group, the nation&rsquo;s leading vehicle glass services and recalibration company and owner of Safelite AutoGlass</span><sup style="text-align: left;">&reg;</sup><span style="text-align: left;">, announced today an agreement to acquire Pro Tech Auto Glass, servicing western Pennsylvania, southern New York and eastern Ohio. The transaction closed on Friday, August 26, 2022.</span></p>
<p>&ldquo;Founded in 1972, Pro Tech Auto Glass is committed to their people, their customers and providing high-quality work,&rdquo; said Renee Cacchillo, President and CEO of Safelite Group. &ldquo;We&rsquo;re proud to welcome their associates to our business.&rdquo;</p>
<p>Safelite is known for its excellence with vehicle glass repair, replacement and recalibration services. &ldquo;This is a fantastic opportunity to utilize the skills and talents of their team while honoring the company&rsquo;s impressive legacy,&rdquo; Cacchillo said. &ldquo;Together, we will deliver the personal care and memorable customer service we&rsquo;re known for through our Safelite AutoGlass brand in every community.&rdquo;</p>
<p>Pro Tech Auto Glass will leverage Safelite&rsquo;s excellent operational systems, advanced safety system recalibration expertise, world-class distribution network, global purchasing power and strong insurance and commercial relationships.</p>
<p style="text-align: center;">###</p>
<p><strong>About Safelite Group</strong><br />
Safelite<sup>&reg;</sup>&nbsp;Group is a multi-faceted vehicle glass and claims management service organization based in Columbus, Ohio, and operating company-owned facilities in 50 states. The company, which has been in business since 1947, is comprised of two major business operations: Safelite AutoGlass<sup>&reg;</sup>, a vehicle glass repair, replacement and recalibration services provider and Safelite<sup>&reg;</sup> Solutions, which offers fleet and insurance claims management services for vehicle glass and other claims. The company employs over 16,000 people throughout the United States. Safelite is a subsidiary of Belron<sup>&reg;</sup>. Safelite AutoGlass is the largest vehicle glass repair, replacement and recalibration company under one brand in the world.&nbsp;</p>
<p style="text-align: center;">###</p>
<p style="text-align: left;"><strong style="text-align: left;">Media Contact: </strong><span style="text-align: left;">To connect with a Safelite spokesperson, email </span><a href="mailto:mediarelations@safelite.com" style="text-align: left;">mediarelations@safelite.com</a><span style="text-align: left;">.</span></p>`;

export default function Page() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Safelite Group Acquires Pro Tech Auto Glass
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            08-31-2022
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
