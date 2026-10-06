import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import WideContent from "@/app/components/services/wide-content";
import AiChatButton from "@/app/components/services/ai-chat-button";
import IconTitleCards, { type IconTitleCard } from "@/app/components/services/icon-title-cards";
import { cx } from "@/app/components/services/class-names";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Safelite | Schedule Windshield Service | Safelite",
  description:
    "Have an auto glass emergency? Contact Safelite 24/7/365. Safelite's customer service team is standing by to help you get an appointment. Contact us today.",
};

const HELP_CARDS: IconTitleCard[] = [
  {
    href: "/schedule-service",
    title: "Get quote + schedule",
    image: { src: "/image/contact-us/calendar.png", width: 63, height: 54, ratio: "85.71429%", alt: "" },
  },
  {
    href: "/help-center",
    title: "Help center",
    image: { src: "/image/contact-us/chat.png", width: 67, height: 52, ratio: "77.61194%", alt: "help-center" },
  },
  {
    href: "/my-account",
    title: "Appointment details + warranty",
    image: { src: "/image/contact-us/shield.png", width: 55, height: 66, ratio: "120%", alt: "" },
  },
];

// Ways to reach Safelite, two per column from 768px
const QUICK_CONTACTS = [
  [
    {
      label: "To schedule or get a quote:",
      link: "Click here to get started",
      href: "/schedule-service?&start_type=fmg",
    },
    {
      label: "To update your appointment:",
      link: "Click here to log in",
      href: "https://myaccount.safelite.com/External/AccountLogin.aspx",
    },
  ],
  [
    {
      label: (
        <>
          <strong>For </strong>
          <strong>warranty&nbsp;</strong>
          <strong>questions:</strong>
        </>
      ),
      link: "Call (877) 419 3521",
      href: "tel:18774193521",
    },
    { label: "For all other questions:", link: "Text 800-800-2727", href: "sms://+18008002727" },
  ],
];

// Light gray band at the end of the article: quick contacts, then the postal address
function ReachUs() {
  return (
    <div className="mb-[-20px] mt-[10px] bg-[#f4f4f4] pb-5 pt-10">
      <div className="mx-auto max-w-[510px] px-[15px] md:flex md:max-w-[1020px] md:flex-wrap md:items-start md:justify-between">
        {QUICK_CONTACTS.map((pair) => (
          <div key={pair[0].link} className="md:w-[calc(50%-15px)]">
            <div className="mx-[-15px] px-[15px] md:flex md:flex-wrap md:items-start md:justify-between">
              {pair.map((item, index) => {
                // The last block sits in a plain column on the reference, so it keeps its 20px below on phones
                const padded = !(pair === QUICK_CONTACTS[1] && index === 1);
                return (
                  <div key={item.link} className={cx("md:w-[calc(50%-15px)]", padded && "max-md:pb-[10px]")}>
                    <div className={padded ? "md:pb-5" : "pb-5"}>
                      <p>{typeof item.label === "string" ? <strong>{item.label}</strong> : item.label}</p>
                      <p>
                        <Link href={item.href}>{item.link}</Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <HorizontalRule variant="gray-line" />
      <WideContent>
        <ContentBlock>
          <h4 style={{ textAlign: "center" }}>Postal address</h4>
        </ContentBlock>
        <ContentBlock>
          <p style={{ textAlign: "center" }}>
            <strong>Safelite Group, Inc. Corporate Office:</strong>
          </p>
          <p style={{ textAlign: "center" }}>7400 Safelite Way</p>
          <p style={{ textAlign: "center" }}>Columbus, OH 43235</p>
        </ContentBlock>
      </WideContent>
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <ServicePageShell secondary={<AiChatButton />} strongWeight="medium">
      <ServiceHero
        title="Contact us"
        subtitle="Glass damage can happen at any hour."
        image={{
          alt: "",
          desktop: { src: "/image/contact-us/hero.jpg", width: 585, height: 380, ratio: "64.95727%" },
        }}
      >
        <p>
          Rest assured that we&rsquo;re here for you with 24/7 scheduling on our website. When you need to contact us
          for auto glass service or getting a quote, we can help you get a quick answer. How can we help you today?
          Follow the links below to find your answer.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          left={<HalvesHeading>How can we help you today?</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                When you need to contact us regarding your auto glass or receiving a quote, we help you get a quick
                answer.
              </p>
            </ContentBlock>
          }
        />
        <IconTitleCards cards={HELP_CARDS} />
      </GrayBox>

      <ContactForm />
      <ReachUs />
    </ServicePageShell>
  );
}
