"use client";

import { useState } from "react";
import Link from "next/link";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  // Row 1
  { name: "Elegant V Neck", price: "From ₹1,599", image: "/images/elegant_v_neck.png", tag: "New" },
  { name: "Royal Embroidery", price: "From ₹2,499", image: "/images/royal_embroidery.png", tag: "Bridal" },
  { name: "Back Dori Style", price: "From ₹1,799", image: "/images/back_dori_style.png", tag: "Trending" },
  { name: "Puff Sleeve", price: "From ₹1,499", image: "/images/puff_sleeve.png", tag: "New" },
  { name: "Zari Work Blouse", price: "From ₹2,299", image: "/images/zari_work_blouse.png", tag: "Bridal" },
  { name: "Boat Neck Design", price: "From ₹1,699", image: "/images/boat_neck_design.png", tag: "Trending" },

  // Row 2
  { name: "Classic V Neck", price: "From ₹1,699", image: "/images/elegant_v_neck.png", tag: "New" },
  { name: "Golden Zardosi", price: "From ₹2,599", image: "/images/royal_embroidery.png", tag: "Bridal" },
  { name: "Deep Back Dori", price: "From ₹1,899", image: "/images/back_dori_style.png", tag: "Trending" },
  { name: "Organza Puff Sleeve", price: "From ₹1,599", image: "/images/puff_sleeve.png", tag: "New" },
  { name: "Crimson Zari Work", price: "From ₹2,399", image: "/images/zari_work_blouse.png", tag: "Bridal" },
  { name: "Broad Boat Neck", price: "From ₹1,799", image: "/images/boat_neck_design.png", tag: "Trending" },

  // Row 3
  { name: "Sweetheart V Neck", price: "From ₹1,649", image: "/images/elegant_v_neck.png", tag: "New" },
  { name: "Luxury Zardosi", price: "From ₹2,799", image: "/images/royal_embroidery.png", tag: "Bridal" },
  { name: "Silk Back Dori", price: "From ₹1,999", image: "/images/back_dori_style.png", tag: "Trending" },
  { name: "Designer Puff Sleeve", price: "From ₹1,699", image: "/images/puff_sleeve.png", tag: "New" },
  { name: "Traditional Zari", price: "From ₹2,499", image: "/images/zari_work_blouse.png", tag: "Bridal" },
  { name: "Chic Boat Neck", price: "From ₹1,749", image: "/images/boat_neck_design.png", tag: "Trending" },

  // Row 4
  { name: "Premium V Neck", price: "From ₹1,799", image: "/images/elegant_v_neck.png", tag: "New" },
  { name: "Heritage Embroidery", price: "From ₹2,999", image: "/images/royal_embroidery.png", tag: "Bridal" },
  { name: "Glamour Back Dori", price: "From ₹2,099", image: "/images/back_dori_style.png", tag: "Trending" },
  { name: "Princess Puff Sleeve", price: "From ₹1,799", image: "/images/puff_sleeve.png", tag: "New" },
  { name: "Heavy Zari Bridal", price: "From ₹2,699", image: "/images/zari_work_blouse.png", tag: "Bridal" },
  { name: "Classic Boat Neck", price: "From ₹1,849", image: "/images/boat_neck_design.png", tag: "Trending" },
];

export default function CatelogPage() {
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
    <>
      <TopBanner />
      <Header />
      <main className="flex-grow bg-[#FFFDFE]">
        {/* Breadcrumb / Top Navigation bar */}
        <div className="bg-[#FFF2F6] py-4 border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary font-medium">Design Catalog</span>
            </div>
            <Link href="/" passHref legacyBehavior>
              <Button variant="outline" size="sm" className="!px-4 !py-1 text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </Button>
            </Link>
          </div>
        </div>

        {/* Catalog Section */}
        <section className="pt-8 pb-16 lg:pt-8 lg:pb-24 bg-white" id="designs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
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

            {/* Product grid with 24 items (4 rows of 6 on desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 mb-16 stagger-children animate-fade-in">
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
                    className="bg-white rounded-2xl border border-primary-bg p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-muted text-lg">No designs found matching the filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
