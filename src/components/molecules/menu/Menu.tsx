"use client";
import React, { useEffect } from "react";
import { useTranslations } from "use-intl";
import { MenuProps } from "./menu.props";

export default function Menu({ setIsMenuOpen }: MenuProps) {
  const t = useTranslations("header_menu");

  const navLinks = [
    { name: t("education"), href: "#education" },
    { name: t("projects"), href: "#projects" },
  ];

  useEffect(() => {
    const closeMenuOnScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, [setIsMenuOpen]);

  return (
    <nav className="absolute top-10 -right-35" aria-label="Menu">
      <ul className="flex flex-col p-1.5 bg-accent gap-1.5 text-foreground rounded-xl border border-border">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="flex items-center truncate p-1.5 transition-colors duration-100 hover:bg-input rounded-lg"
          >
            <a href={`${link.href}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
