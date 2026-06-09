import type { Metadata } from "next";
import { Tajawal, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "StarFocus - Cinema Club",
  description: "A professional cinema club based in Bouira, exploring social awareness through the lens of film.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cinzel.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-tajawal">{children}</body>
    </html>
  );
}
