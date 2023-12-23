import { Icon } from "@iconify/react";
import { useContext } from "react";
import { LangContext } from "../app/page.jsx";

export default function LanguageSelector() {
  const { lang, setLang } = useContext(LangContext);

  const handleSelect = (selectedLang) => {
    // Update the context value with the selected language
    //console.log(selectedLang);
    setLang(selectedLang);
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="">
        <Icon icon="clarity:language-line" height="36" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-white/90 z-[1] menu p-2 shadow rounded-box w-fit"
      >
        <li>
          <button onClick={() => handleSelect("us")}>
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
    </div>
  );
}
