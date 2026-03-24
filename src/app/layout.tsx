import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Full-stack developer crafting exceptional digital experiences.",
  openGraph: {
    title: "Your Name — Portfolio",
    description: "Full-stack developer crafting exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmMono.variable} ${dmSans.variable} noise`}
      >
        {children}
      </body>
    </html>
  );
}