import React from "react";

import house from "../../../assests/house-filled.svg";
import marketplace1mobile from "../../../assests/marketplace1mobile.svg";
import bus from "../../../assests/bus-filled.svg";
import marketplace2mobile from "../../../assests/marketplace2mobile.svg";

const Marketplacesection = () => {
  return (
    <section>
    <div className="bg-white-200 py-8 md:py-16">
      <div className="px-4 md:px-16">
        <div className="pb-8">
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Marketplace
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary-200 rounded-xl overflow-hidden">
            <div className="flex items-center px-2 py-3 md:px-8 md:py-9">
              <img
                src={house}
                alt="bus"
                className="w-6 md:w-8 mr-1.5 md:mr-3 "
              />
              <h1 className="font-main text-xs md:text-base text-white-100 font-semibold">
                MANUFACTURERS
              </h1>
            </div>
            <h1 className="px-2 py-2 md:px-8  font-main text-2xl md:text-4xl text-white-100 font-semibold">
              Make smarter moves
            </h1>
            <div className="px-2 py-2 md:px-8 flex items-center justify-start">
              <p className="font-body font-normal pr-2 text-white-100 text-[0.625rem]">
                Search filters
              </p>
              <p className="font-body font-normal pr-2 text-white-100 text-[0.625rem]">
                Collaboration tools
              </p>
              <p className="font-body font-normal text-white-100 text-[0.625rem]">
                Shipment tracking
              </p>
            </div>

            <div>
              <img
                src={marketplace1mobile}
                alt="marketplace"
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-primary-300 rounded-xl overflow-hidden">
            <div className="flex items-center px-2 py-3 md:px-8 md:py-9">
              <img src={bus} alt="bus" className="w-6 md:w-8 mr-1.5 md:mr-3 " />
              <h1 className="font-main text-xs md:text-base text-white-100 font-semibold">
                TRANSPORTERS
              </h1>
            </div>
            <h1 className="px-2 py-2 md:px-8  font-main text-2xl md:text-4xl text-white-100 font-semibold">
              Local loads, instant pay.
            </h1>
            <div className="px-2 py-2 md:px-8 flex items-center justify-start">
              <p className="font-body font-normal pr-2 text-white-100 text-[0.625rem]">
                Instant payouts
              </p>
              <p className="font-body font-normal pr-2 text-white-100 text-[0.625rem]">
                Life insurance
              </p>
              <p className="font-body font-normal text-white-100 text-[0.625rem]">
                Constant shipment
              </p>
            </div>

            <div>
              <img
                src={marketplace2mobile}
                alt="marketplace"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Marketplacesection;
