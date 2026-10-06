import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import { cx } from "./class-names";

export type IconTitleCard = {
  href: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    // Height as a percentage of width, written exactly like the reference
    ratio: string;
    alt: string;
  };
};

// Clickable icon cards with a title and a "Learn more" link, three per row
// from 768px and one 310px card per row below that. The shared card styles
// set the margins without layers, so the row layout needs Tailwind's "!".
export default function IconTitleCards({ cards }: { cards: IconTitleCard[] }) {
  return (
    <nav className={styles.cardsNavigation}>
      <div className={cx(styles.cardContainer, "md:flex md:flex-wrap md:items-stretch md:justify-between")}>
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={cx(
              styles.cardWrapper,
              styles.cardIcon,
              styles.cardClickable,
              "md:mb-[30px]! md:ml-[30px]! md:mr-0! md:w-[calc(33.3333333333%-20px)] md:max-w-none! md:[&:nth-child(3n+1)]:ml-0!",
            )}
          >
            <span className={styles.cardImage}>
              <span className={styles.enhancedImage} style={{ width: card.image.width }}>
                <span className={styles.imageSpan} style={{ paddingTop: card.image.ratio }} />
                <Image src={card.image.src} alt={card.image.alt} width={card.image.width} height={card.image.height} />
              </span>
            </span>
            <span className={styles.cardContent}>
              <span className="mx-auto mb-[10px] mt-[5px] block font-medium text-black">{card.title}</span>
              <span className={styles.linkLike}>Learn more</span>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
