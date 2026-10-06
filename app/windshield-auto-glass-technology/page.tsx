import type { Metadata } from "next";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import IconTitleCards, { type IconTitleCard } from "@/app/components/services/icon-title-cards";

export const metadata: Metadata = {
  title: "Windshield & Auto Glass Technology Guide | Safelite",
  description:
    "When it comes to your windshield and related auto glass, there are unique features and technologies used. See the glass technologies in this Safelite guide.",
};

const IMAGES = "/image/services/windshield-auto-glass-technology";
const ICONS = IMAGES;

const GLASS_PARTS: IconTitleCard[] = [
  { href: "/windshield-auto-glass-technology/windshield", title: "Windshield", image: { src: `${ICONS}/front.png`, width: 89, height: 58, ratio: "65.16854%", alt: "" } },
  { href: "/windshield-auto-glass-technology/rear-windshield", title: "Rear windshield", image: { src: `${ICONS}/rear.png`, width: 110, height: 51, ratio: "46.36364%", alt: "" } },
  { href: "/windshield-auto-glass-technology/side-window", title: "Side glass", image: { src: `${ICONS}/side.png`, width: 151, height: 52, ratio: "34.43709%", alt: "" } },
  { href: "/windshield-auto-glass-technology/vent-window", title: "Vent glass", image: { src: `${ICONS}/vent.png`, width: 152, height: 52, ratio: "34.21053%", alt: "" } },
  { href: "/windshield-auto-glass-technology/quarter-glass", title: "Quarter glass", image: { src: `${ICONS}/quarter.png`, width: 152, height: 52, ratio: "34.21053%", alt: "" } },
  { href: "/windshield-auto-glass-technology/truck-sliders", title: "Sliders", image: { src: `${ICONS}/sliders.png`, width: 75, height: 60, ratio: "80%", alt: "" } },
  { href: "/windshield-auto-glass-technology/sunroof", title: "Sunroof", image: { src: `${ICONS}/sunroof.png`, width: 109, height: 51, ratio: "46.78899%", alt: "" } },
];

const GLASS_TECHNOLOGIES: IconTitleCard[] = [
  { href: "/windshield-auto-glass-technology/adas", title: "ADAS", image: { src: `${ICONS}/adas.png`, width: 86, height: 68, ratio: "79.06977%", alt: "" } },
  { href: "/windshield-auto-glass-technology/headlight-sensors", title: "Light sensor", image: { src: `${ICONS}/light-sensor.png`, width: 88, height: 38, ratio: "43.18182%", alt: "" } },
  { href: "/windshield-auto-glass-technology/rain-sensors", title: "Rain sensor", image: { src: `${ICONS}/rain-sensor.png`, width: 91, height: 38, ratio: "41.75824%", alt: "" } },
  { href: "/windshield-auto-glass-technology/vin", title: "VIN", image: { src: `${ICONS}/vin.png`, width: 82, height: 50, ratio: "60.97561%", alt: "" } },
  { href: "/windshield-auto-glass-technology/heads-up-display", title: "Heads-up display", image: { src: `${ICONS}/heads-up.png`, width: 84, height: 52, ratio: "61.90476%", alt: "" } },
  { href: "/windshield-auto-glass-technology/infrared-windshield-glass", title: "Infrared", image: { src: `${ICONS}/infrared.png`, width: 87, height: 38, ratio: "43.67816%", alt: "" } },
  { href: "/windshield-auto-glass-technology/heated-windshields", title: "Heated", image: { src: `${ICONS}/defroster.png`, width: 83, height: 52, ratio: "62.6506%", alt: "" } },
  { href: "/windshield-auto-glass-technology/visor-strips", title: "Shade band", image: { src: `${ICONS}/band.png`, width: 83, height: 52, ratio: "62.6506%", alt: "" } },
  { href: "/windshield-auto-glass-technology/night-vision", title: "Night vision", image: { src: `${ICONS}/night-vision.png`, width: 57, height: 57, ratio: "100%", alt: "" } },
];

const WIDE_HERO = { src: `${IMAGES}/hero-wide.jpg`, width: 1100, height: 340, ratio: "30.90909%" };

export default function WindshieldAutoGlassTechnologyPage() {
  return (
    <ServicePageShell secondary={null}>
      <ServiceHero
        title="Auto glass technology"
        subtitle="Beyond the glass"
        image={{
          alt: "windshield autoglass technology",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 340, ratio: "58.11966%" },
          tablet: null,
          wide: WIDE_HERO,
        }}
      >
        <p>
          You may think that one piece of auto glass is not different from the other, but the fact of the matter is that
          every pane from your windshield to your sun roof have unique compositions, features, and technologies.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Trust our expertise</SectionHeading>
        <ContentHalves
          left={
            <>
              {/* A smaller cut of the photo is used on phones */}
              <div className="hidden md:block">
                <ContentImage
                  src={`${IMAGES}/windshield.png`}
                  alt="windshield autoglass services"
                  width={417}
                  height={210}
                  ratio="50.35971%"
                />
              </div>
              <div className="md:hidden">
                <ContentImage
                  src={`${IMAGES}/windshield-mobile.png`}
                  alt="windshield autoglass services"
                  width={290}
                  height={146}
                  ratio="50.34483%"
                />
              </div>
            </>
          }
          right={
            <ContentBlock>
              <p>
                From modern to older modeled vehicles, you can see the differences and advancements of auto glass
                technology. From sensors embedded in the windshield, to automatic sunroofs and infrared glass, your
                car&rsquo;s glass technology varies and is more than just glass.
              </p>
              <p>
                We have compiled a guide on all types of auto glass so you can become familiar with the features and
                technologies in your vehicle. Use these guides to learn more about different pieces of auto glass and
                the state of the art technologies that goes into them. Everything from different parts and designs, to
                the most recent innovations in today&rsquo;s vehicles.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={
          <>
            <div>
              <h2>A guide to auto glass parts</h2>
            </div>
            <HorizontalRule variant="left-red" />
          </>
        }
        right={
          <ContentBlock>
            <p>
              When it comes to auto glass, it&rsquo;s not one size fits all. It&rsquo;s also not one type fits all. For
              example, did you know that there are several types of windshield glass or that the little window next to
              your regular window is called a quarter pane?
            </p>
            <p>
              Safelite technicians are well versed in this kind of auto glass knowledge, but it is still important to
              have a basic understanding of your vehicles glass. Cars are made more advanced and better equipped in
              today&rsquo;s automotive market. We inform you on all the glass parts that could be present in the car you
              drive.
            </p>
            <p>
              Use this resource to help you identify the names, functions, and safety features of different auto glass
              panes.
            </p>
          </ContentBlock>
        }
      />
      <IconTitleCards cards={GLASS_PARTS} />

      {/* .gray-box-end: tighter gray band that tucks under the "Don't wait" band */}
      <GrayBox className="mb-[-20px]! mt-[10px]! pb-5! pt-10!">
        <ContentHalves
          left={<HalvesHeading>Glass technologies in your car</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                For many modern vehicles, auto glass isn&rsquo;t just glass anymore. In fact, today&rsquo;s auto glass is
                packed with a wide array of state of the art technologies. Glass technology is designed to keep you safe
                when you&rsquo;re behind the wheel, sensing danger and alerting you of different objects or animals that
                are encountered on the road.
              </p>
              <p>
                All of these glass technologies on your windshield and throughout the auto glass have revolutionized
                driver safety. The advancement even accounts for the identification number on your vehicle to be
                embedded in the windshield glass.
              </p>
              <p>Learn more about these technologies and the role that your auto glass plays in their operation.</p>
            </ContentBlock>
          }
        />
        <IconTitleCards cards={GLASS_TECHNOLOGIES} />
      </GrayBox>
    </ServicePageShell>
  );
}
