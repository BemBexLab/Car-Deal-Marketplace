import React from 'react';
import Image from 'next/image';

const CarDealDifferenceSection = () => {
  return (
    <div className="bg-[#EFE3F5] py-16 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">The Car Deal Market Place Difference</h2>
        <p className="text-gray-600 mb-12 text-sm">Find one that fits your needs and your budget.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src="icons/tabler_search.svg"
                alt="Find What You Want"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Exactly What You Want</h3>
            <p className="text-gray-600 text-sm w-[250px]">
              We'll give you access to the largest inventory of cars. Simply search and filter to find the one for you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src="/icons/solar_tag-price-bold.svg"
                alt="Never Overpay"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Never Overpay</h3>
            <p className="text-gray-600 text-sm w-[250px]">
              See how much a car should cost with the price analysis tool, which accounts for recent sales and incentives.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src="/icons/tabler_message-filled.svg"
                alt="Shop With Confidence"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Shop With Confidence</h3>
            <p className="text-gray-600 text-sm w-[250px]">
              Go to the dealer knowing you'll be treated fairly. Our user-generated dealer ratings and reviews will help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDealDifferenceSection;
