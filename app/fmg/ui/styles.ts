// Shared class strings for the quote funnel (FMG) pages.

// Font faces (see ../fonts.ts)
export const REGULAR = "font-[family-name:var(--font-fmg-regular)]";
export const SEMIBOLD = "font-[family-name:var(--font-fmg-semibold)]";
export const BOLD = "font-[family-name:var(--font-fmg-bold)]";

// Bootstrap-style container used by the funnel: full width on phones, then
// 720px from 768px, 960px from 992px and 1020px from 1200px.
export const CONTAINER =
  "mx-auto w-full max-w-[540px] px-3 min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1020px]";

// The usual question column: full width, then 10, 8 and 7 of 12 columns
export const QUESTION_COLUMN =
  "w-full shrink-0 px-3 min-[768px]:w-10/12 min-[992px]:w-8/12 min-[1200px]:w-7/12";

// Half width from 768px (Bootstrap col-md-6)
export const HALF_COLUMN = "w-full shrink-0 px-3 min-[768px]:w-1/2";

// Links in running text: blue, underlined, and like every link on the
// reference, lines twice the font size with 4px under them
export const TEXT_LINK = "pb-1 leading-[2] text-[#0070d1] underline hover:text-[#06577c]";

// Hover ring and keyboard focus ring shared by inputs and option buttons
export const FIELD_HOVER = "hover:shadow-[0_0_0_4px_#9fcee6]";
export const FIELD_FOCUS = "focus:shadow-[0_0_0_2.5px_#0070d1] focus:outline-none";
