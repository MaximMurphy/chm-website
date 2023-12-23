"use client";

import { createContext, useState } from "react";
import Translation from "@/components/Translation";
import Header from "@/components/Header";
import Image from "next/image";

export const LangContext = createContext("ua");

export default function Home() {
  const [lang, setLang] = useState("ua");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="h-screen">
        <Header />
        <main className="h-fit w-full flex flex-col items-center gap-12 mb-24">
          <Image
            src="/background.jpg"
            alt="Photo of Sailboat"
            height={1496}
            width={2962}
            quality={100}
            className="object-fill"
          />
          <Image
            src="/chm_kermo.png"
            alt="ChM Kermo"
            height={1125}
            width={1125}
            quality={100}
            className="h-96 w-auto"
          />
          <h1 className="text-5xl">
            <Translation translationKey="home_greeting" />
          </h1>

          <p className="text-3xl mb-12">
            <Translation translationKey="home_title" />
          </p>
        </main>
      </div>
    </LangContext.Provider>
  );
}
