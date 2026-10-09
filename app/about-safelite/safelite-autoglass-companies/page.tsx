import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import Hero5050 from "@/app/components/services/hero-5050";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import WideContent from "@/app/components/services/wide-content";
import ContentBlock from "@/app/components/services/content-block";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import AboutLearnMore from "@/app/components/services/about-learn-more";

export const metadata: Metadata = {
  title: "Safelite Solutions | Safelite",
  description:
    "Safelite is composed of multiple business operations, making them a multifaceted auto glass and claims management organization. Learn about Safelite Group.",
};

const IMAGES = "/image/services/safelite-autoglass-companies";

const GROUP_SIZE =
  "The companies that make up the Safelite Group employ 13,500 people nationwide. The all-around approach of our windshield repair and replacement company has led to success in all five operations with millions of satisfied customers.";

export default function SafeliteCompaniesPage() {
  return (
    <ServicePageShell secondary={<AboutLearnMore current="companies" />} strongWeight="medium">
      <Hero5050
        title="The companies in Safelite Group"
        image={{ src: `${IMAGES}/safelite-headquarters.jpg`, alt: "Safelite Headquarters" }}
      >
        <p className="mb-4 p-0! text-xl leading-[32px]">
          <strong>Safelite fixes more windshields than anyone else in the U.S.</strong>
        </p>
        {/* The reference nests this in the paragraph above, which leaves an
            empty 16px paragraph after it */}
        <p className="mb-8 p-0! text-left text-[16px] leading-[25px]">
          It is a member of the Safelite Group, the world&rsquo;s largest family of auto glass companies.
        </p>
      </Hero5050>

      <GrayBox>
        <SectionHeading>About Safelite Group</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              Safelite is part of Belron, a global leader in vehicle glass repair, replacement and recalibration (VGRRR)
              services, with operations in over 40 countries. Through its leading brands, expert technicians and
              patented technology, Belron helps millions of customers stay safe and mobile, delivering exceptional
              service and making a memorable difference with care.
            </p>
            <p>
              More details available at <a href="https://www.belron.com/">belron.com</a>.
            </p>
            <p>{GROUP_SIZE}</p>
          </ContentBlock>
        </WideContent>

        <NarrowLeftHalves
          heading="Safelite Fulfillment, Inc."
          belowHeading={
            <p>
              <strong>Auto glass fulfillment services, operating under the trade name Safelite AutoGlass.</strong>
            </p>
          }
        >
          <p>
            The auto glass division of Safelite specializes in replacing all types of vehicle glass damage. In addition
            to replacement services, the company operates a team of repair specialists dedicated to delivering high
            quality <Link href="/windshield-repair">windshield repairs</Link>.
          </p>
          <p>
            As the largest auto glass repair and replacement organization in the U.S., the company&rsquo;s 6,000
            technicians serve 6.2 million customers each year and ensure the highest quality of work on each job they
            do.
          </p>
          <p>
            Safelite provides convenient mobile auto glass repair and{" "}
            <Link href="/windshield-replacement">replacement</Link> services, available to 97% of drivers in all 50
            states.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />

        <NarrowLeftHalves
          heading="Safelite Solutions LLC"
          belowHeading={
            <p>
              <strong>
                Safelite Group&apos;s claims management operation, which processes P+C claims for fleet and insurance
                companies.
              </strong>
            </p>
          }
        >
          <p>
            Safelite Solutions provides complete claims management solutions for the nation&apos;s leading fleet and
            insurance companies.
          </p>
          <p>
            The company currently serves as a third-party administrator of auto glass claims for more than 180 insurance
            and fleet companies, including 19 of the top 30 property and casualty insurance companies. Safelite Solutions
            manages a network of approximately 9,000 network providers and operates four national contact centers in
            Columbus, Ohio, one in Hiawatha, Iowa and one in Chandler, Arizona.
            <br />
          </p>
          <p>
            Safelite&apos;s call centers are staffed 24/7 to provide the insurance industry with a variety of claims
            solutions, including Managed Glass Programs, First Notice of Loss, Statements, Desk Reviews and Claims
            Resolution.&nbsp;
            <br />
          </p>
          <p>
            For more information, visit <a href="https://www.safelitesolutions.com">safelitesolutions.com</a>.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />

        <WideContent>
          <ContentBlock>{GROUP_SIZE}&nbsp;</ContentBlock>
        </WideContent>
      </GrayBox>
    </ServicePageShell>
  );
}
