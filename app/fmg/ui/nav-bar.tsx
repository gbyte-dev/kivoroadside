import Link from "next/link";
import { cx } from "@/app/components/services/class-names";
import { SEMIBOLD } from "./styles";

type NavBarProps = {
  onContinue: () => void;
  backHref?: string;
  continueLabel?: string;
  // Shows the spinner and the red ring while the next page loads
  loading?: boolean;
  // Full-width button (the quote page)
  wide?: boolean;
  // Full-width button with "Back" under it (the review page)
  stacked?: boolean;
  className?: string;
};

// "Back" link on the left and the red "Continue" pill on the right. The
// button stays red even before the form is complete; pressing it then shows
// the validation messages, as on the reference.
export default function NavBar({
  onContinue,
  backHref,
  continueLabel = "Continue",
  loading = false,
  wide = false,
  stacked = false,
  className,
}: NavBarProps) {
  return (
    <>
      {/* An empty flex row, as on the reference: it keeps the margin above
          the bar from merging with the one before it */}
      <div className="flex" />
      <div className={cx("relative z-[2] my-6 flex", className)}>
        <div
          className={cx(
            "-mx-3 flex flex-1 justify-between",
            stacked ? "flex-col items-stretch" : "flex-row-reverse items-center",
          )}
        >
          <div className={cx("flex max-w-full flex-1 px-3", wide || stacked ? "justify-center" : "justify-end")}>
            <button
              type="button"
              onClick={onContinue}
              aria-busy={loading}
              className={cx(
                SEMIBOLD,
                "relative flex h-12 items-center rounded-full bg-[#db0020] px-8 py-3 text-center text-base leading-6 text-white transition-[background] ease-in-out focus-visible:shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#db0020] focus-visible:outline-none",
                wide || stacked ? "w-full justify-center" : "justify-end",
                stacked ? "font-medium" : "font-normal",
                loading && "pointer-events-none shadow-[0_0_0_3px_#fff,0_0_0_5.5px_#db0020]",
              )}
            >
              <span className="m-0">{continueLabel}</span>
              {loading && (
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block size-4 animate-spin rounded-full border-2 border-white border-r-transparent"
                />
              )}
            </button>
          </div>
          {/* The wide button (quote page) has its own Back link elsewhere */}
          {!wide && (
            <div className={cx("max-w-full px-3 py-1 [overflow-wrap:anywhere]", stacked && "mt-6")}>
              {backHref && (
                <Link
                  href={backHref}
                  className={cx(
                    SEMIBOLD,
                    "whitespace-nowrap text-[14px] font-semibold leading-[26px] text-[#0070d1] no-underline min-[768px]:text-base",
                  )}
                >
                  Back
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
