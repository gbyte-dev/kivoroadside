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
  title: "A Guide to Vent Windows | Car Window Vents | Safelite",
  description:
    "The vent window aerates your vehicle when functioning properly. Learn about the uses of vent windows and if your car features these pieces of glass.",
};

const IMAGES = "/image/services/windshield-auto-glass-technology";
const ICONS = IMAGES;

const GLASS_PARTS: NavCardData[] = [
  {
    href: "/windshield-auto-glass-technology/windshield",
    label: "Windshield",
    image: {
      src: `${ICONS}/front.png`,
      alt: "",
      width: 89,
      height: 58,
      ratio: "65.16854%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/rear-windshield",
    label: "Rear windshield",
    image: {
      src: `${ICONS}/rear.png`,
      alt: "",
      width: 110,
      height: 51,
      ratio: "46.36364%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/side-window",
    label: "Side glass",
    image: {
      src: `${ICONS}/side.png`,
      alt: "",
      width: 151,
      height: 52,
      ratio: "34.43709%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/quarter-glass",
    label: "Quarter glass",
    image: {
      src: `${ICONS}/quarter.png`,
      alt: "",
      width: 152,
      height: 52,
      ratio: "34.21053%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/truck-sliders",
    label: "Sliders",
    image: {
      src: `${ICONS}/sliders.png`,
      alt: "",
      width: 75,
      height: 60,
      ratio: "80%",
    },
  },
  {
    href: "/windshield-auto-glass-technology/sunroof",
    label: "Sunroof",
    image: {
      src: `${ICONS}/sunroof.png`,
      alt: "",
      width: 109,
      height: 51,
      ratio: "46.78899%",
    },
  },
];

export default function VentWindowGuidePage() {
  return (
    <ServicePageShell
      secondary={
        <>
          <ContentHalves
            left={<HalvesHeading>A guide to auto glass parts</HalvesHeading>}
            right={
              <ContentBlock>
                <p>
                  Use this resource to help you identify the names, functions, and safety features of different auto glass
                  panes.
                </p>
              </ContentBlock>
            }
          />
          <NavCards cards={GLASS_PARTS} variant="icon" columns={5} />
        </>
      }
    >
      <ServiceHero
        title="A guide to vent window glass"
        subtitle="Function of vent windows on your car"
        image={{
          alt: "car vent window replacement",
          desktop: {
            src: `${IMAGES}/vent_glass-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/vent_glass-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          You may not realize it, but your car and truck has more glass than just the{" "}
          <Link href="/windshield-auto-glass-technology/windshield">windshields</Link> and retractable windows. The
          vent window is a definitive part of the difference in designs amongst auto makers, merging form and design
          of the vehicle, with venting functionality.
        </p>
        <p>
          As vehicles are becoming more advanced in their features and modernized with new technologies, the vent window
          has seemingly disappeared, but they had been a staple and a complement to{" "}
          <Link href="/windshield-auto-glass-technology/side-window">side windows</Link> for many car and truck
          generations.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>What are vent windows?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                Vent windows are auto glass windows that are mounted on the sides of vehicles, usually next to
                retractable windows. Vent windows differ from{" "}
                <Link href="/windshield-auto-glass-technology/quarter-glass">quarter glass</Link> when they can tilt
                open. In the last 20 or so years, almost no vent glasses open on passenger cars.
              </p>
              <p>
                For drivers with older models, the vent windows may still be a central part of their driving experience.
                They appear on many models that lack central air conditioning, and the role of these vehicle window
                vents is help keep the driver and passenger seats of the car at a comfortable temperature when the sun
                makes the cabin too hot.
              </p>
              <p>
                Now the purpose of side vent windows is cosmetic or to make rear door glasses able to roll down farther
                than they would without the vent glass, due to the rear wheel taking up part of the corner of the door.
                Vent windows are found in rear and front windows, or sometimes in front of the front doors.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>How were vent windows developed?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              The vent window was created by placing quarter glass on a hinge, to allow ventilation of the passenger
              cabin, back when cars did not have air conditioning. The quarter glass vent window has since gone out of
              style in automobile design.
            </p>
            <p>
              Another reason that car vent windows have disappeared in newer modeled vehicles is due to fuel efficiency.
              Many drivers are not putting their windows down and cars are more fuel efficient with side windows up and
              the air conditioner on.
            </p>
            <p>
              Cars now are designed with aerodynamics in mind, maximizing wind flow. With windows open, the wind
              resistance is increased. Manufacturers now focus on various{" "}
              <Link href="/windshield-auto-glass-technology">auto glass technologies</Link> to maximize performance and
              aerodynamics.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>What are some uses of vent windows?</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/vent-glass-broken.jpg`}
              alt="car vent window replacement"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                To the ever-watchful driver, vent windows provide a quick glimpse of the road surrounding the vehicle so
                that the driver may turn, accelerate, park, or change lanes safely.
              </p>
              <p>
                The main use is to alleviate the heat on the seats of the car and on your body when behind the wheel or
                in the passenger seat. If you&rsquo;re driving a vehicle that has vent windows and you experience damage
                to the glass, our{" "}
                <Link href="/side-window-replacement">side auto glass replacement services</Link> help keep your car
                intact.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

