import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ResourceCenterHeader from "@/app/components/resource-center-header";
import HorizontalRule from "@/app/components/services/horizontal-rule";

export const metadata: Metadata = {
  title: "Mobile vs. In-Shop Auto Glass Service: Which Is Right for You? | Safelite",
  description:
    "At Safelite, we want our customers to be informed. Browse our resource center for more information on auto expertise, culture, current events, and safety.",
};

export default function MobileVsInShopAutoGlassServicePage() {
  return (
    <ServicePageShell header={<ResourceCenterHeader />} showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className="mx-auto max-w-[510px] px-[15px] pb-[24px] md:max-w-[750px]">
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Mobile vs. In-Shop Auto Glass Service: Which Is Right for You?
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            Oct 5, 2026 | Auto expertise
          </div>

          <div className="mb-[20px] overflow-hidden rounded-[8px]">
            <Image
              src="/imagesv3/default-source/default-album/2405_foth-tv-shoot_03243.jpg"
              alt="2405_Foth-TV-Shoot_03243"
              width={750}
              height={422}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mb-[24px] flex items-center justify-end gap-3">
            <a
              href="mailto:?subject=Safelite%20Resource%20Center:%20Mobile vs. In-Shop Auto Glass Service: Which Is Right for You?&amp;body=Mobile vs. In-Shop Auto Glass Service: Which Is Right for You?%0D%0Ahttps://www.safelite.com/resource-center/auto-experts/mobile-vs-in-shop-auto-glass-service"
              aria-label="Email Share"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/imagesv3/default-source/iconography/social/refresh/email@3x.png"
                width={40}
                height={40}
                alt="Email Share"
              />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.safelite.com/resource-center/auto-experts/mobile-vs-in-shop-auto-glass-service"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Share"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/imagesv3/default-source/iconography/social/refresh/facebook@3x.png"
                width={40}
                height={40}
                alt="Facebook Share"
              />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.safelite.com/resource-center/auto-experts/mobile-vs-in-shop-auto-glass-service"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Share"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/imagesv3/default-source/iconography/social/refresh/linked-in@3x.png"
                width={40}
                height={40}
                alt="LinkedIn Share"
              />
            </a>
          </div>

          <div className="space-y-4 text-[16px] leading-[25px] text-[#525656] [&_a]:font-medium [&_a]:text-[#db0020] [&_a]:underline hover:[&_a]:text-[#b3001a]">
            <p>
              <strong className="text-black">Mobile vs. In-Shop Auto Glass Service: Which Is Right for You?</strong>
            </p>
            <p>
              Mobile auto glass service has made windshield repair and replacement more convenient than ever. But convenience is not the only factor worth considering, especially if your vehicle has advanced driver assistance systems that require recalibration after windshield work. Understanding the difference between mobile and in-shop service helps you choose the option that fits both your schedule and your vehicle&apos;s needs.
            </p>

            <p>
              <strong className="text-black">What Is Mobile Auto Glass Service?</strong>
            </p>
            <p>
              Mobile auto glass service sends a technician to your location, whether that is your home, your office, or wherever your vehicle is parked, to perform the repair or replacement on-site. The technician arrives with the tools, adhesives, and glass needed to complete the job without you having to drive anywhere or rearrange your schedule around a shop appointment.
            </p>
            <p>
              For most chip repairs and many straightforward windshield replacements, mobile service delivers the same quality result as an in-shop visit. The adhesive, glass, and installation process are identical. The difference is the environment in which the work is performed, and whether your vehicle and service type are eligible.
            </p>

            <p>
              <strong className="text-black">What Is In-Shop Auto Glass Service?</strong>
            </p>
            <p>
              In-shop service is performed at a fixed auto glass facility with a controlled environment, specialized equipment, and a dedicated workspace. The vehicle is brought into the shop, the work is performed indoors, and the vehicle stays in the bay until the job is complete and any required follow-up steps, such as ADAS recalibration, are finished.
            </p>
            <p>
              In-shop service is particularly important for more complex jobs, including vehicles that require static ADAS recalibration, which must be performed in a controlled environment with specific recalibration targets at precise distances from the vehicle.
            </p>

            <p>
              <strong className="text-black">When Mobile Service Is the Right Choice</strong>
            </p>
            <p>Mobile service is a practical and effective option in many common scenarios:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-black">Chip repairs.</strong> Resin injection repairs for chips and small cracks are well-suited to mobile service. The process does not require a controlled indoor environment, and most repairs are completed in 30 minutes or less.
              </li>
              <li>
                <strong className="text-black">Straightforward windshield replacements on older vehicles.</strong> If your vehicle does not have cameras or sensors behind the windshield, mobile replacement is a convenient option with no meaningful trade-off in quality, provided the vehicle and location is eligible for mobile service.
              </li>
              <li>
                <strong className="text-black">Vehicles with dynamic recalibration.</strong> Some vehicles require only dynamic recalibration after windshield replacement, meaning recalibration happens during a drive rather than in a shop environment. A mobile technician can install the glass on-site, and dynamic recalibration can follow without a separate shop visit.
              </li>
              <li>
                <strong className="text-black">When getting to a shop is genuinely inconvenient.</strong> Mobile service is a convenient option if your schedule is tight or you would rather not drive with a damaged windshield.
              </li>
            </ul>

            <p>
              <Link href="/schedule-service">Schedule online</Link> to confirm whether your vehicle and service type are eligible for{" "}
              <Link href="/mobile-auto-glass-repair">mobile service</Link>.
            </p>

            <p>
              <strong className="text-black">When In-Shop Service Is the Better Option</strong>
            </p>
            <p>In-shop service becomes the stronger choice in specific circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-black">Vehicles requiring static ADAS recalibration.</strong> Static recalibration must be performed in a controlled environment using recalibration targets placed at precise distances and angles in front of the vehicle. If your vehicle requires static recalibration after windshield replacement, in-shop service may be necessary for that step even if the glass installation itself could be done mobile.
              </li>
              <li>
                <strong className="text-black">Complex installations.</strong> Vehicles with heated windshields, large panoramic glass, or embedded systems require more controlled conditions and sometimes additional equipment that is easier to access in a shop setting.
              </li>
              <li>
                <strong className="text-black">Weather conditions.</strong> Adhesives used in windshield replacement cure within specific temperature and humidity ranges. Extreme heat, cold, or wet conditions can affect the curing process. A shop environment eliminates weather as a variable.
              </li>
              <li>
                <strong className="text-black">When you want everything done in one place.</strong> For vehicles that require both installation and recalibration, completing everything in-shop in a single appointment is often more efficient and ensures clear accountability if any issues arise afterward.
              </li>
              <li>
                <strong className="text-black">When mobile availability is limited.</strong> Mobile service availability depends on technician capacity and service area coverage. In some locations, in-shop appointments may be available sooner or may be the only option available. If you need service quickly, checking in-shop availability alongside mobile options is worth the call.
              </li>
            </ul>

            <p>
              <strong className="text-black">What About ADAS Recalibration with Mobile Service?</strong>
            </p>
            <p>
              This is the most important question to ask before booking mobile service for a vehicle with ADAS features. The answer depends on your vehicle&apos;s recalibration requirements.
            </p>
            <p>
              Some vehicles require only dynamic recalibration, only static recalibration, or both. The recalibration requirement is determined by the vehicle make, model, and the specific ADAS systems installed. A qualified service provider can tell you which applies to your vehicle before you choose between mobile and in-shop service.
            </p>
            <p>
              It is also worth noting that mobile static recalibration, where available, may carry additional costs not covered by all insurance carriers. Even if your glass repair or replacement is fully covered, the mobile recalibration component may result in out-of-pocket costs depending on your policy. Confirm coverage with your insurer before scheduling.
            </p>

            <p>
              <strong className="text-black">Mobile and In-Shop Service from Safelite</strong>
            </p>
            <p>
              At Safelite, we offer both mobile and in-shop auto glass service, and our technicians can advise you on which option is right for your vehicle before you book. For vehicles requiring ADAS recalibration, we have the equipment to complete both static and dynamic recalibration and can help you understand what your specific vehicle needs.
            </p>
            <p>
              <Link href="/schedule-service">Schedule your service today</Link> and choose the option that works best for you.
            </p>

            <div className="pt-4">
              <p className="text-[20px] font-bold text-black">Frequently Asked Questions</p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-bold text-black">
                    Q: Is mobile windshield replacement as good as in-shop?
                  </p>
                  <p>
                    A: For most chip repairs and windshield replacements, mobile service delivers the same quality result as in-shop service. The glass and adhesives are the same. However, not all vehicles are eligible for mobile service, and availability depends on technician capacity and your location. In some areas, in-shop appointments may be more readily available. If your vehicle requires static ADAS recalibration, that step must be completed in a controlled environment regardless of where the glass installation is performed.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Is mobile auto glass service more expensive than in-shop?
                  </p>
                  <p>
                    A: Generally, no. Safelite does not charge a separate fee simply for sending a mobile technician to your location. However, the total cost may differ depending on the specific services required, your vehicle, and your insurance coverage. In some cases, additional mobile-specific services such as mobile static recalibration may be required and may not be covered by all insurance carriers, meaning some out-of-pocket costs could apply even when the underlying glass repair or replacement is otherwise covered. Any applicable costs will be communicated before scheduling whenever possible.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Can ADAS recalibration be done with mobile windshield replacement?
                  </p>
                  <p>
                    A: It depends on your vehicle&apos;s recalibration requirements. Dynamic recalibration, which takes place during a drive, can follow a mobile installation. Static recalibration, which requires a controlled environment and specific recalibration targets, can usually be performed on-site. Ask your service provider which type of recalibration your vehicle requires before booking mobile service.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: How long does mobile windshield replacement take?
                  </p>
                  <p>
                    A: Most mobile windshield replacements are completed in one to two hours. Chip repairs typically take 30 minutes or less. After installation, the adhesive requires a minimum cure time before the vehicle should be driven, usually at least one hour and sometimes longer depending on conditions.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Can a windshield be replaced in a driveway?
                  </p>
                  <p>
                    A: Yes, for standard replacements, and when the vehicle is eligible for mobile service. Mobile technicians are equipped to perform installations in driveways, parking lots, and similar locations. Extreme weather conditions can affect adhesive curing and may require rescheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HorizontalRule variant="gray-line" />
      </div>
    </ServicePageShell>
  );
}
