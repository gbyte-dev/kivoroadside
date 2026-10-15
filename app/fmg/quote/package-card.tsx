import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import type { ServicePackage } from "../fmg-state";
import { money, type PackagePrice } from "../pricing";
import { SEMIBOLD } from "../ui/styles";

export type PackageCardProps = {
  value: ServicePackage;
  title: string;
  subLabel?: string;
  bullets: ReactNode[];
  footer?: string;
  checked: boolean;
  onSelect: () => void;
  // Paying on one's own shows installments; insurance shows the add-on cost
  insurance: boolean;
  cash: PackagePrice;
  insurancePrice: number;
};

// One of the three service packages: a radio card with the package name,
// what it includes (shown on phones only once chosen) and its price at the
// bottom (top right for insurance on phones).
export default function PackageCard({
  value,
  title,
  subLabel,
  bullets,
  footer,
  checked,
  onSelect,
  insurance,
  cash,
  insurancePrice,
}: PackageCardProps) {
  const discounted = !insurance && cash.original !== undefined;
  return (
    <div className="mb-4 last:mb-0 min-[768px]:mb-0 min-[768px]:mt-4 min-[768px]:flex min-[768px]:flex-1 min-[768px]:flex-col min-[768px]:[&:first-child]:mr-4 min-[768px]:[&:last-child]:ml-4 min-[768px]:[&:not(:first-child):not(:last-child)]:mx-2">
      <label className="block min-[768px]:flex min-[768px]:h-full">
        <input
          type="radio"
          name="ServicePackageQuestion"
          value={value}
          checked={checked}
          onChange={onSelect}
          className="peer absolute -left-[9999px] opacity-0"
        />
        <div
          className={cx(
            "relative flex w-full cursor-pointer items-start overflow-hidden rounded-lg border p-3 shadow-[0_4px_8px_-4px_rgba(0,0,0,0.15),0_4px_24px_-8px_rgba(0,0,0,0.2)] transition-[max-height] duration-[250ms] ease-in",
            "before:relative before:top-[5px] before:mr-2 before:size-4 before:min-w-4 before:rounded-full before:border before:border-[#8e9292]",
            "peer-focus-visible:before:border-2 peer-focus-visible:before:border-[#0070d1]",
            checked
              ? "max-h-[1000px] border-[#0070d1] bg-[#e4f1f7] before:shadow-[0_0_0_1px_#0070d1] after:absolute after:left-[15px] after:top-5 after:size-2.5 after:rounded-full after:bg-[#0070d1]"
              : cx("border-[#d2d4d4]", subLabel || discounted ? "max-h-[150px]" : "max-h-[126px]"),
            insurance ? "pb-3 min-[768px]:pb-12" : "pb-16 min-[768px]:pb-[4.75rem]",
            subLabel || discounted ? "min-h-[72px]" : "min-h-[52px]",
            "min-[768px]:max-h-[1000px]",
          )}
        >
          <div className="flex w-full flex-col">
            <div>
              <p
                className={cx(
                  SEMIBOLD,
                  "m-0 flex items-center justify-between whitespace-nowrap text-black",
                  checked ? "font-semibold" : "font-normal",
                )}
              >
                <span>{title}</span>
              </p>
              {subLabel && (
                <p className={cx(SEMIBOLD, "m-0 inline-flex py-1 text-[12px] font-semibold uppercase leading-[1.625] text-[#0c7e47]")}>
                  {subLabel}
                </p>
              )}
            </div>
            <div
              className={cx(
                "flex flex-col transition-opacity duration-150 min-[768px]:max-h-none min-[768px]:overflow-visible min-[768px]:opacity-100",
                checked ? "max-h-none overflow-visible opacity-100 delay-150" : "max-h-0 overflow-hidden opacity-0",
              )}
            >
              <ul className={cx(SEMIBOLD, "-ml-[5px] mb-0 mt-4 list-disc p-0")}>
                {bullets.map((bullet, index) => (
                  <li key={index} className="text-[14px] leading-[1.714] text-[#727676]">
                    {typeof bullet === "string" ? <span>{bullet}</span> : bullet}
                  </li>
                ))}
              </ul>
              {footer && (
                <div className={cx(SEMIBOLD, "-ml-4 mt-4 text-[12px] font-semibold leading-[1.7] text-[#db0020]")}>{footer}</div>
              )}
            </div>
            {discounted && (
              <div className="-ml-5 mr-auto mt-1 flex flex-row rounded bg-[#e3f2ea] px-4 py-1 min-[768px]:mt-4">
                <span className={cx(SEMIBOLD, "text-[14px] font-semibold leading-[1.5] text-[#0c7e47]")}>
                  {/* Whole dollars without cents, as the reference prints it ("Save $75") */}
                  {`Special: Save $${Math.round((cash.original! - cash.total) * 100) / 100}`}
                </span>
              </div>
            )}
            <span
              className={cx(
                SEMIBOLD,
                "absolute bottom-3 left-0 ml-5 font-semibold text-[#0c7e47]",
                "text-[20px] leading-5",
                insurance
                  ? "max-w-[60%] max-[767.98px]:bottom-auto max-[767.98px]:left-auto max-[767.98px]:right-3 max-[767.98px]:top-3 max-[767.98px]:m-0 max-[767.98px]:text-end"
                  : "w-[calc(100%-1.25rem)]",
              )}
            >
              {insurance ? (
                <div>
                  <span className="text-[14px]">As little as {money(insurancePrice)}</span>
                </div>
              ) : (
                <div>
                  <span>{money(cash.perPayment)}</span>
                  <span className="ml-1 text-[14px] font-normal text-[#727676]">
                    <span>in 4 interest-free payments</span>
                    <div className="text-[10px]">
                      {" "}
                      or <span className="text-[12px] font-semibold">{money(cash.total)}</span>
                      {cash.original !== undefined && (
                        <span className="ml-1 text-[12px] font-normal text-[#727676] line-through">
                          {money(cash.original)}
                        </span>
                      )}{" "}
                      in single payment{" "}
                    </div>
                  </span>
                </div>
              )}
            </span>
          </div>
        </div>
      </label>
    </div>
  );
}
