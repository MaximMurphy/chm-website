import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Footer from "@/components/Footer";

const font = Noto_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Chornomortsi",
  description: "Website for Plast Chornomortsi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={font.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
