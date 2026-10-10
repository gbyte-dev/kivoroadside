import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Safelite Group Acquires Mark’s Mobile Glass | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p>COLUMBUS, Ohio - Deal Closed March 3, 2023 - Safelite<sup>&reg; </sup>Group, the nation&rsquo;s leading vehicle glass services and recalibration company and owner of Safelite AutoGlass<sup>&reg;</sup>, announced today an agreement to acquire the auto glass assets of Mark&rsquo;s Mobile Glass operating throughout Central Missouri. The transaction was completed on Friday, March 3, 2023.</p><p>
&ldquo;We enjoy welcoming new team members to our business and leveraging their talents in providing the quality glass repair, replacement and recalibration services our customers expect from Safelite,&rdquo; said Renee Cacchillo, President and CEO of Safelite Group. &ldquo;We&rsquo;re confident that our new associates from Mark&rsquo;s Mobile Glass will contribute to our future success and are glad to have them join our team.&rdquo;</p><p>
The combined businesses will work together to grow a successful caring business offering vehicle glass repair, replacement and recalibration services to Missouri customers.</p><p>
&ldquo;It&rsquo;s an exciting time in our business as we continue to expand our reach, and with that comes the responsibility of caring for our people&rdquo; said Cacchillo. &ldquo;We look forward to making our new team members feel right at home.&rdquo;</p><p>
Mark&rsquo;s Mobile Glass will leverage Safelite&rsquo;s excellent operational systems, advanced safety system recalibration expertise, world-class distribution network, global purchasing power and strong insurance and commercial relationships.</p>
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
            Safelite Group Acquires Mark’s Mobile Glass
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            03-07-2023
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
