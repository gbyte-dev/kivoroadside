import type { CSSProperties, ReactNode } from "react";
import styles from "./services.module.css";
import { cx } from "./class-names";

type ContentBlockProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

// The reference's ".content-block": 510px wide on mobile, 750px from 768px,
// with its padding adjusted by the container it sits in.
export default function ContentBlock({ children, className, style }: ContentBlockProps) {
  return (
    <div className={cx(styles.contentBlock, className)} style={style}>
      {children}
    </div>
  );
}
