import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import DontWaitCta from "@/app/components/dont-wait-cta";
import CustomerRatings from "@/app/components/customer-ratings";

export default function AutoGlassServicesPage() {
    const heroHeading = "Auto glass repair & replacement services";
    const heroSubheading = "Require windshield services from the experts?";
    const heroParagraph =
        "Have a chip or crack in your auto glass? Poor driving conditions or even bad weather can damage your windshield with projectiles like rocks on the road, debris, or even hail. Whether the damage is on your windshield, rear or side window, services from Safelite AutoGlass can help.";

    const specialistTitle = "#1 auto glass specialist in the country";
    const specialistText1 =
        "Safelite has more than 70 years of experience providing windshield and auto glass service to 6.2 million customers just like you each year.";
    const specialistText2 =
        "Not only do we have certified technicians who can get the job done quickly, our auto glass service uses innovative technology and is built for your convenience.";

    const services = [
        {
            title: "Windshield repair",
            desc: "Our windshield repair service quickly fixes minor chips and cracks.",
            image: "/image/services/navigation/windshield-repair.jpg",
            href: "/windshield-repair",
        },
        {
            title: "Windshield replacement",
            desc: "We use high quality glass at an affordable price for windshield replacement services.",
            image: "/image/services/navigation/windshield-replacement.jpg",
            href: "/windshield-replacement",
        },
        {
            title: "Back glass replacement",
            desc: "We offer quick rear windshield replacement installation to get you back on the road.",
            image: "/image/services/navigation/back-glass-replacement.jpg",
            href: "/rear-windshield-replacement",
        },
        {
            title: "Side window replacement",
            desc: "We can replace your broken car windows quickly and efficiently to keep you safe.",
            image: "/image/services/navigation/side-window-replacement.jpg",
            href: "/side-window-replacement",
        },
        {
            title: "Power window repair",
            desc: "Our expert technicians can get your power window motor working again.",
            image: "/image/services/navigation/power-window-repair.jpg",
            href: "/power-window-repair",
        },
        {
            title: "Safety systems recalibration",
            desc: "We can recalibrate your windshield after a repair or replacement.",
            image: "/image/services/navigation/safety-systems-recalibration.jpg",
            href: "/windshield-camera-recalibration",
        },
    ];

    const benefits = [
        {
            title: "Customer reviews",
            linkText: "Read real reviews",
            icon: "/image/benefits/star-rating.png",
            href: "/why-safelite/customer-reviews",
        },
        {
            title: "Nationwide warranty",
            linkText: "Learn more",
            icon: "/image/benefits/shield.png",
            href: "/why-safelite/nationwide-lifetime-warranty",
        },
        {
            title: "Cost of Auto Glass Services",
            linkText: "Learn more",
            icon: "/image/benefits/pricetag.png",
            href: "/resource-center/auto-glass-service-cost",
        },
    ];

    return (
        <>
            <SiteHeader />
            <main className="bg-white">
                {/* 1. Hero Section */}
                <section className="w-full bg-white border-b border-[#d4d6d8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch max-w-[1440px] mx-auto">
                        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-8 lg:py-12 max-w-[520px] lg:ml-auto w-full">
                            <h1 className="text-3xl lg:text-[40px] font-bold text-black leading-[1.15] mb-3 tracking-[.02em]">
                                {heroHeading}
                            </h1>
                            <p className="text-lg lg:text-[20px] font-normal text-[#525656] leading-snug mb-3 sm:whitespace-nowrap">
                                {heroSubheading}
                            </p>
                            <p className="text-base text-[#525656] leading-[25px] font-normal">
                                {heroParagraph}
                            </p>
                        </div>

                        <div className="hidden lg:block relative w-full min-h-[340px] lg:min-h-[380px]">
                            <Image
                                src="/image/services/auto-glass-services-hero.jpg"
                                alt="Safelite technician assisting customer"
                                fill
                                priority
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </section>

                {/* 2. #1 Auto Glass Specialist Section */}
                <section className="w-full bg-[#f4f4f4] py-10 sm:py-12 lg:py-14 px-6 sm:px-10 lg:px-12">
                    <div className="max-w-[1020px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-light text-black leading-[1.25] tracking-[.02em]">
                                {specialistTitle}
                            </h2>
                            <div className="w-[110px] h-[5px] bg-[#db0020] mt-4" />
                        </div>

                        <div>
                            <p className="text-base text-[#525656] leading-[26px] font-normal">
                                {specialistText1} {specialistText2}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. What We Do Section */}
                <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="text-center mb-10 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-black tracking-tight mb-2">
                                What we do
                            </h2>
                            <div className="w-16 h-[3px] bg-[#db0020] mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {services.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl border border-[#d4d6d8] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 max-w-[380px] sm:max-w-none mx-auto w-full"
                                >
                                    <div className="relative w-full h-[190px] sm:h-[200px]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-black mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm sm:text-[15px] text-[#525656] leading-relaxed mb-5 flex-grow">
                                            {item.desc}
                                        </p>
                                        <div>
                                            <Link
                                                href={item.href}
                                                className="text-[#0070d1] font-medium text-sm sm:text-[15px] hover:underline inline-flex items-center"
                                            >
                                                Learn more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Fix All Types of Auto Glass */}
                <section className="w-full bg-[#f4f4f4] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1020px] mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-black tracking-tight mb-2">
                                Our services fix all types of auto glass
                            </h2>
                            <div className="w-16 h-[3.5px] bg-[#db0020] mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/Fs1_qf5YlsY"
                                    title="How to Repair or Replace a Cracked Windshield - Safelite AutoGlass"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                            <div className="flex flex-col gap-4 text-[#525656] text-base sm:text-[17px] leading-[26px] font-normal">
                                <p>
                                    Whether your auto glass damage is on your front or{" "}
                                    <Link
                                        href="/rear-windshield-replacement"
                                        className="text-[#0070d1] hover:underline font-medium"
                                    >
                                        rear windshield
                                    </Link>
                                    , or even a{" "}
                                    <Link
                                        href="/side-window-replacement"
                                        className="text-[#0070d1] hover:underline font-medium"
                                    >
                                        side window
                                    </Link>
                                    , you can rely on Safelite for all types of car glass services.
                                </p>
                                <p>
                                    And if we can&apos;t repair your windshield, you can be confident
                                    in our ability to{" "}
                                    <Link
                                        href="/windshield-replacement"
                                        className="text-[#0070d1] hover:underline font-medium"
                                    >
                                        replace your windshield
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Why Choose Safelite Section */}
                <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[960px] mx-auto">
                        <div className="text-center mb-10 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-black tracking-tight mb-2 max-w-[520px] mx-auto leading-snug">
                                Why Choose Safelite for Auto Glass Repair?
                            </h2>
                            <div className="w-16 h-[3.5px] bg-[#db0020] mx-auto" />
                        </div>

                        <div className="divide-y divide-[#e5e7eb]">
                            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                                <div className="md:col-span-5">
                                    <h3 className="text-lg sm:text-[20px] font-normal text-[#db0020] leading-snug">
                                        Save money with early windshield repair
                                    </h3>
                                </div>
                                <div className="md:col-span-7 text-sm sm:text-base text-[#525656] leading-[26px]">
                                    <p>
                                        The sooner you address a chip or crack in your windshield, the more likely it can be{" "}
                                        <Link href="/windshield-repair" className="text-[#0070d1] hover:underline font-medium">
                                            repaired instead of replaced
                                        </Link>
                                        , which costs less time and money. Repair is usually possible if the damage is under six inches, roughly dime-sized or smaller, limited to 3 chips, and clear of your cameras or sensors.
                                    </p>
                                </div>
                            </div>

                            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                                <div className="md:col-span-5">
                                    <h3 className="text-lg sm:text-[20px] font-normal text-[#db0020] leading-snug">
                                        Windshield repair may be covered by insurance
                                    </h3>
                                </div>
                                <div className="md:col-span-7 text-sm sm:text-base text-[#525656] leading-[26px]">
                                    <p>
                                        Depending on your coverage, windshield repair may cost you nothing out of pocket. Safelite works with more than 500 insurance companies nationwide, or you can{" "}
                                        <Link href="/schedule-service" className="text-[#0070d1] hover:underline font-medium">
                                            pay directly
                                        </Link>{" "}
                                        if you prefer.
                                    </p>
                                </div>
                            </div>

                            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                                <div className="md:col-span-5">
                                    <h3 className="text-lg sm:text-[20px] font-normal text-[#db0020] leading-snug">
                                        Mobile windshield repair comes to you
                                    </h3>
                                </div>
                                <div className="md:col-span-7 text-sm sm:text-base text-[#525656] leading-[26px]">
                                    <p>
                                        A cracked windshield shouldn&apos;t mean rearranging your day. Our{" "}
                                        <Link href="/mobile-auto-glass-repair" className="text-[#0070d1] hover:underline font-medium">
                                            Mobile Glass Shops
                                        </Link>{" "}
                                        come to your home, office, or wherever works for you, with the same certified technicians and quality glass you&apos;d get in-shop.
                                    </p>
                                </div>
                            </div>

                            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                                <div className="md:col-span-5">
                                    <h3 className="text-lg sm:text-[20px] font-normal text-[#db0020] leading-snug">
                                        Or visit one of 850+ locations near you
                                    </h3>
                                </div>
                                <div className="md:col-span-7 text-sm sm:text-base text-[#525656] leading-[26px]">
                                    <p>
                                        Prefer to come to us? Safelite operates more than{" "}
                                        <Link href="/store-locator" className="text-[#0070d1] hover:underline font-medium">
                                            850 locations
                                        </Link>{" "}
                                        nationwide, so there&apos;s likely a shop near you ready to repair or replace auto glass today.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. More Benefits Section */}
                <section className="w-full bg-[#f4f4f4] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1020px] mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-black tracking-tight mb-2">
                                More benefits
                            </h2>
                            <div className="w-16 h-[3.5px] bg-[#db0020] mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {benefits.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-8 border border-[#d4d6d8] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300 max-w-[340px] md:max-w-none mx-auto w-full"
                                >
                                    <div className="w-16 h-16 relative mb-4 flex items-center justify-center">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={56}
                                            height={56}
                                            className="object-contain"
                                        />
                                    </div>

                                    <h3 className="text-base sm:text-lg font-bold text-black mb-3">
                                        {item.title}
                                    </h3>

                                    <div className="mt-auto">
                                        <Link
                                            href={item.href}
                                            className="text-[#0070d1] font-medium text-sm sm:text-base hover:underline"
                                        >
                                            {item.linkText}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. You Can Reach Us Section (Reference Image matching) */}
                <section className="w-full bg-white py-10 sm:py-12 lg:py-14 px-6 sm:px-10 lg:px-12 border-t border-[#d4d6d8]">
                    <div className="max-w-[1020px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-light text-black leading-[1.25] tracking-[.02em]">
                                You can reach us when you need us
                            </h2>
                            <div className="w-[110px] h-[4px] bg-[#db0020] mt-4" />
                        </div>

                        <div>
                            <p className="text-base sm:text-[17px] text-[#525656] leading-[26px] font-normal">
                                Questions?{" "}
                                <Link
                                    href="/contact-us"
                                    className="text-[#0070d1] hover:underline font-medium"
                                >
                                    Contact us
                                </Link>{" "}
                                today. If you&apos;re ready,{" "}
                                <Link
                                    href="/schedule-service"
                                    className="text-[#0070d1] hover:underline font-medium"
                                >
                                    schedule service online
                                </Link>{" "}
                                now.
                            </p>
                        </div>
                    </div>
                </section>



                {/* 9. Don't Wait CTA */}
                <DontWaitCta />
            </main>
            <SiteFooter />
        </>
    );
}