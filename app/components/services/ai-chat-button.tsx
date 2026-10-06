import Image from "next/image";
import styles from "./services.module.css";

// Safelite's A.I. chat (Sierra)
export const AI_CHAT_URL = "https://sierra.chat/agent/OxY5TbsBlJZsHxIBlJZsmCiQdcXfa2rePO38ZwOlx40/chat";

// Floating red chat button in the bottom-right corner (48x48, 16px corners).
// It opens Safelite's A.I. chat in a new tab, like the reference link does
// when its chat script is not loaded.
export default function AiChatButton() {
  return (
    <a href={AI_CHAT_URL} target="_blank" rel="noopener noreferrer">
      <Image
        className={styles.floatingCta}
        src="/image/services/icons/ai-chat.svg"
        alt="Click for A.I. chat"
        width={48}
        height={48}
        unoptimized
      />
    </a>
  );
}
