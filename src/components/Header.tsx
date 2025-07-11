"use client";

import Container from "@/layout/Container";
import React, { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header
      className="top-0 left-0 w-full bg-ard z-10 border-b border-dashed border-zinc-600 px-4"
      id="header"
    >
      <Container className="flex items-center justify-between py-3.5 border-x border-zinc-600 border-dashed">
        {/*=============== Title ===============*/}
        <a className="text-3xl font-dancing" href="/">
          GP
        </a>

        {/*=============== Buttons ===============*/}
        <div className="flex items-center gap-2">
          {/*=============== CV Button ===============*/}
          <a
            href="/GabrielePrestanoCV.pdf"
            download
            className="flex items-center gap-1.5 bg-accent py-1 px-3 text-foreground border border-border rounded-xl transition-colors duration-300 hover:bg-accent/60 cursor-pointer"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-download-icon lucide-download"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </span>
            CV
          </a>

          {/*=============== Menu Icon ===============*/}
          <button
            className={`relative grid place-items-center p-1.5 rounded-xl transition-colors duration-200 hover:bg-border ${
              isMenuOpen ? "bg-border" : "bg-transparent"
            }`}
            aria-label="Menu Icon"
            aria-live="polite"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-justify-icon lucide-align-justify"
              >
                <path d="M3 12h18" />
                <path d="M3 18h18" />
                <path d="M3 6h18" />
              </svg>
            )}
          </button>

          {/*=============== Menu Component ===============*/}
          <div className="absolute">
            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
          </div>
        </div>
      </Container>
    </header>
  );
}
