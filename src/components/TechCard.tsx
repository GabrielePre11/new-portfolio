import type { TechCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function TechCard({ techName, techImage }: TechCardProps) {
  return (
    <li key={techName} className="grid place-items-center gap-1.5">
      <Image
        src={techImage}
        alt={techName}
        width={100}
        loading="lazy"
        className="place-self-center bg-accent border border-border rounded-xl p-2 aspect-square object-contain size-16 cursor-pointer transition-colors duration-200 hover:bg-accent/70"
      ></Image>
      <span>{techName}</span>
    </li>
  );
}
