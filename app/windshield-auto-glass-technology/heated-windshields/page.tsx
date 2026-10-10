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
  title: "A Guide to Heated Windshields: How They Work | Safelite",
  description:
    "Do you know if your windshield is heated? What benefits does a heated windshield provide? Learn about heated glass for your car from Safelite.",
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

export default function HeatedWindshieldsGuidePage() {
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
        title="A guide to heated windshields"
        image={{
          alt: "car heated windshield with defroster",
          desktop: {
            src: `${IMAGES}/heated-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/heated-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          A heated windshield is an auto glass technology that utilizes a heating element embedded within the glass to
          warm the auto glass, quickly melting away ice and frost and evaporating moisture or condensation on the
          windshield.
        </p>
        <p>
          The defroster mechanism makes visibility more manageable in snowy, freezing conditions and gives drivers clear
          sightlines in inclement weather.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>How does a heated windshield work?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/heated-glass.jpg`}
              alt="heated windshield glass"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                The very thin web of tungsten wire (the same wire used in lightbulbs) layered in the glass are heated up
                to raise the temperature of the surface of the glass to defrost or melt snow and ice away from the
                windshield.
              </p>
              <p>
                While the windshield may not get hot or even warm, it will raise the temperature enough to bring the
                surface to above freezing so that ice, precipitation, and condensation do not build up, increasing
                visibility of the road.
              </p>
              <p>
                Most heated windshield technologies use an electrical element to heat the window, making it easier for
                your wipers to clear condensation without affecting visibility and leaving streaks on the windshield.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>What are the benefits of having a heated windshield?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              The main benefits of a heated windshield are clearing away ice and condensation away from the windshield,
              improving visibility. The added benefit of that is not having to run the heaters or air conditioner to
              defog the windshield, saving gas and reducing noise levels by eliminating the blowers. This helps you in
              the long run by paying for gas less often, saving you money.
            </p>
            <p>
              Even if the temperature outside is above freezing, the inside of the windows can fog up. The fog can
              potentially be as dangerous and obstructive to your view as snow or ice on your windshield. With heated
              windshield, you can rid the foggy interior of the glass, giving you a clear view to drive shortly after
              starting the car.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>Heated windshield and replacement</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/heated-windshield-replace.jpg`}
              alt="heated windshield replacement"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                When your heated windshield becomes damaged due to outside conditions, you need to get it repaired
                quickly so the heated grid system continues to function. When the defogger grid becomes scratched or
                has a chip, you may not have enough electrical contact to heat the windshield.
              </p>
              <p>
                In this case, trust the technicians at Safelite for prompt repairs and replacements to get your heated
                windshield working properly. Plus, our experience with{" "}
                <Link href="/windshield-repair">windshield repair</Link> keeps you safe on the road.
              </p>
              <p>
                If your windshield is damaged enough to need replacing, you will need to tell the technicians doing the
                replacement that you have a heated windshield, so the right glass can be ordered. Typically, the heated
                windshield system has wires that lead into your car, and if the windshield is being removed for
                replacement, those can be disconnected and ready for a new windshield.
              </p>
              <p>
                There are many benefits, especially during the winter, to driving a car with a heated windshield. If you
                have any questions about possible repair or replacement, get in touch with us today.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

