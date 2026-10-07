import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import TrustCta from "@/app/components/services/trust-cta";
import CenteredHeading from "@/app/components/services/centered-heading";
import StateAccordion from "@/app/components/location/state-accordion";
import { SEMI_TRUCK_LOCATIONS } from "./semi-truck-locations";

export const metadata: Metadata = {
  title: "Commercial & Large Vehicle Windshield Repair & Replacement | Safelite",
  description:
    "Safelite offers expert glass repair and replacement for commercial vehicles such as semi-trucks, RVs, buses, box trucks, and more. Get a quote and keep your fleet moving safely.",
};

const IMAGES = "/image/services/commercial-large-vehicle";

// Shops that service semi-trucks, in a white card inside the gray box.
// A site-wide rule gives this gray box 1rem padding all around.
function SemiTruckLocations() {
  return (
    <GrayBox className="p-4!">
      <div>
        {/* Full-width with 20px padding from 768px and up to 425px; a normal title in between */}
        <h2 id="big-truck" className="md:max-w-full! md:p-5! max-[426px]:max-w-full! max-[426px]:p-5!">
          Semi-Truck Service Locations by State
        </h2>
      </div>
      {/* .container-stores */}
      <div className="mx-auto max-w-[1020px] rounded-[24px] bg-white px-[10px] pt-[15px]">
        <StateAccordion states={SEMI_TRUCK_LOCATIONS} />
      </div>
    </GrayBox>
  );
}

// The reference box is sized for a 990x488 photo, but its image list makes
// browsers load the wider 1200x488 cut, which leaves a gap under it.
function Advantages() {
  return (
    <>
      <CenteredHeading>Advantages of Safelite Semi-Truck Windshield Repair</CenteredHeading>
      <ContentHalves
        left={
          <ContentImage
            src={`${IMAGES}/chip-repair.jpg`}
            alt="Safelite technician repairing a chip in a windshield"
            width={1200}
            height={488}
            ratio="49.29293%"
          />
        }
        right={
          <ContentBlock>
            <div />
            <p />
            <div>
              <p>
                <strong>
                  The safety of drivers and passengers depend on trusted professional semi-truck windshield repairs.
                  Here are the key advantages of opting for professional repair services:&nbsp;
                </strong>
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <p>Boosted safety for drivers and passengers&nbsp;</p>
                </li>
                <li>
                  <p>Prevention of further damage and expensive repairs&nbsp;</p>
                </li>
                <li>
                  <p>Improved visibility and clarity&nbsp;</p>
                </li>
              </ul>
            </div>
            <div>
              <p>
                At Safelite, we understand the importance of maintaining the safety and functionality of your
                semi-truck. Our team of experienced technicians specializes in professional semi-truck windshield
                repair and replacement services, repairing over one million windshields a year and servicing all
                different{" "}
                <Link href="/vehicle-glass-repair" target="_blank" rel="noreferrer noopener">
                  types of vehicles
                </Link>
                , including EVS.&nbsp;
              </p>
            </div>
            <p />
          </ContentBlock>
        }
      />
    </>
  );
}

function OurApproach() {
  return (
    <GrayBox>
      <TrustCta />
      <CenteredHeading>Our Approach to Semi-Truck Windshield Repair</CenteredHeading>
      {/* .cards-wholes */}
      <div className="mx-auto max-w-[1020px] px-[15px]">
        <div>
          <div id="semitruck-text" className="ml-[18px]">
            <div>
              <p>
                <strong>
                  At Safelite, we recognize the importance of a properly functioning windshield for semi-trucks.
                  That&rsquo;s why we offer a comprehensive process for semi-truck windshield repair and replacement
                  services:&nbsp;
                </strong>
              </p>
            </div>
            <div>
              <ol className="list-decimal">
                <li>
                  <p>
                    Inspection: Our process begins with a thorough inspection and assessment of the windshield damage.
                    Our seasoned technicians carefully examine the extent of the damage, including cracks, chips, or any
                    other issues.&nbsp;
                  </p>
                </li>
                <li>
                  <p>Preparation: The damaged area is cleaned and prepared for the repair process.&nbsp;</p>
                </li>
                <li>
                  <p>
                    Repair: Whether it&rsquo;s a minor chip or a large crack, we have the expertise to restore the
                    integrity of your semi-truck windshield.&nbsp;
                  </p>
                </li>
                <li>
                  <p>Curing: The resin is cured using UV light, ensuring a durable and crystal-clear repair.&nbsp;</p>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <div>
              <p>
                At Safelite, we understand that time is crucial for commercial truck drivers. That&rsquo;s why we offer
                timely and <Link href="/auto-glass-services">convenient service options</Link>. We strive to minimize
                the downtime of your vehicle, providing efficient repairs or replacements. Our team is committed to
                working around your schedule, ensuring that you can get safely back on the road as quickly as
                possible.&nbsp;
              </p>
            </div>
          </div>
          <p>
            <br />
          </p>
        </div>
      </div>
    </GrayBox>
  );
}

function PreferredChoice() {
  return (
    <>
      <CenteredHeading>The Preferred Choice for Semi-Truck Windshield Repair</CenteredHeading>
      <div>
        <h4 className="text-center">
          Here&rsquo;s why it&rsquo;s smart to get your semi-truck windshield repaired sooner instead of later:
        </h4>
      </div>
      <NarrowLeftHalves heading="Reliability" contentBlock={false}>
        <p>
          Our team is committed to providing quick turnaround times without sacrificing quality. You can trust us to get
          you back on the road as quickly as possible, with a windshield that meets the highest standards.&nbsp;
        </p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="Repairs are quick" contentBlock={false}>
        <p>
          Appointments are often available as soon as same-day or next-day at a shop near you, and in most cases your
          technician can get you back behind the wheel in just a few hours.&nbsp;
        </p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="We only use the best materials" contentBlock={false}>
        <p>
          We only use professional-grade methods and equipment. Our technicians are highly skilled in the latest
          industry techniques, ensuring that the repair is done with precision and care. Whether it&rsquo;s a minor chip
          or a large crack, we have the expertise to restore the integrity of your semi-truck windshield.&nbsp;
        </p>
      </NarrowLeftHalves>
    </>
  );
}

// After the article: one more row about the warranty
function Warranty() {
  return (
    <>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="We stand behind our work" contentBlock={false}>
        <p>
          We back all our repairs with a{" "}
          <Link href="/national-lifetime-warranty" target="_blank" rel="noreferrer noopener">
            nationwide lifetime warranty
          </Link>{" "}
          against further cracking and guarantee they&rsquo;ll pass lease turn-back and state vehicle inspections.
        </p>
      </NarrowLeftHalves>
    </>
  );
}

export default function CommercialLargeVehicleWindshieldReplacementPage() {
  return (
    <ServicePageShell secondary={<Warranty />} strongWeight="medium">
      <ServiceHero
        title={<>Semi-Truck Windshield Repair and Replacement&nbsp;</>}
        image={{
          alt: "A Safelite technician smiling outside of a Safelite shop.",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 383, ratio: "65.47009%" },
          tablet: { src: `${IMAGES}/hero-tablet.jpg`, width: 585, height: 427, ratio: "72.99146%" },
        }}
      >
        <h2 className="mt-0! text-left!">Have damage to your semi-truck auto glass?</h2>
        <p>
          At Safelite, we specialize in semi-truck windshield repair and replacement. Our technicians are well-versed in
          the unique needs of independent and commercial truck operators, delivering superior services to ensure your
          fleet stays on the road safely and efficiently.
        </p>
      </ServiceHero>

      <SemiTruckLocations />
      <Advantages />
      <OurApproach />
      <PreferredChoice />
    </ServicePageShell>
  );
}
