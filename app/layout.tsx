import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteContent } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = `${siteContent.name} — ${siteContent.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${siteContent.name}`,
  },
  description: siteContent.description,
  applicationName: siteContent.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteContent.name,
    title,
    description: siteContent.description,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteContent.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
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
