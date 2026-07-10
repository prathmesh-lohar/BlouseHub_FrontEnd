export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-[#FFF5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Stats Box */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#F5EAF0] text-center shadow-lg shadow-primary/5">
              
              {/* Happy Customers Header */}
              <div className="mb-4">
                <span className="font-sans font-black text-4xl lg:text-[42px] text-primary tracking-tight">
                  12,000+
                </span>
                <p className="font-sans font-bold text-base text-[#2D2D2D] mt-1">
                  Happy Customers
                </p>
              </div>

              {/* Heart Divider Line */}
              <div className="flex items-center justify-center gap-3 my-5">
                <span className="w-16 h-[1px] bg-[#CBB593] opacity-70" />
                <span className="text-[#CBB593] text-xs">♥</span>
                <span className="w-16 h-[1px] bg-[#CBB593] opacity-70" />
              </div>

              {/* 2x2 Stats Grid with internal border dividers */}
              <div className="grid grid-cols-2 border-t border-[#F2E0EB] mt-6">
                
                {/* 200+ Designs */}
                <div className="flex items-center gap-4 py-5 pr-2 border-b border-r border-[#F2E0EB] justify-center lg:justify-start lg:pl-4">
                  <svg className="w-8 h-8 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a3 3 0 00-3 3v3h6V5a3 3 0 00-3-3zM9 8h6v5H9V8zm3 5v5m-3 0h6m-4 3h2" />
                  </svg>
                  <div className="text-left">
                    <p className="font-sans font-black text-lg text-primary leading-none mb-1">200+</p>
                    <p className="font-sans font-medium text-xs text-text-muted">Designs</p>
                  </div>
                </div>

                {/* 4.8 Rating */}
                <div className="flex items-center gap-4 py-5 pl-4 border-b border-[#F2E0EB] justify-center lg:justify-start">
                  <svg className="w-8 h-8 text-[#CBB593] fill-[#CBB593] shrink-0" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <div className="text-left">
                    <div className="flex items-center gap-0.5">
                      <p className="font-sans font-black text-lg text-primary leading-none">4.8</p>
                      <span className="text-[#CBB593] text-[10px]">★</span>
                    </div>
                    <p className="font-sans font-medium text-xs text-text-muted mt-1">Rating</p>
                  </div>
                </div>

                {/* 7-10 Days Delivery */}
                <div className="flex items-center gap-4 py-5 pr-2 border-r border-[#F2E0EB] justify-center lg:justify-start lg:pl-4">
                  <svg className="w-8 h-8 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0zM5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h9v12m0 2h4m-4-2v-4h9v4m-9-4H3m18 4h2a2 2 0 002-2v-3a2 2 0 00-2-2h-3V9m-3 0h3" />
                  </svg>
                  <div className="text-left">
                    <p className="font-sans font-black text-lg text-primary leading-none mb-1">7-10 Days</p>
                    <p className="font-sans font-medium text-xs text-text-muted">Delivery</p>
                  </div>
                </div>

                {/* 100% Custom Fit */}
                <div className="flex items-center gap-4 py-5 pl-4 justify-center lg:justify-start">
                  <svg className="w-8 h-8 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2zm4-6V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 13h10M10 9v4M14 9v4" />
                  </svg>
                  <div className="text-left">
                    <p className="font-sans font-black text-lg text-primary leading-none mb-1">100%</p>
                    <p className="font-sans font-medium text-xs text-text-muted">Custom Fit</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column — Why Choose Us Reasons List */}
          <div className="animate-fade-in-up">
            <h2 className="font-serif font-bold text-2xl md:text-[32px] text-text-dark leading-tight">
              Why Choose Us?
            </h2>
            
            {/* Left aligned Heart Divider */}
            <div className="flex items-center gap-3 mt-3 mb-8">
              <span className="w-16 h-[1px] bg-[#CBB593] opacity-70" />
              <span className="text-[#CBB593] text-xs">♥</span>
              <span className="w-16 h-[1px] bg-[#CBB593] opacity-70" />
            </div>

            {/* List stack */}
            <div className="space-y-6">
              
              {/* Reason 1 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#FCD2E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm lg:text-base text-text-dark mb-1">
                    Stitch-Perfect Guarantee
                  </p>
                  <p className="font-sans text-xs lg:text-sm text-text-muted leading-relaxed">
                    We ensure every stitch is perfect or we re-stitch for free.
                  </p>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#FCD2E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l-4 4" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm lg:text-base text-text-dark mb-1">
                    Expert Design Consultation
                  </p>
                  <p className="font-sans text-xs lg:text-sm text-text-muted leading-relaxed">
                    Get free expert advice to choose the best for you.
                  </p>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#FCD2E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm lg:text-base text-text-dark mb-1">
                    Verified Tailor Network
                  </p>
                  <p className="font-sans text-xs lg:text-sm text-text-muted leading-relaxed">
                    Our skilled &amp; verified tailors craft your blouse with care.
                  </p>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#FCD2E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm lg:text-base text-text-dark mb-1">
                    Secure Payments &amp; Easy Returns
                  </p>
                  <p className="font-sans text-xs lg:text-sm text-text-muted leading-relaxed">
                    100% secure payments and hassle-free returns.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
