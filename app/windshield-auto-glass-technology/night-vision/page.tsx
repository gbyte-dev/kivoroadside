import type { Metadata } from "next";
import Link from "next/link";
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
  title: "A Guide to Car Night Vision Systems | Automotive Night Vision | Safelite",
  description:
    "Does your car have night vision capabilities? Learn about the features of automotive night vision systems and how they're valuable for your vehicle.",
};

const IMAGES = "/image/services/windshield-auto-glass-technology";
const ICONS = IMAGES;

const TECHNOLOGY_CARDS: NavCardData[] = [
  {
    href: "/windshield-auto-glass-technology/adas",
    label: "ADAS",
    image: {
      src: `${ICONS}/adas.png`,
      alt: "",
      width: 86,
      height: 68,
      ratio: "79.06977%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/headlight-sensors",
    label: "Light sensor",
    image: {
      src: `${ICONS}/light-sensor.png`,
      alt: "",
      width: 88,
      height: 38,
      ratio: "43.18182%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/rain-sensors",
    label: "Rain sensor",
    image: {
      src: `${ICONS}/rain-sensor.png`,
      alt: "",
      width: 91,
      height: 38,
      ratio: "41.75824%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/vin",
    label: "VIN",
    image: {
      src: `${ICONS}/vin.png`,
      alt: "",
      width: 82,
      height: 50,
      ratio: "60.97561%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/heads-up-display",
    label: "Heads-up display",
    image: {
      src: `${ICONS}/heads-up.png`,
      alt: "",
      width: 84,
      height: 52,
      ratio: "61.90476%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/infrared-windshield-glass",
    label: "Infrared",
    image: {
      src: `${ICONS}/infrared.png`,
      alt: "",
      width: 87,
      height: 38,
      ratio: "43.67816%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/heated-windshields",
    label: "Heated",
    image: {
      src: `${ICONS}/defroster.png`,
      alt: "",
      width: 83,
      height: 52,
      ratio: "62.6506%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/visor-strips",
    label: "Shade band",
    image: {
      src: `${ICONS}/band.png`,
      alt: "",
      width: 83,
      height: 52,
      ratio: "62.6506%",
    },
  },
];

export default function NightVisionGuidePage() {
  return (
    <ServicePageShell
      secondary={
        <>
          <ContentHalves
            left={<HalvesHeading>Additional glass technologies</HalvesHeading>}
            right={
              <ContentBlock>
                <p>
                  To learn more about{" "}
                  <Link href="/windshield-auto-glass-technology/adas">glass technologies</Link> that can affect getting
                  the right windshield, please select from below. Visit{" "}
                  <Link href="/windshield-auto-glass-technology/windshield">glass parts</Link> to discover more the
                  different types of glass in your vehicle.
                </p>
              </ContentBlock>
            }
          />
          <NavCards cards={TECHNOLOGY_CARDS} variant="icon" columns={5} />
        </>
      }
    >
      <ServiceHero
        title="A guide to car night vision systems"
        image={{
          alt: "car night vision windshield features",
          desktop: {
            src: `${IMAGES}/night-vision-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/night-vision-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          Night vision in automobiles is an advanced driver assistance system that uses infrared cameras and sensors to
          detect pedestrians, other vehicles, and animals in the road that may be obscured by dark roads or inclement
          weather.
        </p>
        <p>
          Car night vision systems are helpful for giving drivers extra reaction time and stopping distance by
          detecting headlights and obstacles before they come into the driver&rsquo;s line of sight.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>Does my car have night vision systems?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                Night vision is primarily an optional feature of some modern vehicles so check the user manual to be
                sure. The infrared and thermal sensors are typically mounted in the vehicle&rsquo;s grille and display
                images in the screen in the center console or dashboard. Newer technology can project the images in a
                heads-up display in the windshield, showing the exact location of traffic ahead. Both of these types of
                systems are typically controlled by the on-board computer mounted in the center console.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <SectionHeading>How does night vision on your car help?</SectionHeading>
      <ContentHalves
        left={
          <ContentImage
            src={`${IMAGES}/night-vision-graphic.jpg`}
            alt="night vision sensors"
            width={480}
            height={280}
            ratio="58.33333%"
          />
        }
        right={
          <ContentBlock>
            <p>
              If conditions make it difficult to see, having night vision can be a huge asset that provides many
              benefits. Car night vision uses thermographic sensors to detect IR waves or heat back at the vehicle to
              determine the distance of objects ahead. In heavy rain and snow, knowing how much stopping distance you
              have makes everyone driving safer. If the road is poorly lit, the night vision will show you what is in
              front of your vehicle, alerting you to any obstacles sooner. The night vision not only picks up other
              cars on the road, but pedestrians, deer, and other creatures, helping you to avoid an accident.
            </p>
          </ContentBlock>
        }
      />

      <HorizontalRule variant="gray-line" />

      <SectionHeading>Are there different types of night vision for your car?</SectionHeading>
      <WideContent>
        <ContentBlock>
          <p>
            The advancements of detection and alert night vision systems are useful for all drivers. When it comes to
            night vision systems for your vehicle, there are two main categories:
          </p>
        </ContentBlock>
      </WideContent>
      <NarrowLeftHalves heading="Active car night vision">
        <p>
          Depending on the year and model of your car, active night vision offers a shorter range in front of your
          headlights, but more lifelike images of what&rsquo;s ahead of you. Roads and buildings on the side of roads will
          show up if they&rsquo;re within the IR spectrum. The range for active night vision is around 600 feet, and that
          could be affected depending on weather conditions.
        </p>
      </NarrowLeftHalves>
      <HorizontalRule variant="gray-line" />
      <NarrowLeftHalves heading="Passive car night vision">
        <p>
          Passive night vision doesn&rsquo;t have as clear of images, but the range is extended up to 1,000 feet. Most
          cars that come with night vision have passive, which are more efficient by measuring heat without needing more
          illumination. The downside of passive vision is their unreliability in hot temperatures (over 98 degrees).
          These systems rely on thermographic cameras to detect thermal radiation.
        </p>
      </NarrowLeftHalves>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>Car night vision systems and replacement</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                Night vision sensors are mounted in different places on a vehicle, depending on the year, make, and
                model. If your vehicle&rsquo;s night vision sensor is mounted in the windshield, you may need to check the
                wiring should your windshield need replacing. Let your auto glass technician know if you have
                windshield-mounted night vision or any other auto glass technologies, so we can replace your auto glass
                more efficiently, and get you back on the road.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

