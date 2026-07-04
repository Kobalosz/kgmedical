import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
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
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="top" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        {/* Spacer so the fixed mobile CTA bar never covers footer content. */}
        <div aria-hidden="true" className="h-16 md:hidden" />
        <MobileCtaBar />
      </body>
    </html>
  );
}
