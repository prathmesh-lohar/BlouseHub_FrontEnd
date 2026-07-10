"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "HOME", href: "#", active: true },
  { label: "DESIGNS", href: "#designs" },
  { label: "CUSTOMIZE", href: "#customize" },
  { label: "FABRICS", href: "#fabrics" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFF5F8] sticky top-0 z-50 shadow-sm border-b border-[#F0D5E2]">
      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="BlouseHub.in"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Search bar — hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Blouse Designs"
                className="w-full pl-10 pr-10 py-2 rounded-full border border-[#E5D0DD] bg-white text-sm font-sans text-text-dark placeholder:text-[#999999] focus:outline-none focus:border-primary-light transition-all"
              />
              {/* Visual search camera icon */}
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888] hover:text-primary transition-colors cursor-pointer">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-sans font-semibold text-[#2D2D2D] hover:text-primary transition-colors cursor-pointer hidden sm:inline-block">
              Become Tailor
            </button>

            {/* Vertical divider */}
            <span className="h-5 w-[1px] bg-[#E5D0DD] hidden sm:inline-block mx-1" />

            {/* Cart */}
            <button className="relative p-2 text-[#2D2D2D] hover:text-primary transition-colors cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Profile Avatar */}
            <button className="p-1 cursor-pointer">
              <img
                src="/images/avatar.png"
                alt="Profile avatar"
                className="w-8 h-8 rounded-full border border-[#E5D0DD] object-cover"
              />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-text-dark cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar — desktop */}
      <nav className="hidden lg:block border-t border-[#F0D5E2] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`
                    font-sans text-xs font-bold tracking-widest
                    transition-colors duration-200 relative pb-1
                    ${link.active
                      ? "text-primary border-b-2 border-primary"
                      : "text-[#4A4A4A] hover:text-primary"
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-light bg-white">
          <div className="px-4 py-3">
            {/* Mobile search */}
            <div className="relative mb-3 md:hidden">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                type="text"
                placeholder="Search Blouse Designs"
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-[#FAFAFA] text-sm font-sans placeholder:text-[#999999] focus:outline-none focus:border-primary-light"
              />
            </div>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`
                      block px-4 py-2.5 rounded-xl font-sans text-sm font-semibold
                      transition-colors duration-200
                      ${link.active
                        ? "bg-primary-bg text-primary"
                        : "text-text-dark hover:bg-primary-bg hover:text-primary"
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-border-light">
              <button className="w-full text-center py-2.5 rounded-xl font-sans text-sm font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                Become Tailor
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
