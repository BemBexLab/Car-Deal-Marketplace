'use client';

import Image from "next/image";
import { useState } from "react";

export default function HomeHero() {
  const [activeTab, setActiveTab] = useState("Buy");

  const handleTabClick = (tab: "Buy" | "Sell/Trades") => {
    setActiveTab(tab);
  };

  return (
    <section className="relative w-full lg:h-[550px] bg-[#EFE3F5] lg:bg-transparen ">
      {/* Background split (only for large screens) */}
      <div className="hidden lg:flex absolute top-0 left-0 w-full h-full z-0">
        <div className="w-3/4 bg-[#EFE3F5]" />
        <div className="w-1/4 bg-[#7800B0]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row h-full px-6 md:px-16 lg:px-32 pt-10 lg:pt-20 gap-10 lg:gap-0">
        {/* Left content: Title + Paragraph */}
        <div className="flex flex-col items-start gap-5 max-w-[700px] border-l-4 border-[#7800B0] pl-6">
          <h1 className="text-[#282828] text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight capitalize font-['Helvetica Now']">
            Car Selling Your Way
          </h1>
          <p className="text-[#626262] text-base sm:text-lg lg:text-[20px] font-normal leading-tight font-['Helvetica Now']">
            Our car valuation tool is powered by data from over 4 million listings, helping you find the best
            price when selling, trading or buying a car.
          </p>
        </div>

       <div className="absolute top-[180px] sm:top-[200px] md:top-32 lg:top-20 right-0 w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] h-[300px] lg:h-[700px] pointer-events-none">
  <div className="relative w-full h-full">
    <Image
      src="/Car png 01 1.svg"
      alt="Car Image"
      fill
      className="object-contain object-right"
      priority
    />
  </div>
</div>




        {/* Form (static on small, absolute on large) */}
        <div className="relative lg:absolute bottom-[-100px] z-20 w-full sm:w-[400px] mt-[200px] sm:mt-[140px] md:mt-[180px] lg:mt-0">
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
    {/* Tabs */}
    <div className="flex bg-[#F8F8F8] p-1 rounded-full">
      <button
        className={`w-1/2 py-2 text-sm font-medium rounded-full ${
          activeTab === "Buy" ? "bg-[#7800B0] text-white" : "text-black"
        }`}
        onClick={() => handleTabClick("Buy")}
      >
        Buy
      </button>
      <button
        className={`w-1/2 py-2 text-sm font-medium rounded-full ${
          activeTab === "Sell/Trades" ? "bg-[#7800B0] text-black" : "text-black"
        }`}
        onClick={() => handleTabClick("Sell/Trades")}
      >
        Sell/Trades
      </button>
    </div>

    {/* License Plate Dropdown */}
    <select className="bg-[#F1F1F1] text-black py-3 px-4 rounded-full w-full focus:outline-none">
      <option>License Plate</option>
      <option>ABC-123</option>
      <option>XYZ-789</option>
    </select>

    {/* License Plate Input */}
    <input
      type="text"
      placeholder="License Plate"
      className="bg-[#F1F1F1] text-black py-3 px-4 rounded-full w-full focus:outline-none"
    />

    {/* Bottom Row: State + Button */}
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
  <select className="bg-[#F1F1F1] text-black py-3 px-4 rounded-3xl w-full sm:w-1/2 focus:outline-none">
    <option>State</option>
    <option>Sindh</option>
    <option>Punjab</option>
  </select>
  <button className="bg-[#7800B0] text-white py-3 px-4 rounded-3xl w-full sm:w-1/2 font-semibold">
    Get Your Offers
  </button>
</div>

  </div>
</div>

      </div>
    </section>
  );
}
