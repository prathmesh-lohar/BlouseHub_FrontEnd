import React from "react";

interface ProductCardProps {
  image: React.ReactNode;
  name: string;
  price: string;
  tag?: string;
  className?: string;
}

export default function ProductCard({
  image,
  name,
  price,
  tag,
  className = "",
}: ProductCardProps) {
  return (
    <div
      className={`
        group cursor-pointer
        ${className}
      `}
    >
      <div className="relative overflow-hidden rounded-2xl mb-3 bg-primary-bg aspect-square">
        {tag && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-sans font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
        <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          {image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-sans font-medium text-sm text-text-dark group-hover:text-primary transition-colors duration-200">
        {name}
      </h3>
      <p className="font-body text-xs text-primary font-semibold mt-0.5">
        {price}
      </p>
    </div>
  );
}
