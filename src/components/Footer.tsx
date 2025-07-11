import Container from "@/layout/Container";
import React from "react";
import { networks } from "@/data/networks";

export default function Footer() {
  return (
    <footer className="left-0 bottom-0 w-full bg-ard px-4">
      <Container className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 items-center justify-between border-x border-dashed border-zinc-600 py-3.5">
        {/*=============== Title ===============*/}
        <a className="text-2xl font-dancing" href="#hero">
          Gabriele Prestano
        </a>

        {/*=============== Copyright ===============*/}
        <p className="inline-flex items-center md:text-[1.1rem] gap-2.5 text-muted-foreground">
          <span>© {new Date().getFullYear()}</span> Gabriele Prestano
        </p>

        {/*=============== Footer Networks ===============*/}
        <ul className="flex items-center gap-3">
          {networks.map((network) => (
            <li
              key={network.name}
              className="flex items-center gap-1.5 bg-accent py-1 px-3 text-foreground border border-border rounded-xl transition-colors duration-300 hover:bg-accent/60 cursor-pointer"
            >
              <span>{network.svg}</span>
              <a href={`${network.href}`} target="_blank">
                {network.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
