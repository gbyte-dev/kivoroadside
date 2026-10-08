import Image from "next/image";
import Link from "next/link";
import ServiceButton from "@/app/components/services/service-button";
import { cx } from "@/app/components/services/class-names";

const FOSTER_LOVE_PAGE = "/about-safelite/safelite-autoglass-foundation/safelite-and-foster-love";

const TABS = [
  { key: "impact", label: "Our impact", href: "/about-safelite/safelite-autoglass-foundation" },
  { key: "foster-love", label: "Safelite + Foster Love", href: FOSTER_LOVE_PAGE },
] as const;

// Gray bar under the header on the Safelite Foundation pages: icon, the two
// page tabs (the current one blue and underlined; keyboard focus only
// underlines in blue) and the "Join us" button.
// 72px tall from 992px; below that it is 152px and the button may wrap.
export default function FoundationSubheader({ active }: { active: (typeof TABS)[number]["key"] }) {
  return (
    <div className="flex h-[152px] w-full bg-[#f4f4f4] text-[#0a0a0a] min-[992px]:h-[72px]">
      <div className="mx-auto flex w-full max-w-[1024px] flex-wrap items-center gap-6 px-4 py-6 min-[992px]:flex-nowrap">
        <Image
          src="/image/services/foundation/foster-love-icon.svg"
          alt="foster-love-icon"
          width={21}
          height={24}
          unoptimized
          className="h-auto w-[21px] max-w-full"
        />
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <Link
              key={tab.key}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={cx(
                "relative no-underline! after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 after:ease-[ease] after:content-[''] hover:text-[#0070d1]! hover:after:scale-x-100 focus-visible:after:scale-x-100 focus-visible:after:bg-[#0070d1]",
                isActive ? "text-[#0070d1]! after:scale-x-100" : "text-[#0a0a0a]! after:scale-x-0",
              )}
            >
              {tab.label}
            </Link>
          );
        })}
        <ServiceButton href={`${FOSTER_LOVE_PAGE}#join-us-in-fostering-change`} className="ml-auto">
          Join us in fostering change
        </ServiceButton>
      </div>
    </div>
  );
}
