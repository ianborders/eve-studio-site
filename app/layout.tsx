import type { Metadata } from "next";
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
  title,
  description,
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/shots/chat.png"],
  },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/brand/icon.png" },
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
