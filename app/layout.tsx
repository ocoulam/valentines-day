import type { Metadata } from "next";
import { Allura, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

export const metadata: Metadata = {
  title: "Valentine's Day Card",
  description: "Click the link to see a heartful message from your secret valentine...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${allura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
