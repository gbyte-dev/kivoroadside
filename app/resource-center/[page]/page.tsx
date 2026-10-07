import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceCenterPage, { RESOURCE_PAGE_COUNT } from "../resource-center-page";

export const metadata: Metadata = {
  title: "Resource Center",
  description:
    "At Safelite, we want our customers to be informed. Browse our resource center for more information on auto expertise, culture, current events, and safety.",
};

// Only the numbered list pages exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: RESOURCE_PAGE_COUNT }, (_, index) => ({ page: String(index + 1) }));
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const number = Number(page);
  if (!Number.isInteger(number) || number < 1 || number > RESOURCE_PAGE_COUNT) notFound();
  return <ResourceCenterPage page={number} numbered />;
}
