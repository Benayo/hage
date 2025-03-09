import { useState } from "react";
import googleplay from "../../../assests/googleplay.svg";
import appstore from "../../../assests/appstore.svg";
import hagebglogo from "../../../assests/hagebglogo.png";
import monitoricon from "../../../assests/monitoricon.png";

const HowWeServe = () => {
  const roles = [
    {
      id: "driver",
      label: "As a driver",
      title: "Earn money with Hage.",
      description:
        "For truck drivers looking for new ways to make money. Register as a driver and start taking orders.",
      features: [
        {
          title: "Trip & Earnings Overview",
          description:
            "Easily track your completed trips, earnings, and payout history in one place for financial clarity.",
        },
        {
          title: "Instant Delivery Requests",
          description:
            "Accept jobs on-demand to maximize your daily trips and earnings.",
        },
        {
          title: "Secure Handover Confirmation",
          description:
            "Submit proof of delivery instantly with photo uploads, signatures, and waybill verification.",
        },
      ],
    },
    {
      id: "fleet",
      label: "As a fleet manager",
      title: "Manage your fleet efficiently.",
      description:
        "Optimize operations and monitor drivers to enhance productivity and earnings.",
      features: [
        {
          title: "Real-time Fleet Tracking",
          description:
            "Monitor all fleet vehicles, track deliveries, and manage operations effectively.",
        },
        {
          title: "Driver Performance Insights",
          description:
            "Analyze trip reports and driver behavior for efficiency and safety.",
        },
        {
          title: "Automated Payout System",
          description:
            "Easily manage earnings and payout distributions for your drivers.",
        },
      ],
    },
    {
      id: "distributor",
      label: "As a distributor",
      title: "Streamline your distribution network.",
      description: "Find reliable logistics and track deliveries with ease.",
      features: [
        {
          title: "Supplier & Order Management",
          description:
            "Track and manage supplier relationships and bulk orders.",
        },
        {
          title: "Delivery Status Updates",
          description: "Stay informed about shipment status with live updates.",
        },
        {
          title: "Inventory Optimization",
          description:
            "Reduce costs and improve inventory management efficiency.",
        },
      ],
    },
    {
      id: "enterprise",
      label: "As an enterprise",
      title: "Scale your business logistics.",
      description:
        "Optimize large-scale logistics and streamline supply chain operations.",
      features: [
        {
          title: "Enterprise-Level Integrations",
          description:
            "Seamlessly integrate with your existing ERP and logistics systems.",
        },
        {
          title: "Advanced Analytics & Reports",
          description:
            "Gain deep insights into logistics performance with comprehensive reporting.",
        },
        {
          title: "Dedicated Support & SLA",
          description:
            "Get priority support and guaranteed service-level agreements for business operations.",
        },
      ],
    },
  ];

  const [activeRole, setActiveRole] = useState("driver");

  const activeContent = roles.find((role) => role.id === activeRole);

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20 font-main">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-4xl font-light text-[#09120B] mb-6">
          How we serve you
        </h2>

        <div className="flex gap-3 justify-start flex-wrap mb-10">
          {roles.map((role) => (
            <button
              key={role.id}
              className={`px-5 py-2.5 rounded-2xl border ${
                activeRole === role.id
                  ? "bg-secondary-200 text-white-100 border border-[#32A071]"
                  : "bg-[#F8FAFC] text-[#94A3B8] border border-[#E2E8F0]"
              }`}
              onClick={() => setActiveRole(role.id)}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white-200 py-6 md:pt-12 md:pb-28 md:px-16  flex flex-col md:flex-row gap-40 justify-between items-center relative">
        <div className="absolute md:left-16 bottom-0">
          <img src={hagebglogo} alt="" className="max-w-md" />
        </div>

        <div className="flex-1">
          <h3 className="text-5xl leading-tight font-semibold text-primary-100">
            {activeContent.title}
          </h3>
          <p className="mt-4 font-normal text-[#273C2F]">
            {activeContent.description}
          </p>

          <div className="mt-4 flex gap-2">
            <img src={googleplay} alt="Google Play" className="h-10" />
            <img src={appstore} alt="App Store" className="h-10" />
          </div>
        </div>

        <div className="space-y-4 flex-1">
          {activeContent.features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] items-center gap-8 p-4 bg-white-100 border border-[#64AB801A] rounded-xl shadow-sm"
            >
              {/* Fixed-size icon container */}
              <div className="p-3 flex items-center justify-center rounded-full bg-secondary-300">
                <img src={monitoricon} alt="icon" className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-semibold text-lg leading-snug">
                  {feature.title}
                </h4>
                <p className="text-sm font-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeServe;
