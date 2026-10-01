import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import ServiceButton from "@/app/components/services/service-button";
import NavCards from "@/app/components/services/nav-cards";
import AiChatButton from "@/app/components/services/ai-chat-button";
import { WHY_SAFELITE_LINKS } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "Windshield Warranty | Nationwide Auto Glass Warranty | Safelite",
  description:
    "Through the Safelite lifetime national warranty, your auto glass is warranted against defects in material or workmanship. Learn more about the Safelite AutoGlass warranty.",
};

// On this page each heading sits in a plain wrapper and its text in a content block
function WarrantyRow({ heading, children, padded = false }: { heading: string; children: ReactNode; padded?: boolean }) {
  return (
    <NarrowLeftHalves heading={heading} headingContentBlock={false} paddedLeftColumn={padded}>
      {children}
    </NarrowLeftHalves>
  );
}

function Secondary() {
  return (
    <>
      <ContentHalves
        left={<HalvesHeading>Why choose Safelite?</HalvesHeading>}
        right={
          <ContentBlock>
            To learn more about <Link href="/why-choose-safelite">why to choose Safelite</Link> to repair or replace
            your glass, please select from below. For questions or concerns, please{" "}
            <Link href="/contact-us">contact us</Link> or visit us on social media.
            <br />
          </ContentBlock>
        }
      />
      <NavCards
        variant="icon"
        endPadding={false}
        cards={[
          WHY_SAFELITE_LINKS.reviews,
          WHY_SAFELITE_LINKS.mobileInShop,
          WHY_SAFELITE_LINKS.advantage,
          WHY_SAFELITE_LINKS.recycling,
        ]}
      />
    </>
  );
}

export default function NationalLifetimeWarrantyPage() {
  return (
    <ServicePageShell secondary={<Secondary />} strongWeight="medium">
      <ServiceHero
        title="Safelite Nationwide Lifetime Warranty"
        image={{
          alt: "Safelite Nationwide Lifetime Warranty",
          desktop: { src: "/image/services/national-lifetime-warranty/hero.jpg", width: 585, height: 380, ratio: "64.95727%" },
        }}
      >
        <p>
          Safelite is proud to feature the industry’s only nationwide lifetime guarantee. We back it up with
          state-of-the-art Mobile Glass Shops and company stores in all 50 states.
        </p>
        <p>
          <ServiceButton href="/my-appointment?iswarrantyfromsfnav=true" style={{ marginTop: 10 }}>
            Schedule warranty repair
          </ServiceButton>
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Our warranty</SectionHeading>
        <WarrantyRow heading="Nationwide lifetime warranty " padded>
          Safelite’s nationwide lifetime warranty covers its glass replacement service against defects in material
          and/or workmanship for as long as you own or lease the vehicle.&nbsp;
          <br />
          <br />
          <strong>To qualify&nbsp;</strong>
          <br />
          You must notify us within 30 days of discovering the defect. We are not responsible for any damage that
          results from your delay in notifying us within 30 days of discovering the defect.&nbsp;
          <br />
          <br />
          Safelite must be given the opportunity to inspect the vehicle damage prior to the approval of any warranty
          claim.&nbsp;
          <br />
          <br />
          <strong>This warranty is not transferrable to another owner/lessor.&nbsp;</strong>
          <br />
          No other warranty, neither express nor implied, applies.
          <br />
        </WarrantyRow>
        <HorizontalRule variant="center-red" />
        <WarrantyRow heading="Our process, customer satisfaction ">
          <p style={{ margin: 0 }}>
            During the windshield <Link href="/windshield-repair">repair process</Link>, the technician injects special
            resin into the damaged part of the glass.
            <br />
            <br />
            <strong>Best results are obtained when:</strong>
            <br />
          </p>
          <ul>
            <li>the damage is recent</li>
            <li>the point of impact is small</li>
            <li>the cracks around the damaged area are small, and </li>
            <li>there is no moisture or other foreign matter in the damaged area.&nbsp;</li>
          </ul>
          <p>
            Our nationwide lifetime warranty covers the repaired portion of the windshield against continued cracking,
            and warrants that the repair will pass any state vehicle inspection.&nbsp;
          </p>
          <p>
            <strong>More damage and/or customer satisfaction</strong>
            <br />
            If more damage from the point of repair does occur, or if you are dissatisfied with the repair for any
            reason, we will credit the cost of your repair toward a replacement performed by Safelite.&nbsp;
            <br />
            <br />
            If your insurance company paid for the repair, the insurance company may receive credit and you may still be
            responsible for any deductible if you choose to replace the windshield. This warranty applies for as long as
            you own or lease the vehicle and is not transferable. No other warranty, neither express nor implied,
            applies.&nbsp;
            <br />
            <br />
            <strong>DISCLAIMER</strong>
            <br />
            In some cases, through no fault of the repair technician, during the repair process the damaged area may
            become larger and require a windshield replacement. These instances are not covered by the warranty and
            Safelite is not responsible for the cost of the windshield replacement or any additional damage.&nbsp;&nbsp;
            <br />
          </p>
          &nbsp;
        </WarrantyRow>
        <HorizontalRule variant="gray-line" />
        <WarrantyRow heading="Recalibration ">
          <strong>When we perform a </strong>
          <Link href="/windshield-camera-recalibration" target="_blank">
            recalibration
          </Link>
          <br />
          It is guaranteed for 30 days after recalibration or until the next recalibration event, whichever occurs
          first. A recalibration event is defined by your vehicle manufacturer and includes things such as a vehicle
          collision, windshield replacement, disconnection or removal of the camera, and vehicle re-alignment.&nbsp;
          <br />
          <br />
          <strong>Please refer to your owner&apos;s manual if you experience a recalibration event</strong>
          <br />
          You should not rely on your advanced safety systems until recalibration is performed by a qualified
          recalibration specialist. The advanced safety system is not intended to replace safe driving.&nbsp;Note that
          any modifications to your vehicle from its original specifications may cause your advanced safety systems not
          to function as intended.
          <br />
          <br />
          <strong>Please drive carefully at all times</strong>
          <br />
          <div>
            Advanced Safety Systems are not a replacement for safe driving. You are responsible for the safe operation
            of your vehicle.
          </div>
          <br />
        </WarrantyRow>
        <HorizontalRule variant="gray-line" />
        <WarrantyRow heading="Windshield wipers ">
          <strong>Limited Warranty</strong>
          <br />
          Safelite wipers come with a <strong>six-month warranty effective from the date of purchase</strong>. Safelite
          will, at its option, replace any wiper proved defective in material or workmanship, or both, during the
          warranty period.&nbsp;
          <br />
          <br />
          <strong>The warranty is limited to the original consumer of the wiper&nbsp;</strong>
          <br />
          It is not transferable to someone else. Damage from misuse, abuse, or gradual wear-and-tear are not covered by
          the warranty.
          <br />
        </WarrantyRow>
        <HorizontalRule variant="gray-line" />
        <WarrantyRow heading="Exclusions ">
          Before each installation, Safelite technicians inspect the vehicle for any visible damage and document the
          findings on a pre-inspection form.&nbsp;
          <br />
          <br />
          <strong>Safelite is not responsible for any damage to the vehicle that existed prior to service</strong>
          <br />
          In some cases, we may not discover damage to the vehicle until we remove the glass. This might include rust or
          other damage to the pinch weld or frame that prevent a safe installation. In these instances, prior to any
          installation, you are responsible for all costs to repair the damage or rust including the cost to transport
          your vehicle to and from a qualified body shop if necessary.&nbsp;
          <br />
          <br />
          <strong>
            Damage not resulting from defective workmanship or materials is expressly excluded from coverage under this
            warranty
          </strong>
          &nbsp;
          <br />
          IN NO EVENT SHALL SAFELITE, ITS PARENT AND/OR AFFILIATE COMPANIES, BE LIABLE FOR INCIDENTAL OR CONSEQUENTIAL
          DAMAGES ASSOCIATED WITH THE REPAIR OR REPLACEMENT OF YOUR GLASS.
          <br />
          <br />
          <strong>
            If you live in a state that does not allow exclusion of incidental or consequential damages, this warranty
            exclusion may not apply to you
          </strong>
          <br />
          This warranty gives you specific legal rights; you may also have other rights, which vary from state to
          state.&nbsp;
          <br />
        </WarrantyRow>
      </GrayBox>

      <ContentHalves
        left={
          <>
            <div>
              <h2>For further help contact:</h2>
            </div>
            <HorizontalRule variant="left-red" />
          </>
        }
        right={
          <ContentBlock>
            <p>If you have questions about your service or want to submit a warranty claim, you can:</p>
            <p style={{ marginLeft: 30 }}>
              &bull; Visit <Link href="https://myaccount.safelite.com/External/AccountLogin.aspx">www.mysafelite.com</Link>
              ,&nbsp;
              <br />
              &bull; Email our Customer Care Team at{" "}
              <Link href="mailto:customer.care@safelite.com">customer.care@safelite.com</Link>,
              <br />
              &bull; Call/text us at 1-866-212-5457, or
              <br />
              &bull; Write to us at:
              <br />
              <br />
              Customer Care
              <br />
              7400 Safelite Way
              <br />
              Columbus, OH 43235
              <br />
              <br />
            </p>
            <p>
              You may also contact the store location that serviced your vehicle. All nationwide lifetime warranty claims
              require a copy of your receipt.
              <br />
            </p>
          </ContentBlock>
        }
      />
      <AiChatButton />
      <HorizontalRule variant="section-divider" />
    </ServicePageShell>
  );
}
