import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import WideContent from "@/app/components/services/wide-content";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import TrustCta from "@/app/components/services/trust-cta";
import AdditionalServices from "@/app/components/services/additional-services";

export const metadata: Metadata = {
  title: "Car Side Window Replacement and Repairs | Safelite",
  description:
    "Is there damage to your driver or passenger car window? Call Safelite and schedule an appointment to repair or replace any side window on your vehicle.",
};

export default function SideWindowReplacementPage() {
  return (
    <ServicePageShell secondary={<AdditionalServices current="/side-window-replacement" />}>
      <ServiceHero
        title="Broken car window replacement near you"
        subtitle="Auto glass damage is not limited to your windshield."
        cta={{ label: "Get quote + schedule", href: "/schedule-service" }}
        image={{
          alt: "A Safelite technician wearing gloves replacing a vehicle's side window",
          desktop: {
            src: "/image/services/side-window-replacement/hero-desktop.jpg",
            width: 585,
            height: 458,
            ratio: "78.2906%",
          },
          tablet: {
            src: "/image/services/side-window-replacement/hero-tablet.jpg",
            width: 585,
            height: 533,
            ratio: "91.11111%",
          },
        }}
      >
        <p>
          A broken car window puts you at the mercy of the weather and exposes your car to theft. Your valuables and car
          interior are not protected when using a temporary fix or patch on your broken window. If your car window is
          broken from road debris or smashed in an accident, calling Safelite AutoGlass to repair or replace your window
          is the most efficient way to get your car or truck window fixed and back on the road quicker.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>More than 7,100 locations and MobileGlassShops nationwide</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                When you schedule auto glass service with Safelite, we can make the repair to your car or truck window
                wherever is convenient to you! We are local in all 50 states, with over{" "}
                <Link href="/store-locator">850 service locations</Link> ready to get you back on the road service your
                car windows with repairs or complete replacements.
              </p>
              <p>
                Can&apos;t make it into our auto glass shops? Our mobile auto glass technicians can come to you at the
                location of your choosing in our <Link href="/mobile-auto-glass-repair">MobileGlassShops™</Link> and fix
                your broken window on site.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <TrustCta />

      <SectionHeading>How do you replace a broken car window?</SectionHeading>
      <ContentHalves
        left={
          <ContentImage
            src="/image/services/side-window-replacement/vacuum-after-service.jpg"
            alt="vacuum after service"
          />
        }
        right={
          <ContentBlock>
            <p>
              <strong>When you come to us for an auto window replacement, our technicians will:</strong>
            </p>
            <ol>
              <li>Inspect the damage carefully</li>
              <li>Remove the door panel to access the remaining glass</li>
              <li>Vacuum any debris and glass from the vehicle</li>
              <li>Insert a brand new side window</li>
              <li>Test the regulator to ensure the window functions properly</li>
              <li>Replace the door panel</li>
              <li>
                <Link href="/resource-center/auto-experts/keep-car-windows-clean-during-summer">
                  Clean all of the glass on your vehicle
                </Link>
              </li>
            </ol>
            <p>
              The process is easy and stress-free – we promise. We’ll complete the side window service quickly, helping
              you maintain safety and drive away with a stronger window.{" "}
              <Link href="/schedule-service">Schedule service online today</Link>.
            </p>
          </ContentBlock>
        }
      />

      <GrayBox>
        <SectionHeading>What can I expect when my car needs a window replacement?</SectionHeading>
        <WideContent>
          <ContentBlock>
            <p>
              With any type of chip in your driver or passenger side window, it takes a replacement to ensure the most
              effective results. Safelite has the commitment and expertise you can trust.&nbsp;
            </p>
          </ContentBlock>
        </WideContent>
        <NarrowLeftHalves
          heading="Window repair and replacement service from trained, certified technicians"
          paddedLeftColumn
        >
          <p>
            All of our technicians are fully certified to handle your car&apos;s window repair or replacement in-shop or
            on the road, completing extensive classroom and hands-on training in our SafeTech® certification program.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="At your convenience">
          <p>
            Need us to travel to you? We offer the options of mobile or in-shop side window replacement. Whatever works
            best for you. We can travel to your home, work, or location of your choose. Plus, with convenient
            scheduling, we work around your hours to provide our flexible window repair services for you.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Quick turnaround">
          <p>
            The entire window glass replacement can take as little as one hour and our auto window experts clean up
            after the replacement so you can get back on to the road as soon as possible.
          </p>
          <p>
            As debris on the road or a rock causes a crack in your window, don’t let it linger and spread. Call
            Safelite. We fix all side window glass with little cost to you.{" "}
            <Link href="/schedule-service">Get a quote</Link> for our service, and schedule your window repair
            appointment today.
          </p>
        </NarrowLeftHalves>
        <HorizontalRule variant="gray-line" />
        <NarrowLeftHalves heading="Cost of replacing a car side window">
          <p>
            Safelite offers competitive pricing to ensure affordability when replacing your car’s side window glass.
            The <Link href="/auto-glass-repair-replacement-cost">cost of replacing your car side window</Link> can vary
            based on factors such as your vehicle’s make and model, year, location, and the extent of damage to the
            side window. With Safelite, receive transparent pricing for all auto glass services from our expert
            technicians who will explain the different factors that can impact the overall cost of your auto glass
            service.
          </p>
        </NarrowLeftHalves>
      </GrayBox>
    </ServicePageShell>
  );
}
