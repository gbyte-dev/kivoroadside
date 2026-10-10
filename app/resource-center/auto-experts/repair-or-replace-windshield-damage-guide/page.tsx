import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ResourceCenterHeader from "@/app/components/resource-center-header";
import HorizontalRule from "@/app/components/services/horizontal-rule";

export const metadata: Metadata = {
  title: "Repair or Replace: A Guide to All Types of Windshield Damage | Safelite",
  description:
    "At Safelite, we want our customers to be informed. Browse our resource center for more information on auto expertise, culture, current events, and safety.",
};

export default function RepairOrReplaceWindshieldDamageGuidePage() {
  return (
    <ServicePageShell header={<ResourceCenterHeader />} showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className="mx-auto max-w-[510px] px-[15px] pb-[24px] md:max-w-[750px]">
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Repair or Replace: A Guide to All Types of Windshield Damage
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            Aug 27, 2026 | Auto expertise
          </div>

          <div className="mb-[20px] overflow-hidden rounded-[8px]">
            <Image
              src="/imagesv3/default-source/default-album/2403_sawmill-shoot_6464.jpg"
              alt="2403_Sawmill-Shoot_6464"
              width={750}
              height={422}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mb-[24px] flex items-center justify-end gap-3">
            <a
              href="mailto:?subject=Safelite%20Resource%20Center:%20Repair or Replace: A Guide to All Types of Windshield Damage&amp;body=Repair or Replace: A Guide to All Types of Windshield Damage%0D%0Ahttps://www.safelite.com/resource-center/auto-experts/repair-or-replace-windshield-damage-guide"
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
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.safelite.com/resource-center/auto-experts/repair-or-replace-windshield-damage-guide"
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
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.safelite.com/resource-center/auto-experts/repair-or-replace-windshield-damage-guide"
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
              <strong className="text-black">When to Repair vs Replace Your Damaged Windshield</strong>
            </p>
            <p>
              Windshield damage does not come in just one shape or size, and neither does the fix. A small chip from a highway pebble is a very different repair decision than a spiderweb crack after a hard freeze. Knowing what kind of damage you are looking at <em>before</em> you call a technician can help you understand your options, set expectations on cost and timing, and, in some cases, help you catch the damage while it is still repairable.
            </p>

            <p>Common damage types include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-black">Bullseye or star chip:</strong> A circular or star-shaped impact point, usually the result of a rock or road debris. Often repairable if caught early.
              </li>
              <li>
                <strong className="text-black">Combination break:</strong> A mix of a chip and short cracks radiating outward. May still be repairable depending on size and depth.
              </li>
              <li>
                <strong className="text-black">Edge crack:</strong> A crack that starts or extends within two inches of the windshield&apos;s edge, where the glass is structurally weakest. Usually requires replacement.
              </li>
              <li>
                <strong className="text-black">Long or spreading crack:</strong> Any crack longer than a few inches, or one that continues to grow. Almost always means replacement.
              </li>
            </ul>

            <p>
              <strong className="text-black">Chips vs. Cracks: What&apos;s the Difference</strong>
            </p>
            <p>
              A chip is small, localized damage where a piece of glass has been removed or dislodged from the impact, but the surrounding glass has not fractured outward. A crack is a fracture line that runs through the glass, whether it started as a chip that spread or resulted directly from impact or stress. This distinction matters because chips are the type of damage most likely to be candidates for{" "}
              <Link href="/windshield-repair">windshield repair</Link>, while cracks more often point toward replacement.
            </p>

            <p>
              <strong className="text-black">The Common Types of Windshield Damage</strong>
            </p>
            <p>
              Windshield damage can take several forms, and the shape and location of the damage can help determine whether repair or replacement is the better option.
            </p>
            <p>
              <strong className="text-black">Bullseye break:</strong> A dark, circular impact point that resembles a cone-shaped hole in the outer layer of glass. This type of damage can often be repaired if it&apos;s smaller than a quarter and not in the driver&apos;s direct line of sight.
            </p>
            <p>
              <strong className="text-black">Star break:</strong> Short cracks radiating outward from a central impact point, creating a star-like pattern. This type of damage can often be repaired if the cracks are short and the damage is otherwise suitable for repair.
            </p>
            <p>
              <strong className="text-black">Combination break:</strong> A combination of a bullseye and star-break pattern around a single impact point. This type of damage can sometimes be repaired depending on the size, depth, and extent of the cracks.
            </p>
            <p>
              <strong className="text-black">Partial or surface crack:</strong> A shallow crack that has not penetrated the full thickness of the glass. This type of damage can sometimes be repaired if it&apos;s caught early and meets other repair criteria.
            </p>
            <p>
              <strong className="text-black">Edge crack:</strong> A crack that starts within about two inches of the windshield&apos;s edge. This type of damage typically requires a replacement because damage near the edge can compromise the windshield&apos;s structural integrity.
            </p>
            <p>
              <strong className="text-black">Stress crack:</strong> A crack that appears without an obvious impact point, often following temperature changes or developing from a manufacturing weak point. This type of damage frequently requires replacement because there is no clear impact point for a technician to repair.
            </p>

            <p>
              <strong className="text-black">When Repair Makes Sense</strong>
            </p>
            <p>As a general rule, a repair is worth considering when the damage meets all of the following criteria:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Roughly three inches or smaller for cracks, or smaller than a quarter coin for chips.</li>
              <li>Not in the driver&apos;s direct line of sight, since even a well-repaired chip can leave a small distortion.</li>
              <li>Not on the edge of the windshield, where the glass is structurally weaker.</li>
              <li>Caught early, before temperature changes, moisture, or road vibration cause it to spread.</li>
            </ul>

            <p>
              <strong className="text-black">When Replacement Is the Right Call</strong>
            </p>
            <p>Replacement typically becomes the better option, and sometimes the only option, when:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The crack is longer than six inches or continues to grow.</li>
              <li>The damage reaches the edge of the windshield, compromising structural integrity.</li>
              <li>There are multiple chips or cracks spread across the glass.</li>
              <li>The damage sits directly in the driver&apos;s line of sight and would leave a visible distortion after repair.</li>
              <li>The windshield has already been repaired once in that area and has failed or spread again.</li>
            </ul>

            <p>
              <strong className="text-black">Don&apos;t Forget ADAS Calibration</strong>
            </p>
            <p>
              If your vehicle is equipped with advanced driver assistance systems (ADAS), such as lane departure warning or automatic emergency braking, a full windshield replacement will likely require the forward-facing camera attached to your windshield to be recalibrated. This is a separate step from the glass installation itself and is an important part of getting your safety systems working correctly again. Learn more about{" "}
              <Link href="/windshield-camera-recalibration">ADAS recalibration</Link> and what it involves.
            </p>

            <p>
              <strong className="text-black">Not Sure Which You Need? Let Safelite Take a Look</strong>
            </p>
            <p>
              Deciding between repair and replacement is not always obvious from a quick glance, and getting it wrong can mean paying for a repair that does not hold or missing a window where repair was still possible. Safelite technicians evaluate the size, depth, and location of the damage and recommend the right fix. Our{" "}
              <Link href="/mobile-auto-glass-repair">mobile service</Link> comes to your home or office, and most repairs are completed in 30 minutes or less.{" "}
              <Link href="/schedule-service">Schedule your service today</Link> and get a clear answer on repair or replace.
            </p>

            <div className="pt-4">
              <p className="text-[20px] font-bold text-black">Frequently Asked Questions</p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-bold text-black">
                    Q: How do I know if my windshield can be repaired or needs to be replaced?
                  </p>
                  <p>
                    A: It generally comes down to size, depth, and location of the damage. Chips smaller than a quarter and cracks shorter than a dollar bill, away from the edge and the driver&apos;s line of sight, are usually repairable. Larger or spreading damage, edge cracks, and anything obstructing the driver&apos;s view typically require replacement.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: What&apos;s the longest crack that can still be repaired?
                  </p>
                  <p>
                    A: Many technicians can repair cracks up to about six inches long, sometimes longer with newer resin injection techniques, but this depends on the depth of the crack and how long it has been left untreated. Cracks that have already started to spread further are less likely to hold up after a repair.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Does a small chip always turn into a crack eventually?
                  </p>
                  <p>
                    A: Not always, but it is common. Temperature swings, road vibration, and moisture can all cause a small chip to spread into a crack, sometimes within days. That is why getting a chip repaired quickly gives you the best chance of avoiding a full replacement.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Will my insurance cover windshield replacement the same way it covers repair
                  </p>
                  <p>
                    A: Many comprehensive auto insurance policies cover both, though coverage details vary by insurer and state. Some policies waive the deductible for repairs specifically to encourage drivers to fix small chips before they require a full replacement. Check with your insurance provider to understand your specific coverage.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: How long does windshield replacement take compared to repair?
                  </p>
                  <p>
                    A: A standard windshield repair typically takes about 30 minutes. A full windshield replacement usually takes an hour or more, and if your vehicle requires ADAS recalibration, that can add additional time to the appointment.
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
