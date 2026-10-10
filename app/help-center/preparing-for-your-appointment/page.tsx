import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import HelpCenterInnerNav from "@/app/components/services/help-center-inner-nav";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
  title: "Preparation | Safelite",
  description:
    "Learn how to prepare for your Safelite auto glass repair or replacement appointment with our helpful FAQs.",
};

const APPOINTMENT_TABS = [
  {
    label: "Preparation",
    href: "/help-center/preparing-for-your-appointment/preparation",
    active: true,
  },
  {
    label: "Installation",
    href: "/help-center/preparing-for-your-appointment/installation",
    active: false,
  },
];

export default function PreparationPage() {
  return (
    <ServicePageShell secondary={<AdditionalFaqs current="appointment" />} strongWeight="medium">
      {/* Title & Subtitle */}
      <ContentBlock className="mb-[-20px]! pt-10!">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
          Safelite FAQs
        </h1>
        <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
          Preparing for your appointment
        </h4>
      </ContentBlock>

      {/* Tabs */}
      <HelpCenterInnerNav tabs={APPOINTMENT_TABS} />

      {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
      <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
        {/* Q1 */}
        <FaqAccordionItem question="When is my appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Once you&apos;ve finished scheduling online, you&apos;ll receive an email from Safelite with all your
            appointment details, including the date, time, location, and any other need-to-knows. You can also find your
            appointment details by logging in to{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>
            . Your appointment will remain on our schedule unless we reach out to you because of an issue or if you
            edit your appointment at{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>
            .
          </p>
        </FaqAccordionItem>

        {/* Q2 */}
        <FaqAccordionItem question="How can I view details about my upcoming appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Please log in to{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>{" "}
            to access information about your upcoming appointment, including the location, whether it is in-shop or
            mobile, and whether your service includes products such as windshield wipers, glass cleaner, or rain
            repellent.
          </p>
        </FaqAccordionItem>

        {/* Q3 */}
        <FaqAccordionItem question="How long will my auto glass repair or replacement take?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            In many cases, windshield repairs can be performed in 30 minutes or less. Windshield replacements will
            often take 60 minutes or less; however, we recommend that you do not drive the vehicle for at least one
            hour after service is completed. If your service requires recalibration, it may take an additional hour.
          </p>
        </FaqAccordionItem>

        {/* Q4 */}
        <FaqAccordionItem question="What do I need to do before I arrive for my appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If you&apos;re scheduled for an in-shop appointment, plan to arrive at least ten minutes early to check in.
            You&apos;ll also want to make sure your gas tank is at least three-fourths full. For electric vehicles, the
            battery should have at least a 60% charge. If your service includes recalibration, please remove any heavy
            cargo from the vehicle and ensure all tires are properly inflated.
          </p>
        </FaqAccordionItem>

        {/* Q5 */}
        <FaqAccordionItem question="Will you call when you’re on your way?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            When scheduling your mobile appointment, you can opt into receiving text message updates about your
            service, including when your technician is on their way to you.
          </p>
        </FaqAccordionItem>

        {/* Q6 */}
        <FaqAccordionItem question="Can I give my technician instructions?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            You&apos;ll have the opportunity to include specific instructions for your technician during the scheduling
            process. Once you finish scheduling online, you’ll get a confirmation email with all your appointment details,
            including the date, time, location and any other need-to-knows. Text{" "}
            <a href="sms:8008002727" className="text-[#0070d1] underline hover:no-underline">
              800-800-2727
            </a>{" "}
            to give your tech instructions.
          </p>
        </FaqAccordionItem>

        {/* Q7 */}
        <FaqAccordionItem question="Can I drop off my vehicle the night before?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Some Safelite shop locations offer Drop &amp; Go™ service for your convenience. You can verify Drop &amp;
            Go availability at your scheduled shop by texting{" "}
            <a href="sms:8008002727" className="text-[#0070d1] underline hover:no-underline">
              800-800-2727
            </a>
            , or by contacting us at{" "}
            <Link href="/contact-us" className="text-[#0070d1] underline hover:no-underline">
              safelite.com/contact-us
            </Link>
            .
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If your shop offers Drop &amp; Go, you&apos;ll need to drop off your vehicle between the shop’s opening
            time and 9 AM on the morning of your appointment. Park in any available parking space, then visit the
            shop’s front desk to drop off your keys.
          </p>
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            We’ll stay in touch with service updates before and during your service, and contact you with payment and
            pickup instructions when your vehicle is ready. If you’re unable to pick up your vehicle by 5 PM, it will
            need to be picked up the following business day.
          </p>
        </FaqAccordionItem>

        {/* Q8 */}
        <FaqAccordionItem question="Can you connect me to a specific store?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            To learn more about the Safelite location servicing your vehicle, visit our{" "}
            <Link href="/store-locator" className="text-[#0070d1] underline hover:no-underline">
              Store Locator
            </Link>{" "}
            page and use your zip code to find your specific shop. For updates specific to your appointment and its
            status, visit{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>
            .
          </p>
        </FaqAccordionItem>

        {/* Q9 */}
        <FaqAccordionItem question="Does the shop have a waiting room?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Most Safelite shop locations include a customer waiting room, and many include amenities like cable TV,
            coffee, and Wi-Fi. To learn more about your specific shop, visit our{" "}
            <Link href="/store-locator" className="text-[#0070d1] underline hover:no-underline">
              store locator
            </Link>{" "}
            page and see more details.
          </p>
        </FaqAccordionItem>

        {/* Q10 */}
        <FaqAccordionItem question="Can someone other than me bring my vehicle to the appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Yes. Someone other than you can bring your vehicle to the appointment.
          </p>
        </FaqAccordionItem>

        {/* Q11 */}
        <FaqAccordionItem question="When can I pick up my vehicle?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            We&apos;ll stay in touch with service updates before and during your service and contact you with payment and
            pick up instructions when your vehicle is ready. If you&apos;re unable to pick up your vehicle by 5PM, it will
            need to be picked up the following business day.
          </p>
        </FaqAccordionItem>

        {/* Q12 */}
        <FaqAccordionItem question="What happens if it’s raining and I don’t have cover?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If it&apos;s raining the day of your mobile appointment and you don&apos;t have a covered area for our
            technician to work, you can either reschedule or bring your vehicle into one of our shops.
          </p>
        </FaqAccordionItem>

        {/* Q13 */}
        <FaqAccordionItem question="Can my car be parked on the street?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            The ideal locations for mobile service are level driveway, parking lot, garage, or carport. This is for
            the safety of both our technicians and your vehicle. In some instances, your technician may be able to
            safely provide service on a low traffic residential street like a cul-de-sac or garage alleyway. Your
            technician will assess the situation and make a final decision before beginning your service.
          </p>
        </FaqAccordionItem>

        {/* Q14 */}
        <FaqAccordionItem question="Why did you reschedule my appointment?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            If Safelite canceled your appointment, it was likely due to weather conditions, part availability, or
            needing follow-up information from you. Please check your email or text messages from Safelite for next steps.
            You can also log in to{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>{" "}
            to manage your appointment at any time.
          </p>
        </FaqAccordionItem>

        {/* Q15 */}
        <FaqAccordionItem question="How do I log in to mysafelite.com?">
          <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
            Go to{" "}
            <Link href="/my-appointment" className="text-[#0070d1] underline hover:no-underline">
              mysafelite.com
            </Link>{" "}
            and enter the phone number or email address you used to book your appointment. You will then receive a text
            message or email with a login link.
          </p>
        </FaqAccordionItem>

        {/* Was this page helpful? */}
        <WasPageHelpful />
      </div>
    </ServicePageShell>
  );
}
