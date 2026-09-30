import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import NarrowLeftHalves, { NarrowLeftSpacer } from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import TrustCta from "@/app/components/services/trust-cta";
import AdditionalServices from "@/app/components/services/additional-services";

export const metadata: Metadata = {
  title: "Windshield Repair | Cracked Auto Glass & Window Repair | Safelite",
  description:
    "For prompt windshield repair, trust Safelite. Contact us for professional cracked window repair that restores your auto glass in under an hour.",
};

// Inline styles copied from the reference copy of this section
const normalLineHeight = { margin: 0, lineHeight: "normal" } as const;

export default function WindshieldRepairPage() {
  return (
    <ServicePageShell secondary={<AdditionalServices current="/windshield-repair" topRule />}>
      <ServiceHero
        title="Expert windshield repair"
        subtitle="Safelite’s repair-first mindset"
        cta={{ label: "Get quote + schedule", href: "/schedule-service" }}
        image={{
          alt: "A Safelite technician wearing gloves repairing a windshield",
          desktop: { src: "/image/services/windshield-repair/hero-desktop.jpg", width: 585, height: 409, ratio: "69.91454%" },
          tablet: { src: "/image/services/windshield-repair/hero-tablet.jpg", width: 585, height: 503, ratio: "85.98291%" },
        }}
      >
        <p>
          A damaged windshield is neither expected nor convenient. But rather than replace your windshield, a quick
          repair may be all you need to get back out on the road. With Safelite, you can be assured that we’ll always
          consider the best, most cost-effective solution for your vehicle’s glass damage. And with service options
          ranging from drop-off to we-come-to-you, your windshield repair might feel more convenient than you thought it
          would.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>How do I know if my windshield can be repaired?&nbsp;</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src="/image/services/windshield-repair/repair-process.jpg"
              alt="A Safelite technician performing a repair on a vehicle windshield"
            />
          }
          right={
            <ContentBlock>
              <p>
                <strong>Safelite can usually repair your windshield if the damage meets these conditions:</strong>
              </p>
              <ul style={normalLineHeight}>
                <li>
                  The damage&nbsp;is <strong>under 6</strong> <strong>inches</strong> in length*
                </li>
                <li>
                  The point of impact is <strong>smaller than a dime</strong>
                </li>
                <li>
                  There are <strong>no more than 3</strong> chips
                </li>
                <li>
                  The damage <strong>doesn’t block</strong> a camera or sensor
                </li>
              </ul>
              <p style={normalLineHeight}>
                Our expert technicians repair over one million windshields a year and work with{" "}
                <Link href="/vehicle-glass-repair">all types of vehicles</Link>, including EVs
              </p>
              <div>
                <p style={{ margin: 0 }}>&nbsp;</p>
              </div>
            </ContentBlock>
          }
        />
      </GrayBox>

      <TrustCta />

      <SectionHeading>How do you repair a chipped windshield?</SectionHeading>
      <ContentBlock>
        <p>
          <strong>
            When you choose Safelite for chip and crack repair, you can expect a straightforward and hassle-free
            process:
          </strong>
        </p>
        <p>
          1. Assessment: Our technician will inspect the chip or crack to determine if it&apos;s suitable for repair.
          Factors such as size, location, and the age of the chip are considered.
        </p>
        <p>2. Preparation: The damaged area is cleaned and prepared for the repair process. </p>
        <p>
          3. Injection: A specialized resin is injected into the chip/crack. This resin bonds with the glass, restoring
          its strength and preventing further damage.{" "}
        </p>
        <p>4. Curing: The resin is cured using UV light, ensuring a durable and crystal-clear repair. </p>
        <p>
          5. Final Inspection: Our technician will evaluate the repair to ensure it meets our high standards. If you have
          a chip or crack in your windshield, don&apos;t wait for it to worsen. Safelite&apos;s chip and crack repair
          services are a quick and cost-effective solution to keep your windshield in top condition. Contact us today to{" "}
          <Link href="/schedule-service">schedule your chip or crack repair appointment</Link>, and we&apos;ll have you
          back on the road safely in no time. At Safelite, we&apos;re committed to keeping you and your vehicle safe, one
          chip at a time.
        </p>
      </ContentBlock>
      <HorizontalRule variant="gray-line" />

      <SectionHeading>How to Prevent a Windshield Chip or Crack From Spreading</SectionHeading>
      <NarrowLeftHalves heading="Repair as soon as possible" contentBlock={false}>
        <p>
          To stop a windshield chip or crack from spreading, it&apos;s important to act fast with professional repair. A
          professional repair is the most effective way to keep a chip or crack from spreading. Many Safelite services
          offer <Link href="/mobile-auto-glass-repair">mobile</Link>, same-day repairs at you’re your convenience.
        </p>
        <p>&nbsp;</p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="Replace when needed" contentBlock={false}>
        <p>
          In some cases, a full <Link href="/windshield-replacement">windshield replacement</Link> may be required.
          Windshield replacements will often take 60 minutes or less; however, we recommend that you do not drive the
          vehicle for at least one hour after service is completed.&nbsp;
          <Link href="/schedule-service">Schedule service online</Link>&nbsp;today.
        </p>
        <p>&nbsp;</p>
      </NarrowLeftHalves>

      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <NarrowLeftHalves heading="What is the cost to repair a windshield chip?" contentBlock={false}>
        <p>
          The cost of repairing a chip depends on its size, location, and severity. At Safelite, most chip repairs are
          quick and affordable, and may even be covered by insurance with little or no out-of-pocket cost. Schedule an
          appointment today to get a free quote and keep your windshield safe.
        </p>
        <p>&nbsp;</p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="Can a chipped or cracked windshield pass inspection?" contentBlock={false}>
        <p>
          In most states, a cracked windshield can cause your vehicle to fail inspection, especially if the crack blocks
          the driver’s line of sight. Safelite’s experts can repair or{" "}
          <Link href="/windshield-replacement">replace</Link> your windshield to ensure you pass inspection safely. Book
          your service today.
        </p>
        <p>&nbsp;</p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="What is the best way to fix a small chip in a windshield?" contentBlock={false}>
        <p>
          Professional repair at Safelite is fast, reliable, and backed by a nationwide guarantee. Our technicians inject
          advanced resin to restore strength and clarity to your glass.{" "}
          <Link href="/schedule-service">Book a Safelite repair today.</Link>
        </p>
        <p>&nbsp;</p>
      </NarrowLeftHalves>

      <SectionHeading>Get it done now, with our help</SectionHeading>
      <NarrowLeftSpacer />
      <NarrowLeftHalves heading="Minor damage can turn into major damage">
        <p>Waiting could lead to needing a full replacement, which adds to both cost and time.</p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="Cracked windshields can impact your vehicle inspection">
        <p>
          In most cases, windshield cracks obstructing the driver’s view or compromising safety can result in your car
          failing its inspection depending on state laws and severity of damage.
        </p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="Repairs are quick" paddedLeftColumn>
        <p>
          Appointments are often available as soon as same-day or next-day at a shop near you, and in most cases your
          technician can get you back behind the wheel in just 30 minutes.
        </p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading={<>We only use the&nbsp;best materials</>}>
        Your technician will inject our exclusive resin into the damaged part of your glass and, after it cures, polish it
        to a smooth finish.
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="We stand behind our work">
        We back all our repairs with a <Link href="/national-lifetime-warranty">nationwide lifetime warranty </Link>
        against further cracking and guarantee they’ll pass lease turn-back and state vehicle inspections
        <div>
          <p style={{ margin: 0 }} />
        </div>
      </NarrowLeftHalves>
    </ServicePageShell>
  );
}
