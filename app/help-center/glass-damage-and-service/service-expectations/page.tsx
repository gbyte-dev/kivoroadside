import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import AdditionalFaqs from "@/app/components/services/additional-faqs";
import HelpCenterInnerNav from "@/app/components/services/help-center-inner-nav";
import WasPageHelpful from "@/app/components/services/was-page-helpful";
import FaqAccordionItem from "@/app/components/services/faq-accordion-item";

export const metadata: Metadata = {
    title: "Service expectations | Safelite",
    description:
        "When you have auto glass damage, our expert technicians are ready to help. Read our service expectations FAQs for more details and book your appointment today.",
};

const EXPECTATION_TABS = [
    { label: "Glass damage", href: "/help-center/glass-damage-and-service", active: false },
    {
        label: "Service expectations",
        href: "/help-center/glass-damage-and-service/service-expectations",
        active: true,
    },
    {
        label: "Services & products",
        href: "/help-center/glass-damage-and-service/services-and-products",
        active: false,
    },
];

export default function ServiceExpectationsPage() {
    return (
        <ServicePageShell secondary={<AdditionalFaqs current="damage" />} strongWeight="medium">
            {/* Title & Subtitle */}
            <ContentBlock className="mb-[-20px]! pt-10!">
                <h1 className="text-[32px] font-bold leading-[40px] tracking-[.03em] text-black md:leading-[44px]">
                    Safelite FAQs
                </h1>
                <h4 className="pb-2.5 pt-1 text-[20px] font-normal leading-[30px] tracking-[.03em] text-black">
                    Glass damage and service
                </h4>
            </ContentBlock>

            {/* Tabs */}
            <HelpCenterInnerNav tabs={EXPECTATION_TABS} />

            {/* Questions list: Mobile Accordion (collapsible with chevron) / Desktop Always Open */}
            <div className="mx-auto max-w-[510px] px-[15px] md:max-w-[750px]">
                {/* Q1 */}
                <FaqAccordionItem question="Do you offer mobile auto glass service?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Yes, we offer mobile auto glass service in most areas. When you request mobile service, a Safelite
                        technician will come to your home, office or another convenient location.
                    </p>
                </FaqAccordionItem>

                {/* Q2 */}
                <FaqAccordionItem question="How do I know if my appointment is mobile or in-shop?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        You can find your appointment details, including the location, by logging in to your account at{" "}
                        <Link href="/my-appointment" className="font-medium text-[#0070d1] hover:underline">
                            mysafelite.com
                        </Link>
                        .
                    </p>
                </FaqAccordionItem>

                {/* Q3 */}
                <FaqAccordionItem question="When is your soonest appointment?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Appointments are available on a first-come, first-served basis. The soonest available appointment will
                        depend on the parts needed for your vehicle, whether you choose in-shop or mobile service, and
                        technician availability in your area. You can find our next available appointment time when booking
                        online.
                    </p>
                </FaqAccordionItem>

                {/* Q4 */}
                <FaqAccordionItem question="Can you fix my car today?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Depending on your vehicle and availability in your area, we may have same-day appointments available.
                        Schedule an appointment online to check available times.
                    </p>
                </FaqAccordionItem>

                {/* Q5 */}
                <FaqAccordionItem question="Are you open on the weekend?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Safelite is open on Saturdays in most locations, with a few locations open on Sundays.
                    </p>
                </FaqAccordionItem>

                {/* Q6 */}
                <FaqAccordionItem question="How do you notify customers about appointments?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        We send an email or text message confirming your appointment details right after you finish
                        scheduling. We&apos;ll also stay in touch with reminders and updates before your appointment date. If
                        you have a mobile appointment, your technician will call or text you on the day of your service.
                    </p>
                </FaqAccordionItem>

                {/* Q7 */}
                <FaqAccordionItem question="Who will perform my auto glass service?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Every auto glass repair, replacement, or recalibration is performed by a Safelite technician. Our
                        technicians complete a nationally recognized, comprehensive training program, so you can count on
                        them to provide the highest quality service.
                    </p>
                </FaqAccordionItem>

                {/* Q8 */}
                <FaqAccordionItem question="Will you clean my car during or after service?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Yes. Technicians will vacuum all glass fragments and clean all vehicle windows.
                    </p>
                </FaqAccordionItem>

                {/* Q9 */}
                <FaqAccordionItem question="Will I receive a text message before my mobile service appointment?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Yes, if you opted in to text notifications when scheduling your appointment. Your technician will also
                        reach out to you by phone or text before arriving at your appointment.
                    </p>
                </FaqAccordionItem>

                {/* Q10 */}
                <FaqAccordionItem question="Where does your glass come from?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Our long-standing industry partnerships allow us to source the highest quality parts at the best price
                        possible. This means the glass installed in your vehicle is made by the same companies creating glass for
                        today&apos;s top vehicle manufacturers. If your vehicle requires OEM glass, verify with a representative by
                        calling{" "}
                        <a href="tel:18008002727" className="font-medium text-[#0070d1] hover:underline">
                            800-800-2727
                        </a>{" "}
                        from the phone number associated with your appointment.
                    </p>
                </FaqAccordionItem>

                {/* Q11 */}
                <FaqAccordionItem question="What is the difference between OEM and OEE auto glass?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Original Equipment Manufacturer (OEM) auto glass is made by the same manufacturer as your original glass.
                        Original Equipment Equivalent (OEE) auto glass is made to the same standards, but by a different manufacturer.
                        Our customers can choose OEM or OEE prior to service by calling{" "}
                        <a href="tel:18008002727" className="font-medium text-[#0070d1] hover:underline">
                            800-800-2727
                        </a>
                        .
                    </p>
                </FaqAccordionItem>

                {/* Q12 */}
                <FaqAccordionItem question="Will my new windshield have my features?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Yes. Our expert technicians are trained to not just repair and replace auto glass, but to make sure that any
                        existing technology such as heads up displays or rain sensors are also restored and working properly. In some
                        cases, this might also require a recalibration of your vehicle&apos;s advanced safety systems. If this is
                        needed, your technician will keep you updated on your service details and help answer any questions you have.
                    </p>
                </FaqAccordionItem>

                {/* Q13 */}
                <FaqAccordionItem question="Will my new windshield be tinted?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Yes. Most vehicle glass is manufactured with a small almost unnoticeable amount of tint to help reduce glare
                        and block UV rays. However, factory applied tint is not the same as darker tinting, which is also known as
                        aftermarket tint. Every state has laws about tint color, darkness, and or reflection level. Check with your
                        state&apos;s motor vehicle licensing agency for more information.
                    </p>
                </FaqAccordionItem>

                {/* Q14 */}
                <FaqAccordionItem question="How do I cancel or reschedule an auto glass appointment?">
                    <p className="pb-[10px] text-[16px] leading-[25px] tracking-[.03em] text-[#525656]">
                        Simply visit{" "}
                        <Link href="/my-appointment" className="font-medium text-[#0070d1] hover:underline">
                            mysafelite.com
                        </Link>{" "}
                        to view or edit your appointment at any time. If you choose to cancel a prepaid service booking, you will be
                        refunded the full amount.
                    </p>
                </FaqAccordionItem>

                {/* Was this page helpful? */}
                <WasPageHelpful />
            </div>
        </ServicePageShell>
    );
}