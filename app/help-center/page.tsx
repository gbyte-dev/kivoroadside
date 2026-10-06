import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import AiChatButton from "@/app/components/services/ai-chat-button";
import IconTitleCards, { type IconTitleCard } from "@/app/components/services/icon-title-cards";
import ChatHero from "./chat-hero";

export const metadata: Metadata = {
  title: "Windshield Repair Help | Auto Glass FAQ | Safelite",
  description:
    "Safelite’s customer service team makes sure you get the auto glass service you need. For questions about windshield damage, visit our online help center.",
};

const FAQ_TOPICS: IconTitleCard[] = [
  {
    href: "/help-center/glass-damage-and-service",
    title: "Glass damage and service",
    image: { src: "/image/help-center/autoglass.png", width: 79, height: 48, ratio: "60.75949%", alt: "" },
  },
  {
    href: "/help-center/preparing-for-your-appointment",
    title: "Preparing for your appointment",
    image: { src: "/image/help-center/wrench.png", width: 65, height: 66, ratio: "101.5385%", alt: "" },
  },
  {
    href: "/help-center/cost",
    title: "Cost, payment, and billing",
    image: { src: "/image/help-center/pricetag.png", width: 61, height: 62, ratio: "101.6393%", alt: "" },
  },
  {
    href: "/help-center/insurance-coverage",
    title: "Insurance coverage and claims",
    image: { src: "/image/help-center/checklist.png", width: 51, height: 66, ratio: "129.4118%", alt: "" },
  },
  {
    href: "/help-center/warranty",
    title: "Warranty details",
    image: { src: "/image/help-center/shield.png", width: 55, height: 66, ratio: "120%", alt: "" },
  },
  {
    href: "/help-center/marketing-and-privacy",
    title: "Marketing and privacy",
    image: { src: "/image/help-center/lock.png", width: 49, height: 58, ratio: "118.3673%", alt: "" },
  },
];

export default function HelpCenterPage() {
  return (
    <ServicePageShell secondary={<AiChatButton />}>
      <ChatHero />

      <GrayBox>
        <ContentHalves
          left={
            <>
              <ContentBlock>
                <h1>How can we help?</h1>
                <h4>Ask the windshield and auto glass damage experts</h4>
              </ContentBlock>
              <HorizontalRule variant="left-red" />
            </>
          }
          right={
            <ContentBlock>
              <div>
                Take a look at our FAQs below for additional information. To view details about your existing
                appointment, visit <a href="https://myaccount.safelite.com/External/AccountLogin.aspx">mysafelite.com</a>.
              </div>
            </ContentBlock>
          }
        />
        <IconTitleCards cards={FAQ_TOPICS} />
      </GrayBox>

      <ContentHalves
        left={<HalvesHeading>Didn&rsquo;t find what you&rsquo;re looking for?</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              When you need to <Link href="/contact-us">contact us</Link> regarding your auto glass or receiving a
              quote, we help you get a quick answer. <br />
              <AiChatButton />
            </p>
          </ContentBlock>
        }
      />
    </ServicePageShell>
  );
}
