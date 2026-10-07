import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ResourceCenterHeader from "@/app/components/resource-center-header";
import GrayBox from "@/app/components/services/gray-box";
import TrustCta from "@/app/components/services/trust-cta";
import ListPagination from "@/app/components/services/list-pagination";
import { cx } from "@/app/components/services/class-names";
import shared from "@/app/components/services/services.module.css";
import { RESOURCE_PAGES, type ResourceArticle } from "./resource-articles";

export const RESOURCE_PAGE_COUNT = RESOURCE_PAGES.length;

type CardLayout = "featured" | "row" | "half";

// Category, title, excerpt and "Read more". The newest article gets a "new"
// badge in its top right corner.
function CardContent({ article, layout }: { article: ResourceArticle; layout: CardLayout }) {
  return (
    <div
      className={cx(
        "relative flex w-full flex-[1_0_auto] flex-col justify-between px-[15px] py-[30px] md:items-start md:p-[30px] [&>*]:w-full",
        layout !== "half" && "md:flex-[1_1_auto]",
        layout === "featured" &&
          "before:absolute before:right-[10px] before:top-[10px] before:block before:w-[70px] before:cursor-pointer before:whitespace-nowrap before:rounded-[15px] before:bg-[#fbe9e8] before:text-center before:text-[14px] before:font-medium before:uppercase before:leading-[30px] before:tracking-[0.75px] before:text-[#db0020] before:content-['new']",
      )}
    >
      <span className="cursor-default whitespace-nowrap pb-[10px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
        {article.category}
      </span>
      {layout === "featured" ? (
        <h2 className="m-0! max-w-full! pb-[10px]! text-left!">{article.title}</h2>
      ) : (
        <h4>{article.title}</h4>
      )}
      {/* Pushes "Read more" to the bottom when the card next to it is taller */}
      <p className="mb-auto flex-none overflow-hidden">{article.excerpt}</p>
      <span className={cx(shared.linkLike, "mt-[10px]")}>Read more</span>
    </div>
  );
}

// "featured" and "row" cards put the photo on the left from 768px, cropped to
// the card's height; "half" cards keep it on top at its own height.
function ArticleCard({ article, layout }: { article: ResourceArticle; layout: CardLayout }) {
  const beside = layout !== "half";
  return (
    <Link
      href={article.href}
      className={cx(
        shared.cardWrapper,
        shared.cardClickable,
        beside
          ? "md:mx-0! md:mb-[30px]! md:max-w-none! md:flex-row!"
          : "md:mb-[30px]! md:ml-[30px]! md:mr-0! md:w-[calc(50%-15px)] md:max-w-none! md:[&:nth-child(2n+1)]:ml-0!",
      )}
    >
      {article.image && (
        <span
          className={cx(
            "relative flex w-full items-center justify-center overflow-hidden rounded-t-[14px]",
            beside && "md:w-[calc(50%-15px)] md:flex-none md:self-stretch md:rounded-none md:rounded-tl-[5px]",
          )}
        >
          <Image
            src={article.image.src}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
            unoptimized
            // Shown at its own size (never stretched), so it needs to load right away
            loading="eager"
            className={cx(
              "h-auto w-auto max-w-full",
              beside
                ? "md:absolute md:left-1/2 md:top-1/2 md:max-h-full md:max-w-none md:-translate-x-1/2 md:-translate-y-1/2"
                : "md:flex-none",
            )}
          />
        </span>
      )}
      <CardContent article={article} layout={layout} />
    </Link>
  );
}

// One card per row (.cards-wholes)
function ArticleRows({ articles, featured = false }: { articles: ResourceArticle[]; featured?: boolean }) {
  return (
    <div className="mx-auto flex max-w-[1020px] flex-col px-[15px]">
      <div>
        {articles.map((article) => (
          <ArticleCard key={article.href} article={article} layout={featured ? "featured" : "row"} />
        ))}
      </div>
    </div>
  );
}

// Two cards per row from 768px (.cards-halves)
function ArticleHalves({ articles }: { articles: ResourceArticle[] }) {
  return (
    <div className="mx-auto flex max-w-[1020px] flex-col px-[15px]">
      <div className="md:flex md:flex-wrap md:items-stretch md:justify-between">
        {articles.map((article) => (
          <ArticleCard key={article.href} article={article} layout="half" />
        ))}
      </div>
    </div>
  );
}

// The resource center list, shared by /resource-center and its numbered pages.
// /resource-center opens with the newest article and two half-width cards;
// the numbered pages show three rows in a gray box instead and, like the
// reference, leave out the "Don't wait" band.
export default function ResourceCenterPage({ page, numbered = false }: { page: number; numbered?: boolean }) {
  const articles = RESOURCE_PAGES[page - 1];
  const firstBlock = articles.slice(0, 3);
  const listBlock = articles.slice(3);
  return (
    <ServicePageShell secondary={null} showDontWaitCta={!numbered} header={<ResourceCenterHeader />}>
      {/* .content-wide (its column gets 1rem padding from a site-wide rule) */}
      <div className="pt-10">
        <div className="mx-auto max-w-[510px] p-4 md:max-w-[1020px]">
          <div className="pb-5">
            <h1>Safelite Resource Center</h1>
          </div>
        </div>
      </div>

      {numbered ? (
        <GrayBox className="mb-0!">
          <ArticleRows articles={firstBlock} />
        </GrayBox>
      ) : (
        <div>
          <ArticleRows articles={firstBlock.slice(0, 1)} featured />
          <ArticleHalves articles={firstBlock.slice(1)} />
        </div>
      )}

      <TrustCta />

      <GrayBox className="mb-0!">
        <ArticleRows articles={listBlock} />
        <ListPagination page={page} total={RESOURCE_PAGE_COUNT} basePath="/resource-center" />
      </GrayBox>
    </ServicePageShell>
  );
}
