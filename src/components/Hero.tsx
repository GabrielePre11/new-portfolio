import Image from "next/image";
import React from "react";

import Gabriele from "@/assets/GP-Photo.png";
import Container from "@/layout/Container";
import { networks } from "@/data/networks";

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero Section">
      <Container className="grid grid-cols-1 gap-5 border-x border-zinc-600 border-dashed py-10">
        <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-8 -z-10">
          {/*=============== Picture ===============*/}
          <figure className="relative overflow-hidden">
            <Image
              src={Gabriele}
              width={500}
              alt="Gabriele's Pic"
              loading="lazy"
              className="rounded-full border border-border size-36 md:size-40 lg:size-44 shrink-0"
            ></Image>
          </figure>

          {/*=============== Info ===============*/}
          <div className="flex flex-col items-center sm:items-start gap-2">
            {/*=============== Dot ===============*/}
            <span className="inline-flex items-center text-[0.930rem] gap-2 bg-accent py-1 px-3 text-foreground border border-border rounded-xl transition-colors duration-300 hover:bg-accent/60">
              <div
                id="info-dot"
                className="size-2.5 bg-green-500 rounded-full"
              ></div>
              Aperto a nuove oppurtunità
            </span>

            {/*=============== Firstname & Lastname ===============*/}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-caveat">
              Gabriele Prestano
            </h2>

            {/*=============== Role ===============*/}
            <h3 className="text-lg sm:text-xl md:text-2xl">
              Junior Front End Developer
            </h3>
          </div>
        </div>

        {/*=============== What do I do? ===============*/}
        <p className="text-sm sm:text-[1rem] text-muted-foreground max-w-3xl pt-5">
          Sono uno sviluppatore front-end junior autodidatta di 21 anni a cui
          piace creare interfacce utente pulite e moderne. Lavoro principalmente
          con React, TypeScript e TailwindCSS e ho una conoscenza di base di
          Angular.
        </p>

        {/*=============== Buttons ===============*/}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-0 pb-3 sm:pb-0 sm:justify-between">
          {/*=============== Networks ===============*/}
          <ul className="flex items-center gap-3">
            {networks.map((network) => (
              <li key={network.name}>
                <a
                  href={`${network.href}`}
                  target="_blank"
                  className="flex items-center gap-1.5 bg-accent py-1 px-3 text-foreground border border-border rounded-xl transition-colors duration-300 hover:bg-accent/60 cursor-pointer"
                >
                  <span>{network.svg}</span>
                  {network.name}
                </a>
              </li>
            ))}
          </ul>

          {/*=============== Contact Button ===============*/}
          <a
            href="#contact"
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
                className="lucide lucide-send-icon lucide-send"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </span>
            Contattami
          </a>
        </div>
      </Container>
    </section>
  );
}
