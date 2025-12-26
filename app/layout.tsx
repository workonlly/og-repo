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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ position: 'relative', minHeight: '100vh', overflow: 'auto' }}
      >
        {/* Background layers */}
        <Starfield />
        <DataRain />
        {/* Main content */}
        <div className="sticky top-0 z-50">
          <SciFiNavbar />
        </div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
