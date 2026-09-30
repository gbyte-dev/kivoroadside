import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import DontWaitCta from "@/app/components/dont-wait-cta";
import GrayBox from "@/app/components/services/gray-box";

export default function AdasRecalibrationPage() {
  const faqItems = [
    {
      heading: "Does my auto insurance policy cover my windshield recalibration service?",
      content: (
        <>
          <p className="mb-4">
           If you have comprehensive coverage, it’s likely that you’ll only be responsible for paying your deductible and the other recalibration costs will be covered. In some cases, optional self-selected services associated with recalibration may not be covered, but we’ll let you know the total cost and coverage breakdown before you book your appointment. We partner with hundreds of insurance companies and will even verify your coverage and file your claim so you can stress less.
          </p>
          <p>
           In most cases, filing an insurance claim to recalibrate your vehicle’s windshield won’t cause your comprehensive coverage premium to increase.
          </p>
        </>
      ),
    },
    {
      heading: "How long does windshield recalibration take?",
      content: (
        <p>
          The windshield recalibration process typically takes an hour or more, depending on the make or model of your vehicle. Safelite will recalibrate your windshield after a replacement is complete. Our expert technicians work efficiently to ensure accurate recalibration to get you safely back on the road as quick as possible.
        </p>
      ),
    },
    {
      heading: "How much does ADAS recalibration cost?",
      content: (
        <p>
         ADAS recalibration costs vary depending on several factors, including your vehicle’s make, model, and year, the number and type of systems requiring recalibration, the method of recalibration needed (static vs. dynamic), and your location. The process typically includes a comprehensive diagnostic assessment, use of manufacturer-specific calibration equipment, verification of proper functioning, and documentation of completed calibration. We recommend contacting Safelite directly for an accurate quote specific to your vehicle. 
        </p>
      ),
    },
    {
      heading: "Is ADAS recalibration necessary after a windshield replacement?",
      content: (
        <p>
         Yes, recalibration is often necessary after windshield replacement, especially for vehicles equipped with advanced driver assistance systems (ADAS). Many modern vehicles have cameras, sensors, and other technology mounted on or near the windshield that power safety features like lane departure warning, automatic emergency breaking, adaptive cruise control, and forward collision warning.

When we replace your windshield at Safelite, these systems may need to be recalibrated to ensure they function safely and properly. Our certified technicians are equipped with the tools and skills needed to effectively perform ADAS recalibration services. Contact us at your nearest Safelite location to schedule an appointment today!
        </p>
      ),
    },
    {
      heading: "Can Safelite perform ADAS recalibration at my location?",
      content: (
        <p>
        Yes! Safelite now offers mobile ADAS recalibration services for qualifying vehicles. Our mobile technicians can complete both your windshield replacement and recalibration at your home, office, or preferred location. Mobile recalibration is available for many vehicles that require dynamic calibration. When you schedule your appointment online or by phone, we'll confirm if your vehicle qualifies for mobile service based on your make, model, and the type of recalibration needed.
        </p>
      ),
    },
    {
      heading: "The rise of ADAS",
      content: (
        <p>
        When damage occurs and you need a windshield replacement, nearly all vehicle manufacturers require that the camera connected to your windshield be recalibrated.

For the camera and the advanced safety systems to continue to work properly, Safelite AutoGlass® can often complete the windshield replacement and safety system recalibration in a single appointment.

More and more vehicles have advanced safety systems, and nearly all of those vehicle brands require a safety system recalibration after a windshield replacement. Safelite technicians are experienced with the recalibration process and will help ensure your vehicle continues to keep you safe on the road.
        </p>
      ),
    },
    {
      heading: "Mobile ADAS recalibration",
      content: (
        <p>
          Can't make it to a Safelite location? We now bring ADAS recalibration services directly to you. Our mobile technicians are equipped with the same advanced calibration technology used in our shops, so you can get your vehicle's safety systems recalibrated at your home, office, or wherever is most convenient.

Mobile recalibration is ideal for vehicles requiring dynamic calibration, which involves driving your vehicle on well-marked roads. Our certified mobile technicians will complete your windshield replacement and handle the recalibration process on-site, getting you back on the road safely without the trip to a shop.
        </p>
      ),
    },
    {
      heading: "Examples of ADAS",
      content: (
        <p>
          These driver assistance systems protect drivers through a range of capabilities, creating a circular safety net around the vehicle to help reduce the risk of collisions. The forward-facing front cameras enable advanced safety features to aid and warn drivers on the road.

The ADAS camera systems are designed to work together to enhance vehicle safety by alerting the driver to potential problems and avoiding collisions – they can aid, warn and assist. Some examples include automatic emergency braking, forward collision warning, lane assist, lane departure warning, pedestrian detection, collision avoidance, and more. If so equipped, the camera’s proper operation is a critical component of your vehicle's advanced safety system.

If you need a windshield replacement, Safelite will replace your windshield and recalibrate your forward-facing front camera.
        </p>
      ),
    },
  ];

  const additionalServices = [
    {
      title: "Windshield repair",
      href: "/windshield-repair",
      image: "/image/services/navigation/windshield-repair.jpg",
    },
    {
      title: "Windshield replacement",
      href: "/windshield-replacement",
      image: "/image/services/navigation/windshield-replacement.jpg",
    },
    {
      title: "Back glass replacement",
      href: "/back-glass-replacement",
      image: "/image/services/navigation/back-glass-replacement.jpg",
    },
    {
      title: "Side window replacement",
      href: "/side-window-replacement",
      image: "/image/services/navigation/side-window-replacement.jpg",
    },
    {
      title: "Power window repair",
      href: "/power-window-repair",
      image: "/image/services/navigation/power-window-repair.jpg",
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        {/* 1. Hero Section (Image hidden on Mobile View) */}
        <section className="w-full bg-white mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[380px] lg:min-h-[480px] items-stretch">
            {/* Left Content Area */}
            <div className="flex flex-col justify-center px-6 lg:px-12 py-10 lg:py-16 max-w-[540px] lg:ml-auto w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-[1.15] mb-3 tracking-[.03em]">
                ADAS recalibration
              </h1>
              <p className="text-lg sm:text-xl font-normal text-[#525656] leading-snug mb-4">
                Advanced safety systems recalibration services
              </p>
              <p className="text-[#525656] text-base leading-[25px] mb-8 font-normal">
                Is there a camera connected to your windshield? The forward-facing camera is part of your vehicle's advanced safety systems, sometimes called advanced driver assistance safety systems (ADAS). These systems are designed to keep you and your vehicle safe on the road. However, when these systems are damaged, your safety may be compromised. To ensure your vehicle's systems are functioning flawlessly, Safelite can recalibrate your windshield after your repair or replacement services. 
              </p>
              <div>
                <Link
                  href="/schedule-service"
                  className="inline-flex h-[50px] items-center justify-center rounded-full bg-[#0070d1] px-8 text-base font-medium text-white hover:bg-[#0063ad] transition-colors shadow-sm"
                >
                  Get quote + schedule
                </Link>
              </div>
            </div>

            {/* Right Image Container - Hidden on Mobile View (`hidden lg:block`) */}
            <div className="hidden lg:block relative min-h-full w-full">
              <Image
                src="/image/services/navigation/safety-systems-recalibration.jpg"
                alt="Technician performing ADAS camera recalibration"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        
        {/* 5. FAQ Section */}
        <GrayBox>
          <div className="mx-auto max-w-[1020px] px-[15px] py-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <div className="w-16 sm:w-20 h-[3.5px] bg-[#db0020] rounded-full mx-auto" />
            </div>

            <div className="divide-y divide-[#d4d6d8]">
              {faqItems.map((item, index) => (
                <div key={index} className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  <div className="lg:col-span-4">
                    <h3 className="text-[#db0020] text-[20px] sm:text-[22px] font-normal leading-snug">
                      {item.heading}
                    </h3>
                  </div>
                  <div className="lg:col-span-8 text-[#525656] text-sm sm:text-base leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-gray-500 italic text-center">
              *Recalibration may not be available for all vehicles or at all locations.
            </p>
          </div>
        </GrayBox>

        {/* 2. Types of Windshield Camera Recalibration Section */}
        <section className="mx-auto max-w-[1020px] px-[15px] py-12 lg:py-16 border-t border-[#d4d6d8]">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-gray-900 mb-3">
              Types of windshield camera recalibration
            </h2>
            <div className="w-16 sm:w-20 h-[3.5px] bg-[#db0020] rounded-full mx-auto" />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {/* Dynamic Recalibration */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative h-[240px] sm:h-[280px] w-full max-w-[480px] overflow-hidden rounded-none">
                  <Image
                    src="/image/services/recalibration/dynamic-recalibration.jpg"
                    alt="Dynamic recalibration vehicle driving on road"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-[#db0020] text-xl sm:text-2xl font-normal leading-snug mb-3">
                  Dynamic recalibration
                </h3>
                <p className="text-[#525656] text-base leading-relaxed">
                  Requires driving the vehicle at a set speed on well-marked roads to recalibrate the camera system. Typically takes up to one hour or more, depending on the make and model of the vehicle.
                </p>
              </div>
            </div>

            {/* Static Recalibration */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative h-[240px] sm:h-[280px] w-full max-w-[480px] overflow-hidden rounded-none">
                  <Image
                    src="/image/services/recalibration/static-recalibration.jpg"
                    alt="Static recalibration target image on fixture in front of vehicle"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-[#db0020] text-xl sm:text-2xl font-normal leading-snug mb-3">
                  Static recalibration
                </h3>
                <p className="text-[#525656] text-base leading-relaxed">
                  Requires a specific target image mounted on a fixture in front of the vehicle during the recalibration process. Typically takes up to one hour or more, depending on the make and model of the vehicle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The ADAS Process with Safelite Section */}
        <section className="mx-auto max-w-[1020px] px-[15px] py-12 lg:py-16 border-t border-[#d4d6d8]">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-gray-900 mb-3">
              The ADAS process with Safelite
            </h2>
            <div className="w-16 sm:w-20 h-[3.5px] bg-[#db0020] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 text-[#525656] text-base leading-relaxed">
              <p>
                Due to the importance of your vehicle&apos;s advanced safety system, you need a trusted expert with the capability of recalibration to ensure your advanced safety features are operating at their optimal level.
              </p>
              <p>
                When you make an appointment with Safelite, you&apos;ll be alerted if the vehicle needs recalibration services after a replacement. Certified technicians trained in recalibration will complete the process required by your vehicle manufacturer.
              </p>
              <p>
                Recalibration costs depend on vehicle features, location, and calibration type. Specialty vehicles and newer models may require specialized setup procedures.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative h-[240px] sm:h-[280px] w-full max-w-[480px] overflow-hidden rounded-none">
                <Image
                  src="/image/services/recalibration/adas-process.jpg"
                  alt="Safelite technician performing ADAS recalibration process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Schedule Your Appointment Today Section */}
        <GrayBox>
          <div className="mx-auto max-w-[1020px] px-[15px] py-10 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-gray-900 leading-snug mb-3">
                  Schedule your appointment today
                </h2>
                <div className="w-16 sm:w-20 h-[3.5px] bg-[#db0020] rounded-full" />
              </div>

              <div className="lg:col-span-7 space-y-4 text-[#525656] text-base leading-relaxed">
                <p>
                  Safelite provides both windshield replacement and recalibration service, keeping you and your family safe and secure. Are you unsure if you have ADAS features on your car? Learn more about the features and systems in place on many vehicles through our{" "}
                  <Link href="#" className="text-[#0070d1] underline hover:text-[#005bb5]">
                    ADAS guide
                  </Link>
                  .
                </p>
                <p>
                  Are you ready to get your windshield replaced and ensure your advanced safety system is functioning at the highest level to ensure your safety?{" "}
                  <Link href="/schedule-service" className="text-[#0070d1] underline hover:text-[#005bb5]">
                    Schedule today at safelite.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </GrayBox>


        {/* 6. Additional Safelite Services Section (Mobile view: 1 Column Stacked matching reference) */}
        <section className="mx-auto max-w-[1020px] px-[15px] py-12 lg:py-16 border-t border-[#d4d6d8]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-6 mb-8 lg:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-gray-900 leading-snug mb-3">
                Additional Safelite services
              </h2>
              <div className="w-16 sm:w-20 h-[3.5px] bg-[#db0020] rounded-full" />
            </div>
            <div className="text-[#525656] text-base leading-relaxed max-w-[500px]">
              To learn more about{" "}
              <Link href="#" className="text-[#0070d1] underline hover:text-[#005bb5]">
                our services
              </Link>{" "}
              to repair or replace your glass, please select from below.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
            {additionalServices.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-[#d4d6d8] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[150px] sm:h-[130px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-center text-center flex-grow bg-white">
                  <span className="text-[#0070d1] group-hover:underline text-base font-medium leading-snug">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 7. Don't Wait CTA */}
        <DontWaitCta />
      </main>
      <SiteFooter />
    </>
  );
}