import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import NavCards from "@/app/components/services/nav-cards";
import type { NavCardData } from "@/app/components/services/service-links";

export const metadata: Metadata = {
  title: "A Guide to Windshield Shade Bands & Sun Strips | Safelite",
  description:
    "Does your car have a windshield visor tint? Use a sun strip or shade band to help block the sun and keep you focused on the road. Learn more here.",
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

export default function VisorStripsGuidePage() {
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
        title="A guide to shade bands"
        image={{
          alt: "car shade band on windshield",
          desktop: {
            src: `${IMAGES}/shade-band-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/shade-band-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          A shade band is a strip of tinted glass, also known as a sun visor strip, that is placed at the top edge of
          the windshield glass, below the roof of the vehicle.
        </p>
        <p>
          Shade bands are designed to reduce glare from the sun, which can compromise the driver&rsquo;s safety by
          blocking their vision or increasing sun glare in their eyes.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>Does my vehicle have a shade band?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                Looking at your windshield, if there is a 3&rdquo;-6&rdquo; strip of darker tinted glass at the top of the
                windshield where it meets the roof, then your vehicle has a shade band. Because this feature of the car
                or truck is not mandatory for driving on the road, take note if your vehicle has one, as they are not
                standard.
              </p>
              <p>
                The purpose of a shade band is to provide protection from the glare drivers see from the sun. This sun
                visor strip is placed below the roof and just above your interior windshield visor. The goal of the
                strip is to block the sun while not obstructing your view.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>How does the shade band help me when I&rsquo;m driving?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Windshields are not completely clear and are often tinted to diminish the intensity of sunlight on your
              eyes when driving. The shade band, also known as the sun strip, is there to diffuse the sunlight in your
              eyes on a sunny day and especially just before sundown.
            </p>
            <p>
              The shade band does not completely block out the light, as nothing should never fully obstruct your view
              of the road ahead. Depending on the auto maker, colors vary from gray to green to blue and many other
              sun-reducing shades.
            </p>
            <p>
              There is a tremendous value add when you have a window tint strip on your windshield. Minimize the effect
              that the sun has on your eyes. Contact us for car sun visor replacement.
            </p>
          </ContentBlock>
        }
      />

      <HorizontalRule variant="gray-line" />
    </ServicePageShell>
  );
}

