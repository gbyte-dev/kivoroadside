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

// Icon cards used under "Why choose Safelite?". Each page shows four of them.
export const WHY_SAFELITE_LINKS = {
  reviews: {
    href: "/auto-glass-services/safelite-reviews",
    label: "Customer reviews",
    image: { src: "/image/services/icons/star-rating.png", alt: "", width: 69, height: 67, ratio: "97.10145%" },
  },
  warranty: {
    href: "/national-lifetime-warranty",
    label: "Nationwide warranty",
    image: { src: "/image/services/icons/shield.png", alt: "", width: 55, height: 66, ratio: "120%" },
  },
  mobileInShop: {
    href: "/mobile-auto-glass-repair",
    label: "Mobile and in-shop",
    image: { src: "/image/services/icons/mobile-in-shop.png", alt: "", width: 104, height: 48, ratio: "46.15385%" },
  },
  advantage: {
    href: "/the-safelite-advantage",
    label: "Safelite Advantage",
    image: { src: "/image/services/icons/advantage.png", alt: "", width: 69, height: 57, ratio: "82.6087%" },
  },
  recycling: {
    href: "/why-choose-safelite/glass-recycling",
    label: "Glass recycling",
    image: { src: "/image/services/icons/glass-recycling.png", alt: "", width: 69, height: 55, ratio: "79.71014%" },
  },
} satisfies Record<string, NavCardData>;

// Cards linking the "About Safelite" pages
export const ABOUT_SAFELITE_LINKS = {
  about: {
    href: "/about-safelite",
    label: "About Us",
    image: { src: "/image/services/icons/about-us.png", alt: "", width: 104, height: 48, ratio: "46.15385%" },
  },
  foundation: {
    href: "/about-safelite/safelite-autoglass-foundation",
    label: "Safelite Foundation",
    image: { src: "/image/services/icons/giving-back.png", alt: "", width: 67, height: 52, ratio: "77.61194%" },
  },
  pressReleases: {
    href: "/about-safelite/press-releases",
    label: "Press releases",
    image: { src: "/image/services/icons/press-releases.png", alt: "", width: 47, height: 56, ratio: "119.1489%" },
  },
  leaders: {
    href: "/about-safelite/our-leaders",
    label: "Our Leaders",
    image: { src: "/image/services/icons/our-leaders.png", alt: "", width: 65, height: 40, ratio: "61.53846%" },
  },
  partnerships: {
    href: "/about-safelite/safelite-partnerships",
    label: "Our Partnerships",
    image: { src: "/image/services/icons/partnerships.png", alt: "", width: 65, height: 42, ratio: "64.61539%" },
  },
  companies: {
    href: "/about-safelite/safelite-autoglass-companies",
    label: "Safelite Group Companies",
    image: { src: "/image/services/icons/companies.png", alt: "", width: 59, height: 48, ratio: "81.35593%" },
  },
} satisfies Record<string, NavCardData>;

// The set shown on the mobile service page
export const WHY_SAFELITE_CARDS: NavCardData[] = [
  WHY_SAFELITE_LINKS.reviews,
  WHY_SAFELITE_LINKS.warranty,
  WHY_SAFELITE_LINKS.advantage,
  WHY_SAFELITE_LINKS.recycling,
];

// Help center FAQ topics (the help center cards and "Additional FAQs")
export const HELP_CENTER_FAQ_LINKS = {
  damage: {
    href: "/help-center/glass-damage-and-service",
    label: "Glass damage and service",
    image: { src: "/image/help-center/autoglass.png", alt: "", width: 79, height: 48, ratio: "60.75949%" },
  },
  appointment: {
    href: "/help-center/preparing-for-your-appointment",
    label: "Preparing for your appointment",
    image: { src: "/image/help-center/wrench.png", alt: "", width: 65, height: 66, ratio: "101.5385%" },
  },
  cost: {
    href: "/help-center/cost",
    label: "Cost, payment, and billing",
    image: { src: "/image/help-center/pricetag.png", alt: "", width: 61, height: 62, ratio: "101.6393%" },
  },
  insurance: {
    href: "/help-center/insurance-coverage",
    label: "Insurance coverage and claims",
    image: { src: "/image/help-center/checklist.png", alt: "", width: 51, height: 66, ratio: "129.4118%" },
  },
  warranty: {
    href: "/help-center/warranty",
    label: "Warranty details",
    image: { src: "/image/help-center/shield.png", alt: "", width: 55, height: 66, ratio: "120%" },
  },
  privacy: {
    href: "/help-center/marketing-and-privacy",
    label: "Marketing and privacy",
    image: { src: "/image/help-center/lock.png", alt: "", width: 49, height: 58, ratio: "118.3673%" },
  },
} satisfies Record<string, NavCardData>;
