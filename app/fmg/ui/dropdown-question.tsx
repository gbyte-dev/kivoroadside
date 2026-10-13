import { cx } from "@/app/components/services/class-names";
import FieldError from "./field-error";
import { REGULAR, SEMIBOLD } from "./styles";

const SELECT_BASE =
  "block min-h-12 w-full appearance-none rounded-lg border bg-[length:16px_12px] bg-[position:right_0.75rem_center] bg-no-repeat py-1.5 pl-3 pr-9 text-base font-normal leading-6 text-[#4d5151] transition-[border-color,box-shadow] duration-150 ease-in-out focus:outline-none min-[768px]:min-h-14";

const SELECT_OK =
  "border-[#8e9292] bg-white bg-[url(/image/fmg/ui/select-chevron.svg)] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_4px_#9fcee6] focus:shadow-[0_0_0_2.5px_#0070d1] disabled:bg-[#f5f5f5] disabled:grayscale disabled:hover:shadow-[0_0_0_4px_transparent]";

// A disabled drop-down in error keeps the red border under the gray filter,
// which turns it near-black, as on the reference
const SELECT_ERROR =
  "border-[#db0020] bg-white bg-[url(/image/fmg/ui/select-chevron-error.svg)] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_4px_#fcbfbb] focus:border-transparent focus:shadow-[0_0_0_2.5px_#db0020] disabled:bg-[#f5f5f5] disabled:bg-[url(/image/fmg/ui/select-chevron.svg)] disabled:grayscale disabled:hover:shadow-[0_0_0_4px_transparent]";

type DropdownQuestionProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  disabled?: boolean;
  error?: string;
  // Red border without a message (the locked drop-downs after a failed Continue)
  invalid?: boolean;
  onChange: (value: string) => void;
  className?: string;
};

// Labelled drop-down (Year, Make, State...). A disabled one is gray and empty.
export default function DropdownQuestion({
  id,
  label,
  placeholder,
  value,
  options,
  disabled = false,
  error,
  invalid = Boolean(error),
  onChange,
  className,
}: DropdownQuestionProps) {
  return (
    <div className={cx("mb-6 mt-4", className)}>
      <label htmlFor={id} aria-label={label} className={cx(SEMIBOLD, "mb-1 inline-block text-base leading-6 text-black")}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={disabled ? "" : value}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={invalid}
        onChange={(event) => onChange(event.target.value)}
        className={cx(REGULAR, SELECT_BASE, invalid ? SELECT_ERROR : SELECT_OK)}
      >
        {!disabled && <option value="">{placeholder}</option>}
        {!disabled &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
      <FieldError variant="select" message={error} />
    </div>
  );
}
