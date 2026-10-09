import type { ReactNode } from "react";
import Image from "next/image";

type Hero5050Props = {
  title: ReactNode;
  // Paragraphs under the title (styled by the page)
  children: ReactNode;
  image: { src: string; alt: string };
};

// The reference's "hero-5050": a 32px title and copy on the left and a photo
// filling the right half from 992px. Below 992px the photo spans the full
// screen width under the copy at a 16:9 ratio.
export default function Hero5050({ title, children, image }: Hero5050Props) {
  return (
    <section className="mx-auto grid max-w-[1020px] grid-rows-[auto] px-4 min-[992px]:grid-cols-2">
      <div className="flex flex-col py-4 min-[992px]:pb-4 min-[992px]:pl-0 min-[992px]:pr-10 min-[992px]:pt-8">
        <h2 className="mx-0! mb-4! mt-4! max-w-fit! p-0! text-left! text-[32px]! font-bold! leading-[44px]! text-black min-[992px]:mt-8!">
          {title}
        </h2>
        {children}
      </div>
      <div className="relative mx-[-16px] flex w-[calc(100%+32px)] items-center justify-center pt-[56.25%] min-[992px]:m-0 min-[992px]:w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 992px) 494px, 100vw"
          preload
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
