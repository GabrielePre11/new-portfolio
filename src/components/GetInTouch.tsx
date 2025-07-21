"use client";

import Container from "@/layout/Container";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Suceed from "./Suceed";

export default function GetInTouch() {
  const [state, handleSubmit] = useForm("mjkogddr");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" aria-label="Get In Touch / Contact Me Section">
      <Container className="grid place-items-center border-x border-zinc-600 border-dashed py-10 overflow-hidden">
        {/*=============== Title ===============*/}
        <div className="flex items-center justify-center pb-12">
          <h2 className="text-4xl md:text-5xl font-caveat">Contattami</h2>
        </div>

        {/*=============== Form ===============*/}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 sm:min-w-lg"
        >
          {/*=============== Name Field ===============*/}
          <input
            type="text"
            inputMode="text"
            name="agencyName"
            required
            pattern="^[A-Za-zÀ-ÿ\s]+$"
            placeholder="Nome dell'azienda"
            className="border border-input p-3 rounded-xl outline-0 sm:text-lg transition-all duration-200 focus:ring-2 focus:ring-foreground"
          />

          {/*=============== Email Field ===============*/}
          <input
            type="email"
            name="email"
            required
            inputMode="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder="nomeazienda@email.com"
            className="border border-input p-3 rounded-xl sm:text-lg transition-all duration-200 focus:ring-2 focus:ring-foreground"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/*=============== Message / Textarea Field ===============*/}
          <textarea
            name="message"
            inputMode="text"
            required
            minLength={10}
            maxLength={1000}
            placeholder="Il tuo messaggio..."
            className="border border-input p-3 min-h-[130px] rounded-xl sm:text-lg resize-none transition-all duration-200 focus:ring-2 focus:ring-foreground"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          {/*=============== Honeypot (Anti-bot) ===============*/}
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/*=============== Submit Button ===============*/}
          <button
            type="submit"
            className="inline-flex text-lg bg-background text-foreground py-2 px-3 w-max place-self-center rounded-xl transition-colors duration-200 hover:bg-background/80 border border-border"
            disabled={state.submitting}
          >
            {state.submitting ? (
              <p className="flex items-center gap-2">
                Invio...
                <span>
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
                    className="lucide lucide-loader-circle-icon lucide-loader-circle animate-spin"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                </span>
              </p>
            ) : (
              "Invia messaggio"
            )}
          </button>

          {/*=============== Succeed Message ===============*/}
          <Suceed state={state} />
        </form>
      </Container>
    </section>
  );
}
