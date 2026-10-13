import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cx } from "@/app/components/services/class-names";
import { urbanistBold, urbanistRegular, urbanistSemibold } from "./fonts";
import { FmgProvider } from "./fmg-state";
import FunnelHeader from "./funnel-header";
import FunnelFooter from "./funnel-footer";
import { REGULAR } from "./ui/styles";

export const metadata: Metadata = {
  title: "Safelite",
};

// Quote and scheduling funnel ("Fix my glass"): its own header with the step
// progress, the page, and a short legal footer pushed to the bottom.
export default function FmgLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        urbanistRegular.variable,
        urbanistSemibold.variable,
        urbanistBold.variable,
        REGULAR,
        "flex min-h-screen flex-col bg-white text-base font-normal leading-[1.625] tracking-[0.48px] text-[#4d5151]",
      )}
    >
      <FmgProvider>
        <div className="w-full">
          <FunnelHeader />
          {children}
        </div>
        <FunnelFooter />
      </FmgProvider>
    </div>
  );
}
