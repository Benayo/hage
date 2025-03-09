import React from "react";
import businessctaimg from "../../../assests/businesscta.png";

const BusinessCallToAction = () => {
  return (
    <div className="grid md:grid-cols-2 gap-0 bg-white font-main">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center p-8 md:py-28 md:pl-20 md:pr-28">
        <h2 className="text-5xl font-semibold text-black mb-8">
          Think our services can help your business?{" "}
        </h2>
        <p className="text-[#64748B] mb-24 md:pr-28">
          If you're looking to streamline your logistics and make deliveries
          more efficient, we'd love to show you how our platform can work for
          you. Book a demo with us and see how we can support your delivery
          needs.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block font-light text-sm">First name</label>
            <input
              type="text"
              placeholder="e.g Lekan Omotosho"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 bg-transparent"
            />
          </div>

          <div>
            <label className="block font-light text-sm">Email address</label>
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 bg-transparent"
            />
          </div>

          <button className="w-full bg-secondary-200 text-white-100 font-medium py-4 rounded-md  transition">
            Join the marketplace
          </button>
        </form>
      </div>

      {/* Right Side - Image & Text */}
      <div
        className="relative bg-cover bg-center min-h-screen flex items-end px-6 md:px-16 md:pb-20"
        style={{
            backgroundImage: `
              linear-gradient(179.34deg, rgba(0, 0, 0, 0) 34.12%, rgba(0, 0, 0, 0.826671) 82.93%, rgba(0, 0, 0, 0.7) 98.63%), 
              url('${businessctaimg}')
            `
          }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#03170B] opacity-80"></div>

        {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#03170B] to-[#1E1B00] opacity-90"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black/70"></div> */}

        <p className="text-3xl z-10 text-white-100 md:leading-snug">
          Hage goes beyond just delivering goods. We deliver transparency,
          efficiency, and ultimately, the fuel for your business growth.
        </p>
      </div>
    </div>
  );
};
export default BusinessCallToAction;
