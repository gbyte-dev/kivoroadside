import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import SectionHeading from "@/app/components/services/section-heading";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import NarrowLeftHalves from "@/app/components/services/narrow-left-halves";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import YouTubeVideo from "@/app/components/services/youtube-video";
import { cx } from "@/app/components/services/class-names";
import shared from "@/app/components/services/services.module.css";
import styles from "./auto-glass-services.module.css";

export const metadata: Metadata = {
  title: "Auto Glass Services | Car Windshield Services | Safelite",
  description:
    "Auto glass is designed to protect you on the road. When your windshield or car window glass is damaged, get services you can trust.",
};

const SERVICES = [
  {
    href: "/windshield-repair",
    title: "Windshield repair",
    text: "Our windshield repair service quickly fixes minor chips and cracks.",
    image: "/image/services/navigation/windshield-repair.jpg",
    alt: "A Safelite technician wearing gloves repairing a windshield",
  },
  {
    href: "/windshield-replacement",
    title: "Windshield replacement",
    text: "We use high quality glass at an affordable price for windshield replacement services.",
    image: "/image/services/navigation/windshield-replacement.jpg",
    alt: "A Safelite technician wearing gloves replacing a windshield",
  },
  {
    href: "/rear-windshield-replacement",
    title: "Back glass replacement",
    text: "We offer quick rear windshield replacement installation to get you back on the road.",
    image: "/image/services/navigation/back-glass-replacement.jpg",
    alt: "A Safelite technician wearing gloves replacing a vehicle’s rear window",
  },
  {
    href: "/side-window-replacement",
    title: "Side window replacement",
    text: "We can replace your broken car windows quickly and efficiently to keep you safe.",
    image: "/image/services/navigation/side-window-replacement.jpg",
    alt: "A Safelite technician wearing gloves replacing a vehicle’s side window",
  },
  {
    href: "/power-window-repair",
    title: "Power window repair",
    text: "Our expert technicians can get your power window motor working again.",
    image: "/image/services/navigation/power-window-repair.jpg",
    alt: "A Safelite technician wearing gloves replacing a vehicle’s power windows",
  },
  {
    href: "/windshield-camera-recalibration",
    title: "Safety systems recalibration",
    text: "We can recalibrate your windshield after a repair or replacement.",
    image: "/image/services/navigation/safety-systems-recalibration.jpg",
    alt: "A Safelite technician wearing gloves recalibrating a vehicle’s ADAS system",
  },
];

const BENEFITS = [
  {
    href: "/auto-glass-services/safelite-reviews",
    title: "Customer reviews",
    link: "Read real reviews",
    image: { src: "/image/services/icons/star-rating.png", width: 69, height: 67, ratio: "97.10145%" },
  },
  {
    href: "/national-lifetime-warranty",
    title: "Nationwide warranty",
    link: "Learn more",
    image: { src: "/image/services/icons/shield.png", width: 55, height: 66, ratio: "120%" },
  },
  {
    href: "/auto-glass-repair-replacement-cost",
    title: "Cost of Auto Glass Services",
    link: "Learn more",
    image: { src: "/image/services/icons/pricetag.png", width: 69, height: 66, ratio: "95.65218%" },
  },
];

// "What we do": photo cards, three per row from 768px
function ServiceCards() {
  return (
    <div className={styles.photoCards}>
      <div className={cx(shared.cardContainer, styles.thirdsContainer)}>
        {SERVICES.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className={cx(shared.cardWrapper, shared.cardClickable, styles.thirdsCard)}
          >
            <span className={shared.cardImage}>
              <span className={shared.enhancedImage}>
                <span className={shared.imageSpan} style={{ paddingTop: "64.51613%" }} />
                <Image src={service.image} alt={service.alt} width={310} height={200} />
              </span>
            </span>
            <span className={cx(shared.cardContent, styles.photoContent)}>
              <span className={styles.photoTitle}>
                <h3>{service.title}</h3>
                {service.text}
              </span>
              <span className={shared.linkLike}>Learn more</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// "More benefits": icon cards with a title, three per row from 768px
function BenefitCards() {
  return (
    <nav className={shared.cardsNavigation}>
      <div className={cx(shared.cardContainer, styles.thirdsContainer)}>
        {BENEFITS.map((benefit) => (
          <Link
            key={benefit.href}
            href={benefit.href}
            className={cx(shared.cardWrapper, shared.cardIcon, shared.cardClickable, styles.thirdsCard)}
          >
            <span className={shared.cardImage}>
              <span className={shared.enhancedImage} style={{ width: benefit.image.width }}>
                <span className={shared.imageSpan} style={{ paddingTop: benefit.image.ratio }} />
                <Image src={benefit.image.src} alt="" width={benefit.image.width} height={benefit.image.height} />
              </span>
            </span>
            <span className={shared.cardContent}>
              <span className={styles.cardTitle}>{benefit.title}</span>
              <span className={shared.linkLike}>{benefit.link}</span>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

// One "Why choose Safelite" row; the reference follows the text with an empty paragraph
function WhyRow({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <NarrowLeftHalves heading={heading}>
      <p>{children}</p>
      <p />
    </NarrowLeftHalves>
  );
}

function Secondary() {
  return (
    <>
      <GrayBox>
        <SectionHeading>More benefits</SectionHeading>
        <BenefitCards />
      </GrayBox>
      <ContentHalves
        left={<HalvesHeading>You can reach us when you need us</HalvesHeading>}
        right={
          <ContentBlock>
            <p>
              Questions? <Link href="/contact-us">Contact us</Link> today. If you’re ready,{" "}
              <Link href="/schedule-service">schedule service online</Link> now.
            </p>
          </ContentBlock>
        }
      />
    </>
  );
}

export default function AutoGlassServicesPage() {
  return (
    <ServicePageShell secondary={<Secondary />}>
      <ServiceHero
        title={
          <>
            Auto glass repair &amp; replacement services
            <br />
          </>
        }
        subtitle="Require windshield services from the experts?"
        image={{
          alt: "windshield glass services",
          desktop: { src: "/image/services/auto-glass-services-hero.png", width: 585, height: 380, ratio: "64.95727%" },
        }}
      >
        <p>
          Have a chip or crack in your auto glass? Poor driving conditions or even bad weather can damage your
          windshield with projectiles like rocks on the road, debris, or even hail. Whether the damage is on your
          windshield, rear or side window, services from Safelite AutoGlass can help.
        </p>
      </ServiceHero>

      <GrayBox>
        <ContentHalves
          paddedLeftColumn
          left={<HalvesHeading>#1 auto glass specialist in the country</HalvesHeading>}
          right={
            <ContentBlock>
              <p>
                Safelite has more than 70 years of experience providing windshield and auto glass service to 6.2
                million customers just like you each year. Not only do we have certified technicians who can get the
                job done quickly, our auto glass service uses innovative technology and is built for your convenience.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <SectionHeading>What we do</SectionHeading>
      <ServiceCards />

      <GrayBox>
        <SectionHeading>Our services fix all types of auto glass</SectionHeading>
        <ContentHalves
          left={<YouTubeVideo videoId="Fs1_qf5YlsY" title="Our services fix all types of auto glass" />}
          right={
            <ContentBlock>
              <p>
                Whether your auto glass damage is on your front or{" "}
                <Link href="/rear-windshield-replacement">rear windshield</Link>, or even a{" "}
                <Link href="/power-window-repair">side window</Link>, you can rely on Safelite for all types of car
                glass services.
              </p>
              <p>
                And if we can’t repair your windshield, you can be confident in our ability to{" "}
                <Link href="/windshield-replacement">replace your windshield</Link>.
              </p>
            </ContentBlock>
          }
        />
      </GrayBox>

      <SectionHeading>Why Choose Safelite for Auto Glass Repair?</SectionHeading>
      <WhyRow heading="Save money with early windshield repair">
        The sooner you address a chip or crack in your windshield, the more likely it can be{" "}
        <Link href="/windshield-repair">repaired instead of replaced</Link>, which costs less time and money. Repair is
        usually possible if the damage is under six inches, roughly dime-sized or smaller, limited to 3 chips, and clear
        of your cameras or sensors.
      </WhyRow>
      <HorizontalRule variant="gray-line" />
      <WhyRow heading="Windshield repair may be covered by insurance">
        Depending on your coverage, windshield repair may cost you nothing out of pocket. Safelite works with more than
        500 insurance companies nationwide, or you can{" "}
        <Link href="/auto-glass-repair-replacement-cost">pay directly</Link> if you prefer.
      </WhyRow>
      <HorizontalRule variant="gray-line" />
      <WhyRow heading="Mobile windshield repair comes to you">
        A cracked windshield shouldn’t mean rearranging your day. Our{" "}
        <Link href="/mobile-auto-glass-repair">Mobile Glass Shops</Link> come to your home, office, or wherever works
        for you, with the same certified technicians and quality glass you’d get in-shop.
      </WhyRow>
      <HorizontalRule variant="gray-line" />
      <WhyRow heading="Or visit one of 850+ locations near you">
        Prefer to come to us? Safelite operates more than <Link href="/store-locator">850 locations</Link> nationwide, so
        there’s likely a shop near you ready to repair or replace auto glass today.
      </WhyRow>
    </ServicePageShell>
  );
}
