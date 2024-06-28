import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assests/hage_logo_1.svg";
import dropdown from "../../assests/down-button-icon.svg";

const Navbar = () => {
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center px-4 py-4 md:px-16 md:py-6 w-full bg-primary-100 text-white-100 font-body">
        <Link to="/">
          <img src={logo} alt="hage_logo" className="w-16 md:w-24" />
        </Link>

        <ul className="hidden md:flex justify-between items-center text-sm font-light">
          {/* Service Dropdown */}
          <li
            className="relative mr-6"
            onMouseEnter={() => setShowServiceDropdown(true)}
            onMouseLeave={() => setShowServiceDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2">Our Services</p>
              <span>
                <img
                  src={dropdown}
                  alt="drop-down"
                  className={`h-4 w-4 transition-transform ${
                    showServiceDropdown ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>
            {/* Service Dropdown Content */}
            {showServiceDropdown && (
              <div className="absolute bg-white-100 text-primary-100 top-full left-0 rounded shadow-md py-2 w-[230%] text-sm">
                <NavLink
                  to="/service/inland"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  Inland Services
                </NavLink>
                <NavLink
                  to="/service/freight"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  <div className="flex justify-between items-center">
                    <span>Shipping/air freight</span>
                    <button className="text-[0.625rem] border border-[#64AB80] text-[#64AB80] rounded-full px-1 ml-2">
                      Coming soon
                    </button>
                  </div>
                </NavLink>
                <NavLink
                  to="/service/railcargo"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  <div className="flex justify-between items-center">
                    <span>Rail cargo transport</span>
                    <button className="text-[0.625rem] border border-[#64AB80] text-[#64AB80] rounded-full px-1 ml-2">
                      Coming soon
                    </button>
                  </div>
                </NavLink>
              </div>
            )}
          </li>

          {/* Marketplace Dropdown */}
          <li
            className="relative mr-6"
            onMouseEnter={() => setShowMarketplaceDropdown(true)}
            onMouseLeave={() => setShowMarketplaceDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2">Marketplace</p>
              <span>
                <img
                  src={dropdown}
                  alt="drop-down"
                  className={`h-4 w-4 transition-transform ${
                    showMarketplaceDropdown ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>
            {/* Marketplace Dropdown Content */}
            {showMarketplaceDropdown && (
              <div className="absolute bg-white-100 text-primary-100 top-full left-0 rounded shadow-md py-2 w-[230%] text-sm">
                <NavLink
                  to="/marketplace/manufacturers"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  For manufacturers
                </NavLink>
                <NavLink
                  to="/marketplace/transporters"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  For transporters
                </NavLink>
              </div>
            )}
          </li>

          {/* Company Dropdown */}
          <li
            className="relative mr-6"
            onMouseEnter={() => setShowCompanyDropdown(true)}
            onMouseLeave={() => setShowCompanyDropdown(false)}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <p className="pr-2">Company</p>
              <span>
                <img
                  src={dropdown}
                  alt="drop-down"
                  className={`h-4 w-4 transition-transform ${
                    showCompanyDropdown ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>
            {/* Company Dropdown Content */}
            {showCompanyDropdown && (
              <div className="absolute bg-white-100 text-primary-100 top-full left-0 rounded shadow-md py-2 w-[250%] text-sm">
                <NavLink
                  to="/company#about"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  About us
                </NavLink>
                <NavLink
                  to="/company#team"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  Our team & advisory board
                </NavLink>
                <NavLink
                  to="/company#faq"
                  className="block p-3 hover:bg-secondary-100 text-sm"
                >
                  FAQ
                </NavLink>
                <div className="flex justify-between items-center p-3 hover:bg-secondary-100 text-sm">
                  <span>Hiring</span>
                  <button className="text-[0.625rem] border border-[#64AB80] text-[#64AB80] rounded-full px-1 ml-2">
                    Coming soon
                  </button>
                </div>
              </div>
            )}
          </li>

          {/* Blog */}
          <li>
            <NavLink to="/blog" className="cursor-pointer">
              <p>Blog</p>
            </NavLink>
          </li>
        </ul>

        {/* Sign up button */}
        <button className="hidden md:flex justify-center items-center px-4 py-2.5 bg-secondary-200 rounded-lg text-sm font-light">
          Sign up for Marketplace
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
