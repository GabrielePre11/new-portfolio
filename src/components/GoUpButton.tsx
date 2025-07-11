"use client";
import React, { useEffect, useState } from "react";

export default function GoUpButton() {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      aria-label="Go Up"
      href="#header"
      className={`p-1 right-5 md:right-10 bottom-10 place-items-center bg-accent border border-border rounded-xl transition-colors duration-300 hover:bg-accent/70 shrink-0 z-50 ${
        hasScrolled ? "grid fixed " : "hidden"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up-icon lucide-arrow-up"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    </a>
  );
}
