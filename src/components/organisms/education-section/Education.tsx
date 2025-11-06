"use client";

import Container from "@/components/templates/container/Container";
import React from "react";

import { educationArticles } from "@/data/education";
import { useTranslations } from "next-intl";
import Title from "@/components/atoms/title/Title";
import EducationCard from "@/components/molecules/education-card/EducationCard";

export default function Education() {
  const t = useTranslations("education_section");
  const tCards = useTranslations("education_cards.cards");

  return (
    <section id="education" aria-label="Education Section">
      <Container className="border-x border-zinc-600 border-dashed py-10">
        {/*=============== Title ===============*/}
        <div className="flex items-center justify-center pb-12">
          <Title title={t("title")} />
        </div>

        {/*=============== Education ===============*/}
        <ul className="grid grid-cols-1 gap-10">
          {/*=============== Education Card ===============*/}
          {educationArticles.map((education) => (
            <EducationCard
              key={education.id}
              edcName={tCards(`${education.id}.name`)}
              edcImage={education.src}
              edcYear={education.year}
              edcSubtitle={tCards(`${education.id}.subtitle`)}
              edcTopics={tCards.raw(`${education.id}.topics`)}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
