import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import ContentHalves from "@/app/components/services/content-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import ListPagination from "@/app/components/services/list-pagination";
import { cx } from "@/app/components/services/class-names";
import shared from "@/app/components/services/services.module.css";
import { PRESS_PAGE_SIZE, PRESS_RELEASES } from "./press-releases";
import AboutLearnMore from "@/app/components/services/about-learn-more";

export const PRESS_PAGE_COUNT = Math.ceil(PRESS_RELEASES.length / PRESS_PAGE_SIZE);

const IMAGES = "/image/services/press-releases";

function PressReleaseList({ page }: { page: number }) {
  const items = PRESS_RELEASES.slice((page - 1) * PRESS_PAGE_SIZE, page * PRESS_PAGE_SIZE);
  return (
    // .press-release-list-page > .cards-halves
    <div>
      <div className="mx-auto flex max-w-[1020px] flex-col px-[15px]">
        <div className="md:flex md:flex-wrap md:items-stretch md:justify-between">
          {items.map(([href, date, title, excerpt]) => (
            <Link
              key={href}
              href={href}
              className={cx(
                shared.cardWrapper,
                shared.cardClickable,
                "md:mb-[30px]! md:ml-[30px]! md:mr-0! md:w-[calc(50%-15px)] md:max-w-none! md:[&:nth-child(2n+1)]:ml-0!",
              )}
            >
              <div className="relative flex w-full flex-[1_0_auto] flex-col justify-between px-[15px] py-[30px] md:items-start md:px-[30px] [&>*]:w-full">
                <span className="cursor-default whitespace-nowrap pb-[10px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
                  {date}
                </span>
                <h4>{title}</h4>
                {/* Pushes "Read more" to the bottom when the card next to it is taller */}
                <p className="mb-auto flex-none overflow-hidden">{excerpt}</p>
                <span className={cx(shared.linkLike, "mt-[10px]")}>Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ListPagination page={page} total={PRESS_PAGE_COUNT} basePath="/about-safelite/press-releases" />
    </div>
  );
}

// The press release list, shared by /about-safelite/press-releases and its
// numbered pages. Like the reference, the numbered pages (/1, /2, ...) leave out
// the "Learn more" cards and the "Don't wait" band.
export default function PressReleasesPage({ page, numbered = false }: { page: number; numbered?: boolean }) {
  return (
    <ServicePageShell secondary={numbered ? null : <AboutLearnMore current="pressReleases" />} showDontWaitCta={!numbered}>
      <ServiceHero
        title="Press releases"
        image={{
          alt: "",
          desktop: { src: `${IMAGES}/hero-desktop.jpg`, width: 585, height: 340, ratio: "58.11966%" },
          tablet: null,
          wide: { src: `${IMAGES}/hero-wide.jpg`, width: 1100, height: 340, ratio: "30.90909%" },
        }}
      >
        <p>
          At Safelite AutoGlass, we keep the press and the public aware of our latest news by releasing regular press
          releases showing our latest developments in auto glass repair.
        </p>
        <p>
          Whether it&rsquo;s new heights in sales, brand-new Safelite AutoGlass locations or cutting-edge technologies
          developed by our skilled technicians, you&apos;ll be sure to read all about it through our press releases.{" "}
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={
            <>
              <div>
                <h2>Latest Safelite press releases</h2>
              </div>
              <HorizontalRule variant="left-red" />
            </>
          }
          right={
            <div>
              <div className="mx-auto mb-[30px]">
                Read on to see how we can help you, and how Safelite is making a difference in communities across the
                nation.
              </div>
            </div>
          }
        />
        <PressReleaseList page={page} />
      </GrayBox>
    </ServicePageShell>
  );
}
