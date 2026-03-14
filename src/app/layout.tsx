import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Read Master | 읽고, 이해하고, 미래를 만드는 힘",
  description: "부천 옥길동 2026년 7월 20일 개원. 영어·국어 리터러시, 수능·내신, AI 시대 디지털 리터러시를 하나로 잇는 프리미엄 문해력 아카데미.",
  keywords: ["부천", "옥길동", "영어학원", "국어학원", "리터러시", "독서", "수능", "Read Master"],
  openGraph: {
    title: "Read Master Academy",
    description: "읽는 힘이 모든 학습의 시작입니다. 부천 옥길동 프리미엄 문해력 아카데미.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
