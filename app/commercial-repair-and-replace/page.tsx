import { permanentRedirect } from "next/navigation";

// The commercial page lives at the same URL as on the reference site and in
// the header menu.
export default function CommercialRepairAndReplaceRedirect() {
  permanentRedirect("/auto-glass-services/other-services/commercial-repair-and-replace");
}
