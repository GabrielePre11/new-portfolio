import React from "react";
import { TitleProps } from "./title.props";

export default function Title({ title }: TitleProps) {
  return (
    <h2 className="text-4xl md:text-5xl font-caveat text-center">{title}</h2>
  );
}
