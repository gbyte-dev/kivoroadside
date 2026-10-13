import type { ReactNode } from "react";
import { cx } from "./class-names";

type FaqAccordionProps = {
  // Unique on the page; ties the question to its hidden checkbox
  id: string;
  question: ReactNode;
  children: ReactNode;
  // The reference's ".ac-d-always-opened": from 768px the answer is always
  // shown and the chevron hidden. Turn off for lists that stay collapsible.
  alwaysOpenOnDesktop?: boolean;
  // Shown under the answer, whether it is open or not
  footer?: ReactNode;
};

// Item: 510px column (750px from 768px). Every item after another one gets a
// gray line and a 20px gap above it, and the block after the last item sits
// right below it.
const ITEM = cx(
  "group/faq mx-auto max-w-[510px] px-[15px] pb-[10px] md:max-w-[750px]",
  "[&+&]:before:block [&+&]:before:border-t [&+&]:before:border-[#cacbcc] [&+&]:before:pb-5",
  "[&+:not(&)]:mt-0!",
);

// Question: a block of strong text (bold or medium, like the page's other
// strong text) with a red chevron. The chevron is a rotated square with two
// borders, half covered by a white mask.
const QUESTION = cx(
  "relative mb-[10px] block cursor-pointer overflow-hidden pr-10",
  "group-has-[input:focus-visible]/faq:outline-2 group-has-[input:focus-visible]/faq:outline-offset-2 group-has-[input:focus-visible]/faq:outline-[#0070d1]",
  "before:absolute before:right-[2.5px] before:top-1/2 before:mt-[-8.5px] before:block before:size-3 before:rounded-[2px] before:border-solid before:border-[#db0020] before:[border-width:0_2px_2px_0] before:[transform:rotateZ(45deg)]",
  "before:[transition:0.2s_all_linear,0s_border-top-width_0.2s,0s_border-left-width_0.2s,0s_border-right-width,0s_border-bottom-width]",
  "group-has-checked/faq:before:mt-[-2px] group-has-checked/faq:before:[border-width:2px_0_0_2px]",
  "group-has-checked/faq:before:[transition:0.2s_all_linear,0s_border-right-width_0.2s,0s_border-bottom-width_0.2s,0s_border-top-width,0s_border-left-width]",
  "after:absolute after:right-[-4.25px] after:top-1/2 after:mt-[-11.75px] after:block after:h-[31.5px] after:w-[26.5px] after:border-[12.75px] after:border-solid after:[border-color:#fff_transparent] after:[transition:0.2s_all_linear]",
  "group-has-checked/faq:after:mt-[-17.75px]",
);
const QUESTION_DESKTOP_OPEN = "md:cursor-default md:pr-0 md:before:content-none md:after:content-none";

// Answer: slides open behind an overflow edge; a 35px spacer eases the
// height change. A closed answer is also hidden once it has slid shut, so
// its links can't be tabbed to (the reference takes them out of the tab order).
const ANSWER = cx(
  "flex overflow-hidden",
  "after:h-0 after:max-h-[35px] after:[transition:height_0.3s_cubic-bezier(0.67,0.9,0.76,0.37)]",
  "peer-checked:after:h-[35px] peer-checked:after:max-h-0 peer-checked:after:[transition:height_0.3s_cubic-bezier(0.76,0.37,0.67,0.9),max-height_0s_0.3s]",
);
const ANSWER_INNER = cx(
  "invisible mb-[-1000px] max-h-0 [transition:margin-bottom_0.3s_cubic-bezier(0.5,0,0.9,0.8),visibility_0s_0.3s,max-height_0s_0.3s] [&>:last-child]:pb-[10px]",
  "group-has-checked/faq:visible group-has-checked/faq:relative group-has-checked/faq:mb-0 group-has-checked/faq:max-h-[100000000px] group-has-checked/faq:[transition:margin-bottom_0.3s_cubic-bezier(0.24,0.98,0.26,0.99)]",
);
const ANSWER_INNER_DESKTOP_OPEN = "md:visible md:mb-0! md:h-auto md:max-h-none!";

// One FAQ (the reference's ".accordion"). The question opens and closes its
// answer on tap (a hidden checkbox keeps the state, so no script is needed).
export default function FaqAccordion({
  id,
  question,
  children,
  alwaysOpenOnDesktop = true,
  footer,
}: FaqAccordionProps) {
  return (
    <div className={ITEM}>
      <input id={id} type="checkbox" className="peer sr-only" />
      {/* The label only makes the question toggle the checkbox; the strong
          text is the block, as on the reference */}
      <label htmlFor={id} className="contents">
        <strong className={cx(QUESTION, alwaysOpenOnDesktop && QUESTION_DESKTOP_OPEN)}>{question}</strong>
      </label>
      <div className={ANSWER}>
        <div className={cx(ANSWER_INNER, alwaysOpenOnDesktop && ANSWER_INNER_DESKTOP_OPEN)}>{children}</div>
      </div>
      {footer}
    </div>
  );
}
