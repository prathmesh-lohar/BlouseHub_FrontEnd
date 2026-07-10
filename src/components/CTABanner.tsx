import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card Box */}
        <div className="relative overflow-hidden bg-gradient-to-r from-banner to-primary rounded-3xl py-12 px-6 sm:px-12 text-center shadow-xl shadow-primary/10">
          
          {/* Left Decorative Floral Illustration Path */}
          <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none select-none opacity-20 mix-blend-overlay hidden md:block">
            <img
              src="/images/cta-left-floral.png"
              alt=""
              className="h-full w-auto object-cover object-left"
            />
          </div>

          {/* Right Decorative Floral Illustration Path */}
          <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none select-none opacity-20 mix-blend-overlay hidden md:block">
            <img
              src="/images/cta-right-floral.png"
              alt=""
              className="h-full w-auto object-cover object-right"
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[34px] text-white leading-tight">
              Your Perfect Blouse is Just One Click Away
            </h2>

            {/* Gold Heart Divider Line */}
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="w-16 h-[1px] bg-[#E5C38C] opacity-75" />
              <span className="text-[#E5C38C] text-xs">♥</span>
              <span className="w-16 h-[1px] bg-[#E5C38C] opacity-75" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {/* Button 1: Book Now */}
              <button className="bg-white text-primary font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-lg shadow-md hover:bg-[#FFF5F8] transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Book Now — It&apos;s Free to Start
              </button>

              {/* Button 2: Browse Designs */}
              <button className="border border-white text-white bg-transparent font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-lg hover:bg-white/10 transition-all cursor-pointer w-full sm:w-auto justify-center">
                Browse Designs
              </button>
            </div>

            {/* Footer Guarantee Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 border-t border-white/15 pt-6 text-white/95 text-xs font-sans tracking-wide">
              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Free re-stitch guarantee</span>
              </div>

              <span className="hidden sm:inline text-white/20">|</span>

              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                <span>No advance payment needed</span>
              </div>

              <span className="hidden sm:inline text-white/20">|</span>

              {/* Item 3 */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h9v12m0 2h4m-4-2v-4h9v4m-9-4H3m18 4h2a2 2 0 002-2v-3a2 2 0 00-2-2h-3V9m-3 0h3" />
                </svg>
                <span>Pan India delivery</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
