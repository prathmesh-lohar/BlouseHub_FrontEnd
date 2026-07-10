import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
  decorated?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
  decorated = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`
        ${align === "center" ? "text-center" : "text-left"}
        mb-10 md:mb-14
        ${className}
      `}
    >
      {subtitle && (
        <p className="text-primary font-sans font-medium text-sm uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif font-bold text-2xl md:text-3.5xl text-text-dark leading-tight">
        {title}
      </h2>
      {decorated && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-20 h-[1px] bg-[#CBB593] opacity-70" />
          <span className="text-[#CBB593] text-xs">♥</span>
          <span className="w-20 h-[1px] bg-[#CBB593] opacity-70" />
        </div>
      )}
    </div>
  );
}
