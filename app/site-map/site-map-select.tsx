"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

// Drop-down of every site map page with the current one selected. Picking a
// page replaces this one in the history, like the reference's location.replace.
// It keeps the browser's own look (Arial 13.33px, no border).
export default function SiteMapSelect({ current, children }: { current: string; children: ReactNode }) {
  const router = useRouter();
  return (
    <select
      defaultValue={current}
      onChange={(event) => router.replace(event.currentTarget.value)}
      aria-label="Site map pages"
      className="bg-white text-[13.3333px] leading-[normal] tracking-[normal] text-black [font-family:Arial]"
    >
      {children}
    </select>
  );
}
