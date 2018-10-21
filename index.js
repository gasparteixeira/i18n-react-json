import _ from "lodash";

class Translate {
  constructor(translations) {
    this.translations = translations;
  }

  __(text) {
    if (_.isNil(this.language)) return text;
    if (_.isNil(this.translations[this.language])) return text;
    const translation = this.translations[this.language];
    return !_.isNil(translation[text]) ? translation[text] : text;
  }

  setLocale(language) {
    this.language = language;
  }
}

export default Translate;
