import Image from "next/image";

export default function NewCarReliability() {
  return (
    <section className="max-w-[1611px] mx-auto h-[765px] flex items-start justify-center px-6 relative pt-6 md:pt-10 lg:pt-16 overflow-visible">
      
      {/* Purple background container */}
      <div className="relative w-full lg:max-w-[1000px] h-[389px] rounded-lg flex flex-col justify-center items-start gap-6 px-8 py-12 text-left md:ml-60 lg:ml-80">
        
        {/* Text content - now aligned left */}
        <div className="flex flex-col items-start gap-5 z-10">
          <h2 className="text-[#282828]  font-bold text-[36px] md:text-[42px] capitalize">
            New Car Reliability, Used Car Price
            <div className="w-1/4 h-1 bg-[#7800B0] mt-2 mb-4 rounded-full" />
          </h2>

          <p className="text-[#626262] font-['Helvetica_Now_Display'] text-[16px] md:text-[20px] font-normal">
            Every Certified Pre-Owned (CPO) vehicle is inspected and comes with a manufacturer warranty. Plus, we ll show you each cars deal rating so you never overpay.
          </p>
        </div>

        {/* Deal icons section - aligned left with gap between items */}
        <div className="flex gap-6 items-center">
          {/* Deal item 1 */}
          <div className="flex items-center gap-2">
            <Image
              src="/mdi_deal (3).svg"
              alt="Great Deal"
              width={40}
              height={40}
              priority
              style={{ objectFit: "contain" }}
            />
            <div className="text-black">Great Deal</div>
          </div>

          {/* Deal item 2 */}
          <div className="flex items-center gap-2">
            <Image
              src="/mdi_deal (3).svg"
              alt="Great Deal"
              width={40}
              height={40}
              priority
              style={{ objectFit: "contain" }}
            />
            <div className="text-black">Great Deal</div>
          </div>
        </div>
      </div>

      {/* Car image overlapping the left side */}
      <div className="absolute left-0 top-[480px] sm:top-[350px] md:top-[250px] lg:w-[600px] w-[320px] h-auto pointer-events-none select-none">
        <Image
          src="/Group 12.svg"
          alt="Car Image"
          width={600}
          height={600}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
