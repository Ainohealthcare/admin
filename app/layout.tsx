import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Layout } from "@/ui/Layout";

const pretendard = localFont({
  src: "./woff2/PretendardVariable.woff2",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "관리자 페이지",
  description: "관리자 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
