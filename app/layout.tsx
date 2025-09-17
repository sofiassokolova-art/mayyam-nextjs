import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], weight: ["400","600"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Марьям — продюсер роста продаж",
  description: "Запуски, воронки, маркетинг и рост выручки под ключ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}