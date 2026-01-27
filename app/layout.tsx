import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Starfield from "./starfield";
import DataRain from "./datarain";
import SciFiNavbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "my personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-full overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-full overflow-x-hidden`}
      >
        {/* Background layers */}
        <div className="fixed inset-0 z-0">
          <Starfield />
          <DataRain />
        </div>
        {/* Main content */}
        <div className="relative z-10">
          <div className="fixed top-0 left-0 right-0 z-50 w-full max-w-full bg-white">
            <SciFiNavbar  />
          </div>
          <div className="w-full max-w-full pt-14">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
