import React from "react";

const UsedCarHero = () => {
  return (
    <div className="bg-[#EFE3F5] py-16 relative overflow-visible">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Get Used Cars</h2>
      </div>

      <div className="relative w-full">
        {/* Full-width Image */}
        <img
          src="/Rectangle 17.svg"
          alt="Red Used Car"
          className="w-screen relative z-10 -mb-20 object-cover"
        />

        {/* Purple bar overlapping at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[120px] bg-[#7800B0] shadow-lg z-0 -mb-20 " />
      </div>
    </div>
  );
};

export default UsedCarHero;
