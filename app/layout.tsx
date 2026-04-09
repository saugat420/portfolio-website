import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Meta Ads Expert in Nepal | Get More Customers",
  description:
    "Meta Ads expert in Nepal helping businesses generate consistent customers with a proven customer acquisition system.",
  icons: {
    icon: "/Meta flow logo - Copy.png",
    shortcut: "/Meta flow logo - Copy.png",
    apple: "/Meta flow logo - Copy.png"
  },
  keywords: [
    "Meta Ads Expert Nepal",
    "Facebook Ads Nepal",
    "Lead Generation Nepal",
    "Meta Ads Strategy"
  ],
  openGraph: {
    title: "Meta Ads Expert in Nepal | Get More Customers",
    description:
      "Build a customer acquisition system that brings you consistent customers in 30 days.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Expert in Nepal | Get More Customers",
    description:
      "Build a customer acquisition system that brings you consistent customers in 30 days."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-[family-name:var(--font-manrope)]">{children}</body>
    </html>
  );
}
