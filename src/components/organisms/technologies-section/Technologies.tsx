"use client";

import React from "react";
import Container from "@/components/templates/container/Container";
import { StackList } from "@/data/stacklist";
import { useTranslations } from "next-intl";
import Title from "@/components/atoms/title/Title";
import TechCard from "@/components/molecules/tech-card/TechCard";

export default function Technologies() {
  const t = useTranslations("tecnologies_section");

  return (
    <section id="techs" aria-label="Technologies Section">
      <Container className="grid place-items-center gap-3 border-x border-zinc-600 border-dashed py-10">
        {/*=============== Title ===============*/}
        <Title title={t("title")} />

        {/*=============== Technologies ===============*/}
        <ul className="grid items-center grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 py-4">
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
