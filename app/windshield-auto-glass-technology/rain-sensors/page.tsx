import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import NavCards from "@/app/components/services/nav-cards";
import type { NavCardData } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "How Rain Sensing Windshields Work | Safelite",
  description:
    "Curious about how rain sensing windshields work or if your car has one? Safelite's guide on rain sensing auto glass technology has the answers you need.",
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
  {
    href: "/windshield-auto-glass-technology/night-vision",
    label: "Night vision",
    image: {
      src: `${ICONS}/night-vision.png`,
      alt: "",
      width: 57,
      height: 57,
      ratio: "100%",
    },
  },
];

export default function RainSensorsGuidePage() {
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
        title="A guide to rain sensors"
        image={{
          alt: "car rain sensing windshield wipers",
          desktop: {
            src: `${IMAGES}/rain-sensor-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/rain-sensor-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>Rain sensors, as the name suggests, detect precipitation on a vehicle&rsquo;s windshield.</p>
        <p>
          Rain sensors monitor the moisture, rain, or snow that falls on the auto glass. When the sensor detects a large
          amount of precipitation, it automatically turns on the windshield wipers, adjusting the speed of the wipers
          according to the intensity of the storm.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Where is my rain sensor?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/rain-sensor-location.jpg`}
              alt="where is the windshield rain sensor located"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                If you&rsquo;re looking inside the cabin of your car from the outside, the sensor would be located
                behind the rearview mirror and you can tell it&rsquo;s the sensor because a strip of lens or film will
                appear facing the outside.
              </p>
              <p>
                Some cars may have one or the other, or both. The rain sensor is also typically adjacent to the light
                sensor. This system turns the windshield wipers automatically by detecting rain on the windshield.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>How does my windshield know it&rsquo;s raining?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Your car&rsquo;s sensors can tell it is raining by measuring how many rain drops are on the windshield. The
              sensor detects the light reflected back internally by the windshield glass, so if there were more raindrops
              on the windshield, the less light would be reflected back to the sensor.
            </p>
            <p>
              Here&rsquo;s how your car windshield rain sensors work: The vehicle senses how much rain is on the
              windshield, speeding up the windshield wipers according to the amount of rain it detects. The sensor
              itself is mounted on a special bracket behind the vehicle&rsquo;s rearview mirror and wired through the
              roof.
            </p>
            <p>
              What happens when your windshield experiences a chip or crack and needs repair? If the rain sensor is
              intact when you&rsquo;re receiving auto glass services, be sure to tell your auto glass specialist so they
              can reattach it when replacing the windshield.
            </p>
          </ContentBlock>
        }
      />

      <HorizontalRule variant="gray-line" />

      <ContentHalves
        left={<HalvesHeading>How does the rain sensor help with driving?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              The rain sensor on your windshield helps keep you safe as well as other drivers. Paying attention to the
              road in front of you can be difficult if you are distracted, where even turning on the windshield wipers
              can be an effort.
            </p>
            <p>
              With a rain sensor, you don&rsquo;t have to worry about turning on or off your windshield wipers because it
              is taken care of for you. Having rain sensing windshields and automatic wipers creates a benefit for you,
              improving your sight lines on the road and making sure you have a clear windshield from a drizzle to a down
              pour.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>Rain sensors and replacement</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/rain-sensor-repair.jpg`}
              alt="windshield rain sensor repair"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                Even with the luxuries afforded by a rain sensing windshield, the more you drive in any weather
                condition, the more susceptible you are to auto glass damage. While we can{" "}
                <Link href="/windshield-repair">repair windshield chips</Link> by patching up the damaged area with
                adhesive, larger damage results in{" "}
                <Link href="/windshield-replacement">complete windshield replacement.</Link>
              </p>
              <p>
                Should you need to replace your windshield or auto glass window, inspect the rain sensor to see if the
                wiring is intact, as you may need to purchase a new sensor if the wiring is damaged.
              </p>
              <p>
                Acquiring as much information about your vehicle prior to the auto glass service will better inform
                Safelite technicians in how they can help you replace your auto glass and get you back on the road
                quickly.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

