"use client";

import { useState } from "react";

export default function WasPageHelpful() {
  const [submitted, setSubmitted] = useState<"yes" | "no" | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-3 py-6">
      <span className="text-[16px] font-bold tracking-[.02em] text-black">
        Was this page helpful?
      </span>
      {submitted === null ? (
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setSubmitted("yes")}
            className="flex h-[36px] min-w-[54px] cursor-pointer items-center justify-center rounded-[4px] border border-[#0070d1] bg-white px-4 text-[15px] font-normal text-[#0070d1] transition-colors hover:bg-[#0070d1] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0070d1] focus:ring-offset-1"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setSubmitted("no")}
            className="flex h-[36px] min-w-[54px] cursor-pointer items-center justify-center rounded-[4px] border border-[#0070d1] bg-white px-4 text-[15px] font-normal text-[#0070d1] transition-colors hover:bg-[#0070d1] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0070d1] focus:ring-offset-1"
          >
            No
          </button>
        </div>
      ) : (
        <span className="text-[15px] font-medium text-[#098649]">
          ✓ Thank you for your feedback!
        </span>
      )}
    </div>
  );
}

