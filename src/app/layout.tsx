import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Chornomortsi",
  description: "Homepage for Plast Chornomortsi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={font.className}>{children}</body>
    </html>
  );
}
