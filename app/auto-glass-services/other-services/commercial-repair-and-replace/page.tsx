import type { Metadata } from "next";
import Link from "next/link";
import { getImageProps } from "next/image";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import ServiceButton from "@/app/components/services/service-button";
import styles from "./commercial.module.css";

export const metadata: Metadata = {
  title: "Commercial Auto Glass | Commercial Repair and Replace| Safelite Direct",
  description:
    "Take control of your fleet's auto glass service with Safelite Direct. Schedule fleet appointments for windshield repair, replacement, and ADAS recalibration.",
};

const SAFELITE_DIRECT = "http://www.safelitedirect.com";

// Map of locations: a shorter crop on phones, as on the reference
function MapImage() {
  const common = { alt: "", loading: "lazy" as const };
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ ...common, src: "/image/services/commercial/map-mobile.png", width: 455, height: 180 });
  const { props } = getImageProps({ ...common, src: "/image/services/commercial/map.png", width: 455, height: 220 });
  return (
    <span className={styles.mapImage}>
      <span className={styles.mapImageSpan} />
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
        <img {...props} alt="" />
      </picture>
    </span>
  );
}

function Secondary() {
  return (
    <>
      <div className={styles.cardsWholes}>
        <div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardImage}>
              <MapImage />
            </div>
            <div className={styles.cardContent}>
              <ContentBlock>
                <p>
                  <strong />
                </p>
                <h1>More than 7,100 locations and MobileGlassShops nationwide.</h1>
                <p>Safelite AutoGlass is the only national auto glass repair and replacement service.</p>
                <div>
                  <p style={{ margin: 0 }} />
                </div>
              </ContentBlock>
            </div>
          </div>
        </div>
      </div>
      <GrayBox>
        <ContentBlock style={{ textAlign: "center" }}>
          <h2>
            {/* This page shows the heading's bold text at regular weight */}
            <strong style={{ fontWeight: 400 }}>Schedule with Safelite today</strong>
          </h2>
          <ServiceButton href={SAFELITE_DIRECT}>Schedule now</ServiceButton>
        </ContentBlock>
      </GrayBox>
    </>
  );
}

export default function CommercialRepairAndReplacePage() {
  return (
    <ServicePageShell secondary={<Secondary />} strongWeight="medium" showDontWaitCta={false}>
      <ServiceHero
        title="Service you can count on"
        subtitle="Trust the experts at Safelite"
        image={{
          alt: "fleet of vehicles",
          desktop: { src: "/image/services/commercial/hero-desktop.jpg", width: 585, height: 340, ratio: "58.11966%" },
          wide: { src: "/image/services/commercial/hero-wide.jpg", width: 1100, height: 340, ratio: "30.90909%" },
          tablet: null,
        }}
      >
        <p>
          We&apos;re here for your commercial and fleet auto glass needs. Whether it&apos;s a repair or replacement,
          we&apos;ll take care of it. If needed, we&apos;ll also recalibrate the vehicle&apos;s advanced safety systems to
          ensure they&apos;re working properly.
        </p>
      </ServiceHero>

      <GrayBox>
        <HorizontalRule variant="gray-line" />
        {/* Title is centered; the button stays on the left, as on the reference */}
        <ContentBlock style={{ textAlign: "center" }}>
          <h2>The best in auto glass service</h2>
          <ServiceButton href={SAFELITE_DIRECT}>Get started</ServiceButton>
        </ContentBlock>
        <HorizontalRule variant="gray-line" />
        <SectionHeading>Key features of the website</SectionHeading>
        <ContentHalves
          left={<ContentImage src="/image/services/commercial/suv-at-shop.jpg" alt="SUV at Safelite shop" />}
          right={
            <ContentBlock>
              <p>
                <strong>From your Safelite account, you can:</strong>
                <strong />
              </p>
              <ul style={{ margin: 0, lineHeight: "normal" }}>
                <li>Schedule service for multiple vehicles</li>
                <li>Save addresses of common service locations</li>
                <li>Use the VIN to pre-populate vehicle details</li>
                <li>View current and past appointments</li>
                <li>Confirm and track orders</li>
              </ul>
              <p>Questions about Safelite’s auto glass services?&nbsp;</p>
              <Link href={`${SAFELITE_DIRECT}/FAQ`}>Visit the FAQ page</Link>.
              <div>
                <p style={{ margin: 0 }}>&nbsp;</p>
              </div>
            </ContentBlock>
          }
        />
      </GrayBox>
    </ServicePageShell>
  );
}
