import type { Metadata } from "next";
import Link from "next/link";
import FaqTabPage, { type Faq } from "../faq-tab-page";

export const metadata: Metadata = {
  title: "Services & products",
  description:
    "Safelite does more than just repair and replace damaged auto glass. Read our FAQs to learn about our full range of services and schedule an appointment today.",
};

// Copy follows the reference word for word
const FAQS: Faq[] = [
  {
    question: "Do you repair rearview mirrors or side/door mirrors?",
    answer: (
      <p>
        Being the nation&apos;s number one autoglass specialist means we can do it all. Beyond side, front, or rear
        vehicle glass, we also replace rearview and side mirrors. We’ll even vacuum your vehicle and clean the glass
        when we’re finished.
      </p>
    ),
  },
  {
    question: "Can you fix my windshield leak/seal?",
    answer: (
      <p>
        We can repair your windshield leak, but we&apos;ll need to replace your windshield and provide a new seal. Our
        technicians are not able to seal glass installed by a non Safelite shop. This is primarily for your protection
        since any work we do would cause the other shops warranty to become void. We stand by our own installation work
        from start to finish. Another glass service provider should too. Your new windshield will be covered by our
        nationwide lifetime warranty for as long as you own or lease the vehicle.
      </p>
    ),
  },
  {
    question: "Can you repair or replace my sunroof?",
    answer: (
      <p>
        No, at the time Safelite cannot repair or replace your sunroof glass. We only fix windshields, side windows and
        rear windows.
      </p>
    ),
  },
  {
    question: "Do you offer window tinting services?",
    answer: <p>Unfortunately, we do not offer a window tinting service at this time.</p>,
  },
  {
    question: "Does Safelite repair or replace glass on rental vehicles?",
    answer: (
      <p>
        Yes. We service short term rental vehicles. In addition to owned or leased vehicles, commercial and fleet
        vehicles, and RVs, and semi trucks. Be sure to check with your rental company or your insurance provider to
        verify what costs may be covered.
      </p>
    ),
  },
  {
    question: "Do you offer wiper blades?",
    answer: (
      <>
        <p>
          Yes, we offer quality Safelite advanced memory curve beam blades for an additional cost at the time of
          service. We install them for free when we repair or replace your glass.
        </p>
        <p>
          Because most major driving decisions are based on having a clear, unobstructed view, experts recommend
          replacing your windshield wipers every six months or 6,000 miles.
        </p>
        <p>
          Continuing to drive with worn or damaged blades can damage your windshield, so it&apos;s important to ensure
          you have adequate blades when you have your windshield repaired or replaced.
        </p>
      </>
    ),
  },
  {
    question: "How can I add a service or product to my upcoming appointment?",
    answer: (
      <p>
        To add windshield wipers, glass cleaner, or rain repellent to your upcoming appointment, log in to{" "}
        <Link href="/my-appointment">mysafelite.com</Link> to access your appointment details and add products to your
        service. If you are interested in adding an additional service, such as a second glass repair, please call{" "}
        <a href="tel:800-800-2727" className="whitespace-nowrap">
          800-800-2727
        </a>{" "}
        from the phone number associated with your appointment, and someone will help you.
      </p>
    ),
  },
  {
    question: "How can I remove a service or product from my upcoming appointment?",
    answer: (
      <p>
        To remove windshield wipers, glass cleaner, or rain repellent from your upcoming appointment, log in to{" "}
        <Link href="/my-appointment">mysafelite.com</Link> to access your appointment details and open the Cost
        breakdown to remove products from your service. If you would like to remove an additional service, such as a
        second glass repair, please call{" "}
        <a href="tel:800-800-2727" className="whitespace-nowrap">
          800-800-2727
        </a>{" "}
        from the phone number associated with your appointment, and someone will help you.
      </p>
    ),
  },
  {
    question: "Can I buy wipers in the shop?",
    answer: (
      <p>
        When scheduling your appointment, select our Premium or Standard service package to include wiper blades in
        your service. If you&apos;ve already finished scheduling, log in to{" "}
        <Link href="/my-appointment">mysafelite.com</Link> to access your appointment details and add wipers to your
        service. You can also tell your technician that you&apos;d like to add them, and they&apos;ll install them for
        you at the time of your service.
      </p>
    ),
  },
];

export default function ServicesAndProductsPage() {
  return <FaqTabPage tab="servicesAndProducts" faqs={FAQS} alwaysOpenOnDesktop />;
}
