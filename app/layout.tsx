import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KGeeMediWorld — Your dependable medical supply partner",
  description:
    "KGeeMediWorld delivers the medical supplies healthcare businesses depend on — reliable, on-time delivery for hospitals, pharmacies, and clinics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="top" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
