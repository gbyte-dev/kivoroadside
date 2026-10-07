import type { Metadata } from "next";
import ResourceCenterPage from "./resource-center-page";

export const metadata: Metadata = {
  title: "Resource Center",
  description:
    "At Safelite, we want our customers to be informed. Browse our resource center for more information on auto expertise, culture, current events, and safety.",
};

export default function Page() {
  return <ResourceCenterPage page={1} />;
}
