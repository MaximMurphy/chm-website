"use client";

import Image from "next/image";
import Link from "next/link";
import Translation from "@/components/Translation";
import LanguageSelector from "@/components/LanguageSelector";
import NavDropdown from "@/components/NavDropdown";
import { useUser, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="navbar bg-blue-900/10 border-b-2 border-blue-950/30 z-50 top-0 sticky p-4 backdrop-blur-md">
      <div className="navbar-start">
        <details className="dropdown">
          <summary className="list-none">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 bg-white/90 text-black shadow bg-base-100 rounded-box w-fit text-lg"
          >
            <li>
              <Translation translationKey="header_about" />
              <ul className="p-2">
                <NavDropdown />
              </ul>
            </li>
            <li className="text-lg">
              <Link href="/mt" className="text-lg">
                Морський Табір
              </Link>
            </li>
            {isSignedIn ? (
              <li>
                <Link href="/pratsi" className="text-lg">
                  <Translation translationKey="pratsi" />
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </details>

        <Link href="/">
          <Image
            src="/chm_anchor.png"
            alt="ChM"
            height={100}
            width={75}
            quality={100}
            className="h-12 w-auto"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <details>
              <summary className="list-none">
                <Translation translationKey="header_about" />
              </summary>
              <ul className="p-2 bg-white/90 text-black">
                <NavDropdown />
              </ul>
            </details>
          </li>
          <li>
            <Link href="/mt" className="text-base">
              Морський Табір
            </Link>
          </li>

          {isSignedIn ? (
            <li>
              <Link href="/pratsi" className="text-base">
                <Translation translationKey="pratsi" />
              </Link>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end flex flex-row">
        <LanguageSelector />

        {isSignedIn ? (
          <div className="flex pl-4">
            <UserButton className="w-12 h-12" />
          </div>
        ) : (
          <Link href="/login" className="btn btn-ghost text-base">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
