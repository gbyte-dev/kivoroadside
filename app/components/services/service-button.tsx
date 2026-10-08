import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import styles from "./services.module.css";
import { cx } from "./class-names";

type ServiceButtonProps = {
  href: string;
  children: ReactNode;
  // Center the button in its block
  center?: boolean;
  style?: CSSProperties;
  // Open in a new tab (for outside sites)
  newTab?: boolean;
  className?: string;
};

// The blue 56px button with 16px corners used across the service pages.
export default function ServiceButton({
  href,
  children,
  center = false,
  style,
  newTab = false,
  className,
}: ServiceButtonProps) {
  return (
    <Link
      className={cx(styles.btn, center && styles.btnCenter, className)}
      href={href}
      style={style}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
