'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LocationIcon = dynamic(
  () =>
    Promise.resolve(() => (
      <svg
        className="h-5 w-5 text-purple-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    )),
  { ssr: false }
);

const NewCarForSale = () => {
  const [zipCode, setZipCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const carTypes = [
    { title: 'SUVs / Crossover', imageUrl: '/carcadsimages/image 5.svg' },
    { title: 'Sedans', imageUrl: '/carcadsimages/image 5 (1).svg' },
    { title: 'Trucks', imageUrl: '/carcadsimages/image 5 (2).svg' },
    { title: 'Coupes', imageUrl: '/carcadsimages/image 5 (3).svg' },
    { title: 'Convertibles', imageUrl: '/carcadsimages/image 5 (3).svg' },
    { title: 'Hatchbacks', imageUrl: '/carcadsimages/image 5 (3).svg' },
    { title: 'Minivans', imageUrl: '/carcadsimages/image 5 (3).svg' },
    { title: 'Wagons', imageUrl: '/carcadsimages/image 5 (3).svg' },
  ];

  // Update cardsPerView based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1); // sm: 1 card
      else if (width < 768) setCardsPerView(2); // small tablets
      else if (width < 1024) setCardsPerView(3); // md: 3 cards
      else setCardsPerView(4); // lg and up: 4 cards
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const visibleCards = carTypes.slice(currentIndex, currentIndex + cardsPerView);

  const handleNext = () => {
    if (currentIndex < carTypes.length - cardsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">New Cars For Sale</h2>
        <p className="text-gray-600 mb-8 text-sm">
          Find one that fits your needs and your budget.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <select className="w-full sm:w-56 md:w-64 lg:w-72 bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-full focus:outline-none focus:border-purple-500">
            <option>All makes</option>
          </select>
          <select className="w-full sm:w-56 md:w-64 lg:w-72 bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-full focus:outline-none focus:border-purple-500">
            <option>All models</option>
          </select>
          <div className="relative w-full sm:w-56 md:w-64 lg:w-72">
            <input
              type="text"
              name="zip"
              id="zip"
              className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-full focus:outline-none focus:border-purple-500"
              placeholder="Zip"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <LocationIcon />
            </div>
          </div>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition"
            type="button"
          >
            Search
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 transition-opacity ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cardsPerView} gap-4 px-8`}>
            {visibleCards.map((car, index) => (
              <div key={index} className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{car.title}</h3>
                <div className="relative w-full h-40 overflow-hidden rounded-md">
                  <Image
                    src={car.imageUrl}
                    alt={car.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= carTypes.length - cardsPerView}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 transition-opacity ${
              currentIndex >= carTypes.length - cardsPerView ? 'opacity-40 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCarForSale;
