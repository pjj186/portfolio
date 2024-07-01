import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lenny's Portfolio",
  description: "개발자 박종재(Lenny)의 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <NextUIProvider>
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
