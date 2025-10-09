"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState, createContext } from "react";

// Italian is the default language, the other ones are English and Spanish.
export type Languages = "it" | "en" | "es";

type LanguageContextType = {
  locale: Languages;
  setLocale: (locale: Languages) => void;
};

// Create the context for the language
export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // By default the language is Italian
  const [locale, setLocale] = useState<Languages>("it");

  // ⚠️ Messages type is any because I don't know how to define them;
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // Function to import the messages for the selected language, and
    // everytime the locale (the language) changes the function is called.
    async function loadMessages() {
      const loaded = await import(`../../../messages/${locale}.json`);
      setMessages(loaded.default);
    }
    loadMessages();
  }, [locale]);

  // If the messages are not loaded yet, return null.
  if (!messages) {
    return null;
  }

  return (
    // It allows every component under the LanguageProvider to access the locale and setLocale functions, but only the LanguageMenu Component can change the locale.
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {/* The messages are passed to the NextIntlClientProvider */}
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}
