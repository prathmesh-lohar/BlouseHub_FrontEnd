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
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFF5F8] sticky top-0 z-50 shadow-sm border-b border-[#F0D5E2]">
      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
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
            <div className="relative">
              <button
                className="p-1 cursor-pointer flex items-center justify-center rounded-full hover:bg-[#FFF2F6] transition-colors"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                aria-expanded={profileMenuOpen}
                aria-haspopup="true"
              >
                <img
                  src="https://t4.ftcdn.net/jpg/09/61/69/75/360_F_961697523_EFd1m8P4tdcwB0TYvlQAagqKR1xHSuwk.jpg"
                  alt="Profile avatar"
                  className="w-8 h-8 rounded-full border border-[#E5D0DD] object-cover"
                />
              </button>

              {/* Profile Dropdown Menu */}
              {profileMenuOpen && (
                <>
                  {/* Backdrop to close dropdown on click outside */}
                  <div
                    className="fixed inset-0 z-10 cursor-default"
                    onClick={() => setProfileMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-[#F0D5E2] rounded-xl shadow-xl py-2 z-20 animate-fade-in origin-top-right">
                    <a
                      href="/profile"
                      className="flex items-center px-4 py-2.5 text-sm text-[#4A4A4A] hover:bg-[#FFF2F6] hover:text-primary transition-colors font-sans font-medium group"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-2.5 text-[#7c7c7c] group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      My Profile
                    </a>
                    <a
                      href="/orders"
                      className="flex items-center px-4 py-2.5 text-sm text-[#4A4A4A] hover:bg-[#FFF2F6] hover:text-primary transition-colors font-sans font-medium group"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-2.5 text-[#7c7c7c] group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                      My Orders
                    </a>
                    <a
                      href="/measurements"
                      className="flex items-center px-4 py-2.5 text-sm text-[#4A4A4A] hover:bg-[#FFF2F6] hover:text-primary transition-colors font-sans font-medium group"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-2.5 text-[#7c7c7c] group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2zM9 8h6" />
                      </svg>
                      My Measurements
                    </a>
                    <hr className="border-t border-[#F0D5E2] my-1" />
                    <button
                      onClick={() => {
                        setProfileMenuOpen(false);
                        alert("Logging out...");
                      }}
                      className="w-full text-left flex items-center px-4 py-2.5 text-sm text-red-500 hover:bg-[#FFF2F6] transition-colors font-sans font-semibold cursor-pointer group"
                    >
                      <svg className="w-4 h-4 mr-2.5 text-red-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                      </svg>
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>

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
