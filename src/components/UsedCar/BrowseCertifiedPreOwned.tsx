import React from "react";

const BrowseCertifiedPreOwned = () => {
  const logos = [
    { name: "Ford", imageUrl: "/image 16.svg" },
    { name: "Chevrolet", imageUrl: "/image 17.svg" },
    { name: "Jeep", imageUrl: "/image 18.svg" },
    { name: "Dodge", imageUrl: "/image 19.svg" },
    { name: "Toyota", imageUrl: "/image 20.svg" },
    { name: "Honda", imageUrl: "/image 21.svg" },
    { name: "BMW", imageUrl: "/image 22.svg" },
    { name: "GMC", imageUrl: "/image 23.svg" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto text-center px-4">
        {/* Title: smaller on mobile, 4xl from md up */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          Browse Certified Pre-Owned Vehicles
        </h2>
        {/* Paragraph: padding on small, centered max width */}
        <p className="text-gray-600 mb-8 text-sm max-w-xl mx-auto px-2 md:px-0">
          CPO vehicles benefit from that extra assurance that the vehicle you are
          buying is free of defects. In the event that you have a problem, the
          manufacturer or dealer will often provide repairs free of charge or at a
          limited cost.
        </p>

        {/* Tree style container */}
        <div className="inline-block text-left w-full max-w-screen-lg mx-auto">
          {/* First row */}
          <div
            className="
              flex flex-wrap justify-center gap-4 mb-10
              md:justify-between md:flex-nowrap md:w-[900px] md:mx-auto
            "
          >
            {logos.slice(0, 5).map((logo) => (
              <div
                key={logo.name}
                className="
                  flex items-center justify-center
                  h-20 w-20 sm:h-28 sm:w-28
                  md:h-40 md:w-40
                  px-2 md:px-4
                "
              >
                <img
                  src={logo.imageUrl}
                  alt={logo.name}
                  className="
                    max-h-12 sm:max-h-24
                    md:max-h-36
                    object-contain
                  "
                />
              </div>
            ))}
          </div>

          {/* Second row */}
          <div
            className="
              flex flex-wrap justify-center gap-4
              md:justify-between md:flex-nowrap md:px-20 md:w-[860px] md:mx-auto
            "
          >
            {logos.slice(5).map((logo) => (
              <div
                key={logo.name}
                className="
                  flex items-center justify-center
                  h-20 w-20 sm:h-28 sm:w-28
                  md:h-40 md:w-40
                  px-2 md:px-4
                "
              >
                <img
                  src={logo.imageUrl}
                  alt={logo.name}
                  className="
                    max-h-12 sm:max-h-24
                    md:max-h-36
                    object-contain
                  "
                />
              </div>
            ))}

            {/* Browse All CPO button */}
            <div className="flex items-center justify-center h-20 w-40 sm:h-28 sm:w-48 md:h-40 md:w-48 px-2 md:px-4">
              <button className="text-purple-500 font-semibold text-base whitespace-nowrap">
                Browse All CPO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCertifiedPreOwned;
