import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import hero_img_1 from "../../../assests/hero_img_1.png";
import hero_img_2 from "../../../assests/hero_img_2.png";
// import hero_img_3 from "../../../assests/hero_img_3.png";

// import hero_img_1mobile from "../../../assests/hero_img_1mobile.png";
// import hero_img_2mobile from "../../../assests/hero_img_2mobile.png";
// import hero_img_3mobile from "../../../assests/hero_img_3mobile.png";

const Hero = () => {
  // Function to scroll to marketplace section
  const scrollToMarketplace = () => {
    const marketplaceSection = document.getElementById("marketplace");
    if (marketplaceSection) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const sectionPosition = marketplaceSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  // Effect to handle scrolling from different pages
  useEffect(() => {
    // Check if the URL contains the #marketplace hash
    if (window.location.hash === "#marketplace") {
      // Scroll to marketplace section after a short delay to ensure DOM is ready
      setTimeout(scrollToMarketplace, 100);
    }
  }, []);

  const services = [
    {
      title: "Inland Logistic Services",
      image: hero_img_1, // Replace with your image path
      comingSoon: false,
    },
    {
      title: "Cross-Border Logistics",
      image: hero_img_2, // Replace with your image path
      comingSoon: true,
    },
  ];

  return (
    <main>
      <div className="flex flex-col justify-center items-center md:px-[11.5rem] md:pb-16">
        <div className="w-full">
          <h1 className="text-[2rem] md:text-5xl  font-semibold font-main text-center text-primary-200  md:leading-normal">
            We provide cargo logistics solutions that connect Enterprises,
            Transporters and Businesses
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#344054] text-xl font-medium md:leading-normal py-6">
            Our solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-[1.3rem] overflow-hidden group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 w-full bg-[#1E1E1E]/30 backdrop-blur-sm py-9 flex items-center justify-center gap-3">
                  <div className="text-white-100 text-xl font-semibold flex justify-center items-center gap-4">
                    <div>{service.title}</div>
                    {service.comingSoon && (
                      <button className="bg-white text-sm border-2 border-white rounded-[1.38rem] px-8 py-1">
                        Coming soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center mb-6 md:mb-[4.5rem] px-4 md:px-auto">
          <h1 className=" md:w-2/3 md:px-0 mb-6 md:mb-8 text-[2rem] md:text-6xl  font-normal font-main text-center text-primary-200  md:leading-normal">
            Control your{" "}
            <span className="text-secondary-100">cargo logistics</span> easily,
            from wherever you are
          </h1>
          <button
            onClick={scrollToMarketplace}
            className=" w-full py-3 md:w-auto md:px-24 md:py-4 bg-secondary-200 rounded-lg text-white-100 text-base"
          >
            Sign up for Marketplace
          </button>
        </div>
        <div className=" hidden md:flex justify-center items-center   ">
          <Link to="/service/inland">
            <img src={hero_img_1} alt="image1" />
          </Link>

          <Link to="/service/freight" className="px-9">
            <img src={hero_img_2} alt="image2" />
          </Link>

          <Link to="/service/railcargo">
            <img src={hero_img_3} alt="image3" />
          </Link>
        </div>

        <div className=" overflow-hidden md:hidden px-4">
          <div className="flex overflow-x-scroll ">
            <span className="flex-none">
              <img src={hero_img_1mobile} alt="image1" className="" />
            </span>

            <span className="flex-none px-4">
              <img src={hero_img_2mobile} alt="image2" />
            </span>

            <span className="flex-none">
              <img src={hero_img_3mobile} alt="image3" />
            </span>
          </div>
        </div> */}
    </main>
  );
};

export default Hero;
