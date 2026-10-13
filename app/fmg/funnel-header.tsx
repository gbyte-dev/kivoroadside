"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/app/components/services/class-names";
import { AI_CHAT_URL } from "@/app/components/services/ai-chat-button";
import { FUNNEL_STEPS, funnelPage } from "./flow";
import { CONTAINER, SEMIBOLD } from "./ui/styles";

const BAR = "my-px h-[2px] w-6 bg-[#0070d1] transition-all duration-[250ms]";

// Where the four step dots sit on the menu's vertical progress bar
const DOT_TOPS = [1, 114, 227, 332];

// Sticky funnel header: a thin red progress bar, the logo, "Chat now" and the
// "Step x of 4" button that slides the step list in from the right.
export default function FunnelHeader() {
  const pathname = usePathname();
  const { step, progress } = funnelPage(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // The header gets a soft shadow once the page scrolls under it
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-[1000] bg-white transition-shadow duration-300 ease-in-out",
        scrolled && "shadow-[0_0_10px_0_rgba(0,0,0,0.2)]",
      )}
    >
      <div className="flex w-full">
        <div className="relative h-[5px] w-full bg-[#e4f1f7] shadow-[inset_0_1px_2px_rgba(0,0,0,0.075)]">
          <div
            className="absolute inset-y-0 left-0 bg-[#db0020] transition-[width] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={cx(CONTAINER, "flex items-center overflow-x-hidden overflow-y-auto py-4 min-[768px]:py-8")}>
        <div className="mr-auto">
          <Link href="/" className="pb-1 leading-8">
            <Image
              src="/image/fmg/icons/safelite-logo.svg"
              alt="Safelite logo"
              width={165}
              height={28}
              unoptimized
              className="inline h-auto w-[100px] max-w-full align-middle min-[768px]:w-[165px]"
            />
          </Link>
        </div>

        <div className="mr-3.5">
          <span className="flex">
            <button
              type="button"
              onClick={() => window.open(AI_CHAT_URL, "_blank", "noopener")}
              className={cx(
                SEMIBOLD,
                "h-8 w-8 bg-transparent bg-[url(/image/fmg/ui/chat.svg)] bg-[length:2rem_2rem] bg-[position:100%_center] bg-no-repeat py-px pl-1.5 text-center text-[14px] font-semibold uppercase leading-[22.75px] text-[#0070d1] min-[768px]:w-[7.5rem] min-[768px]:pr-8",
              )}
            >
              <span className="hidden min-[768px]:inline">Chat Now</span>
            </button>
          </span>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Hamburger Menu (modal window)"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className={cx(
              SEMIBOLD,
              "relative z-[1050] flex items-center justify-center rounded-[24px] bg-white px-2 py-[2.4px] text-[14px] font-semibold leading-[22.75px] text-[#0070d1] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] min-[768px]:px-4 min-[768px]:py-1",
            )}
          >
            <span>{menuOpen ? "Close" : `Step ${step} of 4`}</span>
            <div className="ms-2 flex size-6 scale-75 flex-col justify-around">
              <div className={cx(BAR, menuOpen && "[transform:rotate(-45deg)_translate(-3px,8px)]")} />
              <div className={cx(BAR, menuOpen && "opacity-0")} />
              <div className={cx(BAR, menuOpen && "[transform:rotate(45deg)_translate(-3px,-8px)]")} />
            </div>
          </button>
        </div>
      </div>

      {/* Step list: a 294px panel under the header over a dark backdrop */}
      <div
        aria-hidden={!menuOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) setMenuOpen(false);
        }}
        className={cx(
          "fixed inset-x-0 bottom-0 top-[68px] z-[1055] border-t border-[#d2d4d4] bg-black/50 min-[768px]:top-[102px]",
          menuOpen
            ? "visible opacity-100 [transition:opacity_0.15s_linear]"
            : "invisible opacity-0 [transition:opacity_0.15s_linear,visibility_0s_linear_0.4s]",
        )}
      >
        <div
          className={cx(
            "fixed bottom-0 right-0 top-[68px] z-[1050] w-screen max-w-[294px] transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] min-[768px]:top-[102px]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-full flex-col bg-white">
            <h5 className="sr-only">Footer Navigation</h5>
            <div className="flex flex-col items-center overflow-auto p-8">
              <div className="grid max-w-[140px] grid-cols-[1fr_1fr]">
                <div className="relative w-6">
                  <div className="relative h-[356px] w-6 overflow-hidden rounded-full bg-[#e4f1f7] shadow-[inset_0_1px_2px_rgba(0,0,0,0.075)]">
                    <div
                      className="absolute left-0 top-0 w-full rounded-full bg-[#db0020] transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{ height: `${progress}%` }}
                    />
                  </div>
                  {DOT_TOPS.map((top) => (
                    <span
                      key={top}
                      className="absolute left-px size-[22px] rounded-full border border-[#b0b3b3] bg-white"
                      style={{ top }}
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-between">
                  {FUNNEL_STEPS.map((name, index) => (
                    <div key={name} className="leading-none">
                      <span className="text-[12px]">
                        Step {index + 1} of 4
                      </span>
                      <br />
                      <span className={cx("text-[20px]", index + 1 === step && cx(SEMIBOLD, "font-semibold"))}>
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
