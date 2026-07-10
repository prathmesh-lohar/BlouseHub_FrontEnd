import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`
        group bg-white rounded-3xl p-6 lg:p-7
        border border-[#F5EAF0]
        hover:border-primary-light hover:shadow-xl hover:shadow-primary/5
        transition-all duration-300 ease-out
        hover:-translate-y-1
        text-center
        flex flex-col items-center
        ${className}
      `}
    >
      <div className="w-16 h-16 mb-5 rounded-full bg-gradient-to-br from-[#FFE8F0] to-[#FFF5F8] border border-[#FCD2E2] flex items-center justify-center group-hover:scale-105 transition-all duration-300">
        <span className="text-primary">{icon}</span>
      </div>
      <h3 className="font-sans font-bold text-sm lg:text-[15px] text-[#2D2D2D] mb-2 leading-snug">
        {title}
      </h3>
      <p className="font-sans text-xs text-[#666666] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
