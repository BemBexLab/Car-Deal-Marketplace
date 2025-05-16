export default function ShoppingForUsedCar() {
  // Card data with image URL and title
  const cards = [
    {
      title: "SUVs",
      imgSrc: "/carcadsimages/image 5.svg",
    },
    {
      title: "Sedon",
      imgSrc: "/carcadsimages/image 5 (1).svg",
    },
    {
      title: "Sedons",
      imgSrc: "/carcadsimages/image 5 (2).svg",
    },
    {
      title: "Coupes",
      imgSrc: "carcadsimages/image 5 (3).svg",
    },
    {
      title: "Hatchbacks",
      imgSrc: "/carcadsimages/image 5 (9).svg",
    },
    {
      title: "Convertibles",
      imgSrc: "/carcadsimages/image 5 (5).svg",
    },
    {
      title: "Wegons",
      imgSrc: "/carcadsimages/image 5 (7).svg",
    },
    {
      title: "Minivans",
      imgSrc: "/carcadsimages/image 5 (8).svg",
    },
  ];

  return (
    <section className="flex max-w-full md:max-w-[1612px] mx-auto flex-col items-center gap-12 px-4 md:px-0 mt-40">
      <div className="flex w-full max-w-[1586px] flex-col items-center gap-11 px-2">
        <div className="self-stretch text-[#282828] text-center font-['Helvetica_Now_Display'] text-2xl md:text-[32px] font-bold capitalize">
          Shopping for a Used Car?
        </div>
        <div className="text-[#626262] text-[20px]">
           Know more, shop wisely
        </div>

        {/* Grid container wrapped with extra padding for outer spacing */}
        <div className="text-[#282828] text-[32px] font-bold By Body Style">
                By Body Style
        </div>
        <div className="w-full px-6 md:px-12 lg:px-20">
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {cards.map(({ title, imgSrc }) => (
              <div
                key={title}
                className="flex flex-col bg-[#FCFCFC] border border-[#EEEEEE] rounded-lg cursor-pointer hover:bg-[#7800B0] font-bold text-black hover:text-white transition-colors"
              >
                <div className="p-4 text-center font-['Helvetica_Now_Display'] text-lg md:text-xl">
                  {title}
                </div>
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-full aspect-[4/3] object-contain rounded-t-lg"
                  loading="lazy"
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
