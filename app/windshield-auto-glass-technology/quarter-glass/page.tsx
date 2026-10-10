import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import WideContent from "@/app/components/services/wide-content";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import NavCards from "@/app/components/services/nav-cards";
import type { NavCardData } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "Guide to Quarter Glass & Replacement | Safelite",
  description:
    "Quarter glass is typically found as a side window in the front door. Learn about quarter glass and how you can replace your rear quarter glass in our guide.",
};

const IMAGES = "/image/services/windshield-auto-glass-technology";
const ICONS = IMAGES;

const GLASS_PARTS: NavCardData[] = [
  {
    href: "/windshield-auto-glass-technology/windshield",
    label: "Windshield",
    image: {
      src: `${ICONS}/front.png`,
      alt: "",
      width: 89,
      height: 58,
      ratio: "65.16854%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/rear-windshield",
    label: "Rear windshield",
    image: {
      src: `${ICONS}/rear.png`,
      alt: "",
      width: 110,
      height: 51,
      ratio: "46.36364%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/side-window",
    label: "Side glass",
    image: {
      src: `${ICONS}/side.png`,
      alt: "",
      width: 151,
      height: 52,
      ratio: "34.43709%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/vent-window",
    label: "Vent glass",
    image: {
      src: `${ICONS}/vent.png`,
      alt: "",
      width: 152,
      height: 52,
      ratio: "34.21053%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/truck-sliders",
    label: "Sliders",
    image: {
      src: `${ICONS}/sliders.png`,
      alt: "",
      width: 75,
      height: 60,
      ratio: "80%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/sunroof",
    label: "Sunroof",
    image: {
      src: `${ICONS}/sunroof.png`,
      alt: "",
      width: 109,
      height: 51,
      ratio: "46.78899%",
    },
  },
];

export default function QuarterGlassGuidePage() {
  return (
    <ServicePageShell
      secondary={
        <>
          <ContentHalves
            left={<HalvesHeading>A guide to auto glass parts</HalvesHeading>}
            right={
              <ContentBlock>
                <p>
                  Use this resource to help you identify the names, functions, and safety features of different auto glass
                  panes.
                </p>
              </ContentBlock>
            }
          />
          <NavCards cards={GLASS_PARTS} variant="icon" columns={5} />
        </>
      }
    >
      <ServiceHero
        title="A guide to quarter glass"
        subtitle="What you need to know and how to replace quarter glass"
        image={{
          alt: "car quarter glass window replacement",
          desktop: {
            src: `${IMAGES}/quarter_glass-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/quarter_glass-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          This glass is easily forgotten, but is used almost as much as the retractable side windows. Used to help see
          the surrounding area, quarter glass is made with the same tempered or laminated glass as the side windows and{" "}
          <Link href="/windshield-auto-glass-technology/rear-windshield">rear windshield</Link>, designed to shatter into
          tiny glass balls to prevent harm. Just like any pane of auto glass, it is important to recognize when you need
          to repair or replace your quarter glass.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>What is quarter glass?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                This <Link href="/windshield-auto-glass-technology/side-window">side window</Link>, also known as a
                valence window, is the last window on the side of a vehicle. It is behind the doors and above the rear
                wheel. A quarter glass is never in the rear door. Quarter glass windows are either stationary or
                retractable, depending on the window next to which they are mounted.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>Does my vehicle have quarter glass?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Most vehicles with windows in the doors have a quarter glass pane. On minivans, which have an extra roof
              pillar, venting quarter glass is fairly popular, to allow more ventilation in the additional row of seats.
              Older minivans are fitted with manual tilt mechanisms, where the passenger had to unfasten the latches to
              tilt out the window. However, modern minivans have added power controls to operate the tilting mechanism
              electronically, for convenience. Quarter glass should not be mistaken for opera glass, which could be found
              in the rear pillar of older cars.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>Quarter glass window replacement</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              If you need to replace your quarter glass, put your trust in the auto glass experts. Avoid exploding glass
              and get it replaced with Safelite!
            </p>
          </ContentBlock>
        </WideContent>

        <NarrowLeftHalves heading="Do I need to replace my quarter glass?">
          <p>
            Since quarter glass is made from the same tempered safety glass as side windows and the rear windshield, it
            is extremely important to your safety that you replace the quarter glass if there is any damage to the auto
            glass pane.
          </p>
        </NarrowLeftHalves>

        <HorizontalRule variant="gray-line" />

        <NarrowLeftHalves heading="How do I replace my quarter glass?">
          <p>
            First, make sure that the glass and body panels are cleaned to remove old adhesive and any debris or
            contaminants.
          </p>
          <p>
            You&rsquo;ll need a trim panel removal tool to get around the adhesive and weatherstrip and remove the quarter
            glass, and the new panel of glass should be carefully placed onto the opening. Make sure there is enough
            room for the trim pieces. Press the quarter glass panel down so the adhesives slightly spread and let the
            adhesives set, then reinstall the trim pieces that were removed.
          </p>
        </NarrowLeftHalves>

        <HorizontalRule variant="gray-line" />

        <NarrowLeftHalves heading="Step-by-step quarter glass replacement">
          <p>Here are step by step instructions on the process to follow when removing and replacing your quarter glass.</p>
          <ol>
            <li>Remove quarter panel trim</li>
            <li>Remove quarter glass retaining nuts</li>
            <li>Clean glass mounting and install new adhesive</li>
            <li>Install new glass panel and tighten the retaining nuts</li>
            <li>Re-install rear quarter glass panel trim</li>
          </ol>
          <p>
            Quarter glass can be easily removed by one person without breaking when glass is held in place by
            weatherstripping. Work from the inside of your car, and work out the lip of the weatherstrip in the corner
            of the quarter glass gently.
          </p>
        </NarrowLeftHalves>
      </GrayBox>
    </ServicePageShell>
  );
}

