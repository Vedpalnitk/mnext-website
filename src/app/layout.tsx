import type { Metadata } from "next";
import { Comfortaa, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mnext Consulting Services — Engineering What's Next",
  description:
    "Mnext Consulting Services builds intelligent digital platforms across wealth management, travel & tourism, and media — powered by autonomous AI agents.",
  keywords: [
    "technology consulting",
    "AI agents",
    "wealth management",
    "fintech",
    "travel technology",
    "media analytics",
    "digital platforms",
  ],
  openGraph: {
    title: "Mnext Consulting Services",
    description:
      "Engineering the next wave of intelligent digital platforms.",
    url: "https://mnext.co.in",
    siteName: "Mnext",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${comfortaa.variable} ${dmSans.variable} ${spaceMono.variable} antialiased bg-noise`}
      >
        {children}
      </body>
    </html>
  );
}
