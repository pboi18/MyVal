import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type React from "react";
import { Analytics } from "@vercel/analytics/next";

const inter = localFont({
  src: "../public/fonts/Inter-Regular.woff2",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Will You Be My Val?",
  description: "A whimsical journey of love and laughter!",
  icons: {
    icon: [{ url: "/love-emoji.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-pink-100 min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
