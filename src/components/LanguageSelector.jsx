import { Icon } from "@iconify/react";
import { useContext } from "react";
import { LangContext } from "../app/(general)/Providers.jsx";

export default function LanguageSelector() {
  const { lang, setLang } = useContext(LangContext);

  if (typeof window !== "undefined") {
    const details = document.getElementById("details");
  }

  const handleSelect = (selectedLang) => {
    // Update the context value with the selected language
    details.removeAttribute("open");
    setLang(selectedLang);
  };

  return (
    <details id="details" className="dropdown dropdown-bottom dropdown-end">
      <summary className="list-none">
        <div tabIndex={0} role="button" className="">
          {lang === "en" ? (
            <Icon icon="twemoji:flag-united-states" height="32" />
          ) : (
            <Icon icon="twemoji:flag-ukraine" height="32" />
          )}
        </div>
      </summary>
      <ul
        tabIndex={0}
        className="dropdown-content bg-white/90 z-[1] menu p-2 shadow rounded-box w-fit"
      >
        <li>
          <button onClick={() => handleSelect("en")}>
            <Icon icon="circle-flags:us" height="24" />

            <p className="text-black">English</p>
          </button>
        </li>
        <li>
          <button onClick={() => handleSelect("ua")}>
            <Icon icon="circle-flags:ua" height="24" />

            <p className="text-black">Українська</p>
          </button>
        </li>
      </ul>
    </details>
  );
}
