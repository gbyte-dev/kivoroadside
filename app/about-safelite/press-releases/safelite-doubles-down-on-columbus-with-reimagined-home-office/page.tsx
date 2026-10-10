import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import styles from "@/app/components/services/services.module.css";
import { cx } from "@/app/components/services/class-names";

export const metadata: Metadata = {
  title: "Safelite Doubles Down on Columbus With Reimagined Home Office",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

export default function PressReleaseDetailPage() {
  return (
    <ServicePageShell showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className={styles.contentBlock}>
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Safelite Doubles Down on Columbus With Reimagined Home Office
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            05-15-2026
          </div>

          <p>
            <strong>
              A renovated two-building office and new glass bridge mark a renewed investment in the city that Safelite has called home for more than 30 years.
            </strong>
          </p>

          <p>
            COLUMBUS, Ohio &mdash; May 15, 2026 &mdash; Safelite, one of the nation&rsquo;s leading vehicle glass repair,
            replacement and recalibration companies, reaffirms its long-standing commitment to Columbus, Ohio, with the
            official reopening of its renovated home office. Anchored by a new glass bridge that physically connects the
            two buildings where the company currently operates, the renovated campus signals a renewed investment in the
            city, the region and the people who have powered Safelite&rsquo;s growth for more than three decades. A
            ribbon-cutting ceremony on May 14 with city, regional and state leaders marks the milestone.
          </p>

          <p>
            At a moment when many companies are still rethinking the role of the workplace, Safelite is making a clear
            statement about Columbus: this is where the company belongs, where its people are and where its future is being
            built. By choosing to reinvest in its existing headquarters rather than relocate or go fully remote, Safelite is
            doubling down on the city it has called home since 1989, when the company moved its headquarters from Wichita to
            Columbus.
          </p>

          <p>
            &ldquo;Our newly renovated office reflects who we are, our people, our brand and our deep connection to
            Columbus,&rdquo; said Renee Cacchillo, president and CEO of Safelite. &ldquo;After careful consideration, it
            became clear that our associates are proud of our Columbus roots and the many ways we support the local
            community. We created a space that honors that pride while giving our teams a workplace where they feel
            comfortable, inspired and proud to come together every day.&rdquo;
          </p>

          <p>
            The decision to invest in renovating the Columbus office reflects the region&rsquo;s strong talent and
            Safelite&rsquo;s deep community roots. With a workforce drawn from across central Ohio and a strong pipeline of
            emerging talent from The Ohio State University and other regional institutions, Columbus remains a thriving and
            growing place where Safelite can attract, develop and retain the people who power its business.
          </p>

          <p>
            &ldquo;When a company like Safelite chooses to renovate and reinvest in its Columbus home, it tells the world
            what those of us who live and work here already know: this is one of the strongest cities in the country to grow a
            business and build a workforce,&rdquo; said Andrew J. Ginther, Mayor of Columbus. &ldquo;Safelite&rsquo;s
            commitment to Columbus, and to bringing its associates back together in person, strengthens our city, our
            neighborhoods and the small businesses that thrive alongside our largest employers. We&rsquo;re proud Safelite
            calls Columbus home.&rdquo;
          </p>

          <p>
            &ldquo;Safelite is a nationally recognized and respected company that strengthens Ohio&rsquo;s image as one of
            the most competitive states in the country to grow a business,&rdquo; said JobsOhio President and CEO J.P.
            Nauseef. &ldquo;The company&rsquo;s renewed commitment to Columbus, and to bringing their people back together in
            person, reflects the confidence employers continue to place in Ohio&rsquo;s workforce, talent pipeline and quality
            of life.&rdquo;
          </p>

          <p>
            The renovation introduces a set of upgrades designed around how modern teams work together, including new and
            technologically advanced conferencing capabilities. The spacious glass bridge, a physical and symbolic link
            between the two Columbus buildings, makes it easier for associates to move between spaces, collaborate
            spontaneously and maximize their time together. &ldquo;Bringing back the energy and passion of our associates
            under one roof is incredibly powerful,&rdquo; Renee added. &ldquo;When people come together in a shared space,
            creativity flows, friendships strengthen and innovation is at its best.&rdquo; A redesigned reception area
            reflects the Safelite identity and welcomes associates and visitors alike and a new caf&eacute; was created as a
            central gathering place for conversation and connection.
          </p>

          <p>
            &ldquo;Companies like Safelite are why central Ohio continues to lead the country in talent attraction and
            retention,&rdquo; said Jonas Peterson, president of One Columbus and chief economic development officer of the
            Columbus Partnership. &ldquo;Their investment in a modern, connected workplace, and their decision to bring their
            teams back together, strengthens our region&rsquo;s momentum and reinforces what we hear from employers every day:
            Columbus is where talent wants to be.&rdquo;
          </p>

          <p>
            &ldquo;When a global company like Safelite continues to invest in Columbus, it says a lot about the competitive
            advantage our region brings to the table,&rdquo; said Jason Hall, CEO of the Columbus Partnership. &ldquo;As one
            of the fastest-growing major metro populations in the U.S. and a top destination for college graduates, the
            Columbus Region is well positioned to deliver for Safelite. The company continues to be a generous and engaged
            leader in the business community, and we know this investment will strengthen the Region in ways that extend well
            beyond the extraordinary career opportunities it creates for our residents.&rdquo;
          </p>

          <p>
            The reopening rolls out in phases throughout May, beginning with the caf&eacute; on May 6 and the ribbon-cutting
            ceremony on May 14, before Safelite officially welcomes Columbus-based associates back to the home office on June
            1, 2026. The renovations reflect what Safelite calls its Uniquely Safelite mindset, the belief that the
            company&rsquo;s greatest strength is its people and the collaborative way they work together to deliver on the
            company&apos;s purpose of making a memorable difference with care to customers across the country.
          </p>

          <p>
            Photos of the new space can be obtained by emailing{" "}
            <a href="mailto:mediarelations@safelite.com">mediarelations@safelite.com</a>.
          </p>

          <p>
            <br />
            <strong>About Safelite</strong>
          </p>

          <p>
            With more than 7,600 Mobile Glass Shops&trade; and stores in all 50 states, Safelite&reg; is one of the
            nation&rsquo;s leading providers of vehicle glass repair, replacement and recalibration services. Last year,
            more than 7 million customers chose Safelite for its 24/7 national contact centers, advanced online scheduling,
            superior repair and replacement systems, and the industry&rsquo;s only nationwide lifetime guarantee.
          </p>

          <p>
            Safelite is a member of the Safelite&reg; Group family of brands, which together make a difference in the lives
            of nearly 9 million customers annually. This leading service organization, founded in 1947, is reaching record
            growth thanks to its People Powered, Customer Driven strategy. The Columbus, Ohio-based company employs more
            than 16,000 people across the United States.
          </p>

          <p>
            <br />
            <strong>MEDIA CONTACT:&nbsp;</strong>
            <br />
            Audrey Minor&nbsp;
            <br />
            <a href="mailto:Audrey@gebencommunication.com">Audrey@gebencommunication.com&nbsp;</a>
            <br />
            (937) 707-4394&nbsp;
          </p>

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

