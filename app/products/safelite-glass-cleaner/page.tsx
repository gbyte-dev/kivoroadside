import type { Metadata } from "next";
import Image from "next/image";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";

export const metadata: Metadata = {
  title: "Auto Glass Cleaner | Windshield &amp; Window Cleaner | Safelite",
  description:
    "Want glass cleaner that leaves you with streak free windows? Safelite's windshield cleaner is what the pros use. Get the best auto glass cleaner now.",
};

const IMAGES = "/image/services/products";
const AMAZON_URL = "https://www.amazon.com/Safelite-Glass-Cleaner-19-Pack/dp/B016MNRN62";

// The blue 56px button, as a plain <a>/<button> like on the reference
const BUTTON =
  "h-[56px] min-w-[177px] items-center justify-center rounded-[16px] border border-[#0070d1] bg-[#0070d1] px-12 text-base font-medium! leading-none text-white! no-underline!";

// Empty paragraphs and headings kept from the reference, for its spacing
function Spacer() {
  return (
    <div>
      <p>&nbsp;</p>
      <p />
    </div>
  );
}

function Products() {
  return (
    // The last gray box of the secondary content (no top margin as the first child)
    <GrayBox className="mt-0!">
      <SectionHeading>Wiper Blades</SectionHeading>
      <ContentHalves
        left={
          <Image
            src={`${IMAGES}/wiper-blades.jpg`}
            alt="A Safelite technician installing windshield wiper blades."
            title="Safelite wipers"
            width={960}
            height={560}
            className="inline h-auto max-w-full align-baseline"
          />
        }
        right={
          <>
            <ContentBlock>
              <p>
                Replacing wiper blades after a windshield repair or replacement is important to ensure old wipers
                don&apos;t re-damage your glass. Our Safelite wiper blades can be installed by a technician at your
                upcoming appointment or purchased online.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>Key features:</strong>
              </p>
              <ul>
                <li>Improved visibility</li>
                <li>Durable, all-weather performance</li>
                <li>Backed by a six-month guarantee</li>
              </ul>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>Do I need new wiper blades?</strong>
              </p>
              <p>You&apos;ll know it&apos;s time for new blades when you:</p>
              <ul>
                <li>Have had your windshield glass repaired or replaced</li>
                <li>See streaking or hazing on your windshield</li>
                <li>Notice the rubber is worn or damaged</li>
                <li>Haven&apos;t replaced them in six months or more</li>
              </ul>
            </ContentBlock>
            <div>
              <button type="button" aria-disabled="true" className={`flex tracking-normal ${BUTTON}`}>
                Coming soon
              </button>
            </div>
          </>
        }
      />
      {/* .spacer-widget.xlg */}
      <div aria-hidden="true" className="h-5 w-full" />
      <HorizontalRule variant="gray-line" />

      <SectionHeading>Glass Cleaner</SectionHeading>
      <ContentHalves
        left={<ContentImage src={`${IMAGES}/glass-cleaner.jpg`} alt="safelite windshield wiper blades" />}
        right={
          <>
            <ContentBlock>
              <p>
                Our professional-grade glass cleaner can be used on mirrors, windows, windshields and other glass
                surfaces.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>Key features</strong>
              </p>
              <ul>
                <li>Streak and ammonia free with a pleasant smell</li>
                <li>Strong enough to cut through dirt</li>
                <li>Wipes up easily, dries quickly</li>
              </ul>
            </ContentBlock>
            {/* .cta-widget */}
            <div>
              <a href={AMAZON_URL} className={`inline-flex text-center ${BUTTON} hover:bg-[#0063ad]`}>
                Purchase Now
              </a>
            </div>
            <div>
              <h4 />
              <h4>&nbsp;</h4>
            </div>
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="block">
              <ContentImage src={`${IMAGES}/amazon-logo.png`} alt="" width={90} height={44} ratio="48.88889%" />
            </a>
            <Spacer />
          </>
        }
      />
      <HorizontalRule variant="gray-line" />

      <SectionHeading>Rain Repellent Treatment</SectionHeading>
      <ContentHalves
        left={
          // The reference stretches this photo to fill its 64.89% box
          <span className="relative mb-5 block w-[912px] max-w-full overflow-hidden md:mb-[30px]">
            <span className="block pt-[64.8897%]" />
            <Image
              src={`${IMAGES}/rain-repellent.jpg`}
              alt="windshield rain repellent"
              width={912}
              height={560}
              className="absolute left-0 top-0 h-full w-full"
            />
          </span>
        }
        right={
          <>
            <ContentBlock>
              Treating your windshield with rain repellent improves visibility in harsh conditions and can help your
              wiper blades last longer with less frequent use.
              <p />
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>Key features</strong>
              </p>
              <ul>
                <li>Reduces rain glare, especially at night</li>
                <li>Makes snow, ice and dirt easier to remove</li>
                <li>Lasts up to six months through washes, wiper fluid spray and frequent blade use</li>
              </ul>
            </ContentBlock>
            <Spacer />
          </>
        }
      />
    </GrayBox>
  );
}

export default function SafeliteGlassCleanerPage() {
  return (
    <ServicePageShell secondary={<Products />} strongWeight="medium">
      <ServiceHero
        title="Protect your auto glass"
        image={{
          alt: "",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 380, ratio: "64.95727%" },
          tablet: null,
          wide: { src: `${IMAGES}/hero-wide.jpg`, width: 1100, height: 380, ratio: "34.54546%" },
        }}
      >
        <h2 className="text-left!">Safelite products to help you see the road ahead</h2>
        <p>
          Keep your auto glass safe and clear with our wiper blades, rain repellent and glass cleaner. Our products can
          be purchased online, through your customer portal or during your scheduled appointment.
        </p>
      </ServiceHero>
    </ServicePageShell>
  );
}
