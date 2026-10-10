import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import NavCards from "@/app/components/services/nav-cards";
import type { NavCardData } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "Rear Windshield Replacement | Replace Back Car Window | Safelite",
  description:
    "Rear windshields protect drivers and vehicle occupants in case of an accident. In our back car window guide, learn the glass features and how it is made.",
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

export default function RearWindshieldGuidePage() {
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
        title="Rear windshield replacement near you"
        image={{
          alt: "guide to rear windshield repair",
          desktop: {
            src: `${IMAGES}/rear_guide-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/rear_guide-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          Simple and intuitive, the rear windshield (or rear glass) is located opposite of the front windshield, and is
          located in the back of the vehicle, sealing it off from the outside. Similar to the front windshield, the rear
          windshield is one of the types of auto glass that helps your vehicle keep its rigid frame, as well as
          protecting occupants of the vehicle.
        </p>
        <p>
          Other than that, how this particular pane of auto glass is made, functions, and feature, set it apart from the
          front windshield.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>How is the rear windshield made?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                Unlike the front windshield, the glass for the back windshield is made in the same way that auto glass
                is made for the side window, vent window, or quarter glass panes: tempered glass.
              </p>
              <p>
                The back car window glass is strengthened by thermal or chemical treatments so that it can withstand
                blunt force, but will shatter into tiny, granular chunks of glass instead of shards. This is a feature of
                tempered glass and is often called &ldquo;safety glass&rdquo; for this reason.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>What are some of the features of the rear windshield?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              The rear windshield comes in all shapes and sizes, depending on what kind of vehicle you are driving. Most
              cars have a rear windshield that is completely bonded to the rear of the frame of the vehicle, while some
              trucks have sliding panes called &ldquo;
              <Link href="/windshield-auto-glass-technology/truck-sliders">truck sliders</Link>&rdquo; or ones that open
              outwards on a hinge so that air may circulate in the vehicle or provide additional room for larger loads.
              Some vehicles have rear windshield wipers to wipe dirt and water off of the rear windshield, so the rear
              view is not obstructed.
            </p>
            <p>
              If you experience damage to your back windshield glass, get the{" "}
              <Link href="/auto-glass-services">auto glass repaired</Link> right away.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>What are those lines on my rear windshield?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/rear-lines.jpg`}
              alt="what are the lines on your windshield"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                All rear windshields must be clean and clear so that the driver can utilize the rearview mirror properly
                when changing lanes and reversing. The lines are thermal and integrated into the rear defroster, which
                runs a small current of electricity to heat the rear windshield pane.
              </p>
              <p>
                If you have any questions concerning your back windshield glass, reach out to your local Safelite team.
                We will help make sure the windshield is sturdy and protective when you&rsquo;re in the car.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

