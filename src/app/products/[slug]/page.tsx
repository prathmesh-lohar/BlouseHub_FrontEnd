"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import { useState } from "react";

export default function ExactBridalBlouseProductPage() {
  const images = [
    "/images/bridal_blouse_pink.png",
    "/images/designer_blouse_white.png",
    "/images/gold_embroidery_blouse.png",
    "/images/trendy_blouse_blue.png",
    "/images/designer_blouse_white.png",
  ];
  
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("about"); // about, details, reviews, size
  const [measurementTab, setMeasurementTab] = useState("ai"); // ai, manual
  const [selectedLocation, setSelectedLocation] = useState("Hyderabad");

  // Image zoom state tracking
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handlePrevImage = () => {
    const idx = images.indexOf(selectedImg);
    const prevIdx = (idx - 1 + images.length) % images.length;
    setSelectedImg(images[prevIdx]);
  };

  const handleNextImage = () => {
    const idx = images.indexOf(selectedImg);
    const nextIdx = (idx + 1) % images.length;
    setSelectedImg(images[nextIdx]);
  };

  // Interactive measurements state
  const [measurements, setMeasurements] = useState({
    "Bust Size": "34",
    "Waist Size": "28",
    "Shoulder Width": "14",
    "Blouse Length": "14",
    "Sleeve Style": "Short Sleeves",
    "Sleeve Length": "10",
  });

  // Dropdown sizing configurations matching the screenshot
  const sizingOptions = [
    { label: "Bust Size", value: "34", unit: "inches", hasInnerCaret: true },
    { label: "Waist Size", value: "28", unit: "inches", hasInnerCaret: true },
    { label: "Shoulder Width", value: "14", unit: "inches", hasInnerCaret: true },
    { label: "Blouse Length", value: "14", unit: "inches", hasInnerCaret: true },
    { label: "Sleeve Style", value: "Short Sleeves", unit: "", hasInnerCaret: false },
    { label: "Sleeve Length", value: "10", unit: "inches", hasInnerCaret: true },
  ];

  const dropdownOptions = {
    "Bust Size": ["30", "32", "34", "36", "38", "40", "42"],
    "Waist Size": ["24", "26", "28", "30", "32", "34", "36"],
    "Shoulder Width": ["12", "13", "14", "15", "16"],
    "Blouse Length": ["12", "13", "14", "15", "16"],
    "Sleeve Style": ["Short Sleeves", "Elbow Length", "3/4 Sleeves", "Full Sleeves", "Sleeveless"],
    "Sleeve Length": ["4", "5", "6", "7", "8", "9", "10", "11", "12"],
  };

  // Related products
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
      <main className="min-h-screen bg-[#FFFDFE] text-[#2D2D2D] antialiased p-4 md:p-8 font-sans">
        <div className="max-w-7xl mx-auto">
          
          {/* BREADCRUMB NAVIGATION */}
          <nav className="text-xs font-semibold tracking-wide text-gray-500 mb-6 flex items-center gap-2">
            <span className="text-[#9C003C] hover:underline cursor-pointer">Home</span>
            <span className="text-gray-400 font-normal">&gt;</span>
            <span className="text-[#9C003C] hover:underline cursor-pointer">Bridal Blouses</span>
            <span className="text-gray-400 font-normal">&gt;</span>
            <span className="text-gray-800 font-bold">Bridal Blouse</span>
          </nav>

          {/* 3-COLUMN MASTER LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* =========================================================
                COLUMN 1: LEFT GALLERY & DETAILS (~42% WIDTH)
            ========================================================== */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Main Product Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#EFE5EA] shadow-xs aspect-[4/4.8]">
                
                {/* Image zoom wrapper */}
                <div 
                  className="w-full h-full overflow-hidden cursor-zoom-in relative"
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setIsZoomed(false)}
                >
                  <img 
                    src={selectedImg} 
                    alt="Bridal Blouse Pink design" 
                    className="w-full h-full object-cover transition-transform duration-75"
                    style={{
                      transform: isZoomed ? "scale(2.2)" : "scale(1)",
                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                    }}
                  />
                </div>

                {/* Bestseller Badge */}
                <div className="absolute top-4 left-4 bg-[#9E0D49] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-xs">
                  Bestseller
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-gray-500 hover:text-[#9E0D49] hover:scale-105 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>

                {/* Left/Right Carousel Nav Arrows */}
                <button 
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-3 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white text-gray-700 hover:scale-105 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white text-gray-700 hover:scale-105 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* View in 3D Button */}
                <button className="absolute bottom-4 left-4 bg-white/95 text-gray-800 text-xs font-bold px-3.5 py-2 rounded-full shadow-md flex items-center gap-1.5 hover:bg-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-gray-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
                  </svg>
                  <span>View in 3D</span>
                </button>

              </div>

              {/* 5 Thumbnails Grid */}
              <div className="grid grid-cols-5 gap-2.5">
                {images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedImg(img)}
                    className={`aspect-[4/4.8] rounded-xl overflow-hidden bg-white cursor-pointer transition-all border-2 ${
                      selectedImg === img ? "border-[#9E0D49] scale-[1.02] shadow-xs" : "border-[#EFE5EA] hover:border-gray-300 opacity-90 hover:opacity-100"
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

              {/* Underline Tabs Selector */}
              <div className="pt-2">
                <div className="flex items-center gap-6 border-b border-gray-200">
                  {[
                    { id: "about", label: "About This Blouse" },
                    { id: "details", label: "Details & Fabric" },
                    { id: "reviews", label: "Customer Reviews (321)" },
                    { id: "size", label: "Size Guide" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2.5 text-[14px] font-bold transition-all relative ${
                        activeTab === tab.id 
                          ? "text-[#9E0D49]" 
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E0D49]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Contents */}
                <div className="pt-4 text-[14px] text-gray-600 leading-relaxed min-h-[60px]">
                  {activeTab === "about" && (
                    <p>
                      Exquisite maroon bridal blouse embellished with rich gold embroidery, sequins and beads for your special day. Back tie up with gold tassels and elegant sleeves.
                    </p>
                  )}
                  {activeTab === "details" && (
                    <p>
                      Premium raw silk blend fabric featuring meticulous hand embroidery. Best paired with ethnic bridal sarees. Dry clean only.
                    </p>
                  )}
                  {activeTab === "reviews" && (
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400 text-sm">★★★★★</div>
                      <span className="font-bold text-gray-800">4.8 out of 5</span>
                      <span className="text-gray-400 font-medium">(321 verified buyer ratings)</span>
                    </div>
                  )}
                  {activeTab === "size" && (
                    <p>
                      Check custom sizing options in the checkout column. Free sizing re-fitting is covered by our fit guarantee services.
                    </p>
                  )}
                </div>
              </div>

              {/* Horizontal features container with pink borders */}
              <div className="border border-[#F5D6E2] bg-[#FFF8FA] rounded-2xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center space-y-1.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#F5D6E2] flex items-center justify-center text-[#9E114D]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 0 0 11.75 18h.5a3 3 0 0 0 2.22-1.878M9.53 16.122a3 3 0 0 1-1.03-3.486l.78-2.6A3 3 0 0 1 12.16 8h1.68a3 3 0 0 1 2.88 2.036l.78 2.6a3 3 0 0 1-1.03 3.486M9.53 16.122a3 3 0 0 0 4.94 0" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-none">Premium Fabric</span>
                  <span className="text-[10px] text-gray-500 font-medium">Silk Blend</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 border-l border-pink-100/60 pl-2">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#F5D6E2] flex items-center justify-center text-[#9E114D]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-none">Hand Embroidered</span>
                  <span className="text-[10px] text-gray-500 font-medium">With Love</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 border-l border-pink-100/60 pl-2">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#F5D6E2] flex items-center justify-center text-[#9E114D]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-none">Perfect Fit</span>
                  <span className="text-[10px] text-gray-500 font-medium">Tailored for you</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 border-l border-pink-100/60 pl-2">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#F5D6E2] flex items-center justify-center text-[#9E114D]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-none">Quality Assured</span>
                  <span className="text-[10px] text-gray-500 font-medium">100% Guarantee</span>
                </div>
              </div>

            </div>

            {/* =========================================================
                COLUMN 2: CENTER PRICING & SERVICE DETAILS (~27% WIDTH)
            ========================================================== */}
            <div className="lg:col-span-3 space-y-5">
              
              {/* Premium Collection Pill */}
              <div className="bg-[#FFF0F4] text-[#9E0D49] border border-[#FBCFE0] text-[11px] font-bold px-3 py-1 rounded-full w-fit tracking-wide uppercase">
                Premium Collection
              </div>

              {/* Title & Reviews */}
              <div>
                <h1 className="text-4xl font-bold font-serif text-gray-900 tracking-tight leading-tight">
                  Bridal Blouse
                </h1>
                <div className="flex items-center gap-1.5 mt-2 text-sm">
                  <div className="flex text-[#F59E0B] tracking-tighter">
                    ★★★★★
                  </div>
                  <span className="font-bold text-gray-800 ml-1">4.8</span>
                  <span className="text-gray-400 font-semibold">(321 Reviews)</span>
                </div>
              </div>

              {/* Pricing Tags */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-4xl font-extrabold text-[#9C003C] tracking-tight">
                  ₹1,199
                </span>
                <span className="text-lg text-gray-400 line-through font-semibold">
                  ₹1,499
                </span>
                <span className="bg-[#FFF0F4] text-[#9E0D49] border border-[#FBCFE0] text-xs font-bold px-2 py-0.5 rounded">
                  20% OFF
                </span>
              </div>

              {/* Safe & Secure Payment green pill */}
              <div className="bg-[#EBF7F2] text-[#107C41] border border-[#C6ECD9] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                </svg>
                <span>Safe & Secure Payments</span>
                <span className="text-emerald-300">•</span>
                <span>Easy Returns</span>
              </div>

              {/* Delivery info box */}
              <div className="bg-white border border-[#F0E4EC] rounded-2xl p-4 divide-y divide-[#F0E4EC]/60 shadow-2xs text-sm">
                <div className="pb-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF0F4] flex items-center justify-center text-[#9E0D49] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19.5 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-7.487-1.875a6.705 6.705 0 0 1 9.475 0M3 16.5h15.75m-1.5-12h-8.25a.75.75 0 0 0-.75.75v10.5h9.75V5.25a.75.75 0 0 0-.75-.75Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Free pickup & delivery</h4>
                    <p className="text-gray-400 text-xs font-semibold mt-0.5">in 7–10 days</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Services available in</h4>
                    <p className="text-[#9E0D49] font-bold text-xs mt-0.5">Hyderabad</p>
                  </div>
                </div>
              </div>

              {/* Coupon card */}
              <div className="bg-[#FFF7F3] border border-dashed border-[#FCDDCC] rounded-xl p-3.5 flex items-center justify-between text-sm">
                <div className="font-bold text-[#D35B13] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                  <span>10% OFF</span>
                </div>
                <div className="text-right">
                  <div className="border border-dashed border-[#F5C2A9] bg-[#FFF0E8] text-[#D35B13] font-extrabold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wide inline-block">
                    USE CODE: WEDDING10
                  </div>
                  <p className="text-[10px] text-[#A6704E] font-bold mt-1">on your 1st order</p>
                </div>
              </div>

              {/* Guarantees checklist card */}
              <div className="bg-white border border-[#F0E4EC] rounded-2xl divide-y divide-gray-100 overflow-hidden shadow-2xs text-sm">
                <div className="p-3.5 flex items-center gap-3">
                  <span className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-gray-700">Pan India Delivery</span>
                    <span className="text-gray-400 font-semibold block text-xs">Free home measurements</span>
                  </div>
                </div>

                <div className="p-3.5 flex items-center gap-3">
                  <span className="text-[#9E0D49]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-[#9E0D49]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a3 3 0 1 1-6 0c0-1.657 2.686-3 6-3s6 1.343 6 3a3 3 0 0 1-6 0zm-8.22 8.44a9 9 0 0 0 16.44 0l-8.22-3-8.22 3z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-gray-700">7,000+ Top Rated</span>
                    <span className="text-gray-400 font-semibold block text-xs">Tailors</span>
                  </div>
                </div>

                <div className="p-3.5 flex items-center gap-3">
                  <span className="text-[#9E0D49]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-[#9E0D49]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-gray-700">Free Pickup & Delivery</span>
                    <span className="text-gray-400 font-semibold block text-xs">100% Perfect Fit Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Stacked list disclaimers */}
              <div className="space-y-2 text-xs text-gray-500 font-semibold pl-1">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[10px]">🔔</span>
                  <span>Read fabric instructions before washing.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[10px]">✓</span>
                  <span>100% exact design fitting guarantee.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-[10px]">🧵</span>
                  <span>Verified tailor stitching services.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px]">🛡️</span>
                  <span>Expert & premium tailoring quality.</span>
                </div>
              </div>

              {/* Not sure about size card */}
              <div className="bg-[#FFF6F9] border border-[#F7E1E8] rounded-2xl p-4 space-y-3.5">
                <div className="flex items-start gap-3">
                  <span className="text-[#9E0D49] mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15 8.19 14.187 9 9l.813 5.187 5.096.813-5.096.904zM19.006 5.005l-.505 2.502-2.502.505 2.502.505.505 2.502.505-2.502 2.502-.505-2.502-.505-.505-2.502z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Not sure about your size?</h4>
                    <p className="text-gray-400 text-xs font-semibold mt-0.5">
                      Try AI measurement for the perfect fit
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setMeasurementTab("ai")}
                  className="w-full bg-[#9E0D49] hover:bg-[#8D0E44] text-white py-2.5 rounded-xl font-bold text-sm shadow-xs transition"
                >
                  Try AI Measurement
                </button>
              </div>

            </div>

            {/* =========================================================
                COLUMN 3: RIGHT CUSTOM STITCHING SIDEBAR (~31% WIDTH)
            ========================================================== */}
            <div className="lg:col-span-4 bg-white border border-[#E8DCE1] rounded-[1.25rem] p-5 md:p-6 shadow-sm space-y-5 lg:sticky lg:top-6">
              
              {/* Header Title */}
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <span className="text-[#9C003C]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 0 0 11.75 18h.5a3 3 0 0 0 2.22-1.878M9.53 16.122a3 3 0 0 1-1.03-3.486l.78-2.6A3 3 0 0 1 12.16 8h1.68a3 3 0 0 1 2.88 2.036l.78 2.6a3 3 0 0 1-1.03 3.486M9.53 16.122a3 3 0 0 0 4.94 0" />
                  </svg>
                </span>
                <h2 className="text-[17px] font-bold text-[#9C003C] font-serif">
                  Book Your Custom Stitching
                </h2>
              </div>

              {/* Select Location Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold tracking-wide uppercase text-gray-400">
                  Select Location
                </label>
                <div className="relative">
                  <select 
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-[#FCF8FA] border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#9E0D49] cursor-pointer shadow-2xs"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Your Measurements Tab Switcher */}
              <div className="space-y-2">
                <label className="block text-[13px] font-bold text-gray-700">
                  Your Measurements
                </label>
                
                <div className="flex border border-gray-200 rounded-xl p-0.5 bg-gray-50/50">
                  <button
                    onClick={() => setMeasurementTab("manual")}
                    className={`w-1/2 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                      measurementTab === "manual"
                        ? "bg-white text-gray-800 shadow-xs border border-gray-200"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    Manual Input
                  </button>

                  <button
                    onClick={() => setMeasurementTab("ai")}
                    className={`relative w-1/2 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                      measurementTab === "ai"
                        ? "bg-white text-[#9C003C] shadow-xs border border-[#FBCFE0]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    AI Measurement
                    <span className="absolute -top-1.5 -right-1 bg-red-600 text-white text-[8px] font-extrabold px-1 py-0.5 rounded-full uppercase tracking-wider scale-90">
                      New
                    </span>
                  </button>
                </div>
              </div>

              {/* AI Body Measurement Detail Card */}
              {measurementTab === "ai" && (
                <div className="border border-[#F5D6E2] rounded-xl p-4 bg-[#FFF8FA]/40 space-y-4 animate-fade-in-up">
                  
                  {/* Title Sparkles */}
                  <div className="flex gap-2">
                    <span className="text-[#9E0D49] mt-0.5 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-5 h-5 text-[#9E0D49]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15 8.19 14.187 9 9l.813 5.187 5.096.813-5.096.904zM19.006 5.005l-.505 2.502-2.502.505 2.502.505.505 2.502.505-2.502 2.502-.505-2.502-.505-.505-2.502z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-extrabold text-[#9C003C] text-sm leading-tight">
                        AI Body Measurement
                      </h4>
                      <p className="text-gray-400 text-[11px] font-semibold mt-0.5 leading-snug">
                        Get accurate measurements using AI technology
                      </p>
                    </div>
                  </div>

                  {/* Bullet points checks */}
                  <ul className="space-y-2 text-xs font-semibold text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 font-extrabold">✓</span>
                      <span>Just 2 photos required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 font-extrabold">✓</span>
                      <span>AI measures 20+ points</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 font-extrabold">✓</span>
                      <span>95% accuracy guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 font-extrabold">✓</span>
                      <span>Total time: 2 minutes</span>
                    </li>
                  </ul>

                  {/* CTA button inside */}
                  <button className="w-full bg-[#9E0D49] hover:bg-[#8D0E44] text-white py-2.5 rounded-xl font-bold text-xs tracking-wide shadow-xs transition">
                    Start AI Measurement
                  </button>

                  {/* Help link */}
                  <div className="text-center pt-0.5">
                    <a href="#how" className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-gray-700">
                      <span>ℹ️</span>
                      <span className="underline">How it works?</span>
                    </a>
                  </div>

                </div>
              )}

              {/* Sizing dropdown selectors stacked */}
              <div className="space-y-3.5">
                {sizingOptions.map((item, idx) => {
                  const currentValue = measurements[item.label as keyof typeof measurements] || item.value;
                  return (
                    <div key={idx} className="space-y-1 text-left">
                      <label className="block text-[13px] font-bold text-gray-700">
                        {item.label}
                      </label>
                      
                      {/* Custom dropdown styling with double carets */}
                      <div className="relative w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center justify-between shadow-2xs hover:border-gray-300 transition">
                        
                        {/* Left Side: Value + Unit + Inner arrow */}
                        <div className="flex items-center gap-1.5 text-sm pointer-events-none">
                          <span className="font-extrabold text-gray-900">{currentValue}</span>
                          {item.unit && (
                            <span className="text-gray-400 font-bold text-xs">{item.unit}</span>
                          )}
                          {item.hasInnerCaret && (
                            <span className="text-gray-400 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-2.5 h-2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                            </span>
                          )}
                        </div>

                        {/* Far-Right Side: Dropdown caret arrow */}
                        <div className="text-gray-400 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>

                        {/* Absolute hidden select wrapper to handle native browser functionality */}
                        <select 
                          value={currentValue}
                          onChange={(e) => setMeasurements({ ...measurements, [item.label]: e.target.value })}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        >
                          {dropdownOptions[item.label as keyof typeof dropdownOptions].map((opt) => (
                            <option key={opt} value={opt}>
                              {opt} {item.unit}
                            </option>
                          ))}
                        </select>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Proceed to Checkout CTA */}
              <button className="w-full bg-[#9E0D49] hover:bg-[#8D0E44] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider mt-6 shadow-sm hover:scale-[1.01] transition-all">
                Proceed to Checkout
              </button>

              {/* Trust Badges bottom line */}
              <div className="grid grid-cols-4 gap-1 mt-6 pt-4 border-t border-gray-100 text-[10px] text-gray-500 font-bold text-center leading-snug">
                <div className="flex flex-col items-center gap-1 justify-between h-full">
                  <span className="text-lg">🔒</span>
                  <span>Secure Payment</span>
                </div>
                <div className="flex flex-col items-center gap-1 justify-between h-full border-l border-gray-100">
                  <span className="text-lg">🔄</span>
                  <span>Easy Returns</span>
                </div>
                <div className="flex flex-col items-center gap-1 justify-between h-full border-l border-gray-100">
                  <span className="text-lg">🚚</span>
                  <span>On-time Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-1 justify-between h-full border-l border-gray-100">
                  <span className="text-lg">🛡️</span>
                  <span>Premium Quality</span>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================
              BOTTOM RECOMMENDATIONS: CUSTOMER ALSO VIEWED
          ========================================================== */}
          <section className="mt-16 pt-8 border-t border-gray-200/60">
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#9C003C] tracking-tight font-serif">
                Customer Also Viewed
              </h3>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {relatedProducts.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-gray-200/80 p-2.5 shadow-2xs flex flex-col justify-between group transition hover:shadow-xs hover:border-[#FBCFE0]"
                >
                  <div>
                    {/* Card Image Container */}
                    <div className="relative aspect-[4/4.5] bg-[#FDF8FA] rounded-xl overflow-hidden mb-3">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = "#FCE8F0";
                        }}
                      />
                      
                      {/* Top-Right Heart Wishlist Button */}
                      <button className="absolute top-2 right-2 w-7 h-7 bg-white/95 rounded-full flex items-center justify-center text-gray-400 hover:text-[#9E0D49] shadow-2xs hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                      </button>
                    </div>

                    {/* Product Meta Info */}
                    <div className="px-1 space-y-1">
                      <h4 className="text-sm font-bold text-gray-800 truncate">{item.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-[#9C003C]">{item.price}</span>
                        
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
                    <button className="w-full bg-[#9E0D49] hover:bg-[#8D0E44] text-white text-xs font-bold py-2 rounded-xl shadow-2xs transition">
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