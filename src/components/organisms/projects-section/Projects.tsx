"use client";

import Container from "@/components/templates/container/Container";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import type { Category } from "@/types/types";
import { useTranslations } from "next-intl";
import Title from "@/components/atoms/title/Title";
import ProjectCard from "@/components/molecules/project-card/ProjectCard";
import { categories } from "./projects.categories";

export default function Projects() {
  const t = useTranslations("projects_section");
  const tAll = useTranslations("projects_section.categories");
  const tList = useTranslations("projects_section.list");

  const [activeCategory, setActiveCategory] = useState<Category>("Tutti");

  return (
    <section
      className="border-b border-zinc-600 border-dashed px-4"
      id="projects"
      aria-label="Projects Section"
    >
      <Container className="border-x border-zinc-600 border-dashed py-10">
        <Title title={t("title")} />

        {/*=============== Filters ===============*/}
        <ul className="flex flex-wrap items-center gap-5 justify-center py-10">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                className={`inline-flex items-center gap-1.5 bg-accent py-1 px-3 text-foreground border-2 rounded-xl transition-colors duration-300 hover:bg-input/40 cursor-pointer ${
                  activeCategory === category
                    ? "border-chart-1"
                    : "border-border"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "Tutti" ? tAll("all") : category}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {projects
            .filter((project) =>
              activeCategory === "Tutti"
                ? true
                : project.category === activeCategory
            )
            .map((project) => (
              //=============== ProjectCard ===============//
              <ProjectCard
                key={project.title}
                projectImage={project.src}
                projectTitle={project.title}
                projectDesc={tList(`${project.descriptionKey}.description`)}
                projectTechs={project.technologies}
                projectGitHub={project.gitHubLink}
                projectDemo={project.demo}
              />
            ))}
        </ul>
      </Container>
    </section>
  );
}
