import React from "react";

type Props = {
  bg: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
};

export default function IntersectBackground({
  bg,
  children,
  id,
  className,
}: Props) {
  return (
    <section
      className={`intersect-bg ${className ?? ""}`}
      id={id}
      data-bg={bg ?? "/b/bg1.png"}
    >
      {children}
    </section>
  );
}
