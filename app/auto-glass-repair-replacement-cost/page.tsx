import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import WideContent from "@/app/components/services/wide-content";
import ContentHalves from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import ServiceButton from "@/app/components/services/service-button";

export const metadata: Metadata = {
  title: "Cost of Auto Glass Repair and Replacement | Safelite AutoGlass",
  description:
    "When your windshield or auto glass breaks, how much does it cost? At Safelite, we work with your insurance company, help you get back on the road safely.",
};

const IMAGES = "/image/services/auto-glass-repair-replacement-cost";

// Title, red bar, then one row per cost question. The "How to pay" row sits
// in its own gray box inside this one, as on the reference.
function CostQuestions() {
  return (
    <GrayBox>
      <div>
        <h2>What&rsquo;s the average auto glass service estimate?</h2>
      </div>
      <HorizontalRule variant="center-red" />
      <WideContent>
        <ContentBlock>
          <p>
            Depending on the severity of damage to your auto glass, vehicle type, and insurance coverage, your auto
            glass repair or replacement service could cost you as little as $0!
          </p>
        </ContentBlock>
      </WideContent>

      <NarrowLeftHalves
        heading="Will my auto insurance policy cover my auto glass service?"
        headingContentBlock={false}
        emptyHeading
      >
        <p>
          Yes! We partner with hundreds of insurance companies and will even verify your coverage and file your claim so
          you can stress less.&nbsp;
          <br />
          <br />
          And as long as you have&nbsp;<Link href="/help-center/insurance-coverage">comprehensive coverage</Link>,
          you&rsquo;ll only be responsible for paying your deductible &ndash; all other repair or replacement costs will
          be covered.&nbsp;
          <br />
          <br />
          Plus, in most cases, filing an insurance claim to repair or replace your vehicle glass won&rsquo;t cause your
          comprehensive coverage premium to go up. Any premium increases by your insurance provider would generally
          happen only in extreme situations, like if you filed multiple windshield replacement claims over the span of a
          few months.
        </p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />

      <NarrowLeftHalves
        heading="How much does windshield repair or replacement cost without insurance?"
        headingContentBlock={false}
        emptyHeading
      >
        <p>
          The cost of windshield repair or replacement without insurance depends on the extent of damage, your vehicle,
          and where you are located. If you don&rsquo;t want to use your insurance, or if you don&rsquo;t have
          comprehensive coverage, we offer competitive, affordable prices, allowing you to pay out of pocket and get back
          on the road quickly and safely.
        </p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />

      <GrayBox>
        <NarrowLeftHalves heading="How to pay for your auto glass service" contentBlock={false}>
          <p>
            Safelite makes paying for your auto glass service simple and convenient by accepting a variety of payment
            methods, including all major credit cards, cash, checks, and Apple Pay. For added flexibility, we offer
            payment plans through Afterpay, which allows you to split the cost of service into four interest-free
            installments over six weeks. This option allows you to manage your budget more effectively while getting
            the repair or replacement service you need.{" "}
          </p>
          <p>&nbsp;</p>
          <p>
            Additionally, customers can choose to pay in advance. Payments can be made during the booking process on
            Safelite.com or after booking through the customer portal.
          </p>
        </NarrowLeftHalves>
      </GrayBox>
      <HorizontalRule variant="gray-line" />

      <NarrowLeftHalves heading={<>How much does it cost to replace a car window?&nbsp;</>} contentBlock={false}>
        <p>
          The cost to <Link href="/side-window-replacement">replace a car window</Link> will depend on the make and
          model of the vehicle, the type of window (e.g., side window, rear window), the extent of damage, and which
          Safelite location you visit due to varying auto glass and labor costs. Power windows and specialized glass may
          also increase the expense incurred. At Safelite, we provide transparent pricing on all our auto glass services,
          including car window replacement. Contact us to{" "}
          <Link href="/schedule-service?start_type=fmg">get a quote</Link> and schedule your repair or replacement
          service with one of our expert technicians today!
        </p>
        <p>&nbsp;</p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />

      <NarrowLeftHalves heading="How much does it cost to recalibrate a windshield?" contentBlock={false}>
        <p>
          Several factors can affect the cost of{" "}
          <Link href="/windshield-camera-recalibration">windshield recalibration</Link> at Safelite. High-end and luxury
          vehicle brands often have more complex ADAS systems, which require sophisticated recalibration equipment and
          procedures, leading to higher costs. Prices may also vary based on where you are located due to labor costs,
          demand, and availability. It&rsquo;s also important to understand what type of recalibration your vehicle
          requires.{" "}
        </p>
        {/* Plain disc bullets here: this list is not inside a content block */}
        <ul className="ml-[30px] list-disc">
          <li>
            <strong>Static recalibration: </strong>Involves adjusting the ADAS sensors using a fixed target or reference
            point. Static recalibration requires less specialized equipment and a controlled environment, such as a
            service bay, to adjust the sensors.{" "}
          </li>
          <li>
            <strong>Dynamic recalibration: </strong>Requires the vehicle to be driven on a specific road surface so that
            the ADAS sensors can be adjusted while in motion. Dynamic recalibration involves the use of specialized
            equipment, such as radar targets and cameras, to collect accurate data.
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>
          After a cracked windshield repair or replacement at Safelite, recalibration is needed to ensure that these
          safety features continue to function properly. Contact us to{" "}
          <Link href="/schedule-service?start_type=fmg">schedule your appointment </Link>for windshield recalibration at
          a Safelite near you today!
        </p>
        <p>&nbsp;</p>
      </NarrowLeftHalves>
    </GrayBox>
  );
}

export default function AutoGlassRepairReplacementCostPage() {
  return (
    <ServicePageShell secondary={null} strongWeight="medium">
      <ServiceHero
        title="How much does it cost to replace a windshield?"
        contentBlock={false}
        image={{
          alt: "how much does safelite repair cost",
          desktop: { src: `${IMAGES}/hero.jpg`, width: 585, height: 380, ratio: "64.95727%" },
        }}
      >
        {/* Empty subtitle on the reference; it still adds 10px */}
        <h4 />
        <p>
          When you experience damaged auto glass, cost is probably the first thing on your mind. At Safelite, we
          provide transparent pricing for windshield repairs and replacements, ensuring no surprises with your service.
          The cost of fixing chips or cracks to your windshield and other types of auto glass depends on factors such as
          size, location, and severity of the damage. We offer flexible payment options and work with most insurance
          providers to keep the process seamless and affordable.
        </p>
      </ServiceHero>

      <CostQuestions />

      <SectionHeading>What else affects glass service cost?</SectionHeading>
      <ContentHalves
        left={
          <ContentBlock>
            <p>
              <strong>Many factors can play into your vehicle glass repair or replacement cost. These include:</strong>
            </p>
            <ul className="ml-[30px]">
              <li>The size of the damage</li>
              <li>Where the damage is located</li>
              <li>Your vehicle&rsquo;s year/make/model</li>
              <li>
                Required recalibration after windshield replacement if your vehicle has advanced driver safety features
              </li>
            </ul>
          </ContentBlock>
        }
        right={
          <Image
            src={`${IMAGES}/windshield-replace.png`}
            alt="windshield replace"
            title="windshield replace"
            width={456}
            height={280}
            className="inline h-auto max-w-full align-baseline"
          />
        }
      />

      {/* Empty line kept from the reference */}
      <div>
        <h6>
          <br />
        </h6>
      </div>
      <HorizontalRule variant="gray-line" />

      <div>
        <h2>Get a no-commitment quote today</h2>
      </div>
      <HorizontalRule variant="center-red" />
      <ContentHalves
        left={<ContentImage src={`${IMAGES}/getting-a-quote.jpg`} alt="Getting a quote is easy" />}
        right={
          <ContentBlock>
            <span>
              <strong>Getting a quote for your vehicle glass service is fast and easy:</strong>
            </span>
            {/* A stray closing tag on the reference leaves this empty paragraph (10px) */}
            <p />
            <ol>
              <li>Tell us your ZIP code.</li>
              <li>Tell us about your vehicle and glass damage.</li>
              <li>Receive a quote instantly!</li>
            </ol>
            <p>
              <ServiceButton href="/schedule-service?start_type=fmg">Get a quote now</ServiceButton>
            </p>
          </ContentBlock>
        }
      />
    </ServicePageShell>
  );
}
