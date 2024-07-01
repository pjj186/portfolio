import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
      <body className='dark text-foreground bg-background'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
