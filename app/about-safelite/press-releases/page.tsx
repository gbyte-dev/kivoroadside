import type { Metadata } from "next";
import PressReleasesPage from "./press-releases-page";

export const metadata: Metadata = {
  title: "Press Releases | Safelite",
  description:
    "Safelite AutoGlass keeps the public informed about our latest technologies, achievements, store openings, and more through our press releases. See more.",
};

export default function Page() {
  return <PressReleasesPage page={1} />;
}
