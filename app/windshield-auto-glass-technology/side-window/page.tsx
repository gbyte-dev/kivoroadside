import type { Metadata } from "next";
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
  title: "A Guide to Side Windows | Side Car Window Glass | Safelite",
  description:
    "Are side car windows made with different glass than windshield? What type of glass is used in car windows? Learn more with our guide to side windows.",
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

export default function SideWindowGuidePage() {
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
        title="A guide to side car window glass"
        image={{
          alt: "guide to side car windows",
          desktop: {
            src: `${IMAGES}/side_glass-d.jpg`,
            width: 585,
            height: 380,
            ratio: "64.95727%",
          },
          wide: {
            src: `${IMAGES}/side_glass-wd.jpg`,
            width: 1100,
            height: 380,
            ratio: "34.54546%",
          },
          tablet: null,
        }}
      >
        <p>
          These auto glass panes are located on the sides of the vehicle in the doors. Side windows can take many shapes
          and sizes and either sliding or stationary.
        </p>
        <p>
          Most modern cars have an electric motor that &ldquo;rolls&rdquo; the window pane up and down, using a switch
          controlled by the passenger. Older cars required a crank to roll down the window and only the driver and front
          passenger windows would roll fully into the door of the car.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>What type of glass is used in car windows?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                Car and truck side windows are made of tempered glass, while others are laminated. Made using the same
                glass tempering method as the rear windshield, side window glass is what&rsquo;s known as &ldquo;safety
                glass.&rdquo; It is called this because the glass is designed to shatter into tiny, harmless glass balls
                instead of shattering into shards that can cut or injure passengers.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>Why are most all side car windows are made of this tempered glass?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Tempered glass is four or five times as sturdy as ordinary glass panes. Because of this, tempered glass
              offers strength and safety to both drivers and passengers if an accident or a broken window were to occur.
            </p>
            <p>
              Tempered glass uses a chemical treatment that heats and then cools the glass for better reinforcement than
              standard windows. The elevated temperature creates an equilibrium on the inside so that whenever the
              glass is destroyed, it won&rsquo;t fall apart and break in sharp edges.
            </p>
            <p>
              With tempered glass, the glass shards are less likely to lead to major trauma that can be caused by sharp
              bits like a home window would. When subjected to enough force, the properties of the tempered glass cause
              it to explode outward. This is due to the inner tension created by contraction of the glass combined with
              the outer strength created by compression during the tempering process.
            </p>
            <p>
              The only disadvantage to the tempered glass is that sometimes it may appear to explode without cause. Just
              like any other piece of auto glass, side windows are thoroughly tested by auto manufacturers, so it is
              previous stress or force that has weakened the glass to the point of bursting.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>Side car window replacement</SectionHeading>
        <ContentHalves
          left={
            <ContentImage
              src={`${IMAGES}/side-glass-broken.jpg`}
              alt="side car window replacement"
              width={480}
              height={280}
              ratio="58.33333%"
            />
          }
          right={
            <ContentBlock>
              <p>
                When your side car window has broken or cracked, inquire about window replacement services. You can
                temporarily fix your broken window, but schedule an appointment for a complete replacement to get back
                to driving safely without risking any debris or objects causing injury to yourself, your passengers, or
                your vehicle.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}

