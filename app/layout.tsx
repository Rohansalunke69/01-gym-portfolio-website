import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymGandu — Elite Personal Training",
  description:
    "Transform your body with elite personal training. In-person and online coaching with certified trainers. Book your free consultation today.",
  keywords: [
    "personal trainer",
    "gym",
    "fitness",
    "online coaching",
    "strength training",
    "body transformation",
  ],
  openGraph: {
    title: "GymGandu — Elite Personal Training",
    description:
      "Transform your body with elite personal training. Book your free consultation today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${barlow.variable} ${inter.variable} antialiased bg-background text-light`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
