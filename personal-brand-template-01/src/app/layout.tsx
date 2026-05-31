import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Public_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SITE } from "@/lib/content";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-label-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Trainer · Speaker · Coach`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="manifesto"
      className={`${anton.variable} ${publicSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="page">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
