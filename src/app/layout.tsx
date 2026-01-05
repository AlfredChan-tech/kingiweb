import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "建志建築工程有限公司 | 澳門一站式裝修設計與工程服務",
  description: "澳門土地工務局註冊建築商 (7227/2025)。提供全屋裝修、商業店舖施工、牌照申請及入則一站式服務。專業團隊，品質保證，立即預約諮詢。",
  keywords: ["澳門裝修", "室內設計", "建築工程", "政府註冊建築商", "店舖裝修", "入則申請", "建志建築", "Kingi Construction"],
  openGraph: {
    title: "建志建築工程有限公司 | 澳門專業建築裝修",
    description: "澳門土地工務局註冊建築商，提供設計、裝修、入則一條龍服務。",
    url: "https://kingiweb.vercel.app",
    siteName: "建志建築工程",
    locale: "zh_HK",
    type: "website",
  },
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
      >
        {children}
      </body>
    </html>
  );
}
