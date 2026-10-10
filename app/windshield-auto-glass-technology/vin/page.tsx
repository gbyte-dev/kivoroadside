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
  title: "Where to Find Your VIN Number: Windshield & More | Safelite",
  description:
    "When you're wondering where you can find your VIN number, check the windshield. Use our guide at Safelite when you need your vehicle identification number.",
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

export default function VinGuidePage() {
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
        title="A guide to vehicle identification numbers (VIN)"
        image={{
          alt: "car vin number on windshield",
          desktop: {
            src: `${IMAGES}/vin-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/vin-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          A vehicle identification number, commonly known as a VIN, is a code composed of 17 numbers and characters
          that is assigned to a specific automobile. A VIN is unique to each vehicle, much like a serial number or a
          fingerprint.
        </p>
        <p>
          Car manufacturers stamp and print VIN numbers upon multiple areas of the vehicle so that owners can provide
          proof of ownership and prevent fraudulent vehicle sales.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Where is my VIN located on my vehicle?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/vin-location.jpg`}
              alt="where is the vin located on your car"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                A situation could arise where you need to quickly locate the identification number on your vehicle.
                With a VIN number on every car, where should you look?
              </p>
              <p>There a multiple places, both on and off your vehicle, that you can find and look up your VIN.</p>
              <p>If you are on the road and do not have access to your car or truck&rsquo;s documentation, look on the vehicle:</p>
              <ul>
                <li>At the base of your windshield near the driver&apos;s side</li>
                <li>On the car frame near the apparatus that holds the windshield wiper fluid</li>
                <li>Driver-side door post when the door latches</li>
                <li>Underneath the spare tire</li>
              </ul>
              <p>
                Probably the easiest way to find the 17-digit number is to look at the dashboard on the driver&rsquo;s
                side of the window by standing outside your vehicle. Then, look at the corner of the dashboard where it
                meets your windshield and find the 17-digit VIN number.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>Where is my VIN located at home?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              If you are at home and need to schedule an appointment for windshield repair services or auto service,
              take a look at these documents to locate your VIN:
            </p>
            <ul>
              <li>Vehicle&rsquo;s title document</li>
              <li>The vehicle&rsquo;s registration documentation</li>
              <li>Any insurance documents</li>
              <li>Body shop repair records</li>
              <li>Vehicle history report</li>
              <li>Owner&apos;s manual</li>
            </ul>
            <p>
              When the time comes that you&rsquo;re going to need your VIN number for an appointment or other service,
              remember there are multiple ways to find the number, both on the vehicle and off.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>How is my VIN used?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                There a numerous reasons why someone would need to know your VIN, for example, if there was a factory
                recall for a certain auto maker, this would allow the manufacturer to notify all consumers who have
                purchased a vehicle in that line about the defect or nature of the recall. It is much like the
                vehicle&rsquo;s DNA, telling where and when the auto was made, as well as tracking if the vehicle has
                changed ownership so that those purchasing the vehicle can track the usage, repairs, and services
                rendered on the vehicle.
              </p>
              <p>
                Knowing your VIN can be extremely useful when you{" "}
                <Link href="/windshield-replacement">need a windshield</Link> replacement because Safelite can acquire
                the specific parts for your car or truck. Some makes and models will differ in design year-to-year, so
                knowing your VIN or knowing where your VIN can be located is helpful for the windshield technicians in
                preparing to replace your windshield.
              </p>
              <p>
                We use your VIN to determine the right piece of glass to get prior to your appointment. For all
                windshield repairs and replacements, have your VIN number ready and schedule service at a convenient
                time for you.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

