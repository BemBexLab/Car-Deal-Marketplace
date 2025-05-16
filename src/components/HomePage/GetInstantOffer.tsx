import Image from "next/image";

export default function GetInstantOffer() {
  return (
    <section className="max-w-[1611px] mx-auto h-[765px] flex items-start justify-center px-6 relative pt-6 md:pt-10 lg:pt-16 overflow-visible">
      {/* The purple background container */}
      <div className="relative bg-[#EFE3F5] w-full lg:max-w-[1000px] h-[389px] rounded-lg flex flex-col justify-center items-center gap-6 px-8 py-12 text-center">
        {/* Text content */}
        <div className="flex flex-col items-center gap-5 z-10">
          <h2 className="text-[#282828] font-['Helvetica_Now_Display'] font-bold  text-[36px] md:text-[42px] capitalize">
            Get instant offers to sell your car
          </h2>
          <p className="text-[#626262] font-['Helvetica_Now_Display'] text-[16px] md:text-[20px] font-normal ">
            Get offers in minutes. Choose to sell 100% online or to a local dealer.
          </p>
        </div>

        {/* Button */}
        <button className="bg-[#7800B0] text-white rounded-full px-8 py-4 text-[16px] md:text-[20px] font-['Helvetica_Now_Display'] capitalize hover:bg-[#5a0080] transition z-10">
          Get Offer
        </button>
      </div>

      {/* Car image overlapping left side */}
      <div className="absolute right-0 top-[380px] sm:top-[350px] md:top-[250px] lg:w-[600px] w-[320px] h-auto pointer-events-none select-none">
        <Image
          src="/png-transparent-car-mercedes-car-love-compact-car-vehicle 1.svg"
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
