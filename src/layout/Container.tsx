import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

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
