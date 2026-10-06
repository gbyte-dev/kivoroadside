import Image from "next/image";
import Link from "next/link";

// Copy on the left and a photo filling the right half from 992px; below
// that only the copy is shown.
export default function VehicleHero() {
  return (
    // .hero-5050
    <section className="mx-auto grid max-w-[1020px] grid-rows-[auto] px-4 min-[992px]:grid-cols-2">
      {/* .hero-copy */}
      <div className="flex flex-col py-4 min-[992px]:pb-4 min-[992px]:pl-0 min-[992px]:pr-10 min-[992px]:pt-8">
        <h2 className="mx-0! mb-4! mt-4! max-w-fit! p-0! text-left! text-[32px]! font-bold! leading-[44px]! text-black min-[992px]:mt-8!">
          Auto Glass Repair for Your Vehicle
        </h2>
        {/* The reference nests these in a broken paragraph, which leaves an
            empty 16px paragraph before the first one and after the last one */}
        <p className="mb-4 mt-4 p-0! text-left text-base leading-[25px]">
          Safelite specializes in the repair and replacement of all types of auto glass, from windshields to{" "}
          <Link href="/side-window-replacement">side windows</Link> and{" "}
          <Link href="/rear-windshield-replacement">back glass</Link>. Whether you&apos;re dealing with a chip, crack, or
          shatter, our certified technicians have the expertise to get your vehicle back to pre-damage condition.
        </p>
        <p className="mb-4 p-0! text-left text-base leading-[25px]">
          Every Safelite service comes backed by our{" "}
          <Link href="/national-lifetime-warranty">nationwide lifetime warranty</Link> on workmanship, and with flexible
          scheduling options, including <Link href="/mobile-auto-glass-repair">mobile service</Link> at your home or
          office.
        </p>
        <p className="mb-8 p-0! text-left text-base leading-[25px]">
          We service a wide range of vehicle makes and hundreds of models, from everyday commuter cars to trucks, SUVs,
          and luxury vehicles. Simply find your make below to explore your vehicle-specific glass repair and replacement
          options. <Link href="/schedule-service">Get a quote and schedule an appointment online</Link> in minutes.
        </p>
      </div>

      {/* .hero-image: covers the right column, which is as tall as the copy */}
      <div className="relative hidden items-center justify-center pt-[56.25%] min-[992px]:flex">
        <Image
          src="/image/vehicle-glass-repair/hero.jpg"
          alt="A Safelite technician working on a vehicle’s windshield"
          fill
          sizes="(min-width: 992px) 494px, 1px"
          preload
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
