import translate from "@/lib/translate";

const lang = "en";

export default function Translation({ translationKey }) {
  console.log("Key inside component:", translationKey);
  return <>{translate(translationKey, lang)}</>;
}
