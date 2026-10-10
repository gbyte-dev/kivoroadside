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
  title: "How Does a Heads-Up Display (HUD) Work? | Safelite",
  description:
    "A heads-up display system on your car provides many benefits. See how the revolutionary HUD technology illuminates your windshield in this guide from Safelite.",
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

export default function HeadsUpDisplayGuidePage() {
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
        title="A guide to heads-up display"
        image={{
          alt: "car heads up display speedometer on windshield",
          desktop: {
            src: `${IMAGES}/heads-up-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/heads-up-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          A heads-up display, or HUD, is a display technology that projects information directly into the driver&rsquo;s
          line of sight on the vehicle&rsquo;s windshield.
        </p>
        <p>
          HUD is transparent and does not obstruct the driver&apos;s viewport, instead, the technology helps keep the
          driver&rsquo;s eyes on the road. The screen displays speed, blind-spot monitoring warnings, audio displays,
          incoming calls, and GPS navigation.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Does my vehicle have a heads-up display or HUD?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/heads-up-display.jpg`}
              alt="does your car have a vehicle heads up display"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                If it is not immediately apparent that there are images projected into the windshield when looking
                straight ahead from the driver&rsquo;s seat, then you may have to check your user manual. These images
                may appear in the windshield glass or projected in augmented reality using the curvature of the
                windshield glass.
              </p>
              <p>
                When you&apos;re purchasing a new vehicle, chances are you&apos;ve been pitched on the idea of adding a
                heads-up display. If you don&apos;t have the HUD projecting on your windshield, the good news is that
                there&apos;s an app for that. With the variety of apps, place your phone facing upwards on the dashboard,
                and through the phone&apos;s GPS, you can display all information.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <SectionHeading>What are the benefits of having a&nbsp;heads-up display?</SectionHeading>
      <ContentHalves
        left={
          <ContentImage
            src={`${IMAGES}/hud-control.jpg`}
            alt="benefits of vehicle heads up display"
            width={480}
            height={280}
            ratio="58.33333%"
          />
        }
        right={
          <ContentBlock>
            <p>
              A heads-up display is safe, smart, and revolutionizing. With the amount of distractions on the road,
              utilizing this form of augmented reality to have speed and approaching turns display on your windshield
              helps maintain your focus.
            </p>
            <p>
              The main benefit of having a HUD in your vehicle is not having to take your eyes off the road when driving
              to get necessary information about your driving and the vehicle. Some displays also include speedometers to
              inform how fast the vehicle is going, navigational indicators, and tachometers. These types of systems are
              connected to the in-vehicle computers, much like rain sensors. Other common features that may be shown on
              your HUD include:
            </p>
            <ul>
              <li>Vehicle speed</li>
              <li>Current speed limit</li>
              <li>Engine RPM</li>
              <li>Navigation directions</li>
              <li>Infotainment details</li>
              <li>Turn signal indicators</li>
              <li>Battery charge level&nbsp;</li>
              <li>Safety system alerts (i.e., blind-spot monitoring)</li>
              <li>Safety warning lights</li>
            </ul>
            <p>
              Any time you take your eyes off the road, no matter how brief, increases your chances of an accident.
              However, there are certain things you should monitor when driving like your speed and how hard you are
              pushing the engine. That&apos;s the impact of heads-up display on your car windshield.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>Heads-up display and replacement</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                While the HUD on your car provides a number of benefits, you could still be facing a broken or cracked{" "}
                <Link href="/windshield-replacement">windshield that needs replacement.</Link> Because the heads-up
                display is typically projected into the windshield, you will need to inform whoever is replacing your
                windshield if you had a heads-up display previously so that it can be properly re-installed.
              </p>
              <p>
                With a heads-up display, you&apos;re looking at an entirely polarized windshield. Replacing an HUD
                windshield is more expensive than a typical replacement project. Our technicians work with many major
                insurance carriers to ensure the lowest cost for your replacement. Schedule an appointment with
                Safelite and get yourself back on the road.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

