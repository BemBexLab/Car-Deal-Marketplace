'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Moved SVGs into functional components to avoid hydration errors
const ChevronDownIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const LocationMarkerIcon = () => (
  <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.75a2 2 0 100-4 2 2 0 000 4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4.667-6-8-6-11a6 6 0 1112 0c0 3-2 6.333-6 11z" />
  </svg>
);

const CertifiedPreOwnedSection = () => {
  const [zipCode, setZipCode] = useState('');

  const logos = [
    { name: 'Ford', imageUrl: '/image 16.svg' },
    { name: 'Chevrolet', imageUrl: '/image 17.svg' },
    { name: 'Jeep', imageUrl: '/image 18.svg' },
    { name: 'Dodge', imageUrl: '/image 19.svg' },
    { name: 'Toyota', imageUrl: '/image 20.svg' },
    { name: 'Honda', imageUrl: '/image 21.svg' },
    { name: 'BMW', imageUrl: '/image 22.svg' },
    { name: 'GMC', imageUrl: '/image 23.svg' },
  ];

  return (
    <div className="py-12 mt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Find Great Deals On Certified Pre-Owned Cars
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Left Section: Search Filters */}
          <div className="bg-[#EFE3F5] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
              Search Certified Pre-Owned by Make & Model
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <select
                  id="make"
                  className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                >
                  <option>All Makes</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon />
                </div>
              </div>

              <div className="relative">
                <select
                  id="model"
                  className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                >
                  <option>All Models</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="Zip"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <LocationMarkerIcon />
                </div>
              </div>

              <div className="relative">
                <select
                  id="radius"
                  className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                >
                  <option>Radius</option>
                  <option>25 mi</option>
                  <option>50 mi</option>
                  <option>75 mi</option>
                  <option>100 mi</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="bg-[#7800B0] text-white border-2 border-[#EFE3F5] font-bold py-3 px-6 rounded-full md:w-1/2 transition duration-200 ease-in-out hover:bg-white hover:text-[#7800B0] hover:border-[#7800B0] focus:outline-none focus:ring-2 focus:ring-[#7800B0] focus:ring-offset-2"
            >
              Search Certified Pre-Owned
            </button>
          </div>

          {/* Right Section: Logos */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
              Browse Certified Pre-Owned Vehicles
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {logos.map((logo) => (
                <div key={logo.name} className="flex items-center justify-center h-16">
                  <Image
                    src={logo.imageUrl}
                    alt={logo.name}
                    height={60}
                    width={120}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedPreOwnedSection;
