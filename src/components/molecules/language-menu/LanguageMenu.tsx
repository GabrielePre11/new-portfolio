"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Languages } from "@/components/providers/LanguageProvider";
import React, { useEffect } from "react";
import { LanguageMenuProps } from "./language-menu.props";

export default function LanguageMenu({
  setIsLanguageMenuOpen,
}: LanguageMenuProps) {
  const { locale, setLocale } = useLanguage();

  const localeLanguages: { name: string; href: Languages }[] = [
    { name: "Italiano", href: "it" },
    { name: "English", href: "en" },
    { name: "Español", href: "es" },
  ];

  useEffect(() => {
    const closeMenuOnScroll = () => {
      setIsLanguageMenuOpen(false);
    };

    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, [setIsLanguageMenuOpen]);

  return (
    <nav className="absolute top-10" aria-label="Language Menu">
      <ul className="flex flex-col px-4 py-2 bg-accent gap-1.5 text-foreground rounded-xl border border-border">
        {localeLanguages.map((language) => (
          <li
            key={language.name}
            className="flex items-center truncate p-1.5 transition-colors duration-100 hover:bg-input rounded-lg"
          >
            <button
              onClick={() => {
                setLocale(language.href);
                setIsLanguageMenuOpen(false);
              }}
              disabled={locale === language.href}
            >
              {language.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
