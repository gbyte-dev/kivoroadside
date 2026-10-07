import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import WideContent from "@/app/components/services/wide-content";
import NavCards from "@/app/components/services/nav-cards";
import { ABOUT_SAFELITE_LINKS } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "Safelite AutoGlass Leaders | Safelite",
  description:
    "Safelite's ability to provide best-in-class service starts with the people in charge. Read more about our leaders and how their roles and experience contribute to Safelite's success.",
};

const PHOTOS = "/image/services/our-leaders";

type Leader = { name: string; photo: string; title: ReactNode; bio: ReactNode; email?: string };

const LEADERS: Leader[] = [
  {
    name: "Renee Cacchillo",
    photo: "renee-cacchillo",
    title: "President and Chief Executive Officer",
    bio: (
      <>
        Renee Cacchillo is a veteran of the retail and consulting industry with over 20 years of experience. Since
        joining Safelite in 2011, she has held various leadership roles in operations, advertising, digital, customer
        experience, and technology. In 2019, Cacchillo was promoted to Executive Vice President and Customer Experience
        Officer, and in late 2021, she became President and CEO. Cacchillo collaborates closely with the senior
        leadership team to position Safelite as a People Powered, Customer Driven organization with the mission of
        making a memorable difference with care. She focuses Safelite&rsquo;s 16,000+ associates across the country on
        delivering on the company&rsquo;s vision and business goals, while making a positive impact on nearly 11
        million customers each year.
      </>
    ),
    email: "renee.k.cacchillo@safelite.com",
  },
  {
    name: "Jason Judd",
    photo: "jason-judd",
    title: "EVP, Chief Financial Officer",
    bio: (
      <>
        As Executive Vice President and Chief Financial Officer, Jason Judd oversees Safelite&rsquo;s financial
        operations. His extensive strategic and analytic experience in all aspects of finance, including accounting,
        tax, treasury, investor relations, internal audit, mergers and acquisitions and real estate, is crucial for
        ensuring financial accountability as we work towards our goals and continued growth. Before joining the
        business in late 2023, Judd served as Chief Financial Officer at Express and previously held leadership roles at
        several major retailers, including LBrands, Big Lots, Ascena Retail Group and Bath &amp; Body Works.
      </>
    ),
    email: "jason.n.judd@safelite.com",
  },
  {
    name: "Nada Aried",
    photo: "nada-aried",
    title: "EVP, Chief Digital Technology Officer",
    bio: (
      <>
        As Executive Vice President and Chief Digital Technology Officer, Nada Aried leads our Technology and
        transformation teams. Before this role, Aried served as the first EVP and CIO for Bath &amp; Body Works, where
        she was responsible for the company&rsquo;s information technology organization and infrastructure. With over
        30 years of specialty retail experience in leadership roles, her broad base of successful CIO experience, deep
        understanding of a seamless associate and customer experience, and collaborative leadership skills are
        paramount to Safelite&rsquo;s growth and evolution.
      </>
    ),
  },
  {
    name: "Brian Voss",
    photo: "brian-voss",
    title: "EVP, Chief Operating Officer",
    bio: (
      <>
        Brian Voss serves as Executive Vice President and Chief Operating Officer, overseeing customer-facing
        operations across over 800 store locations nationwide, as well as more than 7,500 technicians and store
        associates. With extensive experience in managing large franchise and corporate operations, Voss previously
        served as SVP and Chief Franchise Operations Officer at SERVEPRO Industries. He has also held previous
        leadership roles at CKE Restaurants and 7&#8209;Eleven, as well as with Brunswick Corporation internationally. A
        former U.S. Marine, Brian is recognized for his ability to lead and build effective teams, achieving positive
        results.
      </>
    ),
  },
  {
    name: "John Stacy",
    photo: "john-stacy",
    title: "EVP, Chief Customer and Solutions Officer",
    bio: (
      <>
        John Stacy serves as Executive Vice President and Chief Customer and Solutions Officer, leading Safelite&apos;s
        revenue-generating businesses across all sales channels, including Safelite Solutions, commercial and cash
        segments. Stacy is a people first leader, previously serving as EVP, Supply Chain, where he led procurement,
        sustainability, inventory management, warehousing, fulfillment, fleet and logistics, while overseeing a
        comprehensive transformation of Safelite&apos;s network design. He positioned Safelite as the only company in
        the glass industry with a fully dedicated end-to-end supply chain. Before joining Safelite in 2021, Stacy held
        senior leadership roles at Kirkland&apos;s and Advance Auto Parts, bringing extensive experience in supply chain
        operations, finance, sourcing strategy and business transformation in the automotive sector.
      </>
    ),
  },
  {
    name: "Elaine Darr",
    photo: "elaine-darr",
    title: "EVP, Chief Legal Officer ",
    bio: (
      <>
        As EVP, Chief Legal Officer, Elaine Darr leads the legal, compliance, risk management and legislative affairs at
        Safelite. She brings an exceptional background that combines legal leadership and business P&amp;L management,
        making her well-suited to help guide Safelite through its next phase of growth. Most recently, Darr served as
        SVP, Head of Digital Legal &amp; Innovation at DHL Group, where she transformed legal services globally by
        integrating technology, data analytics and innovation to enhance efficiency and business impact. Darr will
        focus on driving innovation, strengthening governance and partnering across the organization to enable
        long-term success.
      </>
    ),
  },
  {
    name: "Jamie Sohosky",
    photo: "jamie-sohosky",
    title: "EVP, Chief Marketing and Experience Officer",
    bio: (
      <>
        As Executive Vice President and Chief Marketing and Experience Officer, Jamie Sohosky leads Safelite&rsquo;s
        marketing, brand and customer experience strategies. Prior to joining Safelite, she served as Chief Marketing
        Officer at Bath &amp; Body Works, where she led brand strategy, customer insights, loyalty, performance media and
        marketing operations. Jamie also held global leadership roles with Campbell Soup and Walmart, where she helped
        drive customer experience transformation across retail and digital channels. With more than two decades of
        experience in marketing, customer growth and digital transformation, Jamie brings a proven track record of
        building strong brands, leading high-performing teams and delivering business result.
      </>
    ),
  },
];

// Photo (20%), name and bio (45%) and an empty column (30%) from 768px; stacked below that.
// On phones the photo keeps its 200px size and the text follows 20px below it.
function LeaderRow({ leader, last }: { leader: Leader; last: boolean }) {
  return (
    <div className="mx-auto max-w-[510px] px-[15px] md:flex md:max-w-[1020px] md:flex-wrap md:items-start md:justify-between">
      <div className="pb-5 md:w-1/5 md:pb-0">
        <span className="relative block w-[200px] max-w-full overflow-hidden">
          <span className="block pt-[100%]" />
          <Image
            src={`${PHOTOS}/${leader.photo}.jpg`}
            alt={`${leader.name} at Safelite`}
            width={200}
            height={200}
            className="absolute left-0 top-0 h-auto w-full"
          />
        </span>
      </div>
      <div className="md:w-[45%]">
        <div className="md:pb-5">
          <h3>{leader.name}</h3>
          <p>
            <strong className="tracking-[0.75px]">{leader.title}</strong>
          </p>
          <p>
            {leader.bio}
            <br />
          </p>
          {leader.email && (
            <p>
              <a href={`mailto:${leader.email}`}>{leader.email}</a>
            </p>
          )}
          {last && (
            <p>
              <br />
            </p>
          )}
        </div>
      </div>
      <div className="md:w-[30%] md:pt-[75px]" />
    </div>
  );
}

function LearnMore() {
  return (
    <>
      {/* This page adds 10px above the first secondary title */}
      <ContentBlock>
        <h2 className="pt-[10px]!">Learn more</h2>
      </ContentBlock>
      <HorizontalRule variant="center-red" />
      <NavCards
        variant="icon"
        columns={5}
        cards={[
          { ...ABOUT_SAFELITE_LINKS.about, label: "About Us" },
          ABOUT_SAFELITE_LINKS.foundation,
          ABOUT_SAFELITE_LINKS.pressReleases,
          ABOUT_SAFELITE_LINKS.partnerships,
          ABOUT_SAFELITE_LINKS.companies,
        ]}
      />
    </>
  );
}

export default function OurLeadersPage() {
  return (
    <ServicePageShell secondary={<LearnMore />} strongWeight="medium">
      {/* .content-wide: 20px above the title up to 768px, 40px from 769px */}
      <div className="pt-5 min-[769px]:pt-10">
        <WideContent>
          <ContentBlock>
            <h1 className="pb-5">Our leaders</h1>
          </ContentBlock>
        </WideContent>
      </div>
      {LEADERS.map((leader, index) => (
        <div key={leader.name}>
          <LeaderRow leader={leader} last={index === LEADERS.length - 1} />
          {index === LEADERS.length - 1 ? (
            // The last line on the page gets 20px more space above it
            <div className="mt-5">
              <HorizontalRule variant="gray-line" />
            </div>
          ) : (
            <HorizontalRule variant="gray-line" />
          )}
        </div>
      ))}
    </ServicePageShell>
  );
}
