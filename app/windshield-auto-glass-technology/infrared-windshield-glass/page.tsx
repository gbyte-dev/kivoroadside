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
  title: "Infrared (IR) Reflective Windshields & Solar Glass | Safelite",
  description:
    "Do you need or have an infrared reflective windshield? Read our guide to see the benefits of IR glass and the impact of solar glass to keep your car cool.",
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

export default function InfraredGuidePage() {
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
        title="A guide to infrared (IR) glass"
        image={{
          alt: "car infrared glass windshield",
          desktop: {
            src: `${IMAGES}/infrared-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/infrared-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          Infrared (IR) glass is an automotive glass technology designed to reflect infrared radiation away from the
          vehicle and insulate against interior heat from the sun.
        </p>
        <p>
          Infrared automotive glass acts as an invisible shield to protect the vehicle&apos;s cabin and reduce the
          amount of heat energy from entering, while keeping internal heat from escaping during colder weather.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>How does IR glass work?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/infrared-windshield.jpg`}
              alt="how infrared reflective glass works"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                Infrared-reflective or IR glass works by filtering out only infrared waves from sunlight, but allowing
                all visible light (which allows us to see) making the glass transparent. While IR windshields do not
                reflect all infrared rays, up to 50% of the IR energy can be reflected back into the atmosphere and cool
                your car or truck to up to 10 degrees Fahrenheit, differing from the modification of tinted windows.
              </p>
              <p>
                All that heat reflected back will also keep your leather seats, steering wheel and other plastic parts
                cooler so you do not burn your skin when moving around inside the car. Plus, you&rsquo;ll beat the glare
                of the sun. It just takes the installation of a solar coat to provide the shade you desire and keep your
                car cool.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>What are the benefits of having an IR glass windshield?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              The most immediate benefit is the cooling of the car, keeping darker surfaces cooler. The long-term
              benefit is savings on fuel. If it is cooler inside the vehicle, there is less need to use the air
              conditioner, making your car use its fuel more efficiently. Over time, the money you saved on gas could pay
              for the windshield, making IR glass and your solar coated windshield a good investment. However, the IR
              windshields tend to run more expensive than regularly filtered windshields.
            </p>
            <p>
              Additionally, because the glass blocks out IR, any radio-controlled devices like automatic car starters,
              need a patch that is IR-permeable in order to function properly. Keeping your car cool during heat waves
              and holding onto your money are added benefits that come with solar coated, IR glass windshields.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>IR glass and windshield replacement</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/infrared-windshield-replace.jpg`}
              alt="infrared glass and windshield replacement"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                If you need to get your windshield replaced for any reason, make sure you let your auto glass
                technician know that you would like a replacement with a solar windshield using IR glass, as it may not
                be standard on all makes and models. Having your VIN or informing Safelite that you would like IR glass
                can get you back on the road quicker, so schedule an appointment today.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

