import Image from "next/image";
import Link from "next/link";

/*
 * Mirrors safelite.com's "Auto glass services for your every need" block
 * (.content-block + .cards-halves):
 * - two 2px #dcdcdc cards with 16px corners, side by side from 768px up
 * - 480x200 photo that is cropped, not scaled, when the card is narrower
 * - red 20px/700 title, 56px blue button (full width below 990px)
 */

const cards = [
  {
    image: {
      src: "/image/cards/safelite-convenience.jpg",
      alt: "Same-day windshield repair location",
    },
    title: "Convenient windshield repair",
    body: "We have shop locations in all 50 states for convenient, professional service.",
    cta: { label: "Find my nearest Safelite", href: "/store-locator" },
  },
  {
    image: {
      src: "/image/cards/high-quality-windshield-replacement.jpg",
      alt: "A Safelite technician installing a new windshield",
    },
    title: "High quality windshield replacement",
    body: "We provide the highest quality windshield replacement services at an affordable price.",
    cta: { label: "Learn about replacements", href: "/windshield-replacement" },
  },
];

export default function ServiceCards() {
  return (
    <>
      {/* .content-block */}
      <div className="mx-auto max-w-[510px] px-[15px] pb-6 md:max-w-[750px]">
        <h2 className="text-center text-[32px] font-bold leading-[44px] tracking-[.03em] text-black">
          Auto glass services for your every need
        </h2>
      </div>

      {/* .cards-halves */}
      <div className="mx-auto flex max-w-[1020px] flex-col px-[15px] pb-[10px]">
        {/* .card-container */}
        <div className="md:flex md:flex-wrap md:items-stretch md:justify-between">
          {cards.map((card) => (
            // .card-wrapper
            <div
              key={card.title}
              className="mx-auto mb-[30px] flex max-w-[480px] flex-col items-center rounded-[16px] border-2 border-[#dcdcdc] bg-white tracking-[.03em] md:m-0 md:mb-[30px] md:w-[calc(50%-15px)] md:max-w-none"
            >
              {/* .card-image: fixed 480x200 photo, centered and cropped */}
              <div className="relative flex w-full items-center justify-center overflow-hidden rounded-t-[14px]">
                {/* Same sizing trick as the reference: 480px wide, height from a 41.66666% padding */}
                <div className="relative w-[480px] shrink-0">
                  <span className="block pt-[41.66666%]" />
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="480px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* .card-content */}
              <div className="relative flex w-full flex-[1_0_auto] flex-col justify-between px-[15px] py-[30px] tracking-[.03em] md:items-start md:p-[30px]">
                <h3 className="m-0 w-full pb-[10px] text-[20px] font-bold leading-[32px] tracking-[.03em] text-[#db0020]">
                  {card.title}
                </h3>
                <p className="mx-auto mb-auto mt-0 w-full flex-none overflow-hidden pb-[10px] text-[#525656]">
                  {card.body}
                </p>
                {/* .btn-wrap */}
                <div className="w-full text-center md:text-left">
                  <Link
                    href={card.cta.href}
                    className="mt-5 flex h-[56px] w-full text-center min-w-[177px] items-center justify-center rounded-[16px] border border-[#0070d1] bg-[#0070d1] px-[30px] py-[9px] text-base font-medium leading-[22.4px] text-white no-underline hover:bg-[#0063ad] focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#95c2e9] min-[990px]:w-fit"
                  >
                    {card.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
