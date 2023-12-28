"use client";
import { createContext, useState } from "react";

export const LangContext = createContext("en");

export default function Providers({ children }) {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}{" "}
    </LangContext.Provider>
  );
}
