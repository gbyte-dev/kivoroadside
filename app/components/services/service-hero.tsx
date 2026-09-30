import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { getImageProps } from "next/image";
import styles from "./services.module.css";
import { cx } from "./class-names";

type HeroImage = {
  src: string;
  width: number;
  height: number;
  // Height as a percentage of width, written exactly like the reference
  ratio: string;
};

type ServiceHeroProps = {
  title: ReactNode;
  subtitle: ReactNode;
  // Hero paragraphs
  children: ReactNode;
  cta?: { label: string; href: string };
  image: {
    alt: string;
    desktop: HeroImage;
    // Shown from 768px to 990px; the desktop photo is used when omitted
    tablet?: HeroImage;
  };
  // Most pages wrap the hero copy in a content block (40px top padding on
  // mobile). The mobile service page uses a plain wrapper (20px) instead.
  contentBlock?: boolean;
};

// 1x1 transparent GIF: phones get no hero photo, as on the reference
const EMPTY_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

// Text on the left, photo on the right from 768px. The photo is 585px wide
// and cropped by its column. Below 768px only the text is shown.
export default function ServiceHero({ title, subtitle, children, cta, image, contentBlock = true }: ServiceHeroProps) {
  const tablet = image.tablet ?? image.desktop;
  const {
    props: { srcSet: desktopSrcSet, ...imgProps },
  } = getImageProps({
    alt: image.alt,
    src: image.desktop.src,
    width: image.desktop.width,
    height: image.desktop.height,
    loading: "eager",
  });
  const {
    props: { srcSet: tabletSrcSet },
  } = getImageProps({
    alt: image.alt,
    src: tablet.src,
    width: tablet.width,
    height: tablet.height,
    loading: "eager",
  });

  const ratios = {
    "--hero-desktop-ratio": image.desktop.ratio,
    "--hero-tablet-ratio": tablet.ratio,
  } as CSSProperties;

  return (
    <div className={styles.heroHalfImage}>
      <div className={styles.heroContent}>
        <div className={contentBlock ? styles.contentBlock : undefined}>
          <div>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            {children}
            {cta && (
              <Link className={styles.btn} style={{ marginTop: 10 }} href={cta.href}>
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.heroImageWrapper}>
        <span className={cx(styles.enhancedImage, styles.heroImage)} style={ratios}>
          <span className={styles.imageSpan} />
          <picture>
            <source media="(min-width: 768px) and (max-width: 990px)" srcSet={tabletSrcSet} />
            <source media="(min-width: 991px)" srcSet={desktopSrcSet} />
            <source media="(max-width: 767px)" srcSet={EMPTY_IMAGE} />
            <img {...imgProps} alt={image.alt} />
          </picture>
        </span>
      </div>
    </div>
  );
}
