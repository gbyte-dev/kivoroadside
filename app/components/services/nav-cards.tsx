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
};

// Clickable cards that link to other pages. One column (310px max) below 768px.
export default function NavCards({ cards, variant }: NavCardsProps) {
  return (
    <nav className={cx(styles.cardsNavigation, variant === "photo" ? styles.cardsFifths : styles.cardsFourths)}>
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
