"use client";
import React, { useEffect } from "react";

const navLinks = [
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
];

type MenuProps = {
  setIsMenuOpen: (value: boolean) => void;
};

export default function Menu({ setIsMenuOpen }: MenuProps) {
  useEffect(() => {
    const closeMenuOnScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, [setIsMenuOpen]);

  return (
    <nav className="absolute top-10">
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
