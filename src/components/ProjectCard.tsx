import type { ProjectCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function ProjectCard({
  projectImage,
  projectTitle,
  projectDesc,
  projectTechs,
  projectGitHub,
  projectDemo,
}: ProjectCardProps) {
  return (
    <li key={projectTitle}>
      <article className="flex flex-col overflow-hidden rounded-xl border-2 border-border bg-accent max-w-[240px] sm:max-w-[280] justify-self-center">
        {/*=============== Image ===============*/}
        <figure className="relative h-36 lg:h-40 overflow-hidden">
          <Image
            src={projectImage}
            alt={projectTitle}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform hover:scale-105"
          />
        </figure>

        {/*=============== Content ===============*/}
        <div className="p-4 flex flex-col gap-2">
          {/*=============== Title & Links ===============*/}
          <div className="flex items-center justify-between">
            {/*=============== Title ===============*/}
            <h3 className="text-lg font-semibold truncate pr-2">
              {projectTitle}
            </h3>

            {/*=============== Links ===============*/}
            <div className="flex items-center gap-2">
              {/*=============== GitHub Icon ===============*/}
              <a
                href={projectGitHub}
                target="_blank"
                className="grid place-items-center border border-input rounded-lg p-1 transition-colors duration-300 hover:bg-input/40 cursor-pointer"
                aria-label="Project's GitHub Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github-icon lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              {/*=============== Demo Icon ===============*/}
              {projectDemo && (
                <a
                  href={projectDemo}
                  target="_blank"
                  className="grid place-items-center border border-input rounded-lg p-1 transition-colors duration-300 hover:bg-input/40 cursor-pointer"
                  aria-label="Project's Demo on Vercel"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play-icon lucide-play"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/*=============== Description ===============*/}
          <p className="text-sm tracking-wide text-muted-foreground  line-clamp-4">
            {projectDesc}
          </p>

          {/*=============== Technologies ===============*/}
          <ul className="flex items-center flex-wrap gap-1.5 pt-2">
            {projectTechs.map((tech) => (
              <li
                key={tech.name}
                className="grid place-items-center border border-input rounded-lg p-1 transition-colors duration-300 hover:bg-input/40"
              >
                <figure className="relative group">
                  <Image
                    src={tech.src}
                    alt={`${tech.name}'s Icon`}
                    width={50}
                    className="size-5"
                  />
                  <span className="absolute bottom-6 mb-1 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-ard border border-input text-white rounded opacity-0 group-hover:opacity-100 transition-colors duration-300 hover:bg-input/40">
                    {tech.name}
                  </span>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}
