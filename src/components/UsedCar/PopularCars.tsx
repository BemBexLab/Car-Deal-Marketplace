'use client'
import React, { useState } from 'react';

const categories = [
  'Pickup Trucks',
  'SUVs / Crossovers',
  'Sedans',
  'Coupes',
  'Shop by location',
  'Shop by color',
  'Shop by price',
  'Popular search listing',
];

const carsByCategory: Record<string, string[]> = {
  'Pickup Trucks': [
    'Ford F-150',
    'Ford F-250 super Duty',
    'Chevrolet Silverado 1500',
    'Chevrolet Silverado 2500HD',
    'Toyota Tacoma',
    'Dodge RAM 1500',
    'Dodge RAM 2500',
    'Toyota Tundra',
    'Ford F-350 Super Duty',
    'Dodge RAM 3500',
    'Chevrolet Colorado',
    'GMC Sierra 1500',
    'Ford Ranger',
    'GMC Sierra 2500HD',
    'RAM 2500',
  ],
  // Add other categories as needed...
};

const PopularCars = () => {
  const [activeCategory, setActiveCategory] = useState('Pickup Trucks');
  const cars = carsByCategory[activeCategory] || [];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Popular Cars</h2>
      <div className="mt-2 mb-8 w-16 h-1 bg-[#7800B0] mx-auto rounded-full" />

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full border transition text-sm ${
              activeCategory === category
                ? 'bg-[#7800B0] text-white'
                : 'bg-[#EFE3F5] text-[#999999] hover:bg-purple-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Car Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto px-4">
        {cars.map((car) => (
          <div
            key={car}
            className="py-3 px-4 rounded-xl text-[#7800B0] font-medium text-md hover:text-black "
          >
            {car}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
