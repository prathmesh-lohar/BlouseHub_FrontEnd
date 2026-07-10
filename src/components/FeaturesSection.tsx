import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2zm4-6V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13h10M10 9v4M14 9v4" />
      </svg>
    ),
    title: "Custom Measurements",
    description: "Get the perfect fit with precise measurements tailored just for you.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "Design Your Own",
    description: "Create your dream blouse with our easy custom design tools.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 3s-7.5 0-12.75 5.25c-3.33 3.33-4.05 8.16-2.22 11.66L2 23l3.09-4.03c3.5 1.83 8.33 1.11 11.66-2.22C22 11.5 22 4 22 4h-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-4-4M16 16l-3-3" />
      </svg>
    ),
    title: "Premium Fabrics",
    description: "Choose from premium quality fabrics that feel as good as they look.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h9v12m0 2h4m-4-2v-4h9v4m-9-4H3m18 4h2a2 2 0 002-2v-3a2 2 0 00-2-2h-3V9m-3 0h3" />
      </svg>
    ),
    title: "Pan India Delivery",
    description: "We deliver across India safely and on time, right to your doorstep.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Expert Tailors",
    description: "Crafted by experienced tailors who ensure stitch-perfect quality.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FFF5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Everything You Need for the Perfect Blouse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 stagger-children">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
