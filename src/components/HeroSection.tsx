import Button from "@/components/ui/Button";

const heroBadges = [
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "PERFECT FIT",
    subtitle: "Made to Your Measurements",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m2.83 2.83a2 2 0 112.83 2.83M2 22l5-5m15-15l-9 9" />
      </svg>
    ),
    title: "CUSTOM DESIGNS",
    subtitle: "Style It Your Way",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.003 9.003 0 008.313-5.558M12 21a9.003 9.003 0 01-8.313-5.558M12 21V3m0 18a9.003 9.003 0 017-9M12 3a9.003 9.003 0 00-7 9m7-9a9.003 9.003 0 017 9M12 3v18" />
      </svg>
    ),
    title: "PREMIUM FABRICS",
    subtitle: "Quality You Can Trust",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h9v12m0 2h4m-4-2v-4h9v4m-9-4H3m18 4h2a2 2 0 002-2v-3a2 2 0 00-2-2h-3V9m-3 0h3" />
      </svg>
    ),
    title: "PAN INDIA DELIVERY",
    subtitle: "Delivered With Care",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF2F6] min-h-[460px] lg:min-h-[500px]">
      {/* Absolute background graphics */}
      {/* Left Floral Line Drawing Sketch */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none select-none opacity-80 mix-blend-multiply hidden md:block">
        <img
          src="/images/left-floral.png"
          alt="Decorative Floral Line Art Sketch"
          className="h-full w-auto object-cover object-left"
        />
      </div>

      {/* Falling/Flying Pink Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Leaf 1 */}
        <svg
          className="absolute top-1/4 left-[48%] w-10 h-10 text-[#FFAEC9] opacity-65 rotate-[15deg] animate-float fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M21 3s-7.5 0-12.75 5.25c-3.33 3.33-4.05 8.16-2.22 11.66L2 23l3.09-4.03c3.5 1.83 8.33 1.11 11.66-2.22C22 11.5 22 4 22 4h-1z" />
        </svg>
        {/* Leaf 2 */}
        <svg
          className="absolute top-2/3 left-[38%] w-8 h-8 text-[#FFD2E5] opacity-55 rotate-[110deg] animate-float fill-current"
          viewBox="0 0 24 24"
          style={{ animationDelay: "1.5s" }}
        >
          <path d="M21 3s-7.5 0-12.75 5.25c-3.33 3.33-4.05 8.16-2.22 11.66L2 23l3.09-4.03c3.5 1.83 8.33 1.11 11.66-2.22C22 11.5 22 4 22 4h-1z" />
        </svg>
        {/* Leaf 3 */}
        <svg
          className="absolute top-1/3 right-[12%] w-9 h-9 text-[#FFAEC9] opacity-65 rotate-[45deg] animate-float fill-current"
          viewBox="0 0 24 24"
          style={{ animationDelay: "0.8s" }}
        >
          <path d="M21 3s-7.5 0-12.75 5.25c-3.33 3.33-4.05 8.16-2.22 11.66L2 23l3.09-4.03c3.5 1.83 8.33 1.11 11.66-2.22C22 11.5 22 4 22 4h-1z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center pt-8 lg:pt-12">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <p className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#4A4A4A] uppercase mb-4">
              CUSTOM BLOUSE DESIGNS
            </p>
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-[56px] text-text-dark leading-[1.1] mb-5">
              Made for You.
              <br />
              <span className="text-primary font-sans font-bold">Perfectly Yours.</span>
            </h1>

            {/* Heart Divider Line */}
            <div className="flex items-center gap-3 my-5">
              <div className="h-[1px] w-24 bg-[#E8CFDC]" />
              <span className="text-[#C2185B] text-xs">♥</span>
              <div className="h-[1px] w-24 bg-[#E8CFDC]" />
            </div>

            <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-8 max-w-sm">
              Custom made blouses that fit your style,
              <br />
              your body &amp; your moments.
            </p>

            <button className="bg-gradient-to-r from-primary to-accent text-white font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-[1px] transition-all flex items-center gap-2.5 cursor-pointer">
              DESIGN YOUR OWN
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Right — model image */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <img
              src="/images/hero-model.png"
              alt="Model showcasing back of a custom-designed pink embroidered blouse"
              className="w-auto h-[400px] sm:h-[450px] lg:h-[480px] object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom badges */}
      <div className="bg-white/90 backdrop-blur-sm border-t border-[#F0D5E2] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#F0D5E2] py-2">
            {heroBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center justify-center lg:justify-start gap-3 py-3 px-4 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFF2F6] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <p className="font-sans font-extrabold text-[10px] sm:text-xs text-text-dark tracking-wide">
                    {badge.title}
                  </p>
                  <p className="font-body text-[9px] sm:text-[10px] text-text-muted">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
