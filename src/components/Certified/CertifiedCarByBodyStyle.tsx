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

const CertifiedCarByBodyStyle = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    setExpandedCategory('Popular Hatchbacks');
  }, []);

  const hatchbackListings = [
    { name: 'Certified Convertible', count: 4440, startingPrice: 25642 },
    { name: 'Certified Coupes', count: 3969, startingPrice: 24120 },
    { name: 'Certified Hatchback', count: 4440, startingPrice: 25642 },
    { name: 'Certified Pickup Truck', count: 3969, startingPrice: 24120 },
    { name: 'Certified SUV / Crossover', count: 4440, startingPrice: 25642 },
    { name: 'Certified Sedan', count: 3969, startingPrice: 24120 },
    { name: 'Certified Wagon', count: 4440, startingPrice: 25642 },
    { name: 'Certified Minivan', count: 3969, startingPrice: 24120 },
    { name: 'Certified Van', count: 3969, startingPrice: 24120 },
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
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hatchbackListings.map((listing) => (
                  <div key={listing.name} className="px-4 py-3 text-center">
                    <h3 className="text-lg font-bold text-[#7800B0] mb-1">{listing.name}</h3>
                    <p className="text-sm text-[#7800B0]">
                      {listing.count} Great Deals out of 1,875 listings starting at ${listing.startingPrice}
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

export default CertifiedCarByBodyStyle;
