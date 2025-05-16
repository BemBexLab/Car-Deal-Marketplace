import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-b border-[#DFDFDF] bg-[#7800B0] py-16">
      <div className="max-w-[1611px] mx-auto flex flex-col gap-16 px-6 sm:px-10 md:px-16 lg:px-[80px]">
        {/* ==================== Top Section ==================== */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10">
          {/* -------------------- Left Column -------------------- */}
          <div className="flex flex-col gap-10 sm:gap-[44px] max-w-full lg:max-w-[524px] flex-shrink-0">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/Mask group (5).svg"
                alt="logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Social Media Icons with Hover Effects */}
            <div className="flex items-center gap-4 sm:gap-[18.18px] flex-wrap">
              {[
                { href: "#", src: "/icons/Group.svg", alt: "Facebook" },
                { href: "#", src: "/icons/Group (1).svg", alt: "Twitter" },
                { href: "#", src: "/icons/Group (2).svg", alt: "LinkedIn" },
                { href: "#", src: "/icons/Group (3).svg", alt: "Instagram" },
                { href: "#", src: "/icons/Group (4).svg", alt: "Instagram" },
              ].map(({ href, src, alt }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-[39px] h-[39px] transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-md">
                    <Image
                      src={src}
                      alt={alt}
                      width={39}
                      height={39}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* -------------------- Right Columns -------------------- */}
          <div className="flex flex-wrap gap-8 sm:gap-12 xl:gap-[130px] w-full lg:w-auto justify-between">
            {/* Company Column */}
            <div className="flex flex-col items-start gap-6 sm:gap-[21px] min-w-[120px] sm:min-w-[140px] flex-1 sm:flex-none">
              <h4 className="text-white font-inter text-[18px] sm:text-[20px] font-bold">
                Company
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-[15px] text-white font-inter text-[16px] font-normal leading-none">
                <li>About us</li>
                <li>Our team</li>
                <li>Press</li>
                <li>Investor relations</li>
                <li>Price Trends</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Advertise with us</li>
              </ul>
            </div>

            {/* For Dealers Column */}
            <div className="flex flex-col items-start gap-6 sm:gap-[21px] min-w-[120px] sm:min-w-[140px] flex-1 sm:flex-none">
              <h4 className="text-white font-inter text-[18px] sm:text-[20px] font-bold">
                For Dealers
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-[15px] text-white font-inter text-[16px] font-normal leading-none">
                <li>Dealer signup</li>
                <li>Dealer Resources</li>
              </ul>
            </div>

            {/* Terms Column */}
            <div className="flex flex-col items-start gap-6 sm:gap-[21px] min-w-[120px] sm:min-w-[140px] flex-1 sm:flex-none">
              <h4 className="text-white font-inter text-[18px] sm:text-[20px] font-bold">
                Terms
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-[15px] text-white font-inter text-[16px] font-normal leading-none">
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Your privacy choices</li>
                <li>Interest-based ads</li>
                <li>Security</li>
              </ul>
            </div>

            {/* Help Column */}
            <div className="flex flex-col items-start gap-6 sm:gap-[21px] min-w-[120px] sm:min-w-[140px] flex-1 sm:flex-none">
              <h4 className="text-white font-inter text-[18px] sm:text-[20px] font-bold">
                Help
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-[15px] text-white font-inter text-[16px] font-normal leading-none">
                <li>Help center</li>
                <li>Contact us</li>
                <li>Delivery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== Divider Line ==================== */}
        <div className="h-[2px] w-full bg-[#D9D9D9]" />

        {/* ==================== Copyright ==================== */}
        <div className="text-center text-white font-inter text-[16px] sm:text-[18px] font-normal leading-none">
          © 2025 Car Deals Marketplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
