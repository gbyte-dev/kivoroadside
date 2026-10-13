import localFont from "next/font/local";

// The funnel's own Urbanist files. Like safelite.com, each one is declared at
// weight 400, so text asking for a bolder weight on the semibold face gets the
// same synthetic bolding as the reference.
export const urbanistRegular = localFont({
  src: "./fonts/Urbanist-Regular.woff2",
  weight: "400",
  variable: "--font-fmg-regular",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const urbanistSemibold = localFont({
  src: "./fonts/Urbanist-SemiBold.woff2",
  weight: "400",
  variable: "--font-fmg-semibold",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const urbanistBold = localFont({
  src: "./fonts/Urbanist-Bold.woff2",
  weight: "400",
  variable: "--font-fmg-bold",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
