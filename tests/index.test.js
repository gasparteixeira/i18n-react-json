import Translate from "../index";
import locales from "./locales";

test("should return translations undefined", () => {
  const t = new Translate();
  expect(t.translations).toBe(undefined);
});

test("should return an undefined language", () => {
  const t = new Translate(locales);
  expect(t.language).toBe(undefined);
});

test("should return the same value when isn't defined a language", () => {
  const t = new Translate(locales);
  expect(t.__("Same value")).toBe("Same value");
});

test("should return the language setted", () => {
  const t = new Translate(locales);
  t.setLocale("pt");
  expect(t.language).toBe("pt");
});

test("should return a translated value for Portuguese", () => {
  const t = new Translate(locales);
  t.setLocale("pt");
  expect(t.__("Hello")).toBe("Olá");
});

test("should return a translated value for French", () => {
  const t = new Translate(locales);
  t.setLocale("fr");
  expect(t.__("Hello")).toBe("Bonjour");
});

test("should return a translated value for Spanish", () => {
  const t = new Translate(locales);
  t.setLocale("es");
  expect(t.__("Hello")).toBe("Hola");
});

test("should return the same value when  it isn't a key", () => {
  const t = new Translate(locales);
  t.setLocale("pt");
  expect(t.__("Hi")).toBe("Hi");
});

test("should return the same value when language doesn't exist", () => {
  const t = new Translate(locales);
  t.setLocale("en");
  expect(t.__("Hello")).toBe("Hello");
});
