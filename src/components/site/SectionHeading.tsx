import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${
        inverted ? "text-white" : ""
      }`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center mb-5" : "mb-5"}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base md:text-lg leading-relaxed ${
            inverted ? "text-white/65" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
