"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Translation from "./Translation";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center px-8 py-20 lg:px-80 lg:py-24 gap-8 bg-blue-900">
      <Image
        src="/chm_logo.png"
        alt="ChM Logo"
        height={500}
        width={500}
        quality={90}
        className="h-24 lg:h-48 w-auto"
      />
      <div className="flex flex-col gap-6 text-sm lg:text-base">
        <span className="font-bold">
          <Translation translationKey="footer_title" /> - 25-ий Курінь
        </span>
        <p>Copyright © 2024 - All right reserved</p>

        <nav className="flex flex-row items-center justify-between px-16">
          <Link
            href="https://www.instagram.com/chm_usa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:instagram" height="48" />
          </Link>
          <Link
            href="https://www.youtube.com/@STPChornomortsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:youtube" height="48" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
