import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import WideContent from "@/app/components/services/wide-content";
import { cx } from "@/app/components/services/class-names";
import SiteMapSelect from "./site-map-select";
import { SITE_MAP, type SiteMapLink } from "./site-map-links";

export const metadata: Metadata = {
  title: "Site map",
};

const CURRENT_PAGE = "/site-map";

// The browser's default bullets: disc, circle, then square for deeper levels
const BULLETS = ["list-disc", "list-[circle]", "list-[square]", "list-[square]"];

// Nested link lists, 40px in from the level above. Most of these pages are
// not built yet, so the links are not prefetched.
function SiteMapList({ links, level = 0 }: { links: SiteMapLink[]; level?: number }) {
  return (
    <ul className={cx("pl-10", BULLETS[level])}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} prefetch={false}>
            {level === 0 ? <strong>{link.label}</strong> : link.label}
          </Link>
          {link.children && <SiteMapList links={link.children} level={level + 1} />}
        </li>
      ))}
    </ul>
  );
}

// All pages as one flat list for the drop-down, with one dash per level
function selectOptions(links: SiteMapLink[], level = 1): SiteMapLink[] {
  return links.flatMap((link) => [
    { label: `${"-".repeat(level)} ${link.label}`, href: link.href },
    ...(link.children ? selectOptions(link.children, level + 1) : []),
  ]);
}

export default function SiteMapPage() {
  return (
    <ServicePageShell secondary={null} strongWeight="medium">
      <div className="pt-10">
        <WideContent>
          <div>
            <SiteMapSelect current={CURRENT_PAGE}>
              {selectOptions(SITE_MAP).map((option) => (
                <option key={option.href} value={option.href}>
                  {option.label}
                </option>
              ))}
            </SiteMapSelect>
            <SiteMapList links={SITE_MAP} />
          </div>
        </WideContent>
      </div>
    </ServicePageShell>
  );
}
