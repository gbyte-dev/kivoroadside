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
  title: "Car Light Sensors: Functions, Locations & Repair | Safelite",
  description:
    "Safelite explains the function, purpose and components of automobile light sensors. Learn about sensor repair, replacement and installation.",
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

export default function HeadlightSensorsGuidePage() {
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
        title="A guide to vehicle light sensors"
        image={{
          alt: "car windshield light sensor",
          desktop: {
            src: `${IMAGES}/light-sensor-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/light-sensor-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>Light sensors, also known as solar radiation sensors, detect how much light is coming into the vehicle.</p>
        <p>
          The sensors will detect sunlight and activate the headlights and taillights on the exterior of the vehicle,
          or dim the interior dashboard displays and day-night mirrors in the passenger cabin.
        </p>
        <p>These automatic sensors are commonly used in modern vehicles as active safety features.</p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Do I have a light sensor?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/light-sensor-highlight.jpg`}
              alt="does my vehicle have a light sensor"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                Typically, vehicle light sensors are located on the windshield, usually behind the rearview mirror,
                mounted on the inside surface of the auto glass.
              </p>
              <p>
                Check this area on your windshield or check your vehicle&rsquo;s owner manual to see if you have auto
                headlights and day-night mirrors equipped in your car or truck.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>How does a light sensor help my driving?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              A vehicle light sensor helps you keep your attention and focus on the road by automatically turning your
              car&rsquo;s exterior lights on and off when the sensor detects a change in the environment. This is
              especially helpful during dusk, dawn, and inclement weather.
            </p>
            <p>
              Additionally, during night-time driving, headlight sensors can help reduce high-beam glare from vehicles
              that are trailing behind you by adjusting the reflection on the day-night rear-view and side-view mirrors.
            </p>
          </ContentBlock>
        }
      />

      <HorizontalRule variant="gray-line" />

      <ContentHalves
        left={<HalvesHeading>If my windshield is cracked or chipped, do I need to replace my light sensor?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              It&rsquo;s important to inspect your vehicle for damage after a stone or other road debris strikes your
              windshield. If the strike is within the area of the light sensor, the sensor may be damaged and might need
              to be replaced.
            </p>
            <p>
              However, if the light sensor itself isn&rsquo;t damaged, the sensor may still be functional and will not
              need to be replaced. In almost all cases, you won&rsquo;t need to replace the light sensor if the strike is
              not in the line of sight of the sensor.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>Light sensors and replacement</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/light-sensor-repair.jpg`}
              alt="repairing vehicle light sensor"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                When it comes time to replace the auto glass, check if your vehicle is equipped with a light sensor. The
                Safelite technician will know the proper process to carefully detach and reinstall the sensor into the
                new windshield.
              </p>
              <p>
                If you suspect that your light sensor is not working, have it inspected by a technician to determine
                whether it needs to be repaired or replaced.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

