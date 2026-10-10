import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ResourceCenterHeader from "@/app/components/resource-center-header";
import HorizontalRule from "@/app/components/services/horizontal-rule";

export const metadata: Metadata = {
  title: "Subaru EyeSight Recalibration After Windshield Replacement | Safelite",
  description:
    "At Safelite, we want our customers to be informed. Browse our resource center for more information on auto expertise, culture, current events, and safety.",
};

export default function SubaruEyeSightRecalibrationPage() {
  return (
    <ServicePageShell header={<ResourceCenterHeader />} showDontWaitCta={false}>
      <div className="pt-[40px]">
        <div className="mx-auto max-w-[510px] px-[15px] pb-[24px] md:max-w-[750px]">
          <h1 className="pb-[5px] text-[32px] font-bold leading-[44px] tracking-[0.03em] text-black">
            Subaru EyeSight Recalibration After Windshield Replacement
          </h1>

          <div className="mb-[20px] text-[14px] font-medium uppercase tracking-[0.75px] text-[#db0020]">
            Oct 5, 2026 | Safety
          </div>

          <div className="mb-[20px] overflow-hidden rounded-[8px]">
            <Image
              src="/imagesv3/default-source/default-album/2403_sawmill-shoot_3751.jpg"
              alt="2403_Sawmill-Shoot_3751"
              width={750}
              height={422}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mb-[24px] flex items-center justify-end gap-3">
            <a
              href="mailto:?subject=Safelite%20Resource%20Center:%20Subaru EyeSight Recalibration After Windshield Replacement&amp;body=Subaru EyeSight Recalibration After Windshield Replacement%0D%0Ahttps://www.safelite.com/resource-center/car-safety/subaru-eyesight-recalibration-windshield-replacement"
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
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.safelite.com/resource-center/car-safety/subaru-eyesight-recalibration-windshield-replacement"
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
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.safelite.com/resource-center/car-safety/subaru-eyesight-recalibration-windshield-replacement"
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
              <strong className="text-black">
                Subaru EyeSight Recalibration After Windshield Replacement: What to Expect
              </strong>
            </p>
            <p>
              Replacing a Subaru windshield is not the same as replacing glass on a conventional vehicle.{" "}
              <Link href="/windshield-camera-recalibration">
                Subaru&apos;s EyeSight Driver Assist Technology
              </Link>{" "}
              uses two cameras mounted at the top of the windshield to power critical safety features. When the
              windshield is replaced, those cameras must be precisely recalibrated before EyeSight will function
              correctly. Skipping or improperly performing that recalibration puts your safety systems at risk.
            </p>

            <p>
              <strong className="text-black">What Is Subaru EyeSight and Why Does It Depend on the Windshield?</strong>
            </p>
            <p>
              Subaru EyeSight is a camera-based driver assistance system that has been standard on most Subaru models
              since 2019. Unlike radar-based systems that are mounted in the grille or bumper, EyeSight relies entirely
              on two stereo cameras positioned behind the windshield near the rearview mirror. Those cameras read the
              road ahead to detect vehicles, pedestrians, and lane markings in real time, powering features including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Adaptive cruise control with lane centering</li>
              <li>Pre-collision braking</li>
              <li>Lane departure and sway warning</li>
              <li>Automatic emergency steering</li>
            </ul>
            <p>
              Because the cameras sit directly behind the glass, the windshield is part of the optical system. The angle,
              clarity, and positioning of the glass all affect how accurately the cameras interpret what they see. A new
              windshield, even one installed with perfect precision, changes the optical environment enough that the
              cameras need to be reset and realigned to function as Subaru designed.
            </p>

            <p>
              <strong className="text-black">What Happens If EyeSight Is Not Recalibrated After Windshield Replacement?</strong>
            </p>
            <p>
              If the EyeSight cameras are not properly recalibrated after a windshield replacement, the system may
              display a warning light, disable itself automatically, or continue operating with misaligned camera data.
              Misalignment that is not obvious enough to trigger a warning is the most dangerous scenario: the system
              appears to be working normally but is detecting lanes, distances, and objects with reduced accuracy.
              Features like automatic emergency braking, automatic emergency steering, and lane keep assist can behave
              unpredictably or fail to engage when needed.
            </p>
            <p>
              Subaru recommends that EyeSight recalibration be performed by a trained technician with the correct
              equipment any time the windshield is removed or replaced.
            </p>

            <p>
              <strong className="text-black">The Subaru EyeSight Recalibration Process</strong>
            </p>
            <p>
              EyeSight recalibration is a two-stage process that must be completed after a windshield replacement:
            </p>
            <p>
              <strong className="text-black">Static recalibration</strong> is performed first. The vehicle is positioned in a controlled
              environment with specific recalibration targets placed at precise distances and angles in front of the
              cameras. Specialized software connects to the vehicle&apos;s systems and uses the targets to reset the
              camera alignment parameters. The environment must meet specific requirements for lighting and space for the
              recalibration to be performed correctly.
            </p>
            <p>
              <strong className="text-black">Dynamic recalibration</strong> follows. The vehicle is driven under specific conditions, typically
              on a road with clear lane markings at a sustained speed, allowing the cameras to verify their alignment
              against real-world inputs. Depending on the model and the recalibration equipment used, this drive cycle can
              take anywhere from a few miles to over twenty miles to complete.
            </p>
            <p>
              When you schedule your appointment with Safelite, we&rsquo;ll confirm upfront whether your Subaru requires
              static calibration, dynamic calibration, or both, so there are no surprises on the day of your appointment.
              Both stages must be completed successfully before EyeSight is fully operational.
            </p>

            <p>
              <strong className="text-black">Choosing the Right Service Provider for Subaru Windshield Replacement</strong>
            </p>
            <p>
              Not every auto glass shop has the equipment or training to perform Subaru EyeSight recalibration
              correctly. When evaluating service providers, confirm that the shop has technicians trained in ADAS
              recalibration and experience specifically with Subaru EyeSight. Ask whether they perform both static and
              dynamic recalibration and whether their equipment is compatible with your model year.
            </p>
            <p>
              Glass selection also matters. Subaru windshields include specific acoustic properties and coatings, and the
              camera mounting bracket must align precisely with the new glass. OEM or OEM-equivalent glass ensures the
              optical properties and mounting geometry meet Subaru&apos;s specifications. Aftermarket glass that does not
              meet those specifications can affect recalibration accuracy even when the recalibration process itself is
              performed correctly.
            </p>

            <p>
              <strong className="text-black">Subaru EyeSight Calibration You Can Count On</strong>
            </p>
            <p>
              At Safelite, our technicians are trained to handle Subaru windshield replacement and EyeSight camera
              recalibration using the specialized equipment Subaru&apos;s system requires. We perform{" "}
              <Link href="/windshield-camera-recalibration">recalibration</Link> according to Subaru&apos;s manufacturer
              specifications, and you will be notified at scheduling which type of recalibration your vehicle needs so you
              know exactly what to expect. We use quality glass and back our work with the{" "}
              <Link href="/national-lifetime-warranty">Safelite Nationwide Lifetime Warranty</Link>.
            </p>
            <p>
              <Link href="/schedule-service">Schedule your Subaru windshield service today</Link> and get back on the
              road with EyeSight fully operational.
            </p>

            <div className="pt-4">
              <p className="text-[20px] font-bold text-black">Frequently Asked Questions</p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-bold text-black">
                    Q: Does Subaru EyeSight need to be recalibrated after windshield replacement?
                  </p>
                  <p>
                    A: Yes. EyeSight cameras are mounted directly behind the windshield and must be recalibrated any
                    time the windshield is removed or replaced. Without proper recalibration, EyeSight may disable
                    itself or operate with reduced accuracy, compromising features like automatic emergency braking,
                    automatic emergency steering, and lane keep assist.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: How long does Subaru EyeSight recalibration take?
                  </p>
                  <p>
                    A: The full recalibration process, including both static and dynamic recalibration, typically takes
                    one to three hours depending on the model and the service provider&apos;s equipment. Dynamic
                    calibration requires a drive cycle under specific conditions, which adds time beyond the static
                    calibration.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Can any auto glass shop recalibrate Subaru EyeSight?
                  </p>
                  <p>
                    A: No. EyeSight recalibration requires specific recalibration targets, software, and a controlled
                    environment for the static recalibration process. Not all auto glass shops have this equipment.
                    Confirm that your service provider is trained and equipped for Subaru EyeSight recalibration before
                    scheduling the service.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: What happens if Subaru EyeSight is not recalibrated after windshield replacement?
                  </p>
                  <p>
                    A: EyeSight may display a warning and disable itself, or it may continue operating with misaligned
                    camera data. In either case, safety features like automatic emergency braking, adaptive cruise
                    control, automatic emergency steering, and lane keep assist will not function as designed. Proper
                    recalibration is essential before relying on any EyeSight features.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-black">
                    Q: Does my insurance cover Subaru EyeSight recalibration after windshield replacement?
                  </p>
                  <p>
                    A: Many comprehensive auto insurance policies cover ADAS recalibration as part of a windshield
                    replacement claim. Coverage varies by policy and provider, so check with your insurer before
                    scheduling service to understand what is included.
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
