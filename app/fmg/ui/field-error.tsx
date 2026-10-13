import { cx } from "@/app/components/services/class-names";
import { SEMIBOLD } from "./styles";

type FieldErrorProps = {
  message?: string;
  // "select": under a drop-down (8px gap, regular text). "input": under a
  // text box (4px gap, medium text). "options": under a group of option
  // buttons or cards (semibold font).
  variant: "select" | "input" | "options";
  id?: string;
};

// Red validation message shown after the visitor presses Continue
export default function FieldError({ message, variant, id }: FieldErrorProps) {
  return (
    <div
      id={id}
      className={cx(
        "-mx-3 flex-wrap text-left text-[14px] text-[#db0020]",
        message ? "flex" : "hidden",
        variant === "select" && "mt-2 leading-[1.625]",
        variant === "options" && SEMIBOLD,
      )}
    >
      <span
        aria-atomic="true"
        aria-live="polite"
        className={cx(
          "w-full max-w-full px-3",
          variant === "select" ? "font-normal" : "mt-1 font-medium leading-[1.7]",
          variant === "input" && "inline-flex",
        )}
      >
        {message}
      </span>
    </div>
  );
}
