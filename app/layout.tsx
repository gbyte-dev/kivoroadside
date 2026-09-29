import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Windshield Repair & Replacement | Safelite",
  description:
    "If you have a broken windshield you need a repair or replacement. Trust America's auto glass experts at Safelite®.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} antialiased`}>
      <body className="font-sans bg-white text-[#525656]">
        {children}
      </body>
    </html>
  );
}