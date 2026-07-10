import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: 1,
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: "Browse Designs",
    description: "Explore 200+ designs and find the style you love.",
  },
  {
    number: 2,
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Add Measurements",
    description: "Submit your measurements for a perfect custom fit.",
  },
  {
    number: 3,
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    title: "Book Your Order",
    description: "Confirm your design and place your order securely.",
  },
  {
    number: 4,
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    ),
    title: "Receive & Wear",
    description: "Get your blouse delivered and flaunt your perfect look!",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How It Works" />

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-primary-light" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center group">
                {/* Number badge */}
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-primary-light flex items-center justify-center mx-auto group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-primary text-white font-sans font-bold text-sm flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-base lg:text-lg text-text-dark mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-text-muted max-w-[200px] mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
