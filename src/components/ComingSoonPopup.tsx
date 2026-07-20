"use client";

import { useState, useEffect } from "react";

export default function ComingSoonPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Only show the popup if the user hasn't dismissed it in the current session
    const isDismissed = sessionStorage.getItem("comingSoonDismissed");
    if (!isDismissed) {
      // Delay popup slightly for premium entry effect
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("comingSoonDismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API registration
    setIsSubmitted(true);
    sessionStorage.setItem("comingSoonDismissed", "true");

    // Close modal automatically after a short delay to let them explore
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative max-w-md w-full bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#F5D6E2] text-center overflow-hidden animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition flex items-center justify-center cursor-pointer"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Brand/Spool Floating Icon */}
        <div className="w-16 h-16 rounded-full bg-[#FFF0F4] border border-[#F5D6E2] flex items-center justify-center text-[#9E114D] mx-auto mb-4 animate-float">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 0 0 11.75 18h.5a3 3 0 0 0 2.22-1.878M9.53 16.122a3 3 0 0 1-1.03-3.486l.78-2.6A3 3 0 0 1 12.16 8h1.68a3 3 0 0 1 2.88 2.036l.78 2.6a3 3 0 0 1-1.03 3.486M9.53 16.122a3 3 0 0 0 4.94 0" />
          </svg>
        </div>

        {/* Launching Soon Badge */}
        <div className="mx-auto bg-[#FFF0F4] text-[#9E0D49] border border-[#FBCFE0] text-[10px] font-extrabold px-3 py-1 rounded-full w-fit tracking-wide uppercase flex items-center gap-1.5 mb-4">
          <span>✨</span> Launching Soon
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold font-serif text-gray-900 leading-tight mb-3">
          We are tailoring something beautiful
        </h2>

        {/* Subtext */}
        <p className="text-sm text-gray-500 font-semibold mb-6 leading-relaxed px-1">
          BlouseHub's online custom stitching platform is undergoing final touch-ups. We're launching soon to bring you tailor-fit designer blouses at your doorstep!
        </p>

        {/* Form or Success State */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#FCF8FA] border border-gray-200 rounded-xl pl-4 pr-10 py-3.5 text-sm font-semibold text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9E0D49] focus:bg-white shadow-2xs transition"
              />
              <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#9E0D49] hover:bg-[#8D0E44] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-xs hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              Notify Me When Live
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-1.5 animate-fade-in-up">
            <span className="text-xl">🎉</span>
            <h4 className="text-sm font-extrabold text-emerald-800">You're on the VIP list!</h4>
            <p className="text-xs text-emerald-600 font-semibold">
              We'll notify you at <span className="underline font-bold">{email}</span> the moment we launch.
            </p>
          </div>
        )}

        {/* Footer info links */}
        <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-bold">
          <span>👗 Premium Custom Fitting</span>
          <button 
            onClick={handleClose}
            className="text-[#9E0D49] hover:underline cursor-pointer font-bold"
          >
            Explore Preview &gt;
          </button>
        </div>

      </div>
    </div>
  );
}
