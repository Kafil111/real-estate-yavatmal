import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Real Estate Yavatmal",
    template: "%s | Real Estate Yavatmal",
  },

  description:
    "Buy verified agricultural land, residential plots and commercial properties in Yavatmal with complete legal assistance.",

  keywords: [
    "Real Estate Yavatmal",
    "Agricultural Land",
    "Farm Land",
    "Plots",
    "Residential Plot",
    "Commercial Property",
    "Yavatmal Property",
    "Land for Sale",
  ],

  authors: [{ name: "Real Estate Yavatmal" }],

  creator: "Real Estate Yavatmal",

  metadataBase: new URL("https://realestateyavatmal.com"),

  openGraph: {
    title: "Real Estate Yavatmal",
    description:
      "Verified agricultural, residential and commercial properties in Yavatmal.",
    type: "website",
    locale: "en_IN",
    siteName: "Real Estate Yavatmal",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        {children}
      </body>
    </html>
  );
}