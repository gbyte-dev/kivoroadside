import Image from "next/image";
import Link from "next/link";

/*
 * Mirrors safelite.com's Foster Love band (.container-foster-love):
 * - soft gradient background image, cover, centered
 * - 276x144 logo on the left, copy on the right, each calc(50% - 15px) from 768px
 * - stacked below 768px with a 510px max width
 */

export default function FosterLove() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat pb-8 pt-4 md:pb-0"
      style={{ backgroundImage: "url('/image/foster-love/background.png')" }}
    >
      {/* .content-halves */}
      <div className="mx-auto max-w-[510px] items-center px-[15px] md:flex md:max-w-[1020px] md:flex-wrap md:justify-between">
        {/* .content-container-left */}
        <div className="md:w-[calc(50%-15px)]">
          <Image
            src="/image/foster-love/foster-love-safelite-foundation-logo.svg"
            alt="Foster Love + Safelite Foundation logo"
            title="foster-love-safelite-foundation-logo"
            width={276}
            height={144}
            unoptimized
            loading="lazy"
            className="mx-auto mb-12 mt-8 flex h-[144px] w-[276px] max-w-full"
          />
        </div>

        {/* .content-container-right */}
        <div className="text-[#525656] md:w-[calc(50%-15px)]">
          Safelite Foundation is proud to support Foster Love, a nonprofit dedicated to improving the lives of
          children in foster care across the country.
          <p className="pb-[10px]">&nbsp;</p>
          <p className="pb-[10px]">
            <Link
              href="/about-safelite/safelite-autoglass-foundation/safelite-and-foster-love"
              className="font-medium text-[#0070d1] underline decoration-transparent transition-all duration-150 ease-out hover:decoration-[#0070d1]"
            >
              Learn more about the partnership.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
