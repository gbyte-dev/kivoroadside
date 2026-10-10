import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Safelite Makes History with Ohio State Athletics | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

const BODY_HTML = `<p style="text-align: left;"><span style="text-align: left;">COLUMBUS, OHIO &mdash; <em>Auto Glass leader enters into multi-year sponsorship agreement&nbsp;</em>&mdash; Safelite, the nation&rsquo;s leading vehicle glass services and recalibration company located in Columbus, today announced expanding its partnership with The Ohio State University&rsquo;s athletics department through a new multi-year sponsorship in agreement with LEARFIELD&rsquo;s Ohio State Sports Properties.&nbsp;</span></p>
<p paraid="1775890218" paraeid="{2847521c-989f-4a27-add8-d8baf8416f99}{214}">As the first company to champion logos on Ohio Stadium&rsquo;s field goal netting, Safelite will again take the lead with field logos on what will be called Safelite Field. The field will now feature two white Safelite placements opposite the B1G logos.&nbsp;</p>
<p paraid="481899967" paraeid="{2847521c-989f-4a27-add8-d8baf8416f99}{234}">&ldquo;Our associates are dedicated to our relationship with Ohio State athletics and display their Buckeye pride in central Ohio and beyond,&rdquo; said Safelite president and CEO Renee Cacchillo. &ldquo;We&rsquo;re thrilled to be the first-ever sponsor on this historic field as we continue to build our brand visibility and recognition through our national presence while supporting our home teams and loyal audience.&rdquo;&nbsp;</p>
<p paraid="1896524260" paraeid="{95a1da0f-4973-4c21-9136-e35f644a8a79}{7}">&nbsp;&ldquo;Since 2014, Safelite has been a valued supporter of Ohio State athletics,&rdquo; said Gene Smith, The Ohio State University&rsquo;s Senior Vice President and Wolfe Foundation Endowed Athletic Director. &ldquo;Football fans across the country have come to recognize their iconic brand&rsquo;s logo on our Ohio Stadium field goal nets and through supporting advertising and on-site events. We&rsquo;re thrilled and honored by the growth of their partnership.&rdquo;&nbsp;</p>
<p paraid="170177547" paraeid="{95a1da0f-4973-4c21-9136-e35f644a8a79}{25}" style="text-align: center;">###&nbsp;</p>
<p paraid="230560669" paraeid="{95a1da0f-4973-4c21-9136-e35f644a8a79}{39}"><strong>About Safelite&nbsp;<br />
</strong>Safelite&reg; is a multifaceted vehicle glass and claims management service organization based in Columbus, Ohio, and operating company-owned facilities in 50 states. The company, which has been in business since 1947, is comprised of two major business operations: Safelite AutoGlass&reg;, a vehicle glass repair, replacement and recalibration services provider, and Safelite&reg; Solutions, which offers fleet and insurance claims management services for vehicle glass and other claims. The company employs nearly 16,000 (and growing) people throughout the United States. Safelite is a subsidiary of Belron&reg;. Safelite AutoGlass is the largest vehicle glass repair, replacement and recalibration company under one brand in the world.&nbsp;</p>
<p paraid="856631112" paraeid="{95a1da0f-4973-4c21-9136-e35f644a8a79}{75}"><strong>About the Department of Athletics&nbsp;<br />
</strong>The Ohio State University Department of Athletics is one of the most visible, respected and accomplished programs in the nation. It ranks among the largest in terms of number of student-athletes &ndash; over 1,000 &ndash; and in number of varsity sports (36). The department maintains entirely self-supporting operations. All grants-in-aid, buildings and capital expenditures, including debt service, are funded by the department&rsquo;s generated funds without subsidy from the university. No student fees, tax dollars or university funds are used to support the programs of the Department of Athletics.&nbsp;</p><p>
Media Contact:&nbsp;To connect with a Safelite spokesperson, email&nbsp;<a href="mailto:mediarelations@safelite.com">mediarelations@safelite.com</a>.</p>`;

export default function Page() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Safelite Makes History with Ohio State Athletics
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            09-01-2022
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
