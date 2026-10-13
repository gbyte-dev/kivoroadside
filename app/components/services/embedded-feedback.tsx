"use client";

import { useState } from "react";
import { cx } from "./class-names";

// Small outlined button, sized in em like the reference (16px text -> 31px tall)
const BUTTON = cx(
  "inline-block min-w-[3em] cursor-pointer rounded-[4px] border border-solid border-[#0070d1] bg-white px-[1.4em] py-[0.4em]",
  "leading-[1em] font-normal tracking-normal text-[#0070d1] hover:bg-[rgba(0,112,209,0.15)] hover:text-[#005fb1]",
);

// The "Was this page helpful?" prompt that safelite.com embeds (from Qualtrics)
// inside the last FAQ of a help center page: the bold question floated left
// of Yes and No buttons. The reference sends the answer to Qualtrics; this
// one only thanks the visitor.
export default function EmbeddedFeedback() {
  const [answered, setAnswered] = useState(false);
  return (
    <div className="mt-[10px]">
      <fieldset className="inline-block pb-[10px] leading-[normal]">
        <legend className="float-left mr-[0.7em] leading-[1em] font-bold text-black">Was this page helpful?</legend>
        <div className="mr-[5px] inline-block" aria-live="polite">
          {answered ? (
            // Same height as the buttons, so nothing below moves
            <span className="inline-block py-[calc(0.4em+1px)] leading-[1em] font-medium text-[#098649]">
              ✓ Thank you for your feedback!
            </span>
          ) : (
            <>
              <button type="button" className={cx(BUTTON, "mr-[0.6em]")} onClick={() => setAnswered(true)}>
                Yes
              </button>
              <button type="button" className={BUTTON} onClick={() => setAnswered(true)}>
                No
              </button>
            </>
          )}
        </div>
      </fieldset>
    </div>
  );
}
