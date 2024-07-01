import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@components/layout";
import Providers from "providers";

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
      <body>
        <Providers>
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
