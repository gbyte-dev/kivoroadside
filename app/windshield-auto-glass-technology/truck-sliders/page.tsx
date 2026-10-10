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
  title: "A Guide to Truck Sliders | Replacement Truck Slider Windows | Safelite",
  description:
    "Truck sliders are rear windows that act as a rear windshield. Safelite provides this guide to rear truck sliding windows to inform you and keep you safe.",
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
    href: "/windshield-auto-glass-technology/vent-window",
    label: "Vent glass",
    image: {
      src: `${ICONS}/vent.png`,
      alt: "",
      width: 152,
      height: 52,
      ratio: "34.21053%",
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

export default function TruckSlidersGuidePage() {
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
        title="A guide to truck slider glass"
        image={{
          alt: "car slider glass window replacement",
          desktop: {
            src: `${IMAGES}/sliders-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/sliders-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          When you hear the term slider glass for automobiles, it is referring to the type of auto glass found on trucks,
          and are also known as truck slider windows. Some types of truck slider windows are made of safety glass. These
          auto glass windows are held in place and secured by metal or plastic latches inside the vehicle.
        </p>
        <p>
          For pickup trucks, these windows are an important component to keeping drivers safe. Additionally, they provide
          a cool breeze from the back of the truck on warm spring or summer days.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>What are truck sliders?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                If you have a pickup truck, chances are you have a truck slider. These sliding windows, when making a
                comparison to other types of auto glass, most resemble a{" "}
                <Link href="/rear-windshield-replacement">rear windshield</Link>. This provides a rear viewport for truck
                drivers whose passenger cabins are shorter than the typical passenger cabin of sedans, coupes, SUVs,
                and other vehicles.
              </p>
              <p>
                It also acts like a rear windshield in that the panes are fully contoured to the shape of the vehicle
                with aluminum frames, providing structural support to the roof of the truck cabin. However, truck
                sliders are typically sealed in with rubber seals that are air- and water-tight to keep out the
                elements.
              </p>
              <p>
                On pickup trucks, you&rsquo;ll notice the rear sliding window, and it could be in clear glass or solar
                glass, depending on the driver&rsquo;s wishes.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>What are some features of truck sliders?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Truck sliders are customizable for each vehicles&rsquo; make and model. Customization comes from the number
              of window panels and how many slide open to vent the truck, as well as how the panes are secured and
              latched.
            </p>
            <ul>
              <li>Tri-panel truck sliders typically have one window panel that slides open to vent.</li>
              <li>
                Four-panel truck sliders have two windows that slide along the track, what&rsquo;s known as
                &ldquo;duo-venting&rdquo; truck sliders, and gives the widest possible opening.
              </li>
            </ul>
            <p>
              The type of tempered or safety glass used in truck sliders can be customized as well, allowing drivers to
              choose from solar privacy glass which helps reduce interior heat build-up or privacy tints.
            </p>
            <p>
              When installing the truck sliders, urethane adhesives are used for a positive bond. When your sliding
              window on the truck is damaged, replacements are simple with the rubber seals. If you have windshield
              damage that needs replacement, or require{" "}
              <Link href="/side-window-replacement">side car window repair</Link> on your truck, call our technicians
              for prompt services.
            </p>
          </ContentBlock>
        }
      />

      <HorizontalRule variant="gray-line" />
    </ServicePageShell>
  );
}

