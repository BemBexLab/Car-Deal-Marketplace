'use client'

import React, { useState, useEffect } from 'react';

interface PopularCategory {
  title: string;
  listings?: {
    name: string;
    count: number;
    startingPrice: number;
  }[];
}

const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const PopularHatchBacks = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    setExpandedCategory('Popular Hatchbacks');
  }, []);

  // The listings to show in every category
  const hatchbackListings = [
    { name: 'New Honda Civic Hatchback', count: 4440, startingPrice: 25642 },
    { name: 'New MINI Cooper', count: 3969, startingPrice: 24120 },
  ];

  const popularCategories: PopularCategory[] = [
    { title: 'Popular Hatchbacks' },
    { title: 'Popular Coupes' },
    { title: 'Popular Minivans' },
    { title: 'Popular Sedans' },
    { title: 'Popular Vans' },
    { title: 'Popular Pickup Trucks' },
    { title: 'Popular SUVs / Crossovers' },
  ];

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {popularCategories.map((category) => (
          <div key={category.title} className="py-3 border-b border-gray-200 last:border-b-0">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory(category.title)}
            >
              <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
              <button aria-label={expandedCategory === category.title ? 'Collapse' : 'Expand'}>
                {expandedCategory === category.title ? (
                  <ChevronUp className="h-6 w-6 text-white bg-[#7800B0] rounded-full" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-white bg-[#7800B0] rounded-full" />
                )}
              </button>
            </div>

            {expandedCategory === category.title && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {hatchbackListings.map((listing) => (
                  <div key={listing.name} className="px-4 p-3 text-sm">
                    <p className="font-semibold text-[#7800B0]">{listing.name}</p>
                    <p className="text-[#7800B0]">
                      {listing.count} listings starting at ${listing.startingPrice}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularHatchBacks;
