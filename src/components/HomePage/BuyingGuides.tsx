import React from "react";

const CarReviewCard = ({
  imageUrl,
  reviewText,
}: {
  imageUrl: string;
  reviewText: string;
}) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md overflow-hidden bg-white flex-shrink-0">
      <img
        className="w-full h-60 object-cover"
        src={imageUrl}
        alt={reviewText}
      />
      <div className="px-4 py-3 bg-[#EFE3F5] rounded-b-lg">
        <p className="text-sm font-medium text-gray-700 uppercase mb-1">
          Expert Guide
        </p>
        <p className="text-sm font-semibold text-gray-900">{reviewText}</p>
      </div>
    </div>
  );
};

const BuyingGuides = () => {
  return (
    <div className="bg-gray-50 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Buying Guides</h2>
          <button className="bg-[#7800B0] hover:bg-white hover:text-[#7800B0] hover:border-[#7800B0] border-2 border-transparent text-white rounded-full font-bold py-2 px-4 transition-colors duration-300">
            View all
          </button>
        </div>

        {/* Wrapper for cards + arrows */}
        <div className="relative">
          {/* Cards container: flex + horizontal scroll on small, grid on lg */}
          <div
            className="
              flex gap-6 overflow-x-auto
              scrollbar-thin scrollbar-thumb-[#7800B0] scrollbar-track-gray-100
              snap-x snap-mandatory
              scroll-pl-4
              lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:snap-none
            "
          >
            <CarReviewCard
              imageUrl="/Rectangle 15.svg"
              reviewText="2025 Nissan Armada Review"
            />
            <CarReviewCard
              imageUrl="/Rectangle 15 (1).svg"
              reviewText="2025 Nissan Frontier Review"
            />
            <CarReviewCard
              imageUrl="/Rectangle 15 (2).svg"
              reviewText="2025 Nissan Pathfinder Review"
            />
          </div>

          {/* Left arrow */}
          <button
            className="
              absolute left-2 top-1/2 -translate-y-1/2
              bg-white rounded-full shadow-md p-2
              hidden lg:flex
              cursor-pointer z-10 text-[#7800B0]
              hover:bg-[#7800B0] hover:text-white
            "
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              bg-white rounded-full shadow-md p-2
              hidden lg:flex
              cursor-pointer z-10 text-[#7800B0]
              hover:bg-[#7800B0] hover:text-white
            "
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuides;
