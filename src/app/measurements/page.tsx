"use client";

import { useState } from "react";
import Link from "next/link";

// List of options for each dropdown
const bustOptions = Array.from({ length: 15 }, (_, i) => `${30 + i} inches`);
const waistOptions = Array.from({ length: 17 }, (_, i) => `${24 + i} inches`);
const shoulderOptions = Array.from({ length: 7 }, (_, i) => `${12 + i} inches`);
const blouseLengthOptions = Array.from({ length: 7 }, (_, i) => `${12 + i} inches`);
const sleeveOptions = Array.from({ length: 19 }, (_, i) => `${4 + i} inches`);
const armholeOptions = Array.from({ length: 9 }, (_, i) => `${12 + i} inches`);
const frontNeckOptions = Array.from({ length: 7 }, (_, i) => `${5 + i} inches`);
const backNeckOptions = Array.from({ length: 9 }, (_, i) => `${6 + i} inches`);

export default function MeasurementsPage() {
  const [bust, setBust] = useState("34 inches");
  const [waist, setWaist] = useState("28 inches");
  const [shoulder, setShoulder] = useState("14 inches");
  const [blouseLength, setBlouseLength] = useState("14 inches");
  const [sleeveLength, setSleeveLength] = useState("10 inches");
  const [armhole, setArmhole] = useState("15 inches");
  const [frontNeck, setFrontNeck] = useState("7 inches");
  const [backNeck, setBackNeck] = useState("10 inches");

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFE] flex flex-col antialiased">
      {/* Header bar strictly matching screenshot */}
      <header className="border-b border-[#F5E6ED] bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex flex-col cursor-pointer">
                <img
                  src="/images/logo.png"
                  alt="BlouseHub.in"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right Header Navigation (Help and Call Tailor) */}
          <div className="flex items-center gap-6 text-[#4A4A4A]">
            <a
              href="#help"
              className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-[#666666]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Help
            </a>
            
            {/* Divider vertical line */}
            <span className="h-5 w-[1px] bg-[#E5D0DD]" />

            {/* Call Tailor Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors border border-[#E5D0DD] rounded-full px-4 py-1.5 cursor-pointer bg-white">
                <svg
                  className="w-4 h-4 text-[#666666]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-9.27.387-.97l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
                  />
                </svg>
                Call Tailor
                <svg
                  className="w-3.5 h-3.5 text-[#666666] ml-0.5 group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Form content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-serif text-primary tracking-wide mb-2">
            Blouse Measurements
          </h1>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-4 opacity-50" />
          <p className="text-text-muted text-sm font-sans font-medium">
            Enter your measurements for the perfect fit.
          </p>
        </div>

        {/* 2-Column Grid matching UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          
          {/* Card 1: Bust Size */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Bust Size
              </label>
              <div className="relative">
                <select
                  value={bust}
                  onChange={(e) => setBust(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {bustOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/bust_size.png"
                alt="Bust Size illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Card 2: Waist Size */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Waist Size
              </label>
              <div className="relative">
                <select
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {waistOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/waist_size.png"
                alt="Waist Size illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Card 3: Shoulder Width */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Shoulder Width
              </label>
              <div className="relative">
                <select
                  value={shoulder}
                  onChange={(e) => setShoulder(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {shoulderOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/shoulder_width.png"
                alt="Shoulder Width illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Card 4: Blouse Length */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Blouse Length
              </label>
              <div className="relative">
                <select
                  value={blouseLength}
                  onChange={(e) => setBlouseLength(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {blouseLengthOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/blouse_length.png"
                alt="Blouse Length illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Card 5: Sleeve Length */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Sleeve Length
              </label>
              <div className="relative">
                <select
                  value={sleeveLength}
                  onChange={(e) => setSleeveLength(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {sleeveOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/sleeve_length.png"
                alt="Sleeve Length illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Card 6: Armhole */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Armhole
              </label>
              <div className="relative">
                <select
                  value={armhole}
                  onChange={(e) => setArmhole(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {armholeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/armhole.png"
                alt="Armhole illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Card 7: Front Neck Depth */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Front Neck Depth
              </label>
              <div className="relative">
                <select
                  value={frontNeck}
                  onChange={(e) => setFrontNeck(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {frontNeckOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/front_neck_depth.png"
                alt="Front Neck Depth illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Card 8: Back Neck Depth */}
          <div className="bg-white border border-[#E5D0DD] rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 pr-4">
              <label className="block text-primary font-bold text-sm mb-3">
                Back Neck Depth
              </label>
              <div className="relative">
                <select
                  value={backNeck}
                  onChange={(e) => setBackNeck(e.target.value)}
                  className="w-full appearance-none border border-[#E5D0DD] rounded-xl px-4 py-2.5 text-xs text-text-dark font-medium bg-[#FFFDFE] cursor-pointer focus:outline-none focus:border-primary"
                >
                  {backNeckOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[130px] h-[120px] flex items-center justify-center bg-[#FFF9FB] rounded-xl border border-primary/5 overflow-hidden">
              <img
                src="/images/measurements/back_neck_depth.png"
                alt="Back Neck Depth illustration"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* Saved Alert Notification */}
        {saved && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 text-center py-3.5 px-4 rounded-xl font-sans font-semibold text-sm shadow-sm animate-fade-in">
            Measurements saved successfully!
          </div>
        )}

        {/* Footer Actions exactly as in screenshot */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#F5E6ED] pt-8 gap-4">
          {/* Button 1: Measurement Guide */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#CCCCCC] hover:border-[#D14F74] text-[#4A4A4A] hover:text-primary transition-all font-sans font-semibold px-6 py-3 rounded-xl cursor-pointer bg-white text-sm">
            <svg
              className="w-5 h-5 text-[#888] group-hover:text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Measurement Guide
          </button>

          {/* Button 2: Save Measurements */}
          <button
            onClick={handleSave}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-[#B83D60] text-white transition-colors font-sans font-semibold px-10 py-3 rounded-xl cursor-pointer shadow-md shadow-primary/20 text-sm"
          >
            Save Measurements
          </button>

          {/* Button 3: Next */}
          <Link href="/" passHref legacyBehavior>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary/20 hover:border-primary text-primary transition-colors font-sans font-semibold px-8 py-3 rounded-xl cursor-pointer bg-white text-sm">
              Next
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link>
        </div>
      </main>

      {/* Replicate banner/footer styling below */}
      <footer className="bg-[#FFF5F8] border-t border-[#F0D5E2] py-8 text-center text-xs text-text-muted mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <p>© 2026 BlouseHub.in. All rights reserved. Custom Fit, Perfect Style.</p>
        </div>
      </footer>
    </div>
  );
}
