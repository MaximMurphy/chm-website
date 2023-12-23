import en_translations from "@/translations/en.json";
import ua_translations from "@/translations/ua.json";

function getTranslations(lang) {
  if (lang == "ua") {
    return ua_translations;
  }
  // Default to English if the language is not specified or not supported
  return en_translations;
}

export default function translate(translationKey, lang) {
  try {
    const translations = getTranslations(lang);

    if (translations[translationKey]) {
      return translations[translationKey];
    } else {
      throw `Key not found: ${translationKey}`;
    }
  } catch (error) {
    throw `Unable to get translation content for key: ${translationKey}`;
  }
}
