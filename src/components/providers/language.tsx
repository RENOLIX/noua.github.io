import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import {
  defaultLocale,
  languageOptions,
  siteContent,
  type Direction,
  type LanguageOption,
  type Locale,
  type SiteContent,
} from "@/lib/site-content";

const STORAGE_KEY = "nouaouria-locale";

type LanguageContextValue = {
  locale: Locale;
  direction: Direction;
  options: readonly LanguageOption[];
  content: SiteContent;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isSupportedLocale(value: string): value is Locale {
  return languageOptions.some((option) => option.value === value);
}

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (savedLocale && isSupportedLocale(savedLocale)) {
    return savedLocale;
  }

  const browserLocales = [navigator.language, ...(navigator.languages ?? [])];

  for (const candidate of browserLocales) {
    const normalized = candidate.toLowerCase().split("-")[0];
    if (isSupportedLocale(normalized)) {
      return normalized;
    }
  }

  return defaultLocale;
}

function setMetaTag(
  attribute: "name" | "property",
  selectorValue: string,
  content: string,
) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${selectorValue}"]`,
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, selectorValue);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(detectInitialLocale);

  const option = useMemo(
    () => languageOptions.find((item) => item.value === locale) ?? languageOptions[0],
    [locale],
  );
  const content = useMemo(() => siteContent[locale], [locale]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = option.dir;
    document.title = content.meta.title;

    setMetaTag("name", "description", content.meta.description);
    setMetaTag("property", "og:title", content.meta.title);
    setMetaTag("property", "og:description", content.meta.description);
    setMetaTag("property", "og:locale", content.meta.ogLocale);
    setMetaTag("name", "twitter:title", content.meta.title);
    setMetaTag("name", "twitter:description", content.meta.description);
  }, [content.meta.description, content.meta.ogLocale, content.meta.title, locale, option.dir]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      direction: option.dir,
      options: languageOptions,
      content,
      setLocale,
    }),
    [content, locale, option.dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}

export function useSiteContent() {
  return useLanguage().content;
}
