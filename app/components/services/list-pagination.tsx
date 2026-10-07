import Link from "next/link";
import { cx } from "./class-names";

type PageLink = { page: number; kind: "number" | "mobile-prev" | "desktop-prev" | "mobile-next" | "desktop-next" };

// Same windows as the reference: blocks of 10 pages on desktop and 5 on phones,
// with arrows that jump to the block before or after.
function pageLinks(page: number, total: number): PageLink[] {
  const start = Math.floor((page - 1) / 10) * 10 + 1;
  const end = Math.min(start + 9, total);
  const mobileStart = Math.floor((page - 1) / 5) * 5 + 1;
  const mobileEnd = Math.min(mobileStart + 4, total);
  const links: PageLink[] = [];
  if (mobileStart > start) links.push({ page: mobileStart - 1, kind: "mobile-prev" });
  if (start > 1) links.push({ page: start - 1, kind: "desktop-prev" });
  for (let n = start; n <= end; n++) links.push({ page: n, kind: "number" });
  if (mobileEnd < end) links.push({ page: mobileEnd + 1, kind: "mobile-next" });
  if (end < total) links.push({ page: end + 1, kind: "desktop-next" });
  return links;
}

// Two red chevrons drawn with borders (» or «)
const CHEVRONS = {
  next: "before:-ml-[11px] before:-rotate-45 after:-ml-[5px] after:-rotate-45",
  prev: "before:ml-px before:rotate-[135deg] after:-ml-[5px] after:rotate-[135deg]",
};
const CHEVRON_BASE =
  "before:absolute before:left-1/2 before:top-1/2 before:-mt-[6px] before:size-3 before:rounded-[2px] before:border-b-2 before:border-r-2 before:border-[#db0020] before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-mt-[6px] after:size-3 after:rounded-[2px] after:border-b-2 after:border-r-2 after:border-[#db0020] after:content-['']";

// Numbered page links (the reference's ".custom-pagination") for lists split
// over pages at `${basePath}/1`, `${basePath}/2`, ...
export default function ListPagination({ page, total, basePath }: { page: number; total: number; basePath: string }) {
  const links = pageLinks(page, total);
  const mobileMin = Math.floor((page - 1) / 5) * 5 + 1;
  const mobileMax = Math.min(mobileMin + 4, total);
  return (
    <div className="mx-auto max-w-[510px] px-[15px] pb-[30px] pt-[10px] md:max-w-[1020px] md:text-left">
      <ul className="inline-flex h-[45px] max-w-full list-none items-stretch justify-start text-center">
        {links.map((link, index) => {
          const previous = links[index - 1];
          const isPrev = link.kind === "mobile-prev" || link.kind === "desktop-prev";
          const isNext = link.kind === "mobile-next" || link.kind === "desktop-next";
          const isActive = link.kind === "number" && link.page === page;
          const hidden = cx(
            (link.kind === "mobile-prev" || link.kind === "mobile-next") && "md:hidden",
            link.kind === "number" && (link.page < mobileMin || link.page > mobileMax) && "max-md:hidden",
            link.kind === "desktop-prev" && previous?.kind === "mobile-prev" && "max-md:hidden",
            link.kind === "desktop-next" && previous?.kind === "mobile-next" && "max-md:hidden",
          );
          return (
            <li key={`${link.kind}-${link.page}`} className={cx("w-[45px] flex-[0_1_auto]", hidden)}>
              <Link
                href={`${basePath}/${link.page}`}
                aria-label={isPrev ? "Previous" : isNext ? "Next" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={cx(
                  "relative -mr-px block h-full border text-center leading-[43px] no-underline! hover:bg-[#e7f1f6]",
                  isActive
                    ? "z-[1] border-[#0070d1] bg-[#e7f1f6] font-medium! text-black!"
                    : "border-[#cacbcc] bg-white font-normal! text-[#525656]!",
                  (isPrev || index === 0) && "rounded-l-[22px]",
                  previous?.kind === "mobile-prev" && "md:rounded-l-[22px]",
                  (isNext || index === links.length - 1) && "rounded-r-[22px]",
                  (isPrev || isNext) && cx(CHEVRON_BASE, isPrev ? CHEVRONS.prev : CHEVRONS.next),
                )}
              >
                {isPrev || isNext ? null : link.page}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
