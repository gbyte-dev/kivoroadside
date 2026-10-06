import Image from "next/image";
import Link from "next/link";
import LocationSearchForm from "./location-search-form";

// "Safelite locations near you": title, location search and a photo on the right (from 768px)
export default function LocationHeroSection() {
  return (
    // .hero-wrapper.hero-half-image
    <div className="mb-[30px] tracking-[.03em] text-[#525656] md:mb-0 md:flex md:items-stretch md:justify-around">
      {/* .hero-content */}
      <div className="md:relative md:w-1/2 md:flex-none md:overflow-hidden md:px-[15px]">
        {/* Title */}
        <div className="mx-auto max-w-[510px] px-[15px] pt-5 md:float-right md:clear-both md:w-full md:max-w-[480px] md:px-0 md:pb-5 md:pt-10">
          <h1 className="text-[32px] font-bold leading-[44px] tracking-[.03em] text-black">Safelite locations near you</h1>
        </div>

        {/* .store-locator */}
        <div className="mx-auto mt-[25px] max-w-[510px] px-[15px] pt-5 md:float-right md:clear-both md:mt-[-5px] md:w-full md:max-w-[480px] min-[990px]:p-0">
          <LocationSearchForm variant="hero" />
          <Link
            href="/store-locator/store-locations-by-state"
            className="max-w-[108px] font-bold! text-[#0070d1] underline decoration-transparent transition-all duration-150 ease-out hover:decoration-[#0070d1]"
          >
            View all shops
          </Link>
        </div>
      </div>

      {/* .hero-image-wrapper: the photo is shown from 768px, cropped by its column */}
      <div className="hidden md:relative md:block md:w-1/2 md:flex-none md:overflow-hidden md:px-[15px]">
        <span className="relative block w-[585px] overflow-hidden">
          <span className="block pt-[64.95727%]" />
          <Image
            src="/image/location/store-building.jpg"
            alt=""
            width={585}
            height={380}
            preload
            className="absolute left-0 top-0 h-auto w-full max-w-full"
          />
        </span>
      </div>
    </div>
  );
}
