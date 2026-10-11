import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বাজার দর | BazarDor",
  description: "প্রয়োজনীয় পণ্যের বাজারদর এক নজরে",
};

export default function RootLayout({ children }: {children:React.ReactNode;}) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <Suspense fallback={<div className="h-12 bg-gray-50 animate-pulse" />}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div className="h-10 bg-gray-100 animate-pulse my-2" />}>
          <Marquee />
        </Suspense>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
