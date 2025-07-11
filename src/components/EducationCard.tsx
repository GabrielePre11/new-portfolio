import { EducationCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function EducationCard({
  edcName,
  edcImage,
  edcYear,
  edcSubtitle,
  edcTopics,
}: EducationCardProps) {
  return (
    <li>
      <article className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-1.5">
          {/*=============== Image & Title ===============*/}
          <h3 className="inline-flex items-center gap-3 text-sm sm:text-xl md:text-2xl font-medium">
            <Image
              src={edcImage}
              width={50}
              alt="Istituto Superiore Majorana Logo"
              loading="lazy"
              className="size-8 sm:size-10 rounded-full object-cover bg-white"
            ></Image>

            {/*=============== Title ===============*/}
            {edcName}
          </h3>
          <span className="text-sm sm:text-lg">{edcYear}</span>
        </div>

        {/*=============== Subtitle ===============*/}
        <p className="text-sm sm:text-lg md:text-xl text-muted-foreground pb-2">
          {edcSubtitle}
        </p>

        {/*===============Topics ===============*/}
        <ol className="list-disc pl-3.5 text-ring/90 text-sm md:text-[1rem] lg:text-lg space-y-2">
          {edcTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ol>
      </article>
    </li>
  );
}
