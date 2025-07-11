import Container from "@/layout/Container";
import React from "react";

import EducationCard from "./EducationCard";
import { educationArticles } from "@/data/education";

export default function Education() {
  return (
    <section id="education" aria-label="Education Section">
      <Container className="border-x border-zinc-600 border-dashed py-10">
        {/*=============== Title ===============*/}
        <div className="flex items-center justify-center pb-12">
          <h2 className="text-4xl md:text-5xl font-caveat text-center">
            Educazione e Formazione
          </h2>
        </div>

        {/*=============== Education ===============*/}
        <ul className="grid grid-cols-1 gap-10">
          {/*=============== Education Card ===============*/}
          {educationArticles.map((education) => (
            <EducationCard
              key={education.name}
              edcName={education.name}
              edcImage={education.src}
              edcYear={education.year}
              edcSubtitle={education.subtitle}
              edcTopics={education.topics}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
