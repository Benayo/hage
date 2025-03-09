import React from "react";

import house from "../../../assests/house-filled.svg";
import marketplace1mobile from "../../../assests/marketplace1mobile.png";
import bus from "../../../assests/bus-filled.svg";
import marketplace2mobile from "../../../assests/marketplace2mobile.png";
import marketplace3mobile from "../../../assests/marketplace3mobile.png";
import googleplay from "../../../assests/google-play.png";
import appstore from "../../../assests/app-store.png";

const Marketplacesection = ({bgcolor}) => {
  const marketplaceData = [
    {
      title: "ENTERPRISES",
      description: "Send and track supplies easily.",
      features: ["Search filters", "Shipment tracking", "Collaboration tools"],
      bgColor: "bg-secondary-200",
      icon: house,
      image: marketplace1mobile,
      cta: {
        text: "Login",
        href: "/",
      },
      footerText: "Don’t have an account yet?",
      footerLink: { text: "Create an account.", href: "/" },
    },
    {
      title: "Transporters and fleet owners",
      description: "Deliver cargo, instant pay.",
      features: [
        "Constant deliveries",
        "Network building",
        "Driver management",
      ],
      bgColor: "bg-[#012811]",
      icon: bus,
      image: marketplace2mobile,
      storeLinks: [
        { src: appstore, href: "/" },
        { src: googleplay, href: "/" },
      ],
    },
    {
      title: "Distributors",
      description: "Receive and track supplies easily.",
      features: ["Status update", "Real-time tracking"],
      bgColor: "bg-black",
      icon: bus,
      image: marketplace3mobile,
      storeLinks: [
        { src: appstore, href: "/" },
        { src: googleplay, href: "/" },
      ],
    },
  ];
  return (
    <section>
      <div className={`${bgcolor} px-4 md:px-20 py-8 md:py-16 font-main`}>
        <div className="pb-14">
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-x-80">
            {/* Left Side */}
            <div className="md:w-2/5">
              <h2 className="text-5xl font-semibold">Marketplace</h2>
              <p className="mt-5 text-[#273C2F]">
                The one place where transporters, Suppliers, and Businesses can
                collaborate to ensure on-time delivery.
              </p>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-3/5 flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-light">First name</label>
                  <input
                    type="text"
                    placeholder="e.g Lekan Omotosho"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 bg-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-light">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 bg-transparent"
                  />
                </div>
              </div>
              <button className="w-full bg-secondary-200 text-white-100 font-medium py-3 rounded-md hover:bg-primary-100 transition">
                Join the marketplace
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {marketplaceData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden flex flex-col ${item.bgColor}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center px-2 py-3 md:px-8 md:pt-9">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-6 md:w-8 mr-1.5 md:mr-3"
                  />
                  <h1 className="font-main text-xs md:text-base text-white-100 font-semibold uppercase">
                    {item.title}
                  </h1>
                </div>

                {/* Main Content */}
                <h1 className="px-2 py-2 md:px-8 font-main text-2xl text-white-100 font-semibold">
                  {item.description}
                </h1>

                <div className="px-2 py-2 md:px-8 text-white-100 text-sm font-body font-normal">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center mb-2">
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA (Button or Store Links) */}
                <div className="px-2 py-2 md:px-8 flex items-center gap-3">
                  {item.cta ? (
                    <button className="text-secondary-200 text-sm px-6 py-2.5 bg-white-100 font-body font-medium rounded-lg">
                      {item.cta.text}
                    </button>
                  ) : (
                    item.storeLinks?.map((link, i) => (
                      <a key={i} href={link.href}>
                        <img src={link.src} alt="store" />
                      </a>
                    ))
                  )}
                </div>

                {/* Footer (Optional) */}
                {item.footerText && (
                  <div className="px-2 py-2 md:px-8 text-white-100 text-sm font-body font-normal">
                    <p>
                      {item.footerText}{" "}
                      <a
                        href={item.footerLink.href}
                        target="_blank"
                        className="underline"
                      >
                        {item.footerLink.text}
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="mt-8 flex-grow">
                <img
                  src={item.image}
                  alt="marketplace"
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplacesection;
