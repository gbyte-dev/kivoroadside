import type { Metadata } from "next";
import Link from "next/link";
import FaqTabPage, { type Faq } from "../faq-tab-page";

export const metadata: Metadata = {
  title: "Service expectations",
  description:
    "When you have auto glass damage, our expert technicians are ready to help. Read our service expectations FAQs for more details and book your appointment today.",
};

// Copy follows the reference word for word. Where it has an empty paragraph
// between two others (an extra 10px gap), so does this.
const FAQS: Faq[] = [
  {
    question: "Do you offer mobile auto glass service?",
    answer: (
      <p>
        Yes, we offer mobile auto glass service in most areas. When you request mobile service, a Safelite technician
        will come to your home, office or another convenient location.
      </p>
    ),
  },
  {
    question: "How do I know if my appointment is mobile or in-shop?",
    answer: (
      <p>
        You can find your appointment details, including the location, by logging in to your account at{" "}
        <Link href="/my-appointment">mysafelite.com</Link>.
      </p>
    ),
  },
  {
    question: "When is your soonest appointment?",
    answer: (
      <p>
        Visit <Link href="/schedule-service">safelite.com</Link> to book an auto-glass service appointment that works
        for your schedule. Make sure to have your license plate number or your VIN (vehicle identification number)
        handy, as you will need this to view appointment availability.
      </p>
    ),
  },
  {
    question: "Where are you located, do you offer auto glass service in my area?",
    answer: (
      <p>
        We offer auto glass service to 97% of U.S. drivers in all 50 states. We offer both in-shop and mobile service in
        most areas. To confirm service in your area, use our <Link href="/store-locator">Store Locator</Link> to find a
        Safelite store or mobile pro near you.
      </p>
    ),
  },
  {
    question: "What are your store hours?",
    answer: (
      <p>
        Safelite shop hours depend on location, but generally we open between 8AM and 9AM and close at 5PM local time.
        To learn more about your specific shop, visit our <Link href="/store-locator">Store Locator</Link> page and see
        more details.
      </p>
    ),
  },
  {
    question: "Will a Safelite technician come pick up my vehicle?",
    answer: (
      <p>
        We are not able to pick up your vehicle but we are able to send a technician to you through our mobile service.
      </p>
    ),
  },
  {
    question: "Can I drop off my vehicle?",
    answer: (
      <>
        <p>
          Some Safelite shop locations offer Drop &amp; Go™ service for your convenience. You can verify Drop &amp; Go
          availability at your scheduled shop by texting <a href="sms:8008002727">800-800-2727</a>, or by contacting us
          at <Link href="/contact-us">safelite.com/contact-us</Link>.
        </p>
        <p />
        <p>
          If your shop offers Drop &amp; Go, you&apos;ll need to drop off your vehicle between the shop’s opening time
          and 9 AM on the morning of your appointment. Park in any available parking space, then visit the shop’s front
          desk to drop off your keys.
        </p>
        <p />
        <p>
          We’ll stay in touch with service updates before and during your service, and contact you with payment and
          pickup instructions when your vehicle is ready. If you’re unable to pick up your vehicle by 5 PM, it will need
          to be picked up the following business day.
        </p>
      </>
    ),
  },
  {
    question: "Will you replace the stickers on my windshield?",
    answer: (
      <p>
        Yes, if possible. We will remove inspection stickers and other items affixed to your windshield and, if
        permitted by law, re-apply to the new windshield. Some states do not allow the inspection sticker to be
        re-applied to the new windshield and require that you purchase a new sticker within 3-5 days after a windshield
        replacement. Check with your state licensing agency for additional information on required inspections and
        stickers.
      </p>
    ),
  },
  {
    question: "Where does my auto glass come from?",
    answer: (
      <p>
        Safelite buys its glass from the largest and most sophisticated glass manufacturers in the world; companies that
        work directly with and supply to the vehicle manufacturers. As more complexity and technology is integrated into
        vehicle glass, this approach allows us to deliver premier quality products and the best experience for our
        customers.
      </p>
    ),
  },
  {
    question: "Will my new glass be OEM?",
    answer: (
      <p>
        Our long-standing industry partnerships allow us to source the highest quality parts at the best price
        possible. This means the glass installed in your vehicle is made by the same companies creating glass for
        today&apos;s top vehicle manufacturers. If your vehicle requires OEM glass, verify with a representative by
        calling{" "}
        <a href="tel:18008002727" className="whitespace-nowrap">
          800-800-2727
        </a>{" "}
        from the phone number associated with your appointment.
      </p>
    ),
  },
  {
    question: "What is the difference between OEM and OEE auto glass?",
    answer: (
      <p>
        Original Equipment Manufacturer (OEM) auto glass is made by the same manufacturer as your original glass.
        Original Equipment Equivalent (OEE) auto glass is made to the same standards, but by a different manufacturer.
        Our customers can choose OEM or OEE prior to service by calling{" "}
        <a href="tel:18008002727" className="whitespace-nowrap">
          800-800-2727
        </a>
        .
      </p>
    ),
  },
  {
    question: "Will my new windshield have my features?",
    answer: (
      <p>
        Yes. Our expert technicians are trained to not just repair and replace auto glass, but to make sure that any
        existing technology such as heads up displays or rain sensors are also restored and working properly. In some
        cases, this might also require a recalibration of your vehicle&apos;s advanced safety systems. If this is
        needed, your technician will keep you updated on your service details and help answer any questions you have.
      </p>
    ),
  },
  {
    question: "Will my new windshield be tinted?",
    answer: (
      <p>
        Yes. Most vehicle glass is manufactured with a small almost unnoticeable amount of tint to help reduce glare and
        block UV rays. However, factory applied tint is not the same as darker tinting, which is also known as
        aftermarket tint. Every state has laws about tint color, darkness, and or reflection level. Check with your
        state&apos;s motor vehicle licensing agency for more information.
      </p>
    ),
  },
  {
    question: "How do I cancel or reschedule an auto glass appointment?",
    answer: (
      <p>
        Simply visit <Link href="/my-appointment">mysafelite.com</Link> to view or edit your appointment at any time. If
        you choose to cancel a prepaid service booking, you will be refunded the full amount.
      </p>
    ),
  },
];

export default function ServiceExpectationsPage() {
  return <FaqTabPage tab="serviceExpectations" faqs={FAQS} alwaysOpenOnDesktop />;
}
