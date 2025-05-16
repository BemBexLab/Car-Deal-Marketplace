import React from "react";

const CarReviewCard = ({
  imageUrl,
  rating,
  reviewText,
}: {
  imageUrl: string;
  rating: string;
  reviewText: string;
}) => {
  const [expertRating, totalStars] = rating.split("/");
  const filledStars = parseInt(expertRating);
  const emptyStars = parseInt(totalStars) - filledStars;

  return (
    <div className="w-full max-w-sm rounded-lg shadow-md overflow-hidden bg-white flex-shrink-0">
      <img
        className="w-full h-60 object-cover"
        src={imageUrl}
        alt={reviewText}
      />
      <div className="px-4 py-3 bg-[#EFE3F5] rounded-xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">
            Expert rating: {rating}
          </p>
          <div className="flex items-center">
            {Array.from({ length: filledStars }).map((_, index) => (
              <svg
                key={`filled-${index}`}
                className="w-4 h-4 text-purple-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.814 4.635 1.123 6.545z" />
              </svg>
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <svg
                key={`empty-${index}`}
                className="w-4 h-4 text-gray-300 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.814 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="mt-1 text-sm font-semibold text-gray-900">{reviewText}</p>
      </div>
    </div>
  );
};

const CarReviewsSection = () => {
  return (
    <div className="bg-gray-50 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Car Reviews</h2>
          <button className="bg-[#7800B0] hover:bg-white hover:text-[#7800B0] hover:border-[#7800B0] border-2 border-transparent text-white rounded-full font-bold py-2 px-4 transition-colors duration-300">
            View all
          </button>
        </div>

        {/* Wrapper for cards + arrows */}
        <div className="relative">
          {/* Cards container: flexbox with horizontal scroll on small, grid on large */}
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
              imageUrl="/image.svg"
              rating="8.0/10"
              reviewText="2025 Nissan Armada Review"
            />
            <CarReviewCard
              imageUrl="/image (1).svg"
              rating="8.0/10"
              reviewText="2025 Nissan Pathfinder Review"
            />
            <CarReviewCard
              imageUrl="/image (2).svg"
              rating="8.0/10"
              reviewText="2025 Nissan Frontier Review"
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
              className="w-6 h-6 "
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

export default CarReviewsSection;
