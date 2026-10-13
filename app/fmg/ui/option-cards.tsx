import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import FieldError from "./field-error";
import { REGULAR, SEMIBOLD } from "./styles";

export type OptionCard = { value: string; label: string; image: string; subText?: string };

type OptionCardsProps = {
  name: string;
  type: "checkbox" | "radio";
  // Read by screen readers ("Select one or more options below.")
  legend: string;
  options: OptionCard[];
  selected: string[];
  onToggle: (value: string) => void;
  error?: string;
  // "third": every card takes a third of the row (the damage location cards)
  width?: "third" | "equal";
};

// White picture cards: a car or glass drawing, a checkbox square for
// multi-select cards, and the label. Checked cards turn light blue.
export default function OptionCards({
  name,
  type,
  legend,
  options,
  selected,
  onToggle,
  error,
  width = "equal",
}: OptionCardsProps) {
  return (
    <div className={cx(SEMIBOLD, "text-black")}>
      <div className="flex w-full justify-center">
        <fieldset className="w-full" role={type === "checkbox" ? "group" : "radiogroup"} aria-required="true">
          <legend className="sr-only">{legend}</legend>
          <div className="-mx-1 -mt-2 mb-1 flex flex-nowrap justify-center min-[768px]:-mx-3 min-[768px]:-mt-6">
            {options.map((option) => {
              const id = `${name}-${option.value}`;
              const checked = selected.includes(option.value);
              return (
                <div
                  key={option.value}
                  className={cx(
                    "mt-2 px-1 min-[768px]:mt-6 min-[768px]:px-3",
                    width === "third" ? "w-1/3 flex-none" : "min-w-0 flex-1",
                  )}
                >
                  <label
                    htmlFor={id}
                    className={cx(
                      "flex h-full w-full cursor-pointer items-center rounded-lg border shadow-[0_1px_5px_0_rgba(0,0,0,0.2)]",
                      error ? "border-[#db0020] text-[#db0020]" : "border-[#8e9292]",
                    )}
                  >
                    <input
                      id={id}
                      type={type}
                      name={name}
                      value={option.value}
                      checked={checked}
                      onChange={() => onToggle(option.value)}
                      aria-required="true"
                      className="peer absolute size-0 opacity-0"
                    />
                    <div
                      className={cx(
                        "relative flex h-full w-full flex-col items-center justify-start rounded-lg px-1 pb-3 pt-4 outline-none",
                        checked && "bg-[#e4f1f7] shadow-[0_0_0_1px_#0070d1]",
                        "peer-focus:shadow-[0_0_0_2.5px_#0070d1]",
                        type === "checkbox" &&
                          "before:absolute before:mt-12 before:flex before:size-4 before:shrink-0 before:rounded-[2px] before:border before:border-[#8e9292] before:bg-white",
                        type === "checkbox" &&
                          checked &&
                          "before:bg-[#0070d1] after:absolute after:z-[1] after:mt-[3.2rem] after:h-[6px] after:w-[11px] after:[transform:rotate(-45deg)] after:border-b-2 after:border-l-2 after:border-white",
                      )}
                    >
                      <Image
                        src={option.image}
                        alt=""
                        width={84}
                        height={32}
                        unoptimized
                        className={cx("order-1 h-8 w-auto max-w-full", type === "checkbox" ? "mb-[2.2rem]" : "mb-0")}
                      />
                      <p
                        className={cx(
                          "order-3 mb-0 text-center text-[14px] leading-[1.7]",
                          option.subText ? "mt-2" : "mt-0",
                          checked ? cx(SEMIBOLD, "text-black") : cx(REGULAR, "text-[#4d5151]"),
                        )}
                      >
                        {option.label}
                      </p>
                      {option.subText && (
                        <p
                          className={cx(
                            "order-4 m-0 text-center text-[12px] leading-[1.625]",
                            checked ? cx(SEMIBOLD, "text-[#4d5151]") : cx(REGULAR, "text-[#727676]"),
                          )}
                        >
                          {option.subText}
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
      </div>
      <FieldError variant="options" message={error} />
    </div>
  );
}
