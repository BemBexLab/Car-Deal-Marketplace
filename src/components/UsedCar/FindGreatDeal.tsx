import Image from "next/image";

const FindGreatDeal = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-start w-full  py-20 bg-white overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col gap-10 w-full lg:max-w-[55%] z-10 px-6">
        {/* Heading */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[#282828] text-[40px] lg:text-[52px] font-bold font-['Helvetica Now Display']">
            Find A Great Deal...And So Much More
          </h2>
          <div className="w-[120px] h-[4px] bg-[#7800B0]"></div>
        </div>

        {/* Paragraph */}
        <p className="text-[#626262] text-[16px] lg:text-[20px] leading-relaxed">
          See every car’s deal rating, from great to overpriced, along with free hard-to-find info like numbers of owners and accident history.
        </p>

        {/* Icons Row */}
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {/* Icon 1 */}
          <div className="flex items-center gap-4 min-w-[180px]">
            <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px]">
              <Image src="/mdi_deal.svg" alt="Great Deal" width={72} height={72} className="w-full h-full object-contain" />
            </div>
            <p className="text-[#282828] text-[16px] lg:text-[18px] font-semibold">Great Deal</p>
          </div>

          {/* Icon 2 */}
          <div className="flex items-center gap-4 min-w-[180px]">
            <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px]">
              <Image src="/mdi_deal (1).svg" alt="One Owner" width={72} height={72} className="w-full h-full object-contain" />
            </div>
            <p className="text-[#282828] text-[16px] lg:text-[18px] font-semibold">One Owner</p>
          </div>

          {/* Icon 3 */}
          <div className="flex items-center gap-4 min-w-[180px]">
            <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px]">
              <Image src="/mdi_deal (2).svg" alt="Accident Check" width={72} height={72} className="w-full h-full object-contain" />
            </div>
            <p className="text-[#282828] text-[16px] lg:text-[18px] font-semibold">Accident Check</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-[45%] flex justify-end items-end mt-10 lg:mt-0">
        <div className="w-full flex justify-end">
          <Image
            src="/Group 22.svg"
            alt="Car Image"
            width={900}
            height={700}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FindGreatDeal;
