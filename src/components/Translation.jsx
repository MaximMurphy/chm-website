import translate from "@/lib/translate";
import { useContext, useEffect } from "react";
import { LangContext } from "../app/Providers.jsx";

export default function Translation({ translationKey }) {
  const lang = useContext(LangContext);

  return <>{translate(translationKey, lang.lang)}</>;
}
