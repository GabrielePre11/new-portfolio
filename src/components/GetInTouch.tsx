import Container from "@/layout/Container";
import React from "react";

export default function GetInTouch() {
  return (
    <section id="contact" aria-label="Get In Touch / Contact Me Section">
      <Container className="grid place-items-center border-x border-zinc-600 border-dashed py-10">
        {/*=============== Title ===============*/}
        <div className="flex items-center justify-center pb-12">
          <h2 className="text-4xl md:text-5xl font-caveat">Contattami</h2>
        </div>

        {/*=============== Form ===============*/}
        <form action="submit" className="grid grid-cols-1 gap-5 sm:min-w-lg">
          <input
            type="text"
            inputMode="text"
            name="agencyName"
            required
            pattern="^[A-Za-zÀ-ÿ\s]+$"
            placeholder="Nome dell'azienda"
            className="border border-input p-3 rounded-xl outline-0 sm:text-lg transition-all duration-200 focus:ring-2 focus:ring-foreground"
          />
          <input
            type="email"
            name="agencyEmail"
            required
            inputMode="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder="nomeazienda@email.com"
            className="border border-input p-3 rounded-xl sm:text-lg transition-all duration-200 focus:ring-2 focus:ring-foreground"
          />
          <textarea
            name="agencyMessage"
            inputMode="text"
            required
            minLength={10}
            maxLength={1000}
            placeholder="Il tuo messaggio..."
            className="border border-input p-3 min-h-[130px] rounded-xl sm:text-lg resize-none transition-all duration-200 focus:ring-2 focus:ring-foreground"
          />

          <button
            type="submit"
            className="inline-flex text-lg bg-background text-foreground py-2 px-3 w-max place-self-center rounded-xl transition-colors duration-200 hover:bg-background/80 border border-border"
          >
            Invia messaggio
          </button>
        </form>
      </Container>
    </section>
  );
}
