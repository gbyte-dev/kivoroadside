import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves from "@/app/components/services/content-halves";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import ServiceButton from "@/app/components/services/service-button";
import CenteredHeading from "@/app/components/services/centered-heading";

export const metadata: Metadata = {
  title: "When to Repair or Replace your Windshield Damage | Safelite",
  description:
    "Deciding between repair or replacement for your damaged windshield depends on several factors. Let Safelite guide your plan to fix windshield damage.",
};

// Same hero photo as the auto glass technology page
const HERO_IMAGES = "/image/services/windshield-auto-glass-technology";

const REPLACE_REASONS: { heading: ReactNode; text: ReactNode }[] = [
  {
    heading: <>The crack or chip is large&nbsp;</>,
    text: (
      <p>
        A replacement is generally needed with larger chips or cracks, although there are some situations where they
        can be repaired.
        <br />
        <br />
      </p>
    ),
  },
  {
    heading: <>The glass is tempered&nbsp;</>,
    text: (
      <p>
        Windshields that are made of tempered glass instead of laminated glass, like side and rear windows, are more
        likely to break into fragments. This means a replacement will be needed to prevent the dangers of shattered
        glass.
        <br />
        <br />
      </p>
    ),
  },
  {
    heading: <>The windshield damage is too deep&nbsp;</>,
    text: (
      <p>
        Any chip or crack that penetrates past the halfway point of the windshield thickness or both the outer and inner
        layer of a laminated windshield requires a replacement. Not only is this done for safety, but also to prevent
        the inner layer from becoming discolored over time.
        <br />
        <br />
      </p>
    ),
  },
  {
    heading: <>The damage is in a bad area of your windshield&nbsp;</>,
    text: (
      <p>
        This includes the driver&rsquo;s side since the last thing you want is a large obstruction in your line of
        sight.
        <br />
        <br />
      </p>
    ),
  },
  {
    heading: <>The crack spans from edge to edge of the windshield&nbsp;</>,
    text: (
      <>
        When this happens, the structural integrity of the auto glass weakens and requires a replacement since the edges
        are the windshield&rsquo;s strong holding points.
        <br />
        <br />
      </>
    ),
  },
  {
    heading: <>There are multiple cracks or chips on your windshield&nbsp;</>,
    text: (
      <p>
        The more damage and impact that your auto glass has endured, the less likely it is to hold up to further ones.
        If there are more than two damaged areas on your auto glass, schedule a replacement.
        <br />
        <br />
      </p>
    ),
  },
];

// "Not sure of your damage?" band: notched line, title, button, plain line.
// A site-wide rule gives this gray box 1rem padding all around.
function SharePhotoCta() {
  return (
    <GrayBox className="p-4!">
      <div>
        <HorizontalRule variant="gray-notch" />
        <ContentBlock className="text-center">
          <h2 className="max-w-fit!">Not sure of your damage? Upload a photo for review</h2>
          <ServiceButton href="https://safelite.service-certainty.com/clientportal">Share photo</ServiceButton>
          &nbsp;
        </ContentBlock>
        <HorizontalRule variant="gray-line" />
      </div>
    </GrayBox>
  );
}

function NextSteps() {
  return (
    <ContentHalves
      left={
        <>
          <div>
            <h2>The next steps for your windshield repair&nbsp;</h2>
          </div>
          <HorizontalRule variant="left-red" />
        </>
      }
      right={
        <div>
          <p>
            Whether you need a repair or replacement, our expert auto glass techs at Safelite are ready. For extra
            convenience, we also offer mobile repairs where we come to your home or work. Learn more, schedule an
            appointment, or get a quote today.
            <br />
            <br />
          </p>
        </div>
      }
    />
  );
}

export default function DamagedWindshieldRepairReplacePage() {
  return (
    <ServicePageShell secondary={<NextSteps />}>
      <ServiceHero
        title={
          <>
            Windshield Damage:&nbsp;
            <br />
            Repair vs Replace&nbsp;
          </>
        }
        image={{
          alt: "safelite has experience replacing your vehicles windshield",
          desktop: { src: `${HERO_IMAGES}/hero-desktop.jpg`, width: 585, height: 340, ratio: "58.11966%" },
          tablet: null,
          wide: { src: `${HERO_IMAGES}/hero-wide.jpg`, width: 1100, height: 340, ratio: "30.90909%" },
        }}
      >
        <p>
          When you&rsquo;re driving, a rock from a truck ahead of you, gravel on the road, or debris from other vehicle
          movements can be kicked up and thrown into your auto glass, creating a crack or chip.&nbsp;
        </p>
        <p>
          When this happens, you&rsquo;ll need to have your damaged window repaired or replaced because it&rsquo;s not
          safe to keep driving with it. But how will you know which service you might need? It&apos;s important to
          understand the differences.
        </p>
      </ServiceHero>

      <SharePhotoCta />

      <CenteredHeading>When to repair a windshield</CenteredHeading>
      {/* .cards-wholes: full width up to 1020px, also on phones */}
      <div className="mx-auto max-w-[1020px] px-[15px]">
        <div>
          <p>
            First, one of our technicians will assess the damage and look at its shape, size, depth, material, and
            location. From there, they&rsquo;ll decide what to do based on what they see.&nbsp;
          </p>
          <p />
        </div>
      </div>
      <NarrowLeftHalves heading="The chip is small">
        <div />
        <p />
        Sometimes small chips and cracks only require repairs. But make sure you get them fixed quickly to prevent them
        from spreading and creating a need for a full windshield replacement.
        <p />
      </NarrowLeftHalves>

      <GrayBox>
        <CenteredHeading>When to replace a windshield</CenteredHeading>
        {/* .cards-wholes: full width up to 1020px, also on phones */}
      <div className="mx-auto max-w-[1020px] px-[15px]">
          <div>
            <p>
              In some cases, our expert technicians will need to do a full window replacement.
              <br />
              <br />
            </p>
          </div>
        </div>
        {REPLACE_REASONS.map((reason, index) => (
          <Fragment key={index}>
            {index > 0 && <HorizontalRule variant="gray-line" />}
            <NarrowLeftHalves heading={reason.heading} contentBlock={false}>
              {reason.text}
            </NarrowLeftHalves>
          </Fragment>
        ))}
      </GrayBox>
    </ServicePageShell>
  );
}
