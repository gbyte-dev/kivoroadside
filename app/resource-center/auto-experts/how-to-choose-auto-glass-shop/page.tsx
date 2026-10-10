import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ResourceCenterHeader from "@/app/components/resource-center-header";
import HorizontalRule from "@/app/components/services/horizontal-rule";

export const metadata: Metadata = {
  title: "How to Choose an Auto Glass Shop | Safelite",
  description:
    "At Safelite, we want our customers to be informed. Browse our resource center for more information on auto expertise, culture, current events, and safety.",
};

export default function HowToChooseAutoGlassShopPage() {
  return (
    <ServicePageShell header={<ResourceCenterHeader />} showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className="mx-auto max-w-[510px] px-[15px] pb-[24px] md:max-w-[750px]">
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            How to Choose an Auto Glass Shop
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            Oct 5, 2026 | Auto expertise
          </div>

          <div className="mb-[20px] overflow-hidden rounded-[8px]">
            <Image
              src="/imagesv3/default-source/default-album/2403_sawmill-shoot_11368.jpg"
              alt="2403_Sawmill-Shoot_11368"
              width={750}
              height={422}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mb-[24px] flex items-center justify-end gap-3">
            <a
              href="mailto:?subject=Safelite%20Resource%20Center:%20How to Choose an Auto Glass Shop&amp;body=How to Choose an Auto Glass Shop%0D%0Ahttps://www.safelite.com/resource-center/auto-experts/how-to-choose-auto-glass-shop"
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
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.safelite.com/resource-center/auto-experts/how-to-choose-auto-glass-shop"
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
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.safelite.com/resource-center/auto-experts/how-to-choose-auto-glass-shop"
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
              <strong className="text-black">How to Choose an Auto Glass Shop</strong>
            </p>
            <p>
              A windshield replacement is not a commodity service. The quality of the installation, the glass used, and whether your vehicle&apos;s safety systems are properly recalibrated afterward all depend on who does the work. Choosing the right auto glass shop means asking the right questions before you schedule, not after you pick up your car.
            </p>

            <p>
              <strong className="text-black">Why the Shop You Choose Matters More Than It Used to</strong>
            </p>
            <p>
              Most vehicles on the road now have at least one camera or sensor mounted behind or near the windshield that powers advanced driver assistance features. A windshield replacement that is done correctly but without proper ADAS recalibration leaves those systems operating on misaligned data. The vehicle feels fine to drive, but features like automatic emergency braking, lane keeping assist, and adaptive cruise control may not perform correctly when you need them.
            </p>
            <p>
              The shop you choose needs to be capable of handling both the glass installation and the recalibration that follows. Not all of them are.
            </p>

            <p>
              <strong className="text-black">What to Look for in an Auto Glass Shop</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-black">Technician certification and training.</strong> Look for shops whose technicians hold certifications from recognized industry organizations. The Auto Glass Safety Council sets installation standards for the industry, and technicians trained to those standards are more likely to perform installations correctly. Ask specifically whether technicians are trained in ADAS recalibration, not just glass installation.
              </li>
              <li>
                <strong className="text-black">ADAS recalibration capability.</strong> If your vehicle has cameras or sensors behind the windshield, confirm that the shop can perform the recalibration your vehicle requires. Ask whether they perform both static and dynamic recalibration and whether their equipment is compatible with your vehicle&apos;s make, model, and year.
              </li>
              <li>
                <strong className="text-black">Glass quality.</strong> Ask whether the shop uses OEM glass, OEM-equivalent glass, or aftermarket glass, and understand the difference. OEM glass is made by the same manufacturer that supplied your original windshield. OEM-equivalent glass meets the same specifications. Aftermarket glass varies in quality and may lack acoustic layers, heating elements, UV coatings, or the optical properties required for accurate ADAS recalibration.
              </li>
              <li>
                <strong className="text-black">Warranty on parts and labor.</strong> A reputable shop stands behind its work. Ask about the warranty on both the glass and the installation. A workmanship warranty covers issues like leaks, wind noise, or glass movement that result from the installation itself.
              </li>
              <li>
                <strong className="text-black">Insurance experience.</strong> If you are filing an insurance claim, ask whether the shop works directly with your insurer. Shops with established insurance relationships can often handle the claim process on your behalf, reducing the back-and-forth and ensuring the claim is filed correctly.
              </li>
            </ul>

            <p>
              <strong className="text-black">Questions to Ask Before You Book</strong>
            </p>
            <p>Before scheduling with any auto glass shop, get answers to these questions:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Are your technicians certified, and by which organization?</li>
              <li>Do you perform ADAS recalibration in-house, and is your equipment compatible with my vehicle?</li>
              <li>What type of glass do you use, and does it meet my vehicle manufacturer&apos;s specifications?</li>
              <li>What warranty do you offer on the glass and the installation?</li>
              <li>Do you work with my insurance provider, and can you handle the claim directly?</li>
              <li>What is your drive-away time after installation?</li>
            </ol>
            <p>A shop that cannot or will not answer these questions clearly is a shop worth avoiding.</p>

            <p>
              <strong className="text-black">Red Flags to Watch Out For</strong>
            </p>
            <p>
              <strong className="text-black">Unusually low prices.</strong> If a quote is significantly below the market rate, ask what is being cut. Common shortcuts include lower-quality aftermarket glass, skipping ADAS recalibration, or using insufficient adhesive.
            </p>
            <p>
              <strong className="text-black">No mention of recalibration.</strong> If a shop completes your windshield replacement on an ADAS-equipped vehicle without discussing recalibration, that is a serious red flag. Proper recalibration is not optional, and a shop that does not bring it up may not have the equipment or training to perform it.
            </p>
            <p>
              <strong className="text-black">Pressure to decide immediately.</strong> Reputable shops do not need to pressure you into booking on the spot. High-pressure tactics are a sign that the shop&apos;s value proposition does not hold up to scrutiny.
            </p>
            <p>
              <strong className="text-black">No physical location.</strong> Mobile-only services can be legitimate, but verify that the provider has a fixed address, a verifiable business history, and carries liability insurance before allowing them to work on your vehicle.
            </p>

            <p>
              <strong className="text-black">Why Choose Safelite</strong>
            </p>
            <p>
              At Safelite, our technicians are trained to handle both windshield installation and ADAS recalibration across a wide range of make and models. We use quality glass that meets or exceeds manufacturer specifications and back our work with the{" "}
              <Link href="/national-lifetime-warranty">Safelite Nationwide Lifetime Warranty</Link>. We work with most major insurance providers and offer mobile service that comes to your home or office.
            </p>
            <p>
              <Link href="/schedule-service">Schedule your service today</Link> and know the work is done right.
            </p>

            <div className="pt-4">
              <p className="text-[20px] font-bold text-black">Frequently Asked Questions</p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-bold text-black">
                    Q: How do I choose a reputable auto glass shop?
                  </p>
                  <p>
                    A: Look for shops with certified technicians, in-house ADAS recalibration capability, and clear answers about the glass they use and the warranty they offer. Ask whether they work directly with your insurance provider. A reputable shop is transparent about its process, its pricing, and what is included in the service.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Does it matter what glass an auto glass shop uses?
                  </p>
                  <p>
                    A: Yes. OEM and OEM-equivalent glass meet your vehicle manufacturer&apos;s specifications for optical clarity, acoustic properties, UV protection, and ADAS compatibility. Aftermarket glass varies in quality and may not support accurate camera recalibration or preserve features like heated glass or embedded antennas.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Do all auto glass shops perform ADAS recalibration?
                  </p>
                  <p>
                    A: No. ADAS recalibration requires specialized equipment, trained technicians, and a controlled environment for static recalibration. Many shops can install glass but do not have the capability to perform recalibration in-house. Confirm that your chosen shop can complete the full service before you book.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: How do I know if my auto glass shop did a good job?
                  </p>
                  <p>
                    A: After replacement, check for wind noise or whistling at highway speeds, which can indicate a poor seal. Confirm that any ADAS warning lights have cleared and that features like lane keeping and automatic braking are functioning normally. If anything seems off, contact the shop immediately while the work is still under warranty.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Should I use my insurance for windshield replacement?
                  </p>
                  <p>
                    A: If you have comprehensive coverage, it is worth checking with your insurer before paying out of pocket. Many comprehensive policies cover windshield repair and replacement, sometimes with no deductible. Some states require insurers to waive the deductible for glass claims entirely.
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
