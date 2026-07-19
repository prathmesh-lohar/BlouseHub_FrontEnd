"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Product interfaces
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  category: "Party Wear" | "Simple" | "Traditional" | "Back Designs";
  color: "Red" | "Pink" | "Green" | "Blue" | "Purple" | "Yellow" | "Orange" | "Black" | "White" | "Beige" | "Grey" | "Maroon";
  sleeve: "Short Sleeves" | "Sleeveless" | "Half Sleeves" | "Full Sleeves";
  neck: "Round Neck" | "V Neck" | "Boat Neck" | "Square Neck" | "High Neck";
  label: string;
  isNew?: boolean;
  showWishlist?: boolean;
}

// Custom Checkbox Component matching pixel-perfect pink mockup checkboxes
function CustomCheckbox({
  checked,
  onChange,
  label
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-2.5 text-xs font-sans text-[#4A4A4A] cursor-pointer hover:text-primary transition-colors select-none">
      <div
        onClick={onChange}
        className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
          checked
            ? "bg-primary border-primary text-white"
            : "border-[#D5BCC9] bg-white hover:border-primary-light"
        }`}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="4.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        )}
      </div>
      <span className="font-sans font-medium text-[#4A4A4A]">{label}</span>
    </label>
  );
}

// Initial products data configured to match screenshot
const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Bridal Blouse",
    price: 1199,
    rating: 4.8,
    reviewsCount: 407,
    images: ["/images/bridal_blouse_pink.png"],
    category: "Party Wear",
    color: "Red",
    sleeve: "Half Sleeves",
    neck: "Round Neck",
    label: "BRIDAL BLOUSE",
    isNew: true
  },
  {
    id: 2,
    name: "Trendy Blouse",
    price: 1199,
    rating: 4.8,
    reviewsCount: 287,
    images: ["/images/trendy_blouse_blue.png"],
    category: "Party Wear",
    color: "Red",
    sleeve: "Sleeveless",
    neck: "Round Neck",
    label: "TRENDY BLOUSE",
    isNew: true
  },
  {
    id: 3,
    name: "Bridal Blouse",
    price: 1119,
    rating: 4.8,
    reviewsCount: 327,
    images: ["/images/bridal_blouse_pink.png", "/images/designer_blouse_white.png"],
    category: "Party Wear",
    color: "Red",
    sleeve: "Half Sleeves",
    neck: "Round Neck",
    label: "BRIDAL BLOUSE",
    showWishlist: true // Match the screenshot's right column Wishlist button
  },
  {
    id: 4,
    name: "White & Gold Blouse",
    price: 1249,
    rating: 4.7,
    reviewsCount: 213,
    images: ["/images/designer_blouse_white.png"],
    category: "Party Wear",
    color: "Red",
    sleeve: "Half Sleeves",
    neck: "Boat Neck",
    label: "BRIDAL BLOUSE"
  },
  {
    id: 5,
    name: "Pink Embroidered Blouse",
    price: 1199,
    rating: 4.8,
    reviewsCount: 198,
    images: ["/images/bridal_blouse_pink.png"],
    category: "Party Wear",
    color: "Red",
    sleeve: "Half Sleeves",
    neck: "Round Neck",
    label: "BRIDAL BLOUSE"
  },
  // Other catalog items which show up when filters are cleared
  {
    id: 6,
    name: "Elegant Blue Blouse",
    price: 1399,
    rating: 4.9,
    reviewsCount: 145,
    images: ["/images/trendy_blouse_blue.png"],
    category: "Traditional",
    color: "Blue",
    sleeve: "Full Sleeves",
    neck: "Boat Neck",
    label: "TRENDY BLOUSE"
  },
  {
    id: 7,
    name: "Royal Golden Blouse",
    price: 1599,
    rating: 4.8,
    reviewsCount: 92,
    images: ["/images/gold_embroidery_blouse.png"],
    category: "Traditional",
    color: "Yellow",
    sleeve: "Half Sleeves",
    neck: "High Neck",
    label: "BRIDAL BLOUSE"
  },
  {
    id: 8,
    name: "Designer White Lace",
    price: 1099,
    rating: 4.6,
    reviewsCount: 112,
    images: ["/images/designer_blouse_white.png"],
    category: "Simple",
    color: "White",
    sleeve: "Sleeveless",
    neck: "V Neck",
    label: "PARTY WEAR BLOUSE"
  }
];

export default function ProductsPage() {
  const router = useRouter();
  // Top category tabs with icons
  const topTabs = [
    {
      name: "New Arrivals",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )
    },
    {
      name: "Popular",
      icon: (
        <svg className="w-3.5 h-3.5 text-orange-500 fill-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.7-.48-2.5 2.25-3.5 5.55-2.5 8.91.26.85.07 1.8-.5 2.51l-.26.32c-.79.98-1.88 2.05-1.68 3.97.2 1.98 1.44 3.75 3.32 4.43 3.9 1.42 8.29-1.07 8.29-5.18-.01-1.64-.8-3.08-1.96-4.25z" />
        </svg>
      )
    },
    {
      name: "Bridal",
      hasDropdown: true,
      icon: (
        <svg className="w-3.5 h-3.5 text-amber-600 fill-amber-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 6c2.7 0 5.8 1.1 6 3v2c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4v-2c.2-1.9 3.3-3 6-3zm3 8l3 5H5l3-5h7z" />
        </svg>
      )
    },
    {
      name: "Trendy",
      icon: (
        <svg className="w-3.5 h-3.5 text-pink-500 fill-pink-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.5 9.5L9 4L6.5 9.5L1 12L6.5 14.5L9 20L11.5 14.5L17 12L11.5 9.5Z" />
        </svg>
      )
    },
    {
      name: "Back Designs",
      icon: (
        <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      name: "Featured",
      icon: (
        <svg className="w-3.5 h-3.5 text-red-500 fill-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }
  ];
  const [activeTopTab, setActiveTopTab] = useState("New Arrivals");

  // Sidebar accordions expand states
  const [accordions, setAccordions] = useState({
    categories: true,
    bridal: true,
    colors: true,
    sleeveType: true,
    neckDesigns: true
  });

  const toggleAccordion = (key: keyof typeof accordions) => {
    setAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Pre-configured filter states to match the screenshot (Bridal - Party Wear, Colors - Red, Necks - Round Neck selected)
  const [selectedBridal, setSelectedBridal] = useState<string[]>(["Party Wear"]);
  const [selectedColors, setSelectedColors] = useState<string[]>(["Red"]);
  const [selectedSleeves, setSelectedSleeves] = useState<string[]>([]);
  const [selectedNecks, setSelectedNecks] = useState<string[]>(["Round Neck"]);

  // Wishlist state
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Sort dropdown value
  const [sortBy, setSortBy] = useState("Popularity");

  // Mobile filters drawer open/close state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Dynamic filter count calculation
  const activeFiltersCount = useMemo(() => {
    return selectedBridal.length + selectedColors.length + selectedNecks.length + selectedSleeves.length;
  }, [selectedBridal, selectedColors, selectedNecks, selectedSleeves]);

  // Clear all filters handler
  const handleClearAll = () => {
    setSelectedBridal([]);
    setSelectedColors([]);
    setSelectedSleeves([]);
    setSelectedNecks([]);
  };

  const handleBridalToggle = (val: string) => {
    setSelectedBridal((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };

  const handleColorToggle = (val: string) => {
    setSelectedColors((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };

  const handleSleeveToggle = (val: string) => {
    setSelectedSleeves((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };

  const handleNeckToggle = (val: string) => {
    setSelectedNecks((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dynamic Filtering Logic
  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter((product) => {
      // 1. Bridal subcategory Filter
      if (selectedBridal.length > 0 && !selectedBridal.includes(product.category)) {
        return false;
      }
      // 2. Color Filter
      if (selectedColors.length > 0 && !selectedColors.includes(product.color)) {
        return false;
      }
      // 3. Sleeve Filter
      if (selectedSleeves.length > 0 && !selectedSleeves.includes(product.sleeve)) {
        return false;
      }
      // 4. Neck Filter
      if (selectedNecks.length > 0 && !selectedNecks.includes(product.neck)) {
        return false;
      }
      return true;
    });
  }, [selectedBridal, selectedColors, selectedSleeves, selectedNecks]);

  // Color options list mapping exactly to the color selector grid in mockup
  const COLOR_GRID_ITEMS = [
    { name: "Red", count: 34, hex: "bg-red-600" },
    { name: "Pink", count: 52, hex: "bg-pink-500" },
    { name: "Green", count: 37, hex: "bg-emerald-600" },
    { name: "Blue", count: 21, hex: "bg-blue-600" },
    { name: "Purple", count: 28, hex: "bg-purple-600" },
    { name: "Yellow", count: 19, hex: "bg-yellow-400" },
    { name: "Orange", count: 16, hex: "bg-orange-500" },
    { name: "Black", count: 23, hex: "bg-black" },
    { name: "White", count: 18, hex: "bg-white border-slate-300" },
    { name: "Beige", count: 24, hex: "bg-[#E6D5C3]" },
    { name: "Grey", count: 17, hex: "bg-gray-500" },
    { name: "Maroon", count: 26, hex: "bg-red-900" }
  ];

  // Helper render method for filter sidebar content to reuse in Desktop and Mobile Drawer
  const renderFiltersContent = (isMobileDrawer: boolean = false) => {
    return (
      <div className="flex flex-col">
        {/* Filter Section Header (Inline) */}
        {!isMobileDrawer && (
          <div className="flex items-center justify-between py-2 mb-4 border-b border-[#F5E1EC]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              <span className="font-sans font-bold text-sm tracking-wide text-text-dark">FILTERS</span>
            </div>
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1 text-xs font-sans font-semibold text-primary hover:text-[#A8104E] cursor-pointer"
            >
              <span>Clear All</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          </div>
        )}

        {/* Filter Accordions */}
        <div className="space-y-5">
          
          {/* Accordion: Categories */}
          <div className="border-b border-[#F9E6F0] pb-3">
            <button
              onClick={() => toggleAccordion("categories")}
              className="w-full flex items-center justify-between font-sans font-bold text-xs text-text-dark py-1 cursor-pointer"
            >
              <span>Categories</span>
              <svg
                className={`w-4 h-4 text-[#888888] transition-transform duration-200 ${accordions.categories ? "" : "-rotate-90"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {accordions.categories && (
              <div className="mt-2 pl-1">
                <p className="text-[11px] font-sans font-medium text-text-light italic">Select a sub-category below</p>
              </div>
            )}
          </div>

          {/* Accordion: Bridal */}
          <div className="border-b border-[#F9E6F0] pb-3">
            <button
              onClick={() => toggleAccordion("bridal")}
              className="w-full flex items-center justify-between font-sans font-bold text-xs text-primary py-1 cursor-pointer"
            >
              <span>Bridal (550+)</span>
              <svg
                className={`w-4 h-4 text-primary transition-transform duration-200 ${accordions.bridal ? "" : "-rotate-90"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {accordions.bridal && (
              <div className="mt-3 pl-1 space-y-3">
                {[
                  { name: "Party Wear", count: 480 },
                  { name: "Simple", count: 350 },
                  { name: "Traditional", count: 410 },
                  { name: "Back Designs", count: 230 }
                ].map((item) => (
                  <CustomCheckbox
                    key={item.name}
                    label={`${item.name} (${item.count}+)`}
                    checked={selectedBridal.includes(item.name)}
                    onChange={() => handleBridalToggle(item.name)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Accordion: Colors */}
          <div className="border-b border-[#F9E6F0] pb-3">
            <button
              onClick={() => toggleAccordion("colors")}
              className="w-full flex items-center justify-between font-sans font-bold text-xs text-text-dark py-1 cursor-pointer"
            >
              <span>Colors</span>
              <svg
                className={`w-4 h-4 text-[#888888] transition-transform duration-200 ${accordions.colors ? "" : "-rotate-90"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {accordions.colors && (
              <div className="mt-3 grid grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
                {COLOR_GRID_ITEMS.map((item) => {
                  const isSelected = selectedColors.includes(item.name);
                  return (
                    <div
                      key={item.name}
                      onClick={() => handleColorToggle(item.name)}
                      className={`
                        flex items-center gap-2 p-1.5 rounded-xl border transition-all cursor-pointer select-none
                        ${isSelected
                          ? "border-primary bg-primary-bg"
                          : "border-[#F0D5E2] bg-white hover:bg-primary-bg/30"
                        }
                      `}
                    >
                      <div className={`w-4.5 h-4.5 rounded-md ${item.hex} shadow-sm border border-black/10 shrink-0 flex items-center justify-center relative`}>
                        {isSelected && (
                          <svg className={`w-2.5 h-2.5 ${item.name === "White" || item.name === "Yellow" ? "text-black" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="4.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </div>
                      <span className="font-sans font-semibold text-[11px] text-[#4A4A4A] truncate">
                        {item.name} <span className="text-[#888888] font-normal">({item.count})</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Accordion: Sleeve Type */}
          <div className="border-b border-[#F9E6F0] pb-3">
            <button
              onClick={() => toggleAccordion("sleeveType")}
              className="w-full flex items-center justify-between font-sans font-bold text-xs text-text-dark py-1 cursor-pointer"
            >
              <span>Sleeve Type</span>
              <svg
                className={`w-4 h-4 text-[#888888] transition-transform duration-200 ${accordions.sleeveType ? "" : "-rotate-90"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {accordions.sleeveType && (
              <div className="mt-3 pl-1 space-y-3">
                {["Short Sleeves", "Sleeveless", "Half Sleeves", "Full Sleeves"].map((item) => (
                  <CustomCheckbox
                    key={item}
                    label={item}
                    checked={selectedSleeves.includes(item)}
                    onChange={() => handleSleeveToggle(item)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Accordion: Neck Designs */}
          <div className="border-b border-[#F9E6F0] pb-3">
            <button
              onClick={() => toggleAccordion("neckDesigns")}
              className="w-full flex items-center justify-between font-sans font-bold text-xs text-text-dark py-1 cursor-pointer"
            >
              <span>Neck Designs</span>
              <svg
                className={`w-4 h-4 text-[#888888] transition-transform duration-200 ${accordions.neckDesigns ? "" : "-rotate-90"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {accordions.neckDesigns && (
              <div className="mt-3 pl-1 space-y-3">
                {[
                  { name: "Round Neck", count: 377 },
                  { name: "V Neck", count: 215 },
                  { name: "Boat Neck", count: 271 },
                  { name: "Square Neck", count: 291 },
                  { name: "High Neck", count: 230 }
                ].map((item) => (
                  <CustomCheckbox
                    key={item.name}
                    label={`${item.name} (${item.count})`}
                    checked={selectedNecks.includes(item.name)}
                    onChange={() => handleNeckToggle(item.name)}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Clear All Filters Button */}
        <button
          onClick={handleClearAll}
          className="w-full mt-6 bg-primary hover:bg-[#A8104E] text-white py-2.5 rounded-xl font-sans font-bold text-xs transition-all duration-300 shadow-md shadow-primary/20 cursor-pointer flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-white fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          <span>Clear All Filters</span>
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBanner />
      <Header />

      {/* Main product catalog layout */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Top tab navigation - Horizontal scrollable on touch devices */}
        <div className="border-b border-[#F5E1EC] pb-4 mb-6">
          <div className="flex overflow-x-auto gap-2.5 pb-2 scrollbar-none snap-x snap-mandatory">
            {topTabs.map((tab) => {
              const isSelected = activeTopTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTopTab(tab.name)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full font-sans font-bold text-xs shadow-sm transition-all cursor-pointer snap-start flex-shrink-0
                    ${isSelected
                      ? "bg-white border-2 border-primary text-primary shadow-md"
                      : "bg-white border border-[#EAD2DF] text-[#4A4A4A] hover:bg-primary-bg hover:border-primary-light"
                    }
                  `}
                >
                  <span className={isSelected ? "text-primary" : "text-[#888888]"}>
                    {tab.icon}
                  </span>
                  <span className="whitespace-nowrap">{tab.name}</span>
                  {tab.hasDropdown && (
                    <svg className="w-3.5 h-3.5 mt-0.5 text-[#888888]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Filter Control Bar - Visible only on mobile */}
        <div className="md:hidden flex items-center justify-between gap-3 w-full border-t border-b border-[#F5E1EC] py-3 mb-5">
          {/* Filters Toggle Button with Counter Badge */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5D0DD] bg-white text-xs font-sans font-bold text-[#2D2D2D] hover:bg-[#FDF9FB] cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-4.5 h-4.5 rounded-full bg-primary text-white text-[9px] font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort By controls top right */}
          <div className="flex items-center gap-2 text-xs font-sans">
            <span className="text-[#888888]">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none font-sans font-bold text-primary bg-white border border-[#E5D0DD] rounded-xl pl-3 pr-8 py-2 focus:outline-none cursor-pointer text-xs"
              >
                <option value="Popularity">Popularity</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest">Newest</option>
              </select>
              <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Outer Split Layout: Sidebar vs Grid */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Desktop Filter Sidebar - Hidden on Mobile */}
          <aside className="hidden md:block w-full md:w-64 flex-shrink-0">
            {renderFiltersContent(false)}
          </aside>

          {/* Sliding Mobile Filters Drawer Overlay - Visible only when toggled on Mobile */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 flex md:hidden">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/45 transition-opacity"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              {/* Slide panel */}
              <div className="relative flex flex-col w-full max-w-xs h-full bg-white p-5 overflow-y-auto shadow-2xl animate-slide-in">
                {/* Close Drawer Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-dark cursor-pointer rounded-full hover:bg-slate-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Filters Drawer Content */}
                <div className="mt-6">
                  {renderFiltersContent(true)}
                </div>
              </div>
            </div>
          )}

          {/* Main Grid Catalog Section */}
          <section className="flex-1">
            
            {/* Header Title (Inline) - Hidden Sort By on desktop side if viewport is wide, since we have it inline top */}
            <div className="flex items-center justify-between border-b border-[#F5E1EC] pb-4 mb-6">
              <h2 className="font-sans font-bold text-lg text-text-dark">
                {filteredProducts.length} Blouse Designs Found
              </h2>
              {/* Sort selector for desktop inline (hidden on mobile, since mobile has it in its mobile bar) */}
              <div className="hidden md:flex items-center gap-2 text-xs font-sans">
                <span className="text-[#888888]">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none font-sans font-bold text-primary bg-white border border-[#E5D0DD] rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:border-primary-light transition-all cursor-pointer text-xs"
                  >
                    <option value="Popularity">Popularity</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Newest">Newest</option>
                  </select>
                  <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Design grid - 2 columns on mobile, 3 columns on desktop */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-[#F5D8E8] shadow-sm">
                <svg className="w-16 h-16 text-primary-light mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <h3 className="font-sans font-bold text-lg text-text-dark mb-1">No Designs Found</h3>
                <p className="font-body text-sm text-text-muted max-w-sm mx-auto">Try clearing color or style options to view additional blouse items.</p>
                <button
                  onClick={handleClearAll}
                  className="mt-4 bg-primary hover:bg-[#A8104E] text-white px-5 py-2 rounded-full font-sans font-bold text-xs cursor-pointer shadow-md transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => {
                  const isWishlisted = wishlist.includes(product.id);

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-3xl border border-[#F2DFEA] shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-primary-light/40 transition-all duration-300"
                    >
                      {/* Product image area */}
                      <div className="relative overflow-hidden aspect-[4/5] bg-[#FDFBFD] border-b border-[#F5EAF1]">
                        
                        {/* Tags Badges (New badge top left) */}
                        {product.isNew && (
                          <span className="absolute top-3.5 left-3.5 bg-primary text-white text-[10px] font-sans font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                            New
                          </span>
                        )}

                        {/* Heart Wishlist Overlay Icon */}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#EBE3E8]"
                        >
                          <svg
                            className={`w-4 h-4 transition-colors ${
                              isWishlisted ? "fill-red-500 text-red-500" : "text-[#777777] hover:text-red-500"
                            }`}
                            fill={isWishlisted ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        </button>

                        {/* Blouse Image */}
                        <div className="w-full h-full p-2.5">
                          <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner relative">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover select-none"
                            />
                          </div>
                        </div>

                      </div>

                      {/* Description & booking row */}
                      <div className="p-3 md:p-4 pt-3 flex-grow flex flex-col justify-between">
                        
                        <div>
                          {/* Tag type label */}
                          <div className="font-sans font-bold text-[10px] tracking-wider text-primary mb-1">
                            {product.label}
                          </div>
                          
                          {/* Product name */}
                          <h3 className="font-sans font-bold text-xs md:text-sm text-text-dark leading-tight group-hover:text-primary transition-colors mb-1.5 truncate">
                            {product.name}
                          </h3>
                          
                          {/* Price & Star Rating row */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-sans font-bold text-sm md:text-[15px] text-text-dark">
                              ₹{product.price.toLocaleString("en-IN")}
                            </span>
                            
                            <div className="flex items-center gap-1">
                              <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-gold fill-gold" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="font-sans font-bold text-[10px] md:text-xs text-[#2D2D2D]">
                                {product.rating} <span className="text-[#888888] font-normal">({product.reviewsCount})</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Card actions: Book Stitching + cart OR wishlist button */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => router.push(`/products/${product.id}`)}
                            className="flex-grow bg-primary hover:bg-[#A8104E] text-white py-2 rounded-xl font-sans font-bold text-[10px] md:text-xs tracking-wide transition-all shadow-sm shadow-primary/10 hover:shadow-md cursor-pointer text-center truncate"
                          >
                            Book Stitching
                          </button>
                          
                          {product.showWishlist ? (
                            // Responsive Wishlist Button next to it (Card 3 in mockup)
                            <button
                              onClick={() => toggleWishlist(product.id)}
                              className="border border-[#E5D0DD] bg-white px-2.5 md:px-3 py-2 rounded-xl text-xs font-sans font-bold text-[#555555] hover:bg-primary-bg hover:text-primary transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                            >
                              <svg
                                className={`w-3.5 h-3.5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-[#777777]"}`}
                                fill={isWishlisted ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                              </svg>
                              <span className="hidden sm:inline">Wishlist</span>
                            </button>
                          ) : (
                            // Standard Shopping Cart button (Cards 1, 2, 4, 5 in mockup)
                            <button className="border border-[#E5D0DD] bg-white p-2 rounded-xl text-[#555555] hover:bg-primary-bg hover:text-primary transition-colors cursor-pointer flex items-center justify-center shrink-0 w-9 h-9 md:w-10 md:h-10">
                              <svg className="w-4 h-4 text-[#555555] hover:text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                              </svg>
                            </button>
                          )}
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}