import Image from "next/image";
import CookiePreferences, { CookiePreferencesButton } from "@/app/components/cookie-preferences";
import { cx } from "@/app/components/services/class-names";
import { REGULAR } from "./ui/styles";

const LINK = cx(
  REGULAR,
  "mx-3 whitespace-nowrap pb-1 text-[14px] font-normal leading-[26px] text-[#4d5151] no-underline min-[768px]:text-base",
);

// Legal links under a gray rule: stacked on phones, one row from 768px
export default function FunnelFooter() {
  return (
    <footer className="mt-auto flex w-full flex-col items-center pb-8">
      <div className="flex w-full flex-col items-center justify-center border-t border-[#b0b3b3] pt-8 text-[#4d5151] min-[768px]:flex-row">
        <a className={LINK} href="/terms-of-service" target="_blank">
          Terms of service
        </a>
        <a className={LINK} href="/privacy-center" target="_blank">
          Your privacy choices
          <Image
            src="/image/fmg/app/ccpa-icon.svg"
            alt="Your privacy choices"
            width={33}
            height={16}
            unoptimized
            className="ml-2 inline h-4 w-[33px] align-middle"
          />
        </a>
        <CookiePreferencesButton className={cx(LINK, "cursor-pointer")}>Cookie preferences</CookiePreferencesButton>
        <a className={LINK} href="/ccpa-privacy-policy" target="_blank">
          Notice at collection
        </a>
      </div>
      <p className="mx-3 mb-0 mt-1 pb-1 text-[14px] leading-[1.625] min-[768px]:mt-2 min-[768px]:text-base">
        © 2026 Safelite Group
      </p>
      <CookiePreferences />
    </footer>
  );
}
