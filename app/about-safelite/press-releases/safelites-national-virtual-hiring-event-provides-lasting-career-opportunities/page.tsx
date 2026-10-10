import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Safelite’s National Virtual Hiring Event Provides Lasting Career Opportunities | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p>COLUMBUS, Ohio &ndash;&nbsp;<em>February 1, 2024&nbsp;</em>&ndash; Safelite AutoGlass<sup>&reg;</sup>&nbsp;is holding a National Virtual Hiring Event on February 5-7 to recruit 500 auto glass technician trainees who will join Safelite in cities nationwide.</p>
<p>"We&rsquo;re inviting ambitious individuals who want to build a rewarding career path and make a difference in their communities to join our virtual hiring event and become part of a high-performing team,&rdquo; said Scott Koenigs, Safelite&rsquo;s Chief People Officer. &ldquo;Our People Powered culture is due in part to the passionate and talented technicians who take pride in helping people get back on the road and on with their day safely thanks to their outstanding customer service.&rdquo;</p>
<p>Interested candidates can apply and request an interview on <a href="https://interviewdays.indeed.com/hd/af39cf6c-8d8d-4f83-8456-425c57e5f345">Safelite's Indeed.com event page</a>&nbsp;to discuss available roles in an area closest to them.</p>
<p>&ldquo;We offer comprehensive paid training, outstanding benefits and a collaborative work environment, making the technician trainee role an ideal launchpad for a fulfilling job with future growth potential,&rdquo; Koenigs added.</p>
<p>Interviews are limited and vary by region and time zone. &nbsp;</p>
<p>To explore other Safelite career opportunities at Safelite, visit <a href="/careers">Safelite.com/careers</a>.</p>
<p><strong><br />
About Safelite </strong><br />
With more than 7,600 Mobile Glass Shops&trade; and stores in all 50 states, Safelite<sup>&reg;</sup> is the nation&rsquo;s largest provider of vehicle glass repair, replacement and recalibration services. Last year, more than 7 million customers chose Safelite for its 24/7 national contact centers, advanced online scheduling, superior repair and replacement systems, and the industry&rsquo;s only nationwide lifetime guarantee.</p><p>
Safelite is a member of the Safelite<sup>&reg;</sup> Group family of brands, which together make a difference in the lives of nearly 9 million customers annually. This leading service organization, founded in 1947, is reaching record growth thanks to its People Powered, Customer Driven strategy. The Columbus, Ohio-based company employs more than 16,000 people across the United States.</p>
<p style="text-align: center;">###</p>
<p><strong>Media Contact: </strong>To connect with a Safelite spokesperson, email <a href="mailto:mediarelations@safelite.com">mediarelations@safelite.com</a>.</p>`;

export default function Page() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Safelite’s National Virtual Hiring Event Provides Lasting Career Opportunities
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            02-01-2024
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
