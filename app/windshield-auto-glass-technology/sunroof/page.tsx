import type { Metadata } from "next";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import WideContent from "@/app/components/services/wide-content";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import NavCards from "@/app/components/services/nav-cards";
import type { NavCardData } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "A Guide to Sunroof Glass | Safelite",
  description:
    "Knowing the type of sunroof your car has will prepare you for the replacement or repair process if it gets damaged. While Safelite does not repair car sunroofs, our technicians can help with other windshield replacement issues.",
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
    href: "/windshield-auto-glass-technology/quarter-glass",
    label: "Quarter glass",
    image: {
      src: `${ICONS}/quarter.png`,
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
];

export default function SunroofGuidePage() {
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
        title="A guide to sunroof glass"
        image={{
          alt: "guide to sunroof glass repair",
          desktop: {
            src: `${IMAGES}/sunroof-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/sunroof-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          This auto glass, also known as the moonroof, is located on the roof of the vehicle and is designed to let
          fresh air and light into the passenger cabin.
        </p>
        <p>
          The mechanism used to open the sunroof is either fixed so that when opened, the sun roof vents, or operable so
          that the sunroof slides and retracts either onto the roof or beneath the interior headliner. Sunroofs can be
          either opaque or transparent, or feature a visor to block light from the passenger cabin.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>What type of sunroof do I have?</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              Just like any other auto glass in your car or truck, it is important to know what type of sunroof or
              moonroof is installed in your vehicle so that if it breaks or is damaged, the proper parts and glass are
              re-installed and get you back on the road quickly.
            </p>
            <p>
              Auto makers have made variations of the sunroof and moonroof the norm, and can be either manual or
              electric operated, though not all are moveable. The operation and mechanism that moves the sunroof is the
              differentiator between the variations of sunroofs.
            </p>
          </ContentBlock>
        </WideContent>
        <NarrowLeftHalves heading="Fixed sunroof">
          <p>
            <strong>Pop-up sunroof:</strong> A panel of glass that tilts upward on a hinge, in which the tilting action
            provides the ventilation; can be manual or electric and is usually removable
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Sliding sunroof">
          <p>
            <strong>Spoiler sunroof:</strong> A combination of the pop-up and sliding sunroof, the tilting-up action
            opens the sunroof and then slides back on a track along the roof; depending on the make of the vehicle, the
            glass panel will self-store either above the roof or below, between the liner and roof proper
          </p>
          <p>
            <strong>Panoramic sunroof:</strong> A multi-pane moonroof system&nbsp; which tilts and slides open further
            than a spoiler sunroof because the multiple panes that form one unit when closed, all retract upon slider
            track and stack against one another when opened; designed to open above both the front and rear cabin of the
            passenger cabin
          </p>
          <p>
            <strong>Solar sunroof:</strong> Opaque sunroof glass inlaid with photovoltaic solar panel cells that power
            the inner ventilation from stored solar electricity, saving power in the battery of the vehicle
          </p>
          <p>
            <strong>Top-mount:</strong> Sliding sunroofs that store along tracks above the roof outside of the vehicle;
            the advantages of this type of sunroof is the extra headroom inside the car
          </p>
        </NarrowLeftHalves>
      </GrayBox>

      <SectionHeading>Can Safelite repair my sunroof?</SectionHeading>
      <ContentHalves
        left={
          <ContentImage
            src={`${IMAGES}/sunroof-open.jpg`}
            alt="safelite sunroof glass repair"
            width={480}
            height={280}
            ratio="58.33333%"
          />
        }
        right={
          <ContentBlock>
            <p>
              It can be an incredible inconvenience to have a broken sunroof. An open window on top of your car can let in
              dust, rain, snow, and other forms of precipitation that could ruin the interior of the vehicle. Driving down
              the highway with a broken sunroof can be incredibly distracting and unsafe.
            </p>
          </ContentBlock>
        }
      />

      <HorizontalRule variant="gray-line" />
    </ServicePageShell>
  );
}

