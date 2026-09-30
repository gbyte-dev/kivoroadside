import { permanentRedirect } from "next/navigation";

// The back glass page lives at /rear-windshield-replacement, the same URL the
// reference site and the header menu use.
export default function BackGlassReplacementPage() {
  permanentRedirect("/rear-windshield-replacement");
}
