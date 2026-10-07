import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PressReleasesPage, { PRESS_PAGE_COUNT } from "../press-releases-page";

export const metadata: Metadata = {
  title: "Press Releases | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

// Only the numbered list pages exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: PRESS_PAGE_COUNT }, (_, index) => ({ page: String(index + 1) }));
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const number = Number(page);
  if (!Number.isInteger(number) || number < 1 || number > PRESS_PAGE_COUNT) notFound();
  return <PressReleasesPage page={number} numbered />;
}
