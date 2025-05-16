export default function WhyChoose() {
  // Variable data: logo image, title, and description
  const features = [
    {
      logo: "/logo/image 29 (traced).svg",
      title: "Trusted by Thousands",
      description: "Our marketplace connects thousands of buyers and sellers daily with trusted listings and secure transactions.",
    },
    {
      logo: "/logo/image 13 (traced) (1).svg",
      title: "Wide Selection",
      description: "Browse from a wide variety of vehicles to find the one that best suits your needs and budget.",
    },
    {
      logo: "/logo/image 14 (traced) (1).svg",
      title: "Easy Financing",
      description: "We offer flexible financing solutions to make your car buying journey smooth and stress-free.",
    },
    {
      logo: "/logo/image 15 (traced) (1).svg",
      title: "24/7 Support",
      description: "Our support team is available around the clock to assist you at every step of your car buying experience.",
    },
  ];

  return (
    <section className="flex max-w-full md:max-w-[1612px] mx-auto flex-col items-center gap-12 px-4 md:px-0 mt-20">
      <div className="flex w-full max-w-[1586px] flex-col items-center gap-11 px-2 rounded-lg">
        {/* Section Title */}
        <div className="self-stretch text-[#282828] text-center font-['Helvetica_Now_Display'] text-2xl md:text-[32px] font-bold capitalize">
          Why choose Car Deal Marketplace
        </div>
        <div className="w-1/10 border-t-4 border-[#7800B0] mx-auto" />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 md:px-8">
          {features.map(({ logo, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-[#FCFCFC] p-6 rounded-lg border border-[#EEEEEE] hover:bg-[#F5F1FF] transition-colors"
            >
              <img src={logo} alt={title} className="w-16 h-16 mb-4 object-contain" />
              <div className="text-[#282828] font-bold text-lg md:text-xl mb-2 font-['Helvetica_Now_Display']">
                {title}
              </div>
              <p className="text-[#555] text-sm md:text-base font-normal font-['Helvetica_Now_Display']">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
