import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "The fit is just perfect! The fabric quality is amazing and the design is exactly what I imagined. Highly recommend!",
    name: "Sneha R.",
    location: "Bangalore",
    type: "Custom Blouse",
    rating: 5,
    avatarColor: "#4CAF50",
  },
  {
    quote:
      "Loved the customization process. It was easy and the blouse was delivered on time. Will order again!",
    name: "Priya M.",
    location: "Mumbai",
    type: "Bridal Blouse",
    rating: 5,
    avatarColor: "#E91E63",
  },
  {
    quote:
      "Beautiful stitching and premium fabric. Received so many compliments. Thank you BlouseHub.in!",
    name: "Anjali K.",
    location: "Chennai",
    type: "Back Dori Blouse",
    rating: 5,
    avatarColor: "#FF9800",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Customers Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
