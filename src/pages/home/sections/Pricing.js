import React from "react";

import check from "../../../assests/Check.svg";
import checkwhite from "../../../assests/Check-white.svg";

const Pricing = () => {
  return (
    <div className="bg-white-100 py-8 md:py-16">
      <div className="px-4 md:px-16">
        <div className="flex justify-center items-center pb-8 md:pb-16">
          <h1 className=" font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Pricing plan
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 1st Subscription */}
          <div className="p-8 border border-primary-100  rounded-xl grid grid-rows-3 ">
            <div className="row-span-1 ">
              <div>
                <h3 className="font-body font-semibold text-xl pb-2 md:pb-4">
                  Free plan
                </h3>
                <h1 className="font-main font-semibold text-5xl md:text-[3.5rem]">
                  Free
                  <span className=" text-2xl md:text-[2rem] font-body">
                    /forever
                  </span>
                </h1>
              </div>
            </div>

            <div className="row-span-2">
              <div className="w-full border-[0.025rem] border-primary-100 my-6 md:my-10 grid-row-1 "></div>

              <h4 className="text-base font-body font-normal mb-2">
                Includes:
              </h4>

              <div className="flex items-center my-4">
                <img src={check} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Dashboard for analytics
                </p>
              </div>

              <div className="flex items-center my-4">
                <img src={check} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Create orders
                </p>
              </div>

              <div className="flex items-center">
                <img src={check} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Real time notifications
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-2 ">
              <button className="py-3 w-full text-white-100 bg-primary-100 rounded-lg text-center">
                Get started
              </button>
            </div>
          </div>

          {/* 2nd Subscription */}

          <div className="p-8 border bg-primary-100  rounded-xl grid grid-rows-3">
            <div className="row-span-1 ">
              <div className="text-white-100">
                <h3 className="font-body font-semibold text-xl pb-2 md:pb-4">
                  Retailers plan
                </h3>
                <h1 className="font-main font-semibold text-5xl md:text-[3.5rem]">
                  ₦75k
                  <span className=" text-2xl md:text-[2rem] font-body">
                    /qtr
                  </span>
                </h1>

                <p className=" text-base font-light font-body mt-2 text-white-100">
                  or ₦250k yearly
                </p>
              </div>
            </div>

            <div className="row-span-2">
              <div className="w-full border-[0.025rem] border-secondary-200 my-6 md:my-10"></div>

              <h4 className="text-base font-body font-normal mb-2 text-white-100">
                Includes:
              </h4>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Everything in free plan
                </p>
              </div>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Order visibility and tracking
                </p>
              </div>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Access to public fleets
                </p>
              </div>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Report generation and business intelligence
                </p>
              </div>

              <div className="flex items-center text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Premium customer support
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-2 ">
              <button className="py-3 w-full text-white-100 bg-secondary-200 rounded-lg text-center">
                Get started
              </button>
            </div>
          </div>

          {/* 3rd Subscription */}
          <div className="p-8 border bg-primary-100  rounded-xl grid grid-rows-3">
            <div className="row-span-1 ">
              <div className="text-white-100">
                <h3 className="font-body font-semibold text-xl pb-2 md:pb-4">
                  Manufacturers plan
                </h3>
                <h1 className="font-main font-semibold text-5xl md:text-[3.5rem]">
                  ₦150k
                  <span className=" text-2xl md:text-[2rem] font-body">
                    /qtr
                  </span>
                </h1>

                <p className=" text-base font-light font-body mt-2 text-white-100">
                  or ₦250k yearly
                </p>
              </div>
            </div>

            <div className="row-span-2">
              <div className="w-full border-[0.025rem] border-secondary-200 my-6 md:my-10"></div>

              <h4 className="text-base font-body font-normal mb-2 text-white-100">
                Includes:
              </h4>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Everything in retailers plan
                </p>
              </div>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Trip financing (see terms and conditions)
                </p>
              </div>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Select order visibility
                </p>
              </div>

              <div className="flex items-center my-4 text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Onboard and manage fleet
                </p>
              </div>

              <div className="flex items-center text-white-100">
                <img src={checkwhite} alt="check" className="w-4" />
                <p className="text-xs md:text-sm font-body font-normal mx-2 md:mx-4">
                  Premium customer support
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-2 ">
              <button className="py-3 w-full text-white-100 bg-secondary-200 rounded-lg text-center">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
