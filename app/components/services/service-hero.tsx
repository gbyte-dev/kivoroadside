import type { CSSProperties, ReactNode } from "react";
import { getImageProps } from "next/image";
import styles from "./services.module.css";
import { cx } from "./class-names";
import ServiceButton from "./service-button";

type HeroImage = {
  src: string;
  width: number;
  height: number;
  // Height as a percentage of width, written exactly like the reference
  ratio: string;
};

type ServiceHeroProps = {
  title: ReactNode;
  // Shown as a 20px line under the title when given
  subtitle?: ReactNode;
  // Hero paragraphs
  children: ReactNode;
  cta?: { label: string; href: string };
  image: {
    alt: string;
    // Shown from 991px
    desktop: HeroImage;
    // Shown from 768px to 990px. Omit to reuse the desktop photo, or pass
    // null to show no photo at that size (as some reference pages do).
    tablet?: HeroImage | null;
    // Shown from 1201px, for wide 1100px photos
    wide?: HeroImage;
  };
  // Most pages wrap the hero copy in a content block (40px top padding on
  // mobile). The mobile service page uses a plain wrapper (20px) instead.
  contentBlock?: boolean;
};

// 1x1 transparent GIF: sizes without a photo download nothing, as on the reference
const EMPTY_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function srcSetFor(image: HeroImage, alt: string) {
  return getImageProps({ alt, src: image.src, width: image.width, height: image.height, loading: "eager" }).props;
}

// Text on the left, photo on the right from 768px. The photo keeps its own
// width and is cropped by its column. Below 768px only the text is shown.
export default function ServiceHero({ title, subtitle, children, cta, image, contentBlock = true }: ServiceHeroProps) {
  const tablet = image.tablet === undefined ? image.desktop : image.tablet;
  const wide = image.wide ?? image.desktop;

  const { srcSet: desktopSrcSet, ...imgProps } = srcSetFor(image.desktop, image.alt);
  const tabletSrcSet = tablet ? srcSetFor(tablet, image.alt).srcSet : undefined;
  const wideSrcSet = image.wide ? srcSetFor(image.wide, image.alt).srcSet : undefined;

  const sizes = {
    "--hero-tablet-width": tablet ? `${tablet.width}px` : "100%",
    "--hero-tablet-ratio": tablet ? tablet.ratio : "0%",
    "--hero-desktop-width": `${image.desktop.width}px`,
    "--hero-desktop-ratio": image.desktop.ratio,
    "--hero-wide-width": `${wide.width}px`,
    "--hero-wide-ratio": wide.ratio,
  } as CSSProperties;

  return (
    <div className={styles.heroHalfImage}>
      <div className={styles.heroContent}>
        <div className={contentBlock ? styles.contentBlock : undefined}>
          <div>
            <h1>{title}</h1>
            {subtitle && <h4>{subtitle}</h4>}
            {children}
            {cta && (
              <ServiceButton href={cta.href} style={{ marginTop: 10 }}>
                {cta.label}
              </ServiceButton>
            )}
          </div>
        </div>
      </div>
      <div className={styles.heroImageWrapper}>
        <span className={cx(styles.enhancedImage, styles.heroImage)} style={sizes}>
          <span className={styles.imageSpan} />
          <picture>
            {tabletSrcSet && <source media="(min-width: 768px) and (max-width: 990px)" srcSet={tabletSrcSet} />}
            {wideSrcSet && <source media="(min-width: 1201px)" srcSet={wideSrcSet} />}
            <source media="(min-width: 991px)" srcSet={desktopSrcSet} />
            <source media={tablet ? "(max-width: 767px)" : "(max-width: 990px)"} srcSet={EMPTY_IMAGE} />
            <img {...imgProps} alt={image.alt} />
          </picture>
        </span>
      </div>
    </div>
  );
}
