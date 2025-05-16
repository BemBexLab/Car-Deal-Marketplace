export default function DiscoverPerfectCar() {
  const buttons = [
    "Under $15K",
    "Fuel Efficient Cars",
    "Family Cars",
    "Electric",
    "Hybrid/Plug-in",
    "Accessible luxury",
    "Great deals",
    "Best cars in show",
  ];

  return (
    <section className="flex max-w-full md:max-w-[1612px] mx-auto flex-col items-center gap-12 px-4 md:px-0">
      <div className="flex w-full max-w-[727px] flex-col items-center gap-2.5 px-2">
        <div className="flex h-[76px] flex-col justify-center self-stretch text-[#282828] text-center font-['Helvetica_Now_Display'] text-3xl md:text-4xl font-bold capitalize">
          Discover your perfect car
        </div>
        <div className="w-[245px] border-t-4 border-[#7800B0] mx-auto" />
      </div>

      <div className="flex w-full max-w-[1586px] flex-col items-center gap-11 px-2">
        <div className="self-stretch text-[#282828] text-center font-['Helvetica_Now_Display'] text-2xl md:text-[32px] font-bold capitalize">
          Browse by category
        </div>

        <div className="flex flex-wrap justify-center gap-5 self-stretch">
          {buttons.map((label) => (
            <div
              key={label}
              className="flex px-5 py-2.5 justify-center items-center gap-2.5 bg-[#F6F6F6] border border-[#282828] rounded-full cursor-pointer whitespace-nowrap hover:bg-[#7800B0] hover:text-white text-[#282828]"
            >
              <div className="  text-center font-['Helvetica_Now_Display'] lg:text-[18px]  md:text-[14px] font-normal ">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
