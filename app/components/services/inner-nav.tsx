import Link from "next/link";
import styles from "./services.module.css";

export type InnerNavTab = {
  label: string;
  href: string;
};

// The reference's ".general-nav.inner-nav": uppercase tabs between pages of
// one topic, over a gray line. The current tab is red with a blue bar under
// it; below 768px the other tabs wrap onto two lines when they run out of room.
export default function InnerNav({ tabs, current }: { tabs: InnerNavTab[]; current: string }) {
  return (
    <nav className={styles.innerNav}>
      <ul>
        {tabs.map((tab) => {
          const isCurrent = tab.href === current;
          return (
            <li key={tab.href} className={isCurrent ? styles.active : undefined}>
              <Link href={tab.href} aria-current={isCurrent ? "page" : undefined}>
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
