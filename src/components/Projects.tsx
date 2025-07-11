"use client";

import Container from "@/layout/Container";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import type { Category } from "@/types/types";

const categories: Category[] = [
  "Tutti",
  "HTML & CSS",
  "React",
  "Next.js",
  "Angular",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tutti");

  return (
    <section
      className="border-b border-zinc-600 border-dashed px-4"
      id="projects"
      aria-label="Projects Section"
    >
      <Container className="border-x border-zinc-600 border-dashed py-10">
        <div className="flex items-center justify-center pb-12">
          <h2 className="text-4xl md:text-5xl font-caveat">Progetti</h2>
        </div>

        {/*=============== Filters ===============*/}
        <ul className="flex flex-wrap items-center gap-5 justify-center pb-10">
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
                {category}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                projectDesc={project.description}
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
