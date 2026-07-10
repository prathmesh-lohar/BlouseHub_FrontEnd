export default function TopBanner() {
  return (
    <div className="bg-[#FFF0F5] border-b border-[#F9E0EC] py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12">
        {/* Item 1 */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-primary shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="font-sans font-semibold text-[11px] sm:text-xs text-[#2D2D2D] tracking-wide">
            Custom Made, Perfect Fit.
          </span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-primary shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m2.83 2.83a2 2 0 112.83 2.83M2 22l5-5m15-15l-9 9"
            />
          </svg>
          <span className="font-sans font-semibold text-[11px] sm:text-xs text-[#2D2D2D] tracking-wide">
            Made with Love in India
          </span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-primary shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="font-sans font-semibold text-[11px] sm:text-xs text-[#2D2D2D] tracking-wide">
            Premium Quality Fabrics
          </span>
        </div>
      </div>
    </div>
  );
}

