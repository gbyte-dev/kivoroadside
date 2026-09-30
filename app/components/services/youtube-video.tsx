import styles from "./services.module.css";

type YouTubeVideoProps = {
  videoId: string;
  title: string;
};

// 480px-wide YouTube player on a black box, same size as the reference embed.
export default function YouTubeVideo({ videoId, title }: YouTubeVideoProps) {
  return (
    <div className={styles.youtubeWidget} style={{ width: 480 }}>
      <span className={styles.videoSpan} style={{ paddingTop: "58.33%" }} />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allowFullScreen
      />
    </div>
  );
}
