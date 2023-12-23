"use client";

import { Icon } from "@iconify/react";

const handleSelect = (lang) => {
  if (lang === "us") {
    console.log("USA");
  } else if (lang === "ua") {
    console.log("UKRAINE");
  } else {
    console.log("Error");
  }
};

export default function LanguageSelector() {
  return (
    <div className="flex flex-row gap-4">
      <button onClick={() => handleSelect("us")}>
        <Icon
          icon="circle-flags:us"
          height="24"
          className="opacity-50 hover:opacity-80 active:opacity-100"
        />
      </button>
      <button onClick={() => handleSelect("ua")}>
        <Icon
          icon="circle-flags:ua"
          height="24"
          className="opacity-50 hover:opacity-80 active:opacity-100"
        />
      </button>
    </div>
  );
}
