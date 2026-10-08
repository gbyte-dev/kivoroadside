import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import GrayBox from "@/app/components/services/gray-box";
import WideContent from "@/app/components/services/wide-content";
import ContentHalves from "@/app/components/services/content-halves";
import SectionHeading from "@/app/components/services/section-heading";
import NavCards from "@/app/components/services/nav-cards";
import YouTubeVideo from "@/app/components/services/youtube-video";
import { ABOUT_SAFELITE_LINKS } from "@/app/components/services/service-links";
import FoundationSubheader from "@/app/components/foundation-subheader";
import DonationCards from "./donation-cards";

export const metadata: Metadata = {
  title: "Safelite and Foster Love | Safelite",
  description:
    "Safelite Foundation and Foster Love, a non-profit organization, work together to make a difference in the foster care community. Learn more about the partnership here.",
};

const IMAGES = "/image/services/safelite-and-foster-love";
const DONATE_URL = "https://fosterlove.com/campaign/fcam-safelite/";

// Two columns from 768px inside a full-width text area (or inside another
// column), reaching 15px past it on both sides like the reference.
function NestedHalves({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="mx-[-15px] max-w-[510px] px-[15px] md:flex md:max-w-[1020px] md:flex-wrap md:items-start md:justify-between">
      <div className="md:w-[calc(50%-15px)]">{left}</div>
      <div className="md:w-[calc(50%-15px)]">{right}</div>
    </div>
  );
}

// Title followed by an empty line, as on the reference
function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>{children}</h1>
      <br />
    </div>
  );
}

// Micro illustration with its count underneath
function Stat({ image, alt, children }: { image: string; alt: string; children: ReactNode }) {
  return (
    <>
      <Image
        src={`${IMAGES}/${image}`}
        alt={alt}
        title={alt}
        width={480}
        height={88}
        className="inline h-[88px] max-w-full align-baseline"
      />
      <div>
        <h4 className="text-center">
          <strong>{children}</strong>
        </h4>
        <br />
      </div>
    </>
  );
}

// Map key: a small marker icon and its label
function MapKey({ image, label }: { image: string; label: string }) {
  return (
    <div className="flex">
      <Image src={`${IMAGES}/${image}`} alt={image.replace(".svg", "")} title={image.replace(".svg", "")} width={18} height={24} className="h-6 w-[18px] max-w-full" />
      <div>
        <p className="pl-2">
          <strong>{label}</strong>
        </p>
      </div>
    </div>
  );
}

function Scholar({ image, name, school, goal }: { image: string; name: string; school: string; goal: string }) {
  return (
    <>
      <Image
        src={`${IMAGES}/${image}`}
        alt={image.replace(".png", "")}
        title={image.replace(".png", "")}
        width={238}
        height={176}
        className="inline h-auto max-w-full align-baseline"
      />
      <div>
        <h4>{name}</h4>
        <p>{school}</p>
        <p>{goal}</p>
        <br />
      </div>
    </>
  );
}

// "About Foster Love": copy on the left and a photo filling the right half
// from 992px; below that the photo spans the full width under the copy.
function Hero() {
  return (
    <section className="mx-auto grid max-w-[1020px] grid-rows-[auto] px-4 min-[992px]:grid-cols-2">
      <div className="flex flex-col py-4 min-[992px]:pb-4 min-[992px]:pl-0 min-[992px]:pr-10 min-[992px]:pt-8">
        <h2 className="mx-0! mb-4! mt-4! max-w-fit! p-0! text-left! text-[32px]! font-bold! leading-[44px]! text-black min-[992px]:mt-8!">
          About Foster Love
        </h2>
        {/* The reference nests these in a broken paragraph, which leaves an
            empty 16px paragraph before the first one and after the last one */}
        <p className="mb-4 mt-4 p-0! text-xl leading-[32px]">
          Foster Love is a non-profit organization based in Brea, California, dedicated to improving the lives of
          children in foster care across the country.
        </p>
        <p className="mb-8 p-0! text-xl leading-[32px]">
          Founded in 2008, Foster Love has supported over 1 million kids in foster care.
        </p>
      </div>
      <div className="relative mx-[-16px] flex w-[calc(100%+32px)] items-center justify-center pt-[56.25%] min-[992px]:m-0 min-[992px]:w-full">
        <Image
          src={`${IMAGES}/hero.jpg`}
          alt="Safelite associates standing in front of the assembled bicycles they built for children in foster care, smiling and posing together after completing the build."
          fill
          sizes="(min-width: 992px) 494px, 100vw"
          preload
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

// "Join us in fostering change!" with the donation button and cycling cards
function JoinUs() {
  return (
    <div className="relative grid items-start bg-[#f4f4f4] px-4 py-14 text-[#525656]">
      <div className="mx-auto grid w-full max-w-[1024px] grid-cols-1 gap-8 min-[992px]:grid-cols-2 min-[992px]:items-stretch min-[992px]:gap-x-12">
        <div className="mx-auto grid max-w-[600px] gap-0 min-[992px]:h-full min-[992px]:content-start">
          <h4
            id="join-us-in-fostering-change"
            className="mb-4 text-pretty text-[32px]! font-semibold! leading-[40px]! text-black"
          >
            Join us in fostering change!{" "}
          </h4>
          <p className="mb-4 text-2xl font-medium leading-8">Your gift helps improve the lives of kids in foster care.</p>
          <p className="mb-4">
            Help distribute essential items to Foster Love&apos;s agency partners and transform Safe Spaces across the
            U.S. Your donation to Foster Love (EIN: 26-3043727) is tax deductible and{" "}
            <a href="#disclaimer">non-refundable</a>.
          </p>
          {/* A stray closing tag on the reference leaves this empty paragraph */}
          <p className="mb-4" />
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-14 place-items-center rounded-full bg-[#0070d1] font-semibold! text-white! no-underline! hover:bg-[#0063ad] min-[992px]:w-fit min-[992px]:px-14 min-[992px]:py-4"
          >
            Make a donation
          </a>
        </div>
        <div className="flex flex-col justify-center self-start">
          <p className="m-0 text-center">Here&apos;s what your donation can support:</p>
          <DonationCards />
        </div>
      </div>
    </div>
  );
}

// Safelite Foundation logo beside a short note (inside a Bootstrap-width container)
function FoundationNote() {
  return (
    <div className="mx-auto w-full px-[10px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
      <div className="mx-auto max-w-[510px] items-center px-[15px] md:flex md:max-w-[1020px] md:flex-wrap md:justify-between">
        <div className="md:w-[calc(50%-15px)]">
          <Image
            src={`${IMAGES}/foundation-logo.svg`}
            alt="safelite-foundation-stacked-logo-white-bg"
            title="safelite-foundation-stacked-logo-white-bg"
            width={492}
            height={200}
            className="inline h-[200px] max-w-full align-baseline"
          />
        </div>
        <div className="md:w-[calc(50%-15px)]">
          <div>
            <p>
              Safelite Foundation supports organizations that share our mission to help those who have hit a bump in
              the road.
            </p>
            <p>
              <Link href="/about-safelite/safelite-autoglass-foundation">Learn more.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LearnMore() {
  return (
    <>
      <SectionHeading>Learn more</SectionHeading>
      <NavCards
        variant="icon"
        columns={5}
        cards={[
          ABOUT_SAFELITE_LINKS.about,
          ABOUT_SAFELITE_LINKS.pressReleases,
          ABOUT_SAFELITE_LINKS.leaders,
          ABOUT_SAFELITE_LINKS.partnerships,
          ABOUT_SAFELITE_LINKS.companies,
        ]}
      />
    </>
  );
}

// Refund note the "non-refundable" link points to
function Disclaimer() {
  return (
    <div className="mx-auto flex max-w-[1020px] flex-col px-[15px]">
      <div>
        <p id="disclaimer" className="pt-[26px]">
          <sub className="static inline-grid align-sub text-[13.3333px] leading-[25px]">
            <span>
              *We will consider refund requests on a case-by-case basis. Refunds may be granted if a donation was made
              in error, was unauthorized or under extenuating circumstances. Customers may, contact us at{" "}
              <a href="tel:+18006388958" className="whitespace-nowrap">
                1-800-638-8958
              </a>{" "}
              within 30 days of the donation date, providing their full name, donation date, amount and reason for the
              request. Refund requests will be reviewed and processed within a reasonable amount of time, and approved
              refunds will be issued using the original method of payment. For any questions or concerns, please
              contact us at{" "}
              <a href="tel:+18006388958" className="whitespace-nowrap">
                1-800-638-8958
              </a>
              .
            </span>
          </sub>
        </p>
      </div>
    </div>
  );
}

export default function SafeliteAndFosterLovePage() {
  return (
    <ServicePageShell secondary={<LearnMore />} additional={<Disclaimer />} strongWeight="medium">
      <FoundationSubheader active="foster-love" />
      <Hero />

      <GrayBox>
        <WideContent>
          <SectionTitle>Fostering change together: Foster Love &amp; Safelite</SectionTitle>
          <NestedHalves
            left={
              <Image
                src={`${IMAGES}/sweet-case.png`}
                alt="Sweet Case-04"
                title="Sweet Case-04"
                width={492}
                height={376}
                className="inline h-auto max-w-full align-baseline"
              />
            }
            right={
              <div>
                <p>
                  Every two minutes, a child enters foster care in our country due to abuse, neglect or unsafe
                  conditions. Currently more than 400,000 children are in foster care in the U.S. and suffer from
                  trauma resulting in PTSD twice the rate of U.S. veterans.
                </p>
                <p>
                  Foster Love&rsquo;s mission aligns directly with the Safelite Foundation&rsquo;s giving priorities of
                  safety, stability and sense of belonging, and we are committed to driving measurable outcomes.
                </p>
                <p>
                  Through this partnership, Safelite Foundation is dedicated to supporting foster children and young
                  adults aging out of the system through advocacy, awareness, volunteerism and financial support. We
                  believe all foster youth deserve happy childhood memories and moments that positively shape them,
                  providing them with a clear road ahead on their journey to fulfill their life&rsquo;s purpose.
                </p>
              </div>
            }
          />
        </WideContent>
      </GrayBox>

      <WideContent>
        <SectionTitle>
          Safelite Foundation has invested <span className="text-[#db0020]">more than $3 million</span>
        </SectionTitle>
        <NestedHalves
          left={
            <div>
              <div>
                <p>
                  Through a visionary partnership, the Safelite Foundation is committed to Foster Love through a variety
                  of core programs including:
                </p>
              </div>
              <ul id="foundation-list" className="ml-[18px] list-disc">
                <li>
                  <p>100,000 volunteer hours for our associates to support foster programs across the country.</p>
                </li>
                <li>
                  <p>Funding scholarships for those who have aged out of the foster care system.</p>
                </li>
                <li>
                  <p>Partnering to create Safelite Safe Spaces in communities across the U.S.</p>
                </li>
              </ul>
              <div>
                <p>&nbsp;</p>
              </div>
            </div>
          }
          right={<YouTubeVideo videoId="iWv2jN3VsUA" title="Safelite Foundation and Foster Love" rounded />}
        />
      </WideContent>

      <WideContent>
        <NestedHalves
          left={
            <NestedHalves
              left={<Stat image="bike.svg" alt="foundation-bike">300+ bikes</Stat>}
              right={<Stat image="birthday-box.svg" alt="foundation-birthday-box">350+ birthday boxes</Stat>}
            />
          }
          right={
            <NestedHalves
              left={<Stat image="sweet-case.svg" alt="foundation-sweet-case">1,100+ sweet cases</Stat>}
              right={<Stat image="skateboard.svg" alt="foundation-skateboard">720+ Skateboards</Stat>}
            />
          }
        />
      </WideContent>

      <GrayBox>
        <WideContent>
          <SectionTitle>Creating Safelite Safe Spaces with Foster Love</SectionTitle>
          <NestedHalves
            left={<YouTubeVideo videoId="E-wHSuWP-Do" title="Creating Safelite Safe Spaces with Foster Love" rounded />}
            right={
              <div>
                <p>
                  A hallmark of this partnership is the creation of Safelite Safe Spaces. These are warm, welcoming,
                  interactive spaces for biological parents to visit their foster children, fostering a sense of hope,
                  healing, comfort and connection.
                  <br />
                  &ldquo;We are excited to help shape the future and peace of mind of the children served while opening
                  more dialogue and awareness about the foster system,&quot; said Safelite President &amp; CEO, Renee
                  Cacchillo. &quot;Not everyone can be a foster parent, but we can all do something to support the
                  foster care community.&rdquo;
                </p>
                <p>
                  <a href="https://fosterlove.com/safelite/" target="_blank" rel="noopener noreferrer">
                    Learn more about Safelite + Foster Love
                  </a>
                </p>
                <br />
              </div>
            }
          />
          <NestedHalves
            left={
              <>
                <div>
                  <h4>Take a tour</h4>
                </div>
                <div>
                  <p>
                    Take a virtual tour of one of the Safelite Safe Spaces that have been transformed by Safelite
                    associates and Foster Love team members across the country. We are proud to partner on building
                    trauma-informed spaces to help families and the amazing agency team members who support them on
                    their journey.
                  </p>
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=haxYZbayJyw&list=PLvebOLjLdtQnamVlPLe5UOc-JWt8fZi2E"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Take a tour of all the Safelite Safe Spaces
                    </a>
                  </p>
                  <p>
                    &ldquo;The impact that you are having on children and families is not only today but for generations
                    to come.&rdquo;
                  </p>
                  <p className="text-right">
                    <strong>Dannic Prado, Director of Visitation,</strong>
                    <br />
                    <strong>Olive Crest (Los Angeles, CA)</strong>
                  </p>
                </div>
              </>
            }
            right={
              <>
                <Image
                  src={`${IMAGES}/safe-spaces-map.svg`}
                  alt="safelite-safe-spaces-map"
                  title="safelite-safe-spaces-map"
                  width={476}
                  height={264}
                  className="inline h-[264px] max-w-full align-baseline"
                />
                <NestedHalves
                  left={<MapKey image="current-location.svg" label="Current locations" />}
                  right={<MapKey image="coming-soon.svg" label="Coming soon" />}
                />
              </>
            }
          />
        </WideContent>
      </GrayBox>

      <WideContent>
        <div>
          <h1>Safelite 2025 Scholars</h1>
          <br />
          <p>
            In partnership with Foster Love&rsquo;s Family Followship program, the Safelite Foundation awards one $60K
            scholarship annually to a Safelite Scholar who has aged out of foster care with desire to further their
            education and achieve their dreams.{" "}
          </p>
          <br />
        </div>
      </WideContent>
      <ContentHalves
        left={
          <Scholar
            image="ruben-garcia.png"
            name="Ruben Garcia"
            school="George Washington University"
            goal="Pursuing a finance degree with an interest in investment banking and private equity."
          />
        }
        right={
          <Scholar
            image="kimora-davis.png"
            name="Kimora Davis"
            school="The Ohio State University"
            goal="Pursuing a biology degree on her journey to becoming a pulmonologist."
          />
        }
      />

      <JoinUs />
      <FoundationNote />
    </ServicePageShell>
  );
}
