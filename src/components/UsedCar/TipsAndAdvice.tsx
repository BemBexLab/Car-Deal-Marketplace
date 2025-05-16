'use client';

import React, { useState, useEffect } from 'react';

const CarReviewCard = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md overflow-hidden bg-[#EFE3F5] flex-shrink-0">
      <img className="w-full h-60 object-cover" src={imageUrl} alt={title} />
      <div className="px-4 py-3 bg-[#EFE3F5] rounded-b-lg">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs font-medium text-gray-700 uppercase mb-1">
          {description}
        </p>
      </div>
    </div>
  );
};

const TipsAndAdvice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const cards = [
    {
      imageUrl: '/Rectangle 15 (3).svg',
      title: 'The Top Used Cars With the Best Gas Mileage in 2025',
      description:
        'Looking for a used car with great gas mileage? We’ve put together a list of 10 cars that give great fuel economy, with options to suit a variety of needs and budgets.',
    },
    {
      imageUrl: '/Rectangle 15 (4).svg',
      title: 'The Best Trucks Under $25,000 in 2025',
      description:
        'Used truck prices are finally starting to cool, but new ones cost more than ever, with average prices over $60,000. Fortunately, you can still get a great pickup on a budget.',
    },
    {
      imageUrl: '/Rectangle 15 (5).svg',
      title: 'The Best Used SUVs of 2025',
      description:
        "Shopping for a used SUV can be overwhelming, so we've compiled a list of well-rounded, family-friendly used SUVs from a variety of categories.",
    },
    {
      imageUrl: '/Rectangle 15 (6).svg',
      title: 'Safest Cars of 2025',
      description:
        'Safety is a top concern for many buyers. Here are some of the safest vehicles on the road according to crash test ratings and safety features.',
    },
    {
      imageUrl: '/Rectangle 15 (7).svg',
      title: 'Top Electric Cars of 2025',
      description:
        'Electric vehicles are more popular than ever. Discover the top-rated EVs for performance, range, and value in 2025.',
    },
  ];

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1); // small screens
      } else if (width < 1024) {
        setCardsPerView(2); // medium screens
      } else {
        setCardsPerView(3); // large screens
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerView);

  const handleNext = () => {
    if (currentIndex + cardsPerView < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gray-50 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Tips & Advice</h2>
          <button className="bg-[#7800B0] hover:bg-white hover:text-[#7800B0] hover:border-[#7800B0] border-2 border-transparent text-white rounded-full font-bold py-2 px-4 transition-colors duration-300">
            View all
          </button>
        </div>

        <div className="relative">
          {/* Centered grid */}
          <div className="flex justify-center">
            <div
              className={`grid gap-6 ${
                cardsPerView === 1
                  ? 'grid-cols-1'
                  : cardsPerView === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-3'
              }`}
            >
              {visibleCards.map((card, index) => (
                <CarReviewCard
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 transition-opacity text-[#7800B0] hover:bg-[#7800B0] hover:text-white ${
              currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerView >= cards.length}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 transition-opacity text-[#7800B0] hover:bg-[#7800B0] hover:text-white ${
              currentIndex + cardsPerView >= cards.length
                ? 'opacity-40 cursor-not-allowed'
                : 'opacity-100'
            }`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipsAndAdvice;
