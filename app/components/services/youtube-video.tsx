import styles from "./services.module.css";

type YouTubeVideoProps = {
  videoId: string;
  title: string;
  // Player width in px (shrinks to fit narrow screens)
  width?: number;
  // Height as a percentage of width, written exactly like the reference
  ratio?: string;
  // 16px rounded corners
  rounded?: boolean;
};

// YouTube player on a black box, sized like the reference embeds.
export default function YouTubeVideo({ videoId, title, width = 480, ratio = "58.33%", rounded = false }: YouTubeVideoProps) {
  return (
    <div
      className={styles.youtubeWidget}
      style={rounded ? { width, borderRadius: 16, overflow: "hidden" } : { width }}
    >
      <span className={styles.videoSpan} style={{ paddingTop: ratio }} />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allowFullScreen
      />
    </div>
  );
}
