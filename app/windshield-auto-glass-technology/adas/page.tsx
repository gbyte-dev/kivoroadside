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
  title: "Driver Assistance Systems to Keep You Safe | ADAS | Safelite",
  description:
    "Is your car equipped with advanced driver assistance systems (ADAS)? Learn about the different monitoring and warning systems that help your on-road safety.",
};

const IMAGES = "/image/services/windshield-auto-glass-technology";
const ICONS = IMAGES;

const TECHNOLOGY_CARDS: NavCardData[] = [
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

export default function AdasGuidePage() {
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
        title="Advanced driver assistance systems"
        image={{
          alt: "guide to advanced driver assistance programs",
          desktop: {
            src: `${IMAGES}/adas-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/adas-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          Advanced driver assistance systems (ADAS) are active safety technologies designed to help avoid collisions.
          Using a variety of sensors on your windshield, such as camera and radar sensors, ADAS will monitor the roadway
          and surrounding areas to alert the driver of unexpected dangers.
        </p>
        <p>
          Some systems can even assist with parking, taking evasive maneuvers, and other automated features that are
          designed to make roads safer for drivers, other vehicles, and pedestrians.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>What kinds of ADAS systems are there?</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              Some features now come standard in new vehicles and others are optional, however, most, if not all, of
              the systems within ADAS fall under these categories:
            </p>
          </ContentBlock>
        </WideContent>
        <NarrowLeftHalves heading="Adaptive">
          <p>Systems that change/adapt based on input from the surrounding environment</p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Automated">
          <p>Systems that take over and perform certain functions that a driver cannot do safely&nbsp;</p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Monitoring">
          <p>
            Systems that use sensors, cameras, or other means to observe the surrounding area or driving of the vehicle
            and assesses whether a correction needs to be made
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Warning">
          <p>
            Systems that alert the driver to potential issues in their own driving or the driving of others that could
            increase the risk of injury to those in the vehicle
          </p>
        </NarrowLeftHalves>
      </GrayBox>

      <SectionHeading>Examples of ADAS</SectionHeading>
      <ContentHalves
        left={
          <ContentImage
            src={`${IMAGES}/blind-spot.jpg`}
            alt="blind spot car warning light"
            width={480}
            height={280}
            ratio="58.33333%"
          />
        }
        right={
          <ContentBlock>
            <h3>Blind spot warning light</h3>
            <p>
              On your sideview mirror, you may see a blind spot warning light alerting you of a vehicle or other
              obstruction when you begin to signal a turn. The blind spot monitor detects other vehicles to help you
              avoid collision as you shift lanes on an interstate or back out of a parking space.&nbsp;
            </p>
          </ContentBlock>
        }
      />

      <ContentHalves
        left={
          <ContentImage
            src={`${IMAGES}/radar-system.jpg`}
            alt="car radar safety system"
            width={480}
            height={280}
            ratio="58.33333%"
          />
        }
        right={
          <ContentBlock>
            <h3>Radar system</h3>
            <p>A car radar system detects traffic issues that you may not be fully alert to. These include:</p>
            <ul>
              <li>Blind spot monitoring</li>
              <li>Adaptive cruise control</li>
              <li>Cross traffic interference at intersections</li>
            </ul>
            <p>The radar is designed to keep you safe while behind the wheel.</p>
          </ContentBlock>
        }
      />

      <ContentHalves
        left={
          <ContentImage
            src={`${IMAGES}/forward-collision.jpg`}
            alt="car collision warning systems"
            width={480}
            height={280}
            ratio="58.33333%"
          />
        }
        right={
          <ContentBlock>
            <h3>Forward Collision Warning, Lane Departure &amp; Adaptive Cruise Control</h3>
            <p>
              For your safety, the collision avoidance systems are put in place to decrease the amount of avoidable
              crashes. From rear and forward collision warnings that bring your vehicle to a halt to lane departure
              warnings that help you stay in your lane, the goal of these ADAS is to minimize accidents. On-board
              sensors assist with adaptive cruise control that help you maintain a safe following distance by
              automatically adjusting your cruising speed.
            </p>
          </ContentBlock>
        }
      />

      <ContentHalves
        left={<HalvesHeading>Here are some additional examples of specific ADAS systems:</HalvesHeading>}
        right={
          <ContentBlock>
            <ul className="grid grid-cols-1 md:grid-cols-2">
              <li>Adaptive cruise control (ACC)&nbsp;</li>
              <li>Adaptive head lights&nbsp;</li>
              <li>Adaptive light control&nbsp;</li>
              <li>Automatic braking system (ABS)&nbsp;</li>
              <li>Automatic parking</li>
              <li>Blind spot monitors&nbsp;</li>
              <li>Pedestrian monitors&nbsp;</li>
              <li>Proximity monitors&nbsp;</li>
              <li>Driver drowsiness detection</li>
              <li>Collision avoidance system</li>
              <li>Forward collision warning</li>
              <li>Lane keep assist</li>
              <li>Lane departure warning</li>
            </ul>
          </ContentBlock>
        }
      />

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>Do I have ADAS on my vehicle?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                It is important to know if your vehicle has ADAS because it helps improve road safety and may put you at
                risk if any of those systems are tied to the windshield should it need repair or replacing.
              </p>
              <p>
                If your windshield is damaged and needs replacement, be sure to check with the original manufacturer
                for which ADAS systems are tied to the windshield so that you have these systems reinstalled and
                recalibrated.
              </p>
              <p>
                The windshield is an important part of the array of interlinked safety systems of your vehicle too and
                should be repaired or replaced immediately, but the auxiliary safety systems play an equal part in
                keeping the driver and passengers safe as well.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

