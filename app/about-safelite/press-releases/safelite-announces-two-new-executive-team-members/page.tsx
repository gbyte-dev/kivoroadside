import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Safelite Announces Two New Executive Team Members | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p>COLUMBUS, OHIO &mdash;&nbsp;<em>Scott Koenigs and Gannon Jones join the auto glass retailer</em>&nbsp;&mdash; Safelite, the nation&rsquo;s leading vehicle glass services and recalibration company, today announced the appointment of Scott Koenigs as EVP, Chief People Officer and Gannon Jones, EVP, Chief Commercial and Customer Experience Officer.</p>
<p><img src="/imagesv3/default-source/default-album/scott-koenigs1-89.jpg?sfvrsn=e486af89_2" data-displaymode="Original" alt="Scott-Koenigs-2022" title="Scott-Koenigs-2022" style="float: left; margin-top: 8px; margin-bottom: 0px; margin-right: 16px;" />&ldquo;We are pleased to welcome two seasoned and professional leaders with deep expertise in their respective industries to our business,&rdquo; said Renee Cacchillo, Safelite&rsquo;s President and CEO. &ldquo;As a People Powered and Customer Driven organization, Scott and Gannon each provide unique, innovative and forward-thinking methodologies to our disciplines that are crucial in serving our associates, clients and customers.&rdquo;</p>
<p>With over 24 years in leadership roles with various global manufacturing, sales and marketing organizations, Koenig has a successful track record for building winning and purpose-driven cultures and optimizing the growth and development of associates.</p>
<p><img src="/imagesv3/default-source/default-album/gj-51.jpg?sfvrsn=720e10a3_2" data-displaymode="Original" alt="Gannon-2022" title="Gannon-2022" style="float: right; margin-bottom: 8px; margin-left: 16px;" />Jones brings over two decades of accomplishments in leading multi-billion-dollar brands across diverse consumer categories. With proven success as a marketer and general manager, Jones has a thorough understanding and ability to delight customers and transform brands.Before joining Safelite, both gentlemen held leadership roles for leading companies, Koenigs at Owens &amp; Minor, Caraustar Industries and Newell Rubbermaid &mdash; and Jones at Aetna, CVS Health, Allstate, PepsiCo, Kraft and MillerCoors.</p>
<p>&ldquo;While we stay true to our foundational principles, our eyes remain fixed on the future,&rdquo; Cacchillo added. &ldquo;Our commitment to delivering on Safelite&rsquo;s purpose of delivering unexpected happiness to people&rsquo;s everyday lives is at the forefront of everything we do. It&rsquo;s a great time in our business,&rdquo; Cacchillo added.</p>
<p>Jones will join Safelite on September 2 and Koenigs on September 12.&nbsp;</p>
<p style="text-align: center;">###</p>
<p><strong>About Safelite</strong></p>
<p>Safelite is a multi-faceted vehicle glass and claims management service organization based in Columbus, Ohio, and operating company-owned facilities in 50 states. The company, which has been in business since 1947, is comprised of two major business operations: Safelite AutoGlass<sup>&reg;</sup>, a vehicle glass repair, replacement and recalibration services provider and Safelite<sup>&reg;</sup> Solutions, which offers fleet and insurance claims management services for vehicle glass and other claims. The company employs nearly 16,000 people throughout the United States. Safelite is a subsidiary of Belron<sup>&reg;</sup>. Safelite AutoGlass is the largest vehicle glass repair, replacement and recalibration company under one brand in the world.&nbsp;</p>
<p style="text-align: center;">###</p>
<p>Media Contact:&nbsp;To connect with a Safelite spokesperson, email&nbsp;<a href="mailto:mediarelations@safelite.com">mediarelations@safelite.com</a>.</p>`;

export default function Page() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Safelite Announces Two New Executive Team Members
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            09-06-2022
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
