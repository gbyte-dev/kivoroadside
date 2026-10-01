import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import { cx } from "./class-names";
import type { NavCardData } from "./service-links";

type NavCardsProps = {
  cards: NavCardData[];
  // "photo": five cards per row with a cropped 310x120 photo.
  // "icon": four cards per row with a small icon.
  variant: "photo" | "icon";
  // Cards per row from 768px. Defaults to 5 for photos and 4 for icons.
  columns?: 4 | 5;
  // When the cards end the secondary content the reference adds 10px below
  // them. A few pages have a hidden script after the cards, which removes
  // that gap; pass false to match those.
  endPadding?: boolean;
};

// Clickable cards that link to other pages. One column (310px max) below 768px.
export default function NavCards({ cards, variant, columns, endPadding = true }: NavCardsProps) {
  const perRow = columns ?? (variant === "photo" ? 5 : 4);
  return (
    <nav
      className={cx(styles.cardsNavigation, perRow === 5 ? styles.cardsFifths : styles.cardsFourths)}
      style={endPadding ? undefined : { paddingBottom: 0 }}
    >
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={cx(styles.cardWrapper, variant === "icon" && styles.cardIcon, styles.cardClickable)}
          >
            <span className={styles.cardImage}>
              <span className={styles.enhancedImage} style={{ width: card.image.width }}>
                <span className={styles.imageSpan} style={{ paddingTop: card.image.ratio }} />
                <Image src={card.image.src} alt={card.image.alt} width={card.image.width} height={card.image.height} />
              </span>
            </span>
            <span className={styles.cardContent}>
              <span className={styles.linkLike}>{card.label}</span>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
