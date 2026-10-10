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
  title: "A Guide to Windshields | Car Windshield Parts | Safelite",
  description:
    "Your windshield is an important part of your vehicle's structural integrity. Learn about innovations and technology used in making car windshield glass.",
};

const IMAGES = "/image/services/windshield-auto-glass-technology";
const ICONS = IMAGES;

const GLASS_PARTS: NavCardData[] = [
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

export default function WindshieldGuidePage() {
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
        title="A guide to windshield glass"
        image={{
          alt: "A guide to windshield glass",
          desktop: {
            src: `${IMAGES}/windshield_guide-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/windshield_guide-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          Windshields are on every car, truck, and automobile on the road. They are so ubiquitous, many assume that the
          auto windshield is just another part of the vehicle&rsquo;s hardware. However, the windshield itself does more
          than just shield you from the wind
        </p>
        <p>
          The auto glass and windshield parts need to be of the highest quality to maintain durability when you&rsquo;re
          on the road. There have been numerous innovations and technologies used in the evolution of car windshield
          glass, and now you&rsquo;ll see many features incorporated in your glass.
        </p>
      </ServiceHero>

      <GrayBox>
        <SectionHeading>Features of the windshield</SectionHeading>
        <ContentHalves
          left={
            <>
              {/* Desktop image */}
              <div className="hidden md:block">
                <ContentImage
                  src={`${IMAGES}/windshield-a.png`}
                  alt="windshield autoglass services"
                  width={417}
                  height={210}
                  ratio="50.35971%"
                />
              </div>
              {/* Mobile image */}
              <div className="md:hidden">
                <ContentImage
                  src={`${IMAGES}/windshield-uwm.png`}
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
                It really will depend on the make and model of your vehicle, but many windshields have the same features
                that are designed to keep occupants of the vehicle safe and make it easier to drive in less-than-ideal
                conditions.
              </p>
              <ul>
                <li>Windshield wipers</li>
                <li>Rain sensors</li>
              </ul>
              <p>
                When you bring in your vehicle to have your windshield repaired or replaced, make sure you consider
                these parts that will also need replacing. With us, you&rsquo;ll always receive the{" "}
                <Link href="/the-safelite-advantage">Safelite Advantage</Link> with stronger repairs and better{" "}
                <Link href="/windshield-replacement">windshield replacement</Link> glass.
              </p>
            </ContentBlock>
          }
        />

        <ContentHalves
          left={<HalvesHeading>What happens when my windshield is damaged?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                While designed for strength and durability, windshields can still become damaged from various situations
                such as flying debris like rocks and gravel, vandalism, car accidents, and extreme weather conditions.
                Even minor cracks and chips can quickly spread, especially when exposed to temperature changes or
                continued stress.
              </p>
              <p>
                A damaged windshield can compromise your vehicle&apos;s structural integrity and can impair your
                visibility while driving, posing safety risks. Trust Safelite for swift, professional{" "}
                <Link href="/windshield-repair">repair</Link> or{" "}
                <Link href="/windshield-replacement">replacement</Link> services to ensure clear visibility and safety
                of everyone on the road.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>How is a windshield made?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Each auto maker has distinct and specific ways they make windshields for their cars and trucks, but how a
              windshield is made tends to be the same across the board. The end result of making a good windshield, is
              that the glass stays in once piece.
            </p>
            <ol>
              <li>A layer of polyvinyl butryal (PVB) is sandwiched between two sheets of glass</li>
              <li>
                Pressure and heat are applied, which chemically and mechanically bonds the outer sheets of glass to
                the inner plastic layer
              </li>
              <li>The unfinished windshield is bent and cut to fit into the frame on the car or truck</li>
              <li>
                The windshield is molecularly bonded with sealant to the frame of the car, which is completely water
                and air tight.
              </li>
            </ol>
          </ContentBlock>
        }
      />

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>Importance of the windshield</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                <strong>Strengthening the windshield by laminating the auto glass did two main things:&nbsp;</strong>
              </p>
              <ol>
                <li>Improved the structural integrity of the car</li>
                <li>Greatly increased the safety of the passenger</li>
              </ol>
              <p>
                The rigidity of the windshield and its bonds to the car strengthens the frame of the entire vehicle.
                Additionally, it keeps the roof from buckling in case of a rollover.
              </p>
              <p>
                Most importantly, it enables the passenger airbag to deploy properly and prevents the passenger (and
                driver) from being ejected from the car. A driver airbag deploys by shooting out straight from the
                steering wheel to cushion the impact of the driver, whereas the passenger airbag actually shoots
                upwards, bounces off of the windshield towards the passenger.
              </p>
              <p>
                If your windshield is damaged or broken, you can see why it is important to more than just the driver
                to <Link href="/windshield-repair">get your windshield fixed.</Link>
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

