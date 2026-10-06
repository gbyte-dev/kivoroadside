import Image from "next/image";
import { AI_CHAT_URL } from "@/app/components/services/ai-chat-button";

// "Got a question? Let's chat!" hero: copy and the chat screenshot side by
// side from 992px. Below that the screenshot spans the full width under the copy.
export default function ChatHero() {
  return (
    // .hero-5050
    <section className="mx-auto mb-8 grid max-w-[1020px] grid-rows-[auto] px-4 min-[992px]:grid-cols-2">
      {/* .hero-copy */}
      <div className="flex flex-col py-4 min-[992px]:pb-4 min-[992px]:pl-0 min-[992px]:pr-10 min-[992px]:pt-8">
        <h2 className="mx-0! mb-4! mt-8! max-w-fit! p-0! text-left! text-[32px]! font-bold! leading-[44px]! text-black">
          Got a question? Let&apos;s chat!
        </h2>
        <p className="mb-4 p-0! text-xl font-normal leading-[32px]">
          Our AI agent is always here to help get your questions answered fast.
        </p>
        <a
          href={AI_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[56px] w-fit min-w-[177px] cursor-pointer items-center justify-center rounded-[16px] border border-[#db0020] bg-[#db0020] px-12 text-center text-base font-medium! leading-none text-white! no-underline! hover:bg-[#bf0f1d] focus:outline-0 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#ffa698] active:bg-[#db0020]"
        >
          <Image
            src="/image/services/icons/ai-chat.svg"
            alt="ai chat icon"
            width={24}
            height={24}
            unoptimized
            className="mr-2 h-6 w-6 max-w-full align-middle brightness-0 invert"
          />
          <span>Let&apos;s chat</span>
        </a>
      </div>

      {/* .hero-image */}
      <div className="relative mx-[-16px] flex w-[calc(100%+32px)] items-center justify-center min-[992px]:m-0 min-[992px]:h-auto min-[992px]:w-full">
        <a
          href={AI_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="min-[992px]:h-full min-[992px]:w-full min-[992px]:cursor-pointer"
        >
          <Image
            src="/image/help-center/ai-agent-chat.png"
            alt="Chat interface with example of someone interacting with our AI agent, Scarlett."
            width={510}
            height={328}
            preload
            className="inline h-auto max-w-full align-baseline min-[992px]:w-full"
          />
        </a>
      </div>
    </section>
  );
}
