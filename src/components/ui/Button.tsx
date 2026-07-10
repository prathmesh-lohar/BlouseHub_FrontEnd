import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "white-outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary text-white hover:bg-accent shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  white:
    "bg-white text-primary hover:bg-primary-bg shadow-md hover:shadow-lg",
  "white-outline":
    "border-2 border-white text-white hover:bg-white hover:text-primary",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-sans font-semibold rounded-full
        transition-all duration-300 ease-out
        cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
