"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";

const tabs = [
  "All Designs",
  "Neck Designs",
  "Sleeve Styles",
  "Back Designs",
  "Bridal",
  "Latest",
];

const products = [
  { name: "Elegant V Neck", price: "From ₹1,699", color: "from-pink-200 to-pink-300" },
  { name: "Royal Embroidery", price: "From ₹2,499", color: "from-rose-200 to-rose-300" },
  { name: "Back Dori Style", price: "From ₹1,799", color: "from-fuchsia-200 to-fuchsia-300" },
  { name: "Puff Sleeve", price: "From ₹1,499", color: "from-pink-100 to-pink-200" },
  { name: "Zari Work Blouse", price: "From ₹2,299", color: "from-amber-100 to-amber-200" },
  { name: "Boat Neck Design", price: "From ₹1,899", color: "from-teal-100 to-teal-200" },
];

export default function DesignCatalog() {
  const [activeTab, setActiveTab] = useState("All Designs");

  return (
    <section className="py-16 lg:py-24 bg-white" id="designs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Explore Our Design Catalog" />

        {/* Tab filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-2 rounded-full font-sans text-sm font-medium
                transition-all duration-200 cursor-pointer
                ${activeTab === tab
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-primary-bg text-text-dark hover:bg-primary-light hover:text-primary"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 mb-10 stagger-children">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              name={product.name}
              price={product.price}
              image={
                <div className={`w-full h-full bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              }
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="md">
            View All 200+ Designs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
