"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/*
 * Mirrors the "Give feedback" tab that safelite.com loads from Qualtrics:
 * - 35px-wide dark (#272727) tab pinned to the right edge, text written
 *   bottom-to-top in 15px Arial, 6px rounded on its left side
 * - vertical position = 25% of (viewport height - tab height) on desktop,
 *   85% on mobile, as Qualtrics computes it
 * - desktop: a 400x540 panel (#ededed, 2px #a6a6a6 border) slides in from
 *   the right in 0.5s and pushes the tab with it
 * - mobile: a bottom sheet covering 80% of the screen over a dimmed page
 *
 * Qualtrics fills the panel with its own survey iframe. This panel shows a
 * built-in form instead; it does not send answers anywhere yet.
 */

const feedbackTypes = [
  "Suggestion for a website improvement",
  "Something on the website is broken",
  "Feedback about service appointment",
  "Something else",
];

type Step = "type" | "details" | "done";

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("type");
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const tabRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  function openPanel() {
    setIsOpen(true);
  }

  function closePanel() {
    setIsOpen(false);
    tabRef.current?.focus();
  }

  // Move focus into the panel when it opens, and let Escape close it
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        tabRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function resetSurvey() {
    setStep("type");
    setFeedbackType(null);
    setDetails("");
  }

  return (
    <>
      {/* Tab */}
      <button
        ref={tabRef}
        type="button"
        onClick={() => (isOpen ? closePanel() : openPanel())}
        aria-expanded={isOpen}
        aria-controls="feedback-panel"
        className={`fixed top-[calc((100dvh-97px)*0.85)] z-[1000] m-0 w-[35px] cursor-pointer border-0 bg-transparent p-0 transition-[right] duration-500 md:top-[calc((100dvh-97px)*0.25)] ${
          isOpen ? "right-[-1px] md:right-[399px]" : "right-[-1px]"
        }`}
      >
        <span className="relative box-content flex w-[14px] rotate-180 whitespace-nowrap items-center justify-center rounded-r-[6px] bg-[#272727] p-[10px] font-[family-name:Arial,Helvetica,sans-serif] text-[12px] font-normal leading-normal tracking-normal text-white [text-orientation:sideways] [writing-mode:vertical-rl]">
          Give feedback
        </span>
      </button>

      {/* Mobile dim layer */}
      <div
        aria-hidden="true"
        onClick={closePanel}
        className={`fixed inset-0 z-[1000] bg-black/50 transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel: bottom sheet on mobile, right slide-out on desktop */}
      <div
        id="feedback-panel"
        role="dialog"
        aria-label="Give feedback"
        className={`fixed inset-x-0 bottom-0 top-[20dvh] z-[1001] flex flex-col duration-500 md:inset-x-auto md:bottom-auto md:top-0 md:h-[540px] md:w-[400px] md:translate-y-0 md:rounded-l-[2px] md:border-2 md:border-[#a6a6a6] md:bg-[#ededed] ${
          // Visibility changes instantly on open (so focus can move in) and waits for the slide on close
          isOpen
            ? "visible translate-y-0 transition-[transform,right] md:right-0"
            : "invisible translate-y-full transition-[transform,right,visibility] md:right-[-400px]"
        }`}
      >
        {/* Close button with a translucent white circle behind it */}
        <div className="absolute right-[10px] top-0 z-10 flex justify-end pb-[10px] md:top-[10px]">
          <button
            ref={closeRef}
            type="button"
            onClick={closePanel}
            aria-label="Close"
            className="relative z-10 m-0 cursor-pointer border-0 bg-transparent p-0 text-white md:text-black"
          >
            <svg viewBox="0 0 17 17" aria-hidden="true" className="h-[17px] w-[17px]">
              <path d="M2 2l13 13M15 2L2 15" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </button>
          <div className="absolute right-[-5px] top-[-5px] hidden h-7 w-7 rounded-full bg-white opacity-50 md:block" />
        </div>

        {/* Survey area */}
        <div className="mt-[29px] flex-1 overflow-y-auto bg-white px-[25px] pb-6 pt-[14px] font-[family-name:Georgia,'Times_New_Roman',serif] tracking-normal text-[#1f1f1f] md:mt-0">
          <Image
            src="/image/safelite-logo.svg"
            alt="Safelite"
            width={163}
            height={28}
            unoptimized
            className="-ml-[11px] mb-12 h-auto w-[88px]"
          />

          {step === "type" && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (feedbackType) setStep("details");
              }}
            >
              <fieldset>
                <legend className="mb-4 text-[17px] font-bold leading-6">What type of feedback do you have?</legend>
                <div className="flex flex-col gap-4">
                  {feedbackTypes.map((type) => (
                    <label
                      key={type}
                      className={`flex cursor-pointer items-center justify-between gap-4 rounded-[4px] border-2 px-[18px] py-[16px] text-[14px] leading-5 ${
                        feedbackType === type ? "border-[#1f1f1f]" : "border-[#c4c4c4] hover:border-[#8a8a8a]"
                      }`}
                    >
                      {type}
                      <input
                        type="radio"
                        name="feedback-type"
                        value={type}
                        checked={feedbackType === type}
                        onChange={() => setFeedbackType(type)}
                        className="h-[22px] w-[22px] shrink-0 cursor-pointer accent-[#1f1f1f]"
                      />
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  disabled={!feedbackType}
                  className="h-10 cursor-pointer rounded-[3px] bg-black px-6 text-[14px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {step === "details" && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setStep("done");
              }}
            >
              <label htmlFor="feedback-details" className="mb-4 block text-[17px] font-bold leading-6">
                Tell us more
              </label>
              <textarea
                id="feedback-details"
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                rows={6}
                className="w-full resize-none rounded-[4px] border-2 border-[#c4c4c4] p-3 text-[14px] leading-5 outline-none focus:border-[#1f1f1f]"
              />
              <div className="mt-5 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep("type")}
                  className="h-10 cursor-pointer rounded-[3px] border-2 border-black bg-white px-6 text-[14px] font-bold text-black"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="h-10 cursor-pointer rounded-[3px] bg-black px-6 text-[14px] font-bold text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {step === "done" && (
            <div>
              <p className="mb-5 text-[17px] font-bold leading-6">Thank you for your feedback!</p>
              <button
                type="button"
                onClick={() => {
                  resetSurvey();
                  closePanel();
                }}
                className="h-10 cursor-pointer rounded-[3px] bg-black px-6 text-[14px] font-bold text-white"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
