export type NavCardData = {
  href: string;
  label: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    // Height as a percentage of width, written exactly like the reference
    ratio: string;
  };
};

const photo = (src: string, alt: string) => ({ src, alt, width: 310, height: 120, ratio: "38.70967%" });

// Photo cards used by "Additional Safelite services" (the current page is left out)
export const SERVICE_CARDS: NavCardData[] = [
  {
    href: "/windshield-repair",
    label: "Windshield repair",
    image: photo("/image/services/navigation/windshield-repair.jpg", "A Safelite technician wearing gloves repairing a windshield"),
  },
  {
    href: "/windshield-replacement",
    label: "Windshield replacement",
    image: photo("/image/services/navigation/windshield-replacement.jpg", "A Safelite technician wearing gloves replacing a windshield"),
  },
  {
    href: "/rear-windshield-replacement",
    label: "Back glass replacement",
    image: photo(
      "/image/services/navigation/back-glass-replacement.jpg",
      "A Safelite technician wearing gloves replacing a vehicle's rear window",
    ),
  },
  {
    href: "/side-window-replacement",
    label: "Side window replacement",
    image: photo(
      "/image/services/navigation/side-window-replacement.jpg",
      "A Safelite technician wearing gloves replacing a vehicle's side window",
    ),
  },
  {
    href: "/power-window-repair",
    label: "Power window repair",
    image: photo(
      "/image/services/navigation/power-window-repair.jpg",
      "A Safelite technician wearing gloves replacing a vehicle's power windows",
    ),
  },
  {
    href: "/windshield-camera-recalibration",
    label: "Safety systems recalibration",
    image: photo(
      "/image/services/navigation/safety-systems-recalibration.jpg",
      "A Safelite technician wearing gloves recalibrating a vehicle's ADAS system",
    ),
  },
];

// Icon cards used under "Why choose Safelite?"
export const WHY_SAFELITE_CARDS: NavCardData[] = [
  {
    href: "/auto-glass-services/safelite-reviews",
    label: "Customer reviews",
    image: { src: "/image/services/icons/star-rating.png", alt: "", width: 69, height: 67, ratio: "97.10145%" },
  },
  {
    href: "/national-lifetime-warranty",
    label: "Nationwide warranty",
    image: { src: "/image/services/icons/shield.png", alt: "", width: 55, height: 66, ratio: "120%" },
  },
  {
    href: "/the-safelite-advantage",
    label: "Safelite Advantage",
    image: { src: "/image/services/icons/advantage.png", alt: "", width: 69, height: 57, ratio: "82.6087%" },
  },
  {
    href: "/why-choose-safelite/glass-recycling",
    label: "Glass recycling",
    image: { src: "/image/services/icons/glass-recycling.png", alt: "", width: 69, height: 55, ratio: "79.71014%" },
  },
];
