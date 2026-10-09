import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import GrayBox from "@/app/components/services/gray-box";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import AiChatButton from "@/app/components/services/ai-chat-button";
import IconTitleCards, { type IconTitleCard } from "@/app/components/services/icon-title-cards";
import { HELP_CENTER_FAQ_LINKS } from "@/app/components/services/service-links";
import ChatHero from "./chat-hero";

export const metadata: Metadata = {
  title: "Windshield Repair Help | Auto Glass FAQ | Safelite",
  description:
    "Safelite’s customer service team makes sure you get the auto glass service you need. For questions about windshield damage, visit our online help center.",
};

// The FAQ topic cards, from the shared help center links
const FAQ_TOPICS: IconTitleCard[] = Object.values(HELP_CENTER_FAQ_LINKS).map(({ label, ...card }) => ({
  ...card,
  title: label,
}));

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
