import Container from "@/layout/Container";
import React, { useEffect, useState } from "react";

type SucceedProps = {
  state: {
    submitting: boolean;
    succeeded: boolean;
  };
};

export default function Suceed({ state }: SucceedProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);

      const timeout = setTimeout(() => {
        setShowModal(false);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  return (
    <Container>
      <p
        className={`absolute flex bg-ard transition-all duration-700 ease-in-out transform items-center place-self-center gap-2 rounded-full px-3 py-2 border border-zinc-500 w-max z-50 text-sm md:text-lg
        ${
          showModal
            ? "opacity-100 translate-y-2"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        id="succeed-msg"
      >
        <span>
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
            className="lucide lucide-badge-check-icon lucide-badge-check"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </span>
        Grazie per avermi contattato!
      </p>
    </Container>
  );
}
