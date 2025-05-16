// components/UsedCar/ByMakeAndModalSection.tsx
'use client';

import React from 'react';

const ByMakeAndModalSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold text-gray-900 text-center mb-6">By Make & Modal</h2>
      <div className="bg-white py-10 rounded-lg shadow-md w-full max-w-xl mx-auto">
        <div className="px-6">
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="make"
              >
                <option>All Makes</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="model"
              >
                <option>All Models</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="relative">
              <label htmlFor="minPrice" className="sr-only">Min Price</label>
              <div className="relative rounded-full shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</div>
                <input
                  autoComplete="off"
                  type="text"
                  name="minPrice"
                  id="minPrice"
                  className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pl-7 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Min Price"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="maxPrice" className="sr-only">Max Price</label>
              <div className="relative rounded-full shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</div>
                <input
                  autoComplete="off"
                  type="text"
                  name="maxPrice"
                  id="maxPrice"
                  className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pl-7 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Max Price"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label htmlFor="zip" className="sr-only">Zip Code</label>
              <div className="relative rounded-full shadow-sm">
                <input
                  autoComplete="off"
                  type="text"
                  name="zip"
                  id="zip"
                  className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Zip"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg
                    className="h-6 w-6 text-white bg-[#7800B0] border-[4px] border-[#7800B0] rounded-full cursor-pointer"
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
                </div>
              </div>
            </div>

            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="radius"
              >
                <option>Radius</option>
                <option>25 mi</option>
                <option>50 mi</option>
                <option>75 mi</option>
                <option>100 mi</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            className="bg-[#7800B0] hover:bg-white hover:border-[1px] border-[#7800B0] text-white hover:text-[#7800B0] font-bold py-3 px-8 rounded-full w-1/2 mx-auto block focus:outline-none focus:shadow-outline"
            type="button"
          >
            Get Your Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ByMakeAndModalSection;

