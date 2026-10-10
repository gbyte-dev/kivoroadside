import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Foster Love and the Safelite Foundation Announce New National Partnership to Support Foster Care Community | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p><strong>$1 Million Donation and 100,000 Volunteer Hours to Impact Foster Children Nationwide.</strong>&nbsp;</p>
<p>LOS ANGELES, California &ndash;&nbsp;<em>October 23, 2024&nbsp;</em>&ndash; Foster Love, a national nonprofit organization dedicated to improving the lives of children in foster care, is honored to announce a groundbreaking visionary partnership with the Safelite Foundation, the charitable arm of Safelite, the nation&rsquo;s largest provider of vehicle glass repair, replacement, and recalibration services.&nbsp;</p>
<p>This alliance marks a significant milestone as Foster Love celebrates supporting its one-millionth child in foster care. To recognize this incredible achievement, the Safelite Foundation is investing $1 million and committing 100,000 associate volunteer hours to implement Foster Love initiatives to deliver unexpected happiness in communities across the country.&nbsp;</p>
<p>"Every two minutes, a child enters foster care in our country. We believe that all children deserve happy childhood memories and moments that positively shape and set them up for success as young adults,&rdquo; said Danny Mendoza, Founder of Foster Love. &ldquo;Partnering with Safelite, known for its strong dedication to associates, customers, and communities, is a natural fit for us."&nbsp;</p>
<p>Foster Love&rsquo;s mission aligns with the Safelite Foundation&rsquo;s three pillars of safety, stability, and a sense of belonging, creating a clear road ahead for those who need it most. "Our brand is driven by our people who take tremendous pride in lending a helping hand to others,&rdquo; said Safelite&rsquo;s President and CEO, Renee Cacchillo. &ldquo;Over the past 10 years, associates across the country have engaged with Foster Love in multiple ways and shared meaningful and rewarding stories about fostering children or personally experiencing the foster system.&rdquo; &nbsp;</p>
<p>Together, Foster Love and Safelite Foundation will be advocates for what can often be a forgotten demographic &mdash; the foster community. Beyond Safelite&rsquo;s generous financial commitment and volunteer hours, the Foundation is leading the charge in transforming Safe Spaces nationwide. These redesigned spaces will provide a more positive, comfortable, and welcoming environment, creating a safe haven where families can rebuild bonds. &nbsp;</p>
<p>&ldquo;We are excited to help shape the future and peace of mind of the children served while opening more dialogue and awareness about the foster system,&rdquo; Cacchillo said. &ldquo;Additionally, we are committed to enhancing a foster-friendly workplace at Safelite.&rdquo;&nbsp;&nbsp;&nbsp;</p>
<p>Danny added: "Safelite has been instrumental in Foster Love's mission for many years, championing an often-overlooked cause. Their dedication to improving outcomes for system-impacted youth has guided us to this groundbreaking moment as they stand alone as our first Visionary Partner. We are deeply grateful to welcome them at this pivotal moment in our history."&nbsp;</p>
<p>For more information about Foster Love and its newly announced partnership with Safelite Foundation, please visit <a href="/about-safelite/safelite-autoglass-foundation/safelite-and-foster-love">safelite.com/fosterlove</a>&nbsp;or contact:&nbsp;</p><p>
Gianna Mulkay<br />
Executive Director<br />
Foster Love <br />
714-287-2112<br />
<a href="mailto:Gianna@fosterlove.com">Gianna@fosterlove.com</a></p><p>
Wendy Bradshaw<br />
Director of Community Engagement<br />
Safelite<br />
614-210-9453<br />
<a href="mailto:Fosterlove@safelite.com">Fosterlove@safelite.com</a></p><p>
</p>
<p><strong>SAFELITE FOUNDATION </strong>&nbsp;</p>
<p>Founded in 2005, the Safelite Foundation was established as the company&rsquo;s charitable arm with one mission: to help those who&rsquo;ve hit a bump in the road find a clear road ahead. We deliver on this mission through partnership and support of organizations whose focus aligns with our giving priorities: providing safety, stability, and a sense of belonging. Leveraging the size and scale of Safelite&rsquo;s reach, the Foundation impacts communities on a local, national, and global level with over $29M donated and hundreds of thousands of associate volunteer hours since 2005. For more information, visit <a href="/about-safelite/safelite-autoglass-foundation">safelite.com/foundation</a>.</p><p>
</p>
<p><strong>FOSTER LOVE, NON-PROFIT </strong>&nbsp;</p>
<p>Founded in 2008, Foster Love is dedicated to transforming the lives of children in the foster care system. We provide resources, support, and a loving community to foster children, foster parents, and adoptive families. Our mission is to ensure that every child experiences the support and stability they deserve. Join us in creating a brighter future for these amazing children through advocacy, education, and compassionate care. Together, we can make a difference. For more information, visit <a href="http://fosterlove.com/">http://FosterLove.com</a>.&nbsp;</p>
<p><strong><br />
About Safelite </strong><br />
With more than 7,600 Mobile Glass Shops&trade; and stores in all 50 states, Safelite<sup>&reg;</sup> is the nation&rsquo;s largest provider of vehicle glass repair, replacement and recalibration services. Last year, more than 7 million customers chose Safelite for its 24/7 national contact centers, advanced online scheduling, superior repair and replacement systems, and the industry&rsquo;s only nationwide lifetime guarantee.</p><p>
Safelite is a member of the Safelite<sup>&reg;</sup> Group family of brands, which together make a difference in the lives of nearly 9 million customers annually. This leading service organization, founded in 1947, is reaching record growth thanks to its People Powered, Customer Driven strategy. The Columbus, Ohio-based company employs more than 16,000 people across the United States.</p>`;

export default function Page() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Foster Love and the Safelite Foundation Announce New National Partnership to Support Foster Care Community
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            10-23-2024
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
