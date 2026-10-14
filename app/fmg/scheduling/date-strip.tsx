import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import { BOLD } from "../ui/styles";
import { dateKey } from "./slots";

type DateStripProps = {
  days: Date[];
  // First day shown (the strip shows five at a time)
  start: number;
  onPage: (start: number) => void;
  selected?: string;
  isAvailable: (day: Date) => boolean;
  onSelect: (key: string) => void;
};

const PAGE = 5;

// Five day cards with arrows on each side; full or past days are grayed out
export default function DateStrip({ days, start, onPage, selected, isAvailable, onSelect }: DateStripProps) {
  const visible = days.slice(start, start + PAGE);
  const canBack = start > 0;
  const canForward = start + PAGE < days.length;
  return (
    <div className="mt-6 flex items-center gap-1">
      <button
        type="button"
        aria-label="Previous dates"
        disabled={!canBack}
        onClick={() => onPage(Math.max(0, start - PAGE))}
        className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full p-0 transition-colors duration-150 enabled:hover:bg-[#e4f1f7] disabled:cursor-default"
      >
        <Image
          src={canBack ? "/image/fmg/app/chevron-right-blue.svg" : "/image/fmg/app/chevron-right-grey.svg"}
          alt=""
          width={24}
          height={24}
          unoptimized
          className="size-6 -scale-x-100"
        />
      </button>
      <div className="flex grow gap-1">
        {visible.map((day) => {
          const key = dateKey(day);
          const available = isAvailable(day);
          const active = selected === key;
          return (
            <button
              key={key}
              type="button"
              disabled={!available}
              aria-pressed={active}
              onClick={() => onSelect(key)}
              className={cx(
                BOLD,
                "flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border px-1 py-2.5 transition-colors duration-150",
                active
                  ? "border-[#0070d1] bg-[#0070d1] text-white"
                  : available
                    ? "border-[#0070d1] bg-white text-[#0070d1] hover:bg-[#e4f1f7]"
                    : "cursor-default border-[#e3e4e4] bg-[#f5f5f5] text-[#d2d4d4]",
              )}
            >
              <span className="text-[14px] leading-[1.2]">
                {day.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()}
              </span>
              <span className="whitespace-nowrap text-[14px] leading-[1.4]">
                {day.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </button>
          );
        })}
      </div>
      <button
        type="button"
        aria-label="Next dates"
        disabled={!canForward}
        onClick={() => onPage(start + PAGE)}
        className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full p-0 transition-colors duration-150 enabled:hover:bg-[#e4f1f7] disabled:cursor-default"
      >
        <Image
          src={canForward ? "/image/fmg/app/chevron-right-blue.svg" : "/image/fmg/app/chevron-right-grey.svg"}
          alt=""
          width={24}
          height={24}
          unoptimized
          className="size-6"
        />
      </button>
    </div>
  );
}
