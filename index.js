import translations from "../../locales";
import _ from "lodash";
const __ = text => {
  const language = sessionStorage.getItem("language") || "";
  if (!language.length || _.isNil(translations[language])) return text;
  try {
    const translation = translations[language];
    return !_.isNil(translation[text]) ? translation[text] : text;
  } catch (err) {
    console.log(err);
    return "???";
  }
};
const setLocale = language => {
  sessionStorage.setItem("language", language);
};

export default { __, setLocale };
