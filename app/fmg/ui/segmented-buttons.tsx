import { cx } from "@/app/components/services/class-names";
import FieldError from "./field-error";
import { SEMIBOLD } from "./styles";

export type Segment = { value: string; label: string };

type SegmentedButtonsProps = {
  name: string;
  legend: string;
  options: Segment[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
};

// A row of joined buttons ("1 | 2 | 3"): square inner corners, 8px outer
// corners, and the chosen one light blue with a blue ring.
export default function SegmentedButtons({ name, legend, options, value, onChange, error }: SegmentedButtonsProps) {
  return (
    <div className={cx(SEMIBOLD, "text-black")}>
      <div className="flex w-full justify-center">
        <fieldset className="w-full" role="radiogroup" aria-required="true">
          <legend className="sr-only">{legend}</legend>
          <div className="flex flex-row p-0">
            {options.map((option, index) => {
              const id = `${name}-${option.value}`;
              const checked = value === option.value;
              const first = index === 0;
              const last = index === options.length - 1;
              return (
                <div key={option.value} className="min-w-0 flex-1">
                  <label
                    htmlFor={id}
                    className={cx(
                      "relative flex h-full w-full cursor-pointer flex-col shadow-[0_1px_5px_0_rgba(0,0,0,0.2)]",
                      first && "rounded-l-lg",
                      last && "rounded-r-lg",
                      !checked &&
                        (error
                          ? "hover:z-[5] hover:rounded-full hover:shadow-[0_0_0_4px_#fcbfbb]"
                          : "hover:z-[5] hover:rounded-full hover:shadow-[0_0_0_4px_#9fcee6]"),
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
                      className="peer absolute size-0 opacity-0"
                    />
                    <div
                      className={cx(
                        "relative flex w-full flex-col justify-center border px-1 py-3 transition-all duration-150 ease-linear peer-focus-visible:z-[3] peer-focus-visible:shadow-[0_0_0_2.5px_#0070d1]",
                        first && "rounded-l-lg",
                        last && "rounded-r-lg",
                        error ? "border-[#db0020] text-[#db0020]" : "border-[#8e9292] text-[#4d5151]",
                        checked && "z-[2] bg-[#e4f1f7] shadow-[0_0_0_1px_#0070d1]",
                      )}
                    >
                      <span className="m-0 text-center text-[14px] leading-[1.5]">{option.label}</span>
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
