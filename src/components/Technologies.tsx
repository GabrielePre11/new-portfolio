import React from "react";
import Container from "@/layout/Container";
import TechCard from "./TechCard";
import { StackList } from "@/data/stacklist";

export default function Technologies() {
  return (
    <section id="techs" aria-label="Technologies Section">
      <Container className="grid place-items-center gap-3 border-x border-zinc-600 border-dashed py-10">
        {/*=============== Title ===============*/}
        <h2 className="text-4xl md:text-5xl font-caveat text-center">
          Le tecnologie che uso
        </h2>

        {/*=============== Technologies ===============*/}
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 py-4">
          {StackList.map((tech) => (
            //=============== Tech Card ===============//
            <TechCard
              key={tech.name}
              techName={tech.name}
              techImage={tech.image}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
