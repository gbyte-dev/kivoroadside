import Image from "next/image";
import styles from "./services.module.css";

type ContentImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  // Height as a percentage of width, written exactly like the reference
  ratio?: string;
};

// A 480x280 photo that scales down with its column (max-width 100%).
export default function ContentImage({ src, alt, width = 480, height = 280, ratio = "58.33333%" }: ContentImageProps) {
  return (
    <span className={styles.enhancedImage} style={{ width }}>
      <span className={styles.imageSpan} style={{ paddingTop: ratio }} />
      <Image src={src} alt={alt} width={width} height={height} />
    </span>
  );
}
