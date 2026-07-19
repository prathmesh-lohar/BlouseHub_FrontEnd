"use client";

import { useState } from "react";
import Link from "next/link";
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
  { name: "Elegant V Neck", price: "From ₹1,599", image: "/images/elegant_v_neck.png", tag: "New" },
  { name: "Royal Embroidery", price: "From ₹2,499", image: "/images/royal_embroidery.png", tag: "Bridal" },
  { name: "Back Dori Style", price: "From ₹1,799", image: "/images/back_dori_style.png", tag: "Trending" },
  { name: "Puff Sleeve", price: "From ₹1,499", image: "/images/puff_sleeve.png", tag: "New" },
  { name: "Zari Work Blouse", price: "From ₹2,299", image: "/images/zari_work_blouse.png", tag: "Bridal" },
  { name: "Boat Neck Design", price: "From ₹1,699", image: "/images/boat_neck_design.png", tag: "Trending" },
];

export default function DesignCatalog() {
  const [activeTab, setActiveTab] = useState("All Designs");

  const filteredProducts = activeTab === "All Designs"
    ? products
    : products.filter(product => {
        if (activeTab === "Neck Designs") return product.name.includes("V Neck") || product.name.includes("Boat Neck");
        if (activeTab === "Sleeve Styles") return product.name.includes("Puff");
        if (activeTab === "Back Designs") return product.name.includes("Back Dori");
        if (activeTab === "Bridal") return product.tag === "Bridal";
        if (activeTab === "Latest") return product.tag === "New" || product.tag === "Trending";
        return true;
      });

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
          {filteredProducts.map((product, i) => (
            <Link href="/products" key={i} className="block">
              <ProductCard
                name={product.name}
                price={product.price}
                tag={product.tag}
                image={
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                }
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/catelog" passHref legacyBehavior>
            <Button variant="outline" size="md">
              View All 200+ Designs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
