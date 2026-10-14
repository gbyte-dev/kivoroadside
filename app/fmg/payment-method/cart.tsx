"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import type { ServicePackage, Vaps } from "../fmg-state";
import { money, type Cart as CartModel } from "../pricing";
import { SEMIBOLD } from "../ui/styles";
import { TOGGLE_CHEVRON } from "./review-dropdown";

const PACKAGE_TITLES: Record<ServicePackage, string> = {
  TierOne: "Glass service only",
  TierTwo: "Standard service",
  TierThree: "Premium service",
};

const VERIFYING = "Verifying coverage";
const ROW = "flex justify-between px-6 py-2";
const TOTAL_ROW = cx(SEMIBOLD, ROW, "text-black");
// Blue semibold links ("Remove", "Have a promo code?") with the 4px under
// every link on the reference
const CART_LINK = cx(SEMIBOLD, "pb-1 font-semibold text-[#0070d1] no-underline hover:text-[#06577c]");

type CartProps = {
  cart: CartModel;
  // Paying with insurance: amounts wait on the coverage check
  insurance: boolean;
  promoCode?: string;
  // Without these (the confirmation page) there are no "Remove" links and
  // no promo code link
  onRemove?: (vap: keyof Vaps) => void;
  onPromoClick?: () => void;
  // "Total" while reviewing, "Amount due" once submitted
  totalLabel?: string;
};

// The recycling line's "?" with its pop-up note
function RecyclingTip() {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (container.current && !container.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  return (
    <span ref={container} className="relative ml-[0.2rem] inline-block">
      <span
        role="button"
        tabIndex={0}
        aria-label="About the recycling fee"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((value) => !value);
          }
        }}
        className="inline-block cursor-pointer"
      >
        <Image src="/image/fmg/ui/question-mark-icon-blue.svg" alt="" width={16} height={16} unoptimized className="inline w-4" />
      </span>
      {open && (
        <span className="absolute left-[-6rem] top-full z-[500] flex w-[16.5rem] flex-col rounded bg-white p-4 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]">
          <h3 className={cx(SEMIBOLD, "mb-2 text-[0.8rem] font-semibold leading-[1.2] text-black")}>
            Specialized materials recycling
          </h3>
          <p className="m-0 text-[12px] leading-[1.7]">
            We work with a recycling partner to dispose of your window glass and its component parts in a way that
            doesn’t harm the environment, and we recycle all materials that can be repurposed.{" "}
            <a href="/why-choose-safelite" target="_blank" className="text-[#0070d1]">
              Learn more
            </a>
          </p>
        </span>
      )}
    </span>
  );
}

// "Order details" with the total; opened, the package and its add-ons,
// fees, subtotal, sales tax and total, plus the promo code link
export default function Cart({ cart, insurance, promoCode, onRemove, onPromoClick, totalLabel = "Total" }: CartProps) {
  const [expanded, setExpanded] = useState(false);
  const amount = (value: number) => (insurance ? VERIFYING : money(value));
  return (
    <div>
      <div className="px-0">
        <div className="-mx-3 flex flex-wrap items-center pt-4" onClick={() => setExpanded((open) => !open)}>
          <a
            aria-label="expand cart"
            aria-expanded={expanded}
            href="#"
            onClick={(event) => event.preventDefault()}
            className={cx(SEMIBOLD, "flex min-w-0 flex-[1_0_0%] justify-between px-3 py-0 no-underline")}
          >
            <span className="font-medium leading-[1.625] text-black">Order details</span>
            <span className="text-[20px] font-medium leading-[1.625] text-[#0c7e47]">{amount(cart.total)}</span>
          </a>
          <span aria-hidden="true" className={cx(TOGGLE_CHEVRON, expanded && "rotate-180")} />
        </div>
        <div
          className={cx(
            "overflow-hidden text-[#4d5151]",
            expanded
              ? "visible max-h-[650px] pb-2 pt-4 transition-all duration-150 ease-in"
              : "invisible max-h-0 transition-all duration-[350ms] ease-in",
          )}
        >
          <div>
            {insurance && (
              <div className={cx(ROW, "items-center")}>
                <div className="w-1/2">
                  <span>
                    <span>Deductible</span>
                  </span>
                </div>
                <span>{VERIFYING}</span>
              </div>
            )}
            <div className={cx(ROW, "items-center")}>
              <div className="w-1/2">
                <span>
                  <span>{PACKAGE_TITLES[cart.level]}</span>
                </span>
              </div>
              <span>{money(cart.packagePrice)}</span>
              {cart.packageOriginal !== undefined && cart.packageOriginal > cart.packagePrice && (
                <span className="pl-2 line-through">{money(cart.packageOriginal)}</span>
              )}
            </div>
            {cart.packageItems.map((item) => (
              <div key={item.key} className={cx(ROW, "items-center pl-10 text-[14px]")}>
                <span className="flex">
                  <span className={cx(item.key === "promo" && "uppercase")}>{item.name}</span>
                </span>
                {item.removable && onRemove && (
                  <a
                    href="#"
                    className={cx(CART_LINK, "text-[14px] leading-[1.75]")}
                    onClick={(event) => {
                      event.preventDefault();
                      onRemove(item.removable!);
                    }}
                  >
                    Remove<span className="sr-only"> {item.name}</span>
                  </a>
                )}
              </div>
            ))}
            {cart.otherItems.map((item) => (
              <div key={item.key} className={cx(ROW, item.removable && "flex-wrap")}>
                {item.tooltip ? (
                  <span>
                    {item.name} <RecyclingTip />
                  </span>
                ) : (
                  <span>{item.name}</span>
                )}
                {item.removable && onRemove && (
                  <a
                    href="#"
                    className={cx(CART_LINK, "order-3 mr-[100%] leading-[1.625]")}
                    onClick={(event) => {
                      event.preventDefault();
                      onRemove(item.removable!);
                    }}
                  >
                    Remove<span className="sr-only"> {item.name}</span>
                  </a>
                )}
                <span>{money(item.amount ?? 0)}</span>
              </div>
            ))}
            <div className={cx(TOTAL_ROW, "border-t border-[#4d5151]")}>
              <span>Subtotal</span>
              <span>{amount(cart.subtotal)}</span>
            </div>
            {cart.salesTax > 0 && (
              <div className={TOTAL_ROW}>
                <span>Sales tax</span>
                <span>{money(cart.salesTax)}</span>
              </div>
            )}
            <div className={cx(TOTAL_ROW, "bg-[#f5f5f5]")}>
              <span>{totalLabel}</span>
              <span className="text-[#0c7e47]">{amount(cart.total)}</span>
            </div>
          </div>
          {onPromoClick && (
            <div className="mt-4 text-[14px]">
              <a
                href="#"
                className={cx(CART_LINK, "text-[14px] leading-[26px] min-[768px]:text-[16px]")}
                onClick={(event) => {
                  event.preventDefault();
                  onPromoClick();
                }}
              >
                Have a promo code?
              </a>
            </div>
          )}
        </div>
      </div>
      {promoCode && (
        <div className="my-2 leading-none">
          <span className="rounded-xl bg-[#e3f2ea] px-2 py-0.5 text-[12px] font-medium text-[#006a36]">
            Promo code <span className="p-0 uppercase">{promoCode}</span> applied
          </span>
        </div>
      )}
    </div>
  );
}
