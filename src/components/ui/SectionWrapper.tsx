import type { PropsWithChildren } from "react";

type SectionWrapperProps = PropsWithChildren<{
  id: string;
  className?: string;
  contentClassName?: string;
}>;

export function SectionWrapper({
  id,
  className = "",
  contentClassName = "",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <div
        className={`mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
