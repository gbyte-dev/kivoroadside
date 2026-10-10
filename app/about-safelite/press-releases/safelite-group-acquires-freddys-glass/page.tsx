import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Safelite Group Acquires Freddy's Glass | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p>COLUMBUS, Ohio &ndash;&nbsp;<em>Deal Closed December 8, 2023&nbsp;</em>&ndash; Safelite<sup>&reg; </sup>Group, the nation&rsquo;s leading vehicle glass services and recalibration company and owner of Safelite AutoGlass<sup>&reg;</sup>, announced today an agreement to acquire the auto glass assets of Texas-based Freddy&rsquo;s Glass. The transaction was completed on Friday, December 8.</p>
<p>&ldquo;We&rsquo;re thrilled to welcome our new associates to the business and to continue growing in the Waco area,&rdquo; said Safelite&rsquo;s President and CEO, Renee Cacchillo.</p>
<p>With a location in Waco, TX, the combined businesses expand Safelite&rsquo;s reach, allowing them to offer vehicle glass repair, replacement and recalibration services to even more customers.&nbsp;&nbsp;</p>
<p>&ldquo;Freddy&rsquo;s Glass has an incredible local reputation and we&rsquo;re honored to continue providing the stellar service their community has come to expect,&rdquo; Cacchillo said.</p>
<p>Freddy&rsquo;s Glass will leverage Safelite&rsquo;s operational systems, advanced safety system recalibration expertise, world-class distribution network, global purchasing power and substantial insurance and commercial relationships.</p>
<p style="text-align: center;">###</p>
<p><strong>About Safelite Group</strong><br />
Safelite<sup>&reg;</sup>&nbsp;Group is a multi-faceted vehicle glass and claims management service organization based in Columbus, Ohio,&nbsp;and operating company-owned facilities in 50 states. The company, which has been in business since 1947, is comprised of two major business operations:&nbsp;Safelite AutoGlass<sup>&reg;</sup>, a vehicle glass repair, replacement&nbsp;and recalibration&nbsp;services provider and&nbsp;Safelite<sup>&reg;</sup>&nbsp;Solutions, which offers fleet and insurance claims management services&nbsp;for vehicle glass and other claims. The company employs nearly 16,000 people throughout the United States. Safelite is a subsidiary of Belron<sup>&reg;</sup>, the worldwide leader in vehicle glass repair, replacement and recalibration.&nbsp;Safelite AutoGlass is the largest vehicle glass repair, replacement and recalibration company under one brand in the world.&nbsp;</p>
<p style="text-align: center;">###</p>
<p><strong>Media Contact: </strong>To connect with a Safelite spokesperson, email <a href="mailto:mediarelations@safelite.com">mediarelations@safelite.com</a>.</p>`;

export default function Page() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Safelite Group Acquires Freddy's Glass
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            12-12-2023
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
