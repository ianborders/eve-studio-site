import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const title = "Eve Studio — the control center for Eve agents";
const description =
  "A native desktop app to run, chat with, build, wire up, and deploy every Eve agent on your Mac — no terminal, ever.";

export const metadata: Metadata = {
  metadataBase: new URL("https://evestudio.dev"),
  title,
  description,
  applicationName: "Eve Studio",
  keywords: [
    "Eve",
    "Eve agents",
    "AI agents",
    "agent framework",
    "Vercel",
    "desktop app",
    "macOS",
  ],
  authors: [{ name: "Kybernesis" }],
  alternates: { canonical: "/" },
  // app/icon.png, app/apple-icon.png, app/favicon.ico, and app/opengraph-image.png
  // are picked up automatically by Next's file conventions.
  openGraph: {
    title,
    description,
    url: "https://evestudio.dev",
    siteName: "Eve Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
