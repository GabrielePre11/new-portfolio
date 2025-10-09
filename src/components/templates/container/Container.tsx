import React from "react";
import { ContainerProps } from "./container.props";

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`max-w-4xl px-4 mx-auto border-dashed border-zinc-600 ${className}`}
    >
      {children}
    </div>
  );
}
