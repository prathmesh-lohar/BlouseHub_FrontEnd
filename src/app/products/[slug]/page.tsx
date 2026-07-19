"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import { useState } from "react";

export default function ExactBridalBlouseProductPage() {
  const [activeTab, setActiveTab] = useState("details");
  
  const images = [
    "/images/bridal_blouse_pink.png",
    "/images/designer_blouse_white.png",
    "/images/gold_embroidery_blouse.png",
    "/images/trendy_blouse_blue.png",
    "/images/designer_blouse_white.png",
  ];
  
  const [selectedImg, setSelectedImg] = useState(images[0]);

  // Image zoom state tracking
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  // Exact measurement configuration matching the screenshot
  const sizingOptions = [
    { label: "Bust Size", value: "34", unit: "inches", hasInnerCaret: true },
    { label: "Waist Size", value: "28", unit: "inches", hasInnerCaret: true },
    { label: "Shoulder Width", value: "14", unit: "inches", hasInnerCaret: true },
    { label: "Blouse Length", value: "14", unit: "inches", hasInnerCaret: true },
    { label: "Sleeve Style", value: "Short Sleeves", unit: "", hasInnerCaret: false },
    { label: "Sleeve Length", value: "10", unit: "inches", hasInnerCaret: true },
  ];

  // Exact data extracted from the "Customer Also Viewed" screenshot
  const relatedProducts = [
    { title: "Bridal Back Design", price: "₹1,099", rating: "4.9", count: "356", img: "/images/designer_blouse_white.png" },
    { title: "Popular Bridal Blouse", price: "₹1,299", rating: "4.8", count: "377", img: "/images/trendy_blouse_blue.png" },
    { title: "Traditional Bridal", price: "₹1,199", rating: "4.8", count: "356", img: "/images/gold_embroidery_blouse.png" },
    { title: "Maroon Bridal", price: "₹1,099", rating: "4.8", count: "277", img: "/images/bridal_blouse_pink.png" },
    { title: "Bridal Blouse", price: "₹1,099", rating: "4.4", count: "277", img: "/images/designer_blouse_white.png" },
  ];

  return (
    <>
      <TopBanner />
      <Header />
      <main className="min-h-screen bg-[#FCF8FA] text-[#333333] antialiased p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* BREADCRUMB NAVIGATION */}
        <nav className="text-sm font-medium text-gray-400 mb-6 flex items-center gap-2">
          <span className="text-[#C2376A] hover:underline cursor-pointer">Home</span>
          <span>&gt;</span>
          <span className="text-[#C2376A] hover:underline cursor-pointer">Bridal Blouses</span>
          <span>&gt;</span>
          <span className="text-gray-700 font-semibold">Bridal Blouse</span>
        </nav>

        {/* 3-COLUMN MASTER LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* =========================================================
              COLUMN 1: LEFT GALLERY & DETAILS (~40% WIDTH)
          ========================================================== */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Product Image Container with cursor-tracking zoom lens */}
            <div 
              className="relative rounded-2xl overflow-hidden bg-white border border-[#EFE5EA] shadow-sm aspect-[4/4.8] cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img 
                src={selectedImg} 
                alt="Bridal Blouse Back Design" 
                className="w-full h-full object-cover transition-transform duration-75"
                style={{
                  transform: isZoomed ? "scale(2)" : "scale(1)",
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                }}
              />
              {/* Heart Wishlist Button */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#D64578] hover:scale-105 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </button>
            </div>

            {/* 5 Thumbnails Grid */}
            <div className="grid grid-cols-5 gap-2.5">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImg(img)}
                  className={`aspect-square rounded-xl overflow-hidden bg-white cursor-pointer transition ${
                    selectedImg === img ? "border-2 border-[#D64578] shadow-2xs" : "border border-gray-200 opacity-80 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Pill-Style Tabs (Not Underlined) */}
            <div className="pt-2 flex items-center gap-3">
              <button 
                onClick={() => setActiveTab("details")}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition border ${
                  activeTab === "details" 
                    ? "bg-white border-gray-200 text-gray-800 shadow-2xs" 
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                Blouse Details
              </button>
              <button 
                onClick={() => setActiveTab("reviews")}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition border ${
                  activeTab === "reviews" 
                    ? "bg-[#FDF2F7] border-[#FBCFE0] text-[#C2376A]" 
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                Customer Reviews
              </button>
            </div>

            {/* Product Description */}
            <div className="text-[15px] text-gray-600 leading-relaxed pt-1">
              {activeTab === "details" ? (
                <p>
                  Exquisite maroon bridal blouse embellished with rich gold embroidery, sequins and beads for your special day. Back tie up with gold tassels and elegant sleeves. <span className="text-[#D64578]">♥</span>
                </p>
              ) : (
                <p className="text-gray-400 italic">No reviews posted yet for this selection.</p>
              )}
            </div>

            {/* Size Guide Outline Button */}
            <div className="pt-1">
              <button className="inline-flex items-center gap-1.5 bg-white border border-[#FBCFE0] hover:border-[#D64578] text-[#C2376A] px-3.5 py-1.5 rounded-lg text-sm font-semibold transition shadow-2xs">
                <span>View Size Guide:</span>
                <span className="text-base leading-none">&gt;</span>
              </button>
            </div>

          </div>

          {/* =========================================================
              COLUMN 2: CENTER PRICING & SERVICE BADGES (~25% WIDTH)
          ========================================================== */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Title & Reviews */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Bridal Blouse</h1>
              <div className="flex items-center gap-1 mt-1.5 text-sm">
                <div className="flex text-amber-400 tracking-tighter">★★★★★</div>
                <span className="font-bold text-gray-800 ml-1">4.8</span>
                <span className="text-gray-400 font-medium">(321 Reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl md:text-4xl font-black text-gray-900 pt-1">₹1,199</div>

            {/* Book Stitching Action CTA */}
            {/* <button className="w-full bg-[#D64578] hover:bg-[#c23b6c] text-white py-3 rounded-xl font-bold text-base shadow-sm transition">
              Book Stitching
            </button> */}

            {/* Delivery & Service Split Box */}
            <div className="bg-white border border-[#EFE5EA] rounded-2xl p-4 space-y-3 shadow-2xs text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#D64578] mt-0.5 text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3.75 3.75 0 007.5 0h.375a3.75 3.75 0 003.75-3.75V15z" />
                    <path d="M15 6.75a.75.75 0 01.75-.75h2.25a.75.75 0 01.53.22l2.72 2.72a.75.75 0 01.22.53v4.29a.75.75 0 01-.75.75H15V6.75z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-gray-700">Free pickup &amp; delivery</h4>
                  <p className="text-gray-400 text-xs mt-0.5">in 7–10 days</p>
                </div>
              </div>
              
              <div className="w-full border-t border-dashed border-gray-200"></div>

              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5 text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-gray-700">Services available in</h4>
                  <p className="text-[#D64578] font-bold text-xs mt-0.5">Hyderabad</p>
                </div>
              </div>
            </div>

            {/* 10% OFF Yellow Saffron Plate */}
            <div className="bg-[#FFF6E9] border border-[#FDE5C8] rounded-xl p-3 flex items-center justify-between text-sm">
              <div className="font-bold text-[#D35B13] flex items-center gap-1.5">
                <span>👑</span> 10% OFF
              </div>
              <div className="text-xs text-[#A6704E] font-medium text-right leading-tight">
                <p>USE 30</p>
                <p>on Your 1st Order</p>
              </div>
            </div>

            {/* Divided Guarantees Checklist Card */}
            <div className="bg-white border border-[#EFE5EA] rounded-2xl divide-y divide-gray-100 overflow-hidden shadow-2xs text-sm text-gray-600">
              <div className="p-3.5 flex items-center gap-3">
                <span className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-gray-800">Pan India delivery:</span>{" "}
                  <span className="text-gray-400">Free home measurements</span>
                </div>
              </div>

              <div className="p-3.5 flex items-center gap-3">
                <span className="text-[#D64578]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                    <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A3.75 3.75 0 011.125 18.75V9.75C1.125 7.679 2.804 6 4.875 6z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-gray-800">7,000+ Top Rated</span>{" "}
                  <span className="text-gray-400">Tailors</span>
                </div>
              </div>

              <div className="p-3.5 flex items-center gap-3">
                <span className="text-[#D64578]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-gray-800">Free Pickup &amp; Delivery</span>{" "}
                  <span className="text-gray-400">100% Perfect Fit Guarantee</span>
                </div>
              </div>
            </div>

            {/* Bottom Gray Disclaimers with Micro Icons */}
            <div className="space-y-1.5 text-xs text-gray-400 font-medium pt-1 pl-1">
              <div className="flex items-center gap-2">
                <span className="w-3 text-center">🔔</span>
                <span>Read fabric instructions before washing.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-center">⏱️</span>
                <span>100% exact design fitting guarantee.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-center">🧵</span>
                <span>Verified tailor stitching services.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-center">✂️</span>
                <span>Expert and premium tailoring quality.</span>
              </div>
            </div>

          </div>

          {/* =========================================================
              COLUMN 3: RIGHT SIDEBAR CUSTOM CONFIGURATION (~35% WIDTH)
          ========================================================== */}
          <div className="lg:col-span-3 bg-white border border-[#E8DCE1] rounded-[1rem] p-5 md:p-6 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-lg font-bold text-[#C2376A] mb-4 text-left">
              Book Your Custom Stitching
            </h2>

            {/* Standalone City Dropdown (Top) */}
            <div className="mb-4">
              <div className="relative">
                <select className="w-full bg-[#FCF8FA] border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#D64578] cursor-pointer">
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                </select>
                <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 6 Sizing Dropdown Inputs with Exact Visual Dual-Caret Representation */}
            <div className="space-y-3.5">
              {sizingOptions.map((item, idx) => (
                <div key={idx} className="space-y-1 text-left">
                  <label className="block text-[13px] font-semibold text-gray-600">
                    {item.label}
                  </label>
                  
                  {/* Outer Wrapper Box */}
                  <div className="relative w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 flex items-center justify-between shadow-2xs hover:border-gray-300 transition">
                    
                    {/* Left Content: Value + Unit + Inner Down Arrow */}
                    <div className="flex items-center gap-1 text-sm pointer-events-none">
                      <span className="font-bold text-gray-900">{item.value}</span>
                      {item.unit && <span className="text-gray-500 font-normal">{item.unit}</span>}
                      {item.hasInnerCaret && (
                        <span className="text-gray-400 text-xs ml-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      )}
                    </div>

                    {/* Right Content: Far-Right Dropdown Arrow */}
                    <div className="text-gray-400 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>

                    {/* Functional Native Select Underneath */}
                    <select className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                      <option>{item.value} {item.unit}</option>
                    </select>

                  </div>
                </div>
              ))}
            </div>

            {/* Proceed to Checkout Button */}
            <button className="w-full bg-[#D64578] hover:bg-[#c23b6c] text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider mt-6 shadow-sm transition">
              Proceed to Checkout
            </button>

            {/* Bottom 3 Icons Footer inside Card */}
            <div className="grid grid-cols-3 gap-1 mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium text-center leading-tight">
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-base">🚚</span>
                <span>Delivery Services</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-base">🔄</span>
                <span>Free Pickup &amp; Delivery</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-base">✨</span>
                <span>Premium Fit Guarantee</span>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================
            BOTTOM RECOMMENDATIONS: CUSTOMER ALSO VIEWED
        ========================================================== */}
        <section className="mt-16 pt-8 border-t border-gray-200/60">
          
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#C2376A] tracking-tight">
              Customer Also Viewed
            </h3>
          </div>

          {/* Product Cards Grid matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-200/80 p-2.5 shadow-2xs flex flex-col justify-between group transition hover:shadow-sm"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-[4/3.8] bg-[#FDF8FA] rounded-xl overflow-hidden mb-3">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "#FCE8F0";
                      }}
                    />
                    
                    {/* Top-Right Heart Wishlist Button */}
                    <button className="absolute top-2 right-2 w-7 h-7 bg-white/95 rounded-full flex items-center justify-center text-[#D64578] shadow-2xs hover:scale-110 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </button>
                  </div>

                  {/* Product Meta Info */}
                  <div className="px-1 space-y-1">
                    <h4 className="text-sm font-bold text-gray-800 truncate">{item.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-gray-900">{item.price}</span>
                      
                      {/* Rating with Star */}
                      <div className="flex items-center gap-0.5 text-xs font-bold text-gray-500">
                        <span className="text-[#F59E0B] text-sm">★</span>
                        <span>{item.rating} <span className="font-normal text-gray-400">({item.count})</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card CTA */}
                <div className="px-1 mt-3">
                  <button className="w-full bg-[#D64578] hover:bg-[#c23b6c] text-white text-sm font-bold py-2 rounded-xl shadow-2xs transition">
                    Book Stitching
                  </button>
                </div>

              </div>
            ))}
          </div>

        </section>

      </div>
    </main>
    <Footer />
    </>
  );
}