import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ServiceHero from "@/app/components/services/service-hero";
import GrayBox from "@/app/components/services/gray-box";
import TrustCta from "@/app/components/services/trust-cta";
import ContentBlock from "@/app/components/services/content-block";
import ContentHalves, { HalvesHeading } from "@/app/components/services/content-halves";
import ContentImage from "@/app/components/services/content-image";
import HorizontalRule from "@/app/components/services/horizontal-rule";
import NavCards from "@/app/components/services/nav-cards";
import { WHY_SAFELITE_LINKS } from "@/app/components/services/service-links";
import ReviewsWidget from "./reviews-widget";
import { TOTAL_REVIEWS } from "./review-data";
import styles from "./reviews.module.css";

export const metadata: Metadata = {
  title: "Safelite Reviews | Auto Glass Repair Reviews | Safelite",
  description:
    "At Safelite, we want to hear your feedback.  Check out our customer reviews to learn more about our auto glass services, and to leave your own thoughts.",
};

const YOTPO_LINK =
  "http://my.yotpo.com/landing_page?redirect=https%3A%2F%2Fwww.yotpo.com%2Fpowered-by-yotpo%2F&utm_campaign=branding_link_reviews_widget_v2&utm_medium=widget&utm_source=safelite.com";

// Average rating, star meter and review count
function RatingsSummary() {
  return (
    <div className={styles.ratings}>
      <a className={styles.yotpoLink} href={YOTPO_LINK}>
        <ContentImage
          src="/image/services/customer-reviews/powered-by-yotpo.png"
          alt="Powered by Yot Po Link, Opens in New tab"
          width={106}
          height={25}
          ratio="23.58491%"
        />
      </a>
      <div className={styles.ratingStars} title="Rated 4.663314 out of 5">
        <div className={styles.ratingBar} style={{ right: "7.6%" }} />
        <div className={styles.ratingOverlay}>
          <span className={styles.ratingText}>rated 4.663314 out of 5</span>
        </div>
      </div>
      <h2>
        Customers rate Safelite <span className={styles.ratingValue}>4.66</span> out of 5
      </h2>
      <div className={styles.ratingsLinks}>
        <span className={styles.reviewCount}>
          <span>{TOTAL_REVIEWS.toLocaleString("en-US")}</span> Reviews
        </span>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <>
      <ContentHalves
        left={<HalvesHeading>Why choose Safelite?</HalvesHeading>}
        right={
          <ContentBlock>
            To learn more about <Link href="/why-choose-safelite">why to choose Safelite</Link> to repair or replace
            your glass, please select from below. For questions or concerns, please{" "}
            <Link href="/contact-us">contact us</Link> or visit us on social media.
            <br />
          </ContentBlock>
        }
      />
      <NavCards
        variant="icon"
        cards={[
          WHY_SAFELITE_LINKS.warranty,
          WHY_SAFELITE_LINKS.mobileInShop,
          WHY_SAFELITE_LINKS.advantage,
          WHY_SAFELITE_LINKS.recycling,
        ]}
      />
    </>
  );
}

export default function SafeliteReviewsPage() {
  return (
    <ServicePageShell secondary={<Secondary />} strongWeight="medium">
      <ServiceHero
        title="Safelite customer reviews"
        subtitle="Read real customer reviews"
        image={{
          alt: "Customer Reviews",
          desktop: { src: "/image/services/customer-reviews/hero-desktop.jpg", width: 585, height: 340, ratio: "58.11966%" },
          wide: { src: "/image/services/customer-reviews/hero-wide.jpg", width: 1100, height: 340, ratio: "30.90909%" },
          tablet: null,
        }}
      >
        <p>
          One of the best ways to learn about Safelite is to read real customer reviews. See what kind of experiences
          other customers had when they chose Safelite for their auto glass needs.
        </p>
        <p>
          For current customers, we&apos;d love to hear from you. Please leave a review to let others know about your
          experience.
        </p>
      </ServiceHero>

      <GrayBox>
        <RatingsSummary />
      </GrayBox>

      <TrustCta />
      <ReviewsWidget />
      <HorizontalRule variant="gray-line" />
    </ServicePageShell>
  );
}
