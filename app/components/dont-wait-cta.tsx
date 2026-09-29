import Link from "next/link";

/*
 * Mirrors safelite.com's ".dynamic-cta" band: #f4f4f4 background with a
 * 1px #e0e0e0 top border, 20px heading, and a 56px blue button with 16px
 * corners. The -20px bottom margin lets the disclaimer tuck under it, as on
 * the reference.
 */

export default function DontWaitCta() {
  return (
    <section className="-mb-5 border-t border-[#e0e0e0] bg-[#f4f4f4] px-[15px] py-10 text-center">
      <h2 className="pb-[10px] text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
        Don&apos;t wait, schedule your appointment&nbsp;today!
      </h2>
      <Link
        href="/schedule-service"
        className="mx-auto mt-[10px] flex h-[56px] w-fit min-w-[177px] items-center justify-center rounded-[16px] border border-[#0070d1] bg-[#0070d1] px-12 text-base font-medium leading-none text-white no-underline hover:bg-[#0063ad] focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#95c2e9]"
      >
        Get quote + schedule
      </Link>
    </section>
  );
}
