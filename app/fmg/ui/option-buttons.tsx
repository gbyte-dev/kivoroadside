import { cx } from "@/app/components/services/class-names";
import FieldError from "./field-error";
import { SEMIBOLD } from "./styles";

export type OptionButton = { value: string; label: string; subText?: string };

type OptionButtonsProps = {
  name: string;
  legend: string;
  options: OptionButton[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  // Tighter side padding (the service location buttons)
  compact?: boolean;
};

// Full-width pill buttons, one per answer; the chosen one turns light blue
export default function OptionButtons({ name, legend, options, value, onChange, error, compact }: OptionButtonsProps) {
  return (
    <div className={cx(SEMIBOLD, "text-black")}>
      <div className="flex w-full justify-center">
        <fieldset className="w-full" role="radiogroup" aria-required="true">
          <legend className="sr-only">{legend}</legend>
          <div className="w-full">
            {options.map((option) => {
              const id = `${name}-${option.value}`;
              const checked = value === option.value;
              return (
                <div key={option.value}>
                  <label
                    htmlFor={id}
                    className={cx(
                      "relative mb-2 flex w-full cursor-pointer flex-col rounded-full",
                      error && "text-[#db0020]",
                      !checked && (error ? "hover:shadow-[0_0_0_4px_#fcbfbb]" : "hover:z-[5] hover:shadow-[0_0_0_4px_#9fcee6]"),
                    )}
                  >
                    <input
                      id={id}
                      type="radio"
                      name={name}
                      value={option.value}
                      checked={checked}
                      onChange={() => onChange(option.value)}
                      aria-required="true"
                      className="peer sr-only"
                    />
                    <div
                      aria-label={option.label}
                      className={cx(
                        "relative flex w-full flex-col justify-center rounded-full border shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] transition-all duration-150 ease-linear peer-focus:shadow-[0_0_0_2.5px_#0070d1]",
                        compact ? "px-2 py-4" : "px-4 py-3 min-[768px]:p-4",
                        checked
                          ? "border-[#0070d1] bg-[#e4f1f7] font-medium text-black"
                          : cx("bg-white text-[#4d5151]", error ? "border-[#db0020]" : "border-[#8e9292]"),
                      )}
                    >
                      <span className={cx("m-0 text-center leading-6", compact && checked && "font-semibold")}>{option.label}</span>
                      {option.subText && (
                        <span
                          className={cx(
                            "m-0 text-center text-[12px] leading-[1.7]",
                            checked ? "font-normal text-[#4d5151]" : "text-[#727676]",
                          )}
                        >
                          {option.subText}
                        </span>
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
