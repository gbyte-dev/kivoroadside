"use client";

import { useState } from "react";
import Image from "next/image";
import { cx } from "@/app/components/services/class-names";
import { money } from "../pricing";

const SCHEDULE = ["Today", "2 weeks", "4 weeks", "6 weeks"];

// "4 interest-free payments of $X over six weeks with Afterpay", and under
// "See payment plan" the four dated installments
export default function AfterpayBreakout({ total, onLearnMore }: { total: number; onLearnMore: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const installment = money(Math.round((total / 4) * 100) / 100);
  return (
    <div role="alert" className="relative mb-6 mt-4 rounded-[5px] border-0 bg-[#e4f1f7] px-0 py-[0.675rem] text-[#055160]">
      <div className="mx-2 my-4 text-center font-semibold text-black min-[768px]:mx-4">
        <span>4 interest-free payments of</span>
        <span className="ml-1 text-[#0c7e47]">{installment}</span>
        <br />
        <span className="font-normal text-[#4b4c4e]">over six weeks with</span>
        <Image
          src="/image/fmg/icons/cashappafterpay_logo_black.svg"
          alt=""
          width={90}
          height={23}
          unoptimized
          className="ml-1 inline"
        />
        <a
          href="#"
          aria-label="Learn more about Afterpay"
          className="ml-1 pb-1 leading-[2]"
          onClick={(event) => {
            event.preventDefault();
            onLearnMore();
          }}
        >
          <Image src="/image/fmg/ui/info-circle.svg" alt="Info Icon" width={24} height={24} unoptimized className="inline" />
        </a>
        <div className="mt-4">
          <div className="cursor-pointer" onClick={() => setExpanded((open) => !open)}>
            <a
              href="#!"
              aria-expanded={expanded}
              onClick={(event) => event.preventDefault()}
              className="pb-1 font-semibold leading-[2] text-[#0070d1] no-underline"
            >
              See payment plan
            </a>
            <span
              aria-hidden="true"
              className={cx(
                "ml-2 inline-flex h-[0.5625rem] w-4 bg-[url(/image/fmg/ui/afterpay-chevron.svg)] bg-right bg-no-repeat transition-all duration-500",
                expanded && "rotate-180",
              )}
            />
          </div>
          <div
            className={cx(
              "overflow-hidden transition-all duration-[250ms]",
              expanded ? "visible max-h-[500px] opacity-100 ease-in" : "invisible max-h-0 opacity-0 ease-out",
            )}
          >
            <div className="mt-4 flex justify-around gap-2 text-[14px] min-[768px]:gap-0">
              {SCHEDULE.map((when) => (
                <div
                  key={when}
                  className="flex w-[4.375rem] flex-col rounded-md bg-[linear-gradient(180deg,#fff_50%,#e7f2ed_0)] text-center font-bold shadow-[0_4px_8px_-4px_rgba(0,0,0,0.15)] min-[768px]:w-20"
                >
                  <div className="whitespace-nowrap p-2 text-[#0a0a0a]">
                    <div>
                      <Image
                        src="/image/fmg/ui/calendar-icon-black.svg"
                        alt=""
                        width={16}
                        height={16}
                        unoptimized
                        className="inline"
                      />
                    </div>
                    <div>{when}</div>
                  </div>
                  <div className="p-2">
                    <div>
                      <Image src="/image/fmg/ui/payment-icon-green.svg" alt="" width={16} height={16} unoptimized className="inline" />
                    </div>
                    <div className="text-[#00723e]">{installment}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-4 text-[14px] text-[#4b4c4e]">
              <div className="flex items-center gap-0.5 whitespace-nowrap">
                <Image src="/image/fmg/ui/calendar-icon-grey.svg" alt="" width={17} height={16} unoptimized />
                <span className="font-normal">Payment Schedule</span>
              </div>
              <div className="flex items-center gap-0.5 whitespace-nowrap">
                <Image src="/image/fmg/ui/payment-icon-grey.svg" alt="" width={17} height={16} unoptimized />
                <span className="font-normal">Amount Due</span>
              </div>
            </div>
            <p className="m-0 pt-4 text-[12px] font-normal">6 or 12 monthly payment plans available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
