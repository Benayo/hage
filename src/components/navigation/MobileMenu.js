import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assests/hage_logo_1.svg";
import close from "../../assests/closeMenu.svg";
import menu from "../../assests/menu.svg";
import dropdown from "../../assests/down-button-icon.svg";

const MobileMenu = () => {
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleBackdropClick = () => {
    setShowServiceDropdown(false);
    setShowMarketplaceDropdown(false);
    setShowCompanyDropdown(false);
    setShowMobileMenu(false);
  };

  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* Backdrop */}
      {showMobileMenu && (
        <div
          className="fixed top-9 left-0 w-full h-full bg-gray-800 opacity-75 z-30"
          onClick={handleBackdropClick}
        ></div>
      )}

      {/* Mobile menu content */}
      <div className="fixed w-full bg-primary-300 z-40">
        <div className="fixed w-full z-50 flex flex-col">
          <div className="flex justify-between items-center px-4 py-4 w-full bg-primary-100 text-white-100 font-body">
            <Link to="/">
              <img src={logo} alt="hage_logo" className="w-16 md:w-24" />
            </Link>
            <div className="md:hidden ">
              <img
                src={showMobileMenu ? close : menu} // Toggle between menu and close icons
                alt="menu"
                className="cursor-pointer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            </div>
          </div>

          {showMobileMenu && (
            <div className=" w-full bg-white-100 z-50 transform transition-transform ease-in-out duration-300">
              <div className="py-4 px-4">
                <ul className="flex flex-col px-4">
                  {/* Service Dropdown */}
                  <li
                    onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                  >
                    <div className="flex justify-between items-center">
                      <p className="block py-4 cursor-pointer font-medium">
                        Our Services
                      </p>
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
                      <div className="font-light">
                        <Link
                          to="/service/inland"
                          className="block py-4"
                          onClick={closeMenu}
                        >
                          Inland Services
                        </Link>
                        <Link
                          to="/service/freight"
                          className="flex justify-between items-center w-full py-4"
                          onClick={closeMenu}
                        >
                          <span>Shipping/air freight</span>
                          <button className="text-xs border border-[#64AB80] text-[#64AB80] rounded-full px-1 ml-2">
                            Coming soon
                          </button>
                        </Link>
                        <Link
                          to="/service/railcargo"
                          className="flex justify-between items-center w-full py-4"
                          onClick={closeMenu}
                        >
                          <span>Rail cargo transport</span>
                          <button className="text-xs border border-[#64AB80] text-[#64AB80] rounded-full px-1 ml-2">
                            Coming soon
                          </button>
                        </Link>
                      </div>
                    )}
                  </li>

                  {/* Marketplace Dropdown */}
                  <li
                    onClick={() =>
                      setShowMarketplaceDropdown(!showMarketplaceDropdown)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <p className="block py-4 cursor-pointer font-medium">
                        Marketplace
                      </p>

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
                      <div className="font-light">
                        <Link
                          to="/marketplace/manufacturers"
                          className="block py-4"
                          onClick={closeMenu}
                        >
                          For manufacturers
                        </Link>
                        <Link
                          to="/marketplace/transporters"
                          className="block py-4"
                          onClick={closeMenu}
                        >
                          For transporters
                        </Link>
                      </div>
                    )}
                  </li>

                  {/* Company Dropdown */}
                  <li
                    onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
                  >
                    <div className="flex justify-between items-center">
                      <p className="block py-4 cursor-pointer font-medium">
                        Company
                      </p>

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
                      <div className="font-light">
                        <Link
                          to="/company#about"
                          className="block py-4"
                          onClick={closeMenu}
                        >
                          About us
                        </Link>
                        <Link
                          to="/company#advisory"
                          className="block py-4"
                          onClick={closeMenu}
                        >
                          Our team & advisory board
                        </Link>
                        <Link
                          to="/company#faq"
                          className="block py-4"
                          onClick={closeMenu}
                        >
                          FAQ
                        </Link>
                        <div className=" py-4 w-full  flex justify-between items-center">
                          <span>Hiring</span>
                          <button className="text-xs border border-[#64AB80] text-[#64AB80] rounded-full px-1 ml-2">
                            Coming soon
                          </button>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* Blog */}
                  <li>
                    <Link
                      to="/blog"
                      className="block py-4 font-medium"
                      onClick={closeMenu}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
