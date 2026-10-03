import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";
import { cx } from "@/app/components/services/class-names";
import { CookiePreferencesButton } from "@/app/components/cookie-preferences";
import shared from "@/app/components/services/services.module.css";
import styles from "./privacy-center.module.css";

export const metadata: Metadata = {
  title: "Privacy Center",
};

type PolicyCard = {
  title: string;
  text: string;
  image: { src: string; width: number; height: number; ratio: string };
  // Page to open, or "cookies" for the cookie preferences button
  href: string;
  label?: string;
};

const ICONS = "/image/privacy-center";

// Rows of three; null leaves a column empty, as on the reference
const ROWS: (PolicyCard | null)[][] = [
  [
    {
      title: "Online privacy policy",
      text: "Our online privacy policy explains how we collect, share, use and protect your information when you visit or use any of our websites.",
      image: { src: `${ICONS}/checklist.png`, width: 72, height: 72, ratio: "100%" },
      href: "/safelite-group-privacy-policy",
    },
    {
      title: "California privacy policy",
      text: "Residents of California have privacy rights in addition to those outlined in our privacy policy.",
      image: { src: `${ICONS}/california.png`, width: 62, height: 72, ratio: "116.129%" },
      href: "/ccpa-privacy-policy",
    },
    {
      title: "Your consumer rights",
      text: "You may have the right to submit consumer requests regarding your privacy.",
      image: { src: `${ICONS}/scales.png`, width: 78, height: 72, ratio: "93.50649%" },
      href: "https://privacyportal.onetrust.com/webform/d3b95a93-e22e-4d4d-a806-482052406557/draft/48f5d98d-2135-41f2-a54a-701815a0247a",
    },
  ],
  [
    {
      title: "Cookies",
      text: "We use cookies and other identification technologies for a variety of purposes.",
      image: { src: `${ICONS}/cookie.png`, width: 72, height: 72, ratio: "100%" },
      href: "cookies",
      label: "Cookie preferences",
    },
    {
      title: "Job applicant privacy policy",
      text: "We work to protect the privacy of job applicants at Safelite.",
      image: { src: `${ICONS}/badge.png`, width: 74, height: 60, ratio: "82.19178%" },
      href: "/careers/safelite-applicant-privacy-policy",
    },
    {
      title: "Associate privacy policy",
      text: "We're committed to providing a secure environment for our valued associates.",
      image: { src: `${ICONS}/team.png`, width: 72, height: 72, ratio: "100%" },
      href: "https://safelitepeopleguide.com/policy/employee-privacy-notice/",
    },
  ],
  [
    null,
    {
      title: "Biometric Processing Policy",
      text: "This policy explains how we process biometric information in a few specific circumstances.",
      image: { src: `${ICONS}/wrench.png`, width: 65, height: 66, ratio: "101.5385%" },
      href: "/biometric-policy",
    },
    null,
  ],
];

function CardLink({ card }: { card: PolicyCard }) {
  const label = card.label ?? "Learn more";
  if (card.href === "cookies") {
    return <CookiePreferencesButton className={styles.cardLink}>{label}</CookiePreferencesButton>;
  }
  if (card.href.startsWith("http")) {
    return (
      <a className={styles.cardLink} href={card.href}>
        {label}
      </a>
    );
  }
  return (
    <Link className={styles.cardLink} href={card.href}>
      {label}
    </Link>
  );
}

function Card({ card }: { card: PolicyCard }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <span className={shared.enhancedImage} style={{ width: card.image.width }}>
          <span className={shared.imageSpan} style={{ paddingTop: card.image.ratio }} />
          <Image src={card.image.src} alt="" width={card.image.width} height={card.image.height} />
        </span>
      </div>
      <div className={styles.cardContent}>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
        <div className={styles.btnWrap}>
          <CardLink card={card} />
        </div>
      </div>
    </div>
  );
}

export default function PrivacyCenterPage() {
  return (
    <ServicePageShell secondary={null}>
      <div className={styles.intro}>
        <div className={shared.contentContainerWide}>
          <ContentBlock>
            <h1>Safelite privacy policies</h1>
          </ContentBlock>
          {/* In the wide container the red bar keeps no pull-up margin or side padding */}
          <div
            className={cx(shared.horizontalRule, shared.leftRed)}
            style={{ marginTop: 0, padding: 0 }}
            aria-hidden="true"
          >
            <div />
          </div>
          <ContentBlock>
            You trust us with more than your vehicle glass &ndash; you also share your personal information with us.
            We&rsquo;re committed to honoring that trust. Browse our privacy practices that detail your rights and the
            ways we look out for you.
          </ContentBlock>
        </div>
      </div>

      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.thirds}>
          {row.map((card, index) => (
            <div key={index} className={styles.column}>
              {card && <Card card={card} />}
            </div>
          ))}
        </div>
      ))}

      <div className={styles.contact}>
        <div className={shared.contentContainerWide}>
          <div>
            <h4>Contact us</h4>
            <p>
              Do you have questions about any of our privacy policies or want to request access to, remove, or correct{" "}
              <br />
              your personal information? We&rsquo;re here to help. Reach out to us by email at{" "}
              <a href="mailto:onlinehelp@safelite.com">onlinehelp@safelite.com</a> or write to us at:
            </p>
            <p>
              Safelite Group, Inc. <br />
              Attn. Customer Care <br />
              7400 Safelite Way <br />
              Columbus, Ohio 43235
            </p>
          </div>
        </div>
      </div>
    </ServicePageShell>
  );
}
