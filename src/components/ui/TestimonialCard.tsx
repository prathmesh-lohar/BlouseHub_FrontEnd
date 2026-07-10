import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  type: string;
  rating: number;
  avatarColor: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  type,
  rating,
  avatarColor,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6 lg:p-8
        border border-border-light
        hover:shadow-xl hover:shadow-primary/5
        hover:border-primary-light
        transition-all duration-300
        ${className}
      `}
    >
      {/* Quote mark */}
      <div className="text-primary-light text-4xl font-serif leading-none mb-3">
        &ldquo;
      </div>

      {/* Rating */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-gold" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <p className="font-body text-sm text-text-muted leading-relaxed mb-6 min-h-[60px]">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border-light">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-sans font-bold text-sm shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-sans font-semibold text-sm text-text-dark">
            {name}
          </p>
          <p className="font-body text-xs text-text-muted">
            {location} • {type}
          </p>
        </div>
      </div>
    </div>
  );
}
