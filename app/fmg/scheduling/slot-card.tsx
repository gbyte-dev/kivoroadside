import type { ReactNode } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import { FIRST_STOP_FEE, money } from "../pricing";
import { REGULAR } from "../ui/styles";
import type { Slot } from "./slots";

const BADGE = "whitespace-nowrap rounded-[72px] px-2 py-0.5 text-[12px] font-semibold leading-5";

type SlotCardProps = {
  title: string;
  // Distance to a shop ("6 mi")
  distance?: string;
  // Line under the header (the shop address, or the ZIP and a hint)
  subline: ReactNode;
  slots: Slot[];
  expanded: boolean;
  onToggle: () => void;
  selected?: string;
  onSelect: (slot: Slot) => void;
  error?: boolean;
  // Shown when the day has no openings
  nextAvailable?: string;
  name: string;
  className?: string;
};

function SlotOption({
  slot,
  name,
  checked,
  error,
  onSelect,
  wide,
}: {
  slot: Slot;
  name: string;
  checked: boolean;
  error?: boolean;
  onSelect: () => void;
  wide?: boolean;
}) {
  return (
    <label
      className={cx(
        "flex cursor-pointer items-start gap-2 rounded-lg border bg-white px-2 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.2)]",
        wide && "w-full",
        checked
          ? "border-[#0070d1] bg-[#e5f1fa] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_0_0_1px_#0070d1]"
          : error
            ? "border-[#db0020] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_0_0_1px_#db0020]"
            : "border-[#b3b4b5]",
      )}
    >
      <input
        type="radio"
        name={name}
        value={slot.id}
        checked={checked}
        onChange={onSelect}
        className="mt-1 shrink-0 accent-[#0070d1]"
      />
      <span className="flex flex-1 flex-col gap-2">
        <span className={cx("leading-6", checked ? cx(REGULAR, "font-semibold text-black") : "text-[#4d5151]")}>
          {slot.label}
        </span>
      </span>
      {slot.premium && (
        <span className="shrink-0 whitespace-nowrap rounded-[72px] bg-[#e3f2ea] px-2 py-0.5 text-[12px] font-medium leading-5 text-[#006a36]">
          {`+${money(FIRST_STOP_FEE)}`}
        </span>
      )}
    </label>
  );
}

// A mobile or shop card on the scheduling page: header with the opening
// count, the address line, and the day's time slots (or when the next
// opening is). Cards other than the first start collapsed.
export default function SlotCard({
  title,
  distance,
  subline,
  slots,
  expanded,
  onToggle,
  selected,
  onSelect,
  error,
  nextAvailable,
  name,
  className,
}: SlotCardProps) {
  const empty = slots.length === 0;
  const isShop = distance !== undefined;
  const groups = isShop
    ? ([
        ["dropoff", "Drop off your vehicle"],
        ["morning", "Morning:"],
        ["afternoon", "Afternoon:"],
      ] as const)
    : ([["mobile", ""]] as const);
  const count = slots.length;
  return (
    <div className={cx("flex flex-col items-start", className)}>
      <div
        className={cx(
          "w-full rounded-2xl border p-4",
          empty ? "bg-[#f4f4f4]" : "bg-white",
          error ? "border-2 border-[#db0020]" : "border-[#b3b4b5]",
        )}
      >
        <button
          type="button"
          disabled={empty}
          aria-expanded={expanded}
          onClick={onToggle}
          className={cx("flex w-full items-center border-0 bg-transparent p-0 text-left", isShop ? "gap-1" : "gap-2")}
        >
          <span className={cx(REGULAR, "font-semibold leading-6 text-black", isShop ? "whitespace-nowrap" : "flex-1")}>
            {title}
          </span>
          {isShop && <span className="flex-1 whitespace-nowrap text-[14px] leading-6 text-[#4d5151]">{distance}</span>}
          <span className={cx(REGULAR, BADGE, empty ? "bg-[#b3b4b5] text-white" : "bg-[#e5f1fa] text-[#0070d1]")}>
            {count} {count === 1 ? "appt" : "appts"}
          </span>
          {!empty && (
            <Image
              src="/image/fmg/app/chevron-no-background.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
              className={cx("size-4 shrink-0 transition-transform duration-150", !expanded && "rotate-180")}
            />
          )}
        </button>
        {subline}
        {empty ? (
          <div className={cx("flex flex-col gap-1", isShop ? "mt-4" : "mt-2")}>
            <p className={cx(REGULAR, "m-0 font-semibold leading-6 text-black")}>
              {isShop ? "No appointments this day." : "No mobile service this day."}
            </p>
            {nextAvailable && (
              <p className="m-0 flex flex-wrap gap-1 leading-6 text-black">
                <span>Next available:</span>
                <span className={cx(REGULAR, "font-semibold")}>{nextAvailable}</span>
              </p>
            )}
          </div>
        ) : (
          expanded && (
            <div className={cx(isShop ? "mt-4 flex flex-col gap-4" : "mt-2")}>
              {groups.map(([group, label]) => {
                const items = slots.filter((slot) => slot.group === group);
                if (items.length === 0) return null;
                const grid = group === "morning" || group === "afternoon";
                return (
                  <div key={group}>
                    {label && <p className={cx(REGULAR, "mb-2 mt-0 text-[14px] font-semibold leading-6 text-black")}>{label}</p>}
                    <fieldset className={cx("m-0 border-0 p-0", grid ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2")}>
                      <legend className="sr-only">{label || title}</legend>
                      {items.map((slot) => (
                        <SlotOption
                          key={slot.id}
                          slot={slot}
                          name={name}
                          checked={selected === slot.id}
                          error={error}
                          onSelect={() => onSelect(slot)}
                          wide={group === "dropoff"}
                        />
                      ))}
                    </fieldset>
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
}
