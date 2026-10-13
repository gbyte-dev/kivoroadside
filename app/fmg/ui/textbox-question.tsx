import type { InputHTMLAttributes, ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import FieldError from "./field-error";
import { REGULAR, SEMIBOLD } from "./styles";

export const INPUT_BASE =
  "block min-h-12 w-full appearance-none rounded-lg border px-4 py-3 text-base font-normal leading-6 text-[#4d5151] transition-[border-color,box-shadow] duration-150 ease-in-out placeholder:text-[#8e9292] focus:outline-none min-[768px]:min-h-14 min-[768px]:p-4";

export const INPUT_OK =
  "border-[#8e9292] bg-white shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_4px_#9fcee6] focus:shadow-[0_0_0_2.5px_#0070d1] disabled:bg-[#f5f5f5] disabled:hover:shadow-[0_0_0_4px_transparent]";

export const INPUT_ERROR =
  "border-[#db0020] bg-white shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_4px_#fcbfbb] focus:border-transparent focus:shadow-[0_0_0_2.5px_#db0020]";

type TextboxQuestionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "className"> & {
  id: string;
  label: ReactNode;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
  inputClassName?: string;
  // Extra controls inside the field (camera or search button)
  children?: ReactNode;
};

// Labelled text box with the red message under it after a failed check
export default function TextboxQuestion({
  id,
  label,
  value,
  onChange,
  error,
  className,
  inputClassName,
  children,
  ...inputProps
}: TextboxQuestionProps) {
  return (
    <div className={cx("mb-4", className)}>
      <label
        htmlFor={id}
        aria-label={typeof label === "string" ? label : undefined}
        className={cx(SEMIBOLD, "mb-1 inline-block text-base leading-6 text-black")}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type="text"
          value={value}
          aria-invalid={Boolean(error)}
          onChange={(event) => onChange(event.target.value)}
          className={cx(REGULAR, INPUT_BASE, error ? INPUT_ERROR : INPUT_OK, inputClassName)}
          {...inputProps}
        />
        {children}
      </div>
      <FieldError variant="input" message={error} />
    </div>
  );
}
