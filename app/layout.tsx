import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOLT Athletic Club — Train at Full Charge",
  description:
    "VOLT Athletic Club is a strength & conditioning gym built for people who train like it matters. Coached programs, open floor hours, and a members' community that pushes output every session.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${jbmono.variable}`}>
      <body className="font-body bg-ink text-bone noise antialiased">
        {children}
      </body>
    </html>
  );
}
