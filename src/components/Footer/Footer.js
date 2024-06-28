import React from "react";

import logo from "../../assests/hage_logo_1.svg";
import facebook from "../../assests/Facebook.svg";
import twitter from "../../assests/Twitter.svg";
import instagram from "../../assests/Instagram.svg";
import linkedin from "../../assests/LinkedIn.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:contact@hage.com`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+2340000000000`;
  };

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Palm+Avenue,Mushin,Lagos");
  };

  return (
    <div className="bg-primary-300 py-8 md:py-16 font-body">
      <div className="px-4 md:px-16">
        <div className="text-white-100 grid md:grid-cols-5 gap-y-10 md:gap-x-10 ">
          <Link to="/">
            <img src={logo} alt="hage_logo" className="w-16 md:w-24" />
          </Link>
          <div className="flex flex-col">
            <h2 className="text-base font-body">Our services</h2>
            <ul className="mt-2.5 md:mt-6 text-sm font-body flex flex-col">
              <NavLink to="/service/inland" className="py-2">
                Inland services
              </NavLink>
              <NavLink
                to="/service/freight"
                className="py-2 flex justify-between items-center"
              >
                Shipping/air freight
                <button className="px-1 border text-secondary-200 border-secondary-200 rounded-xl text-[0.625rem] md:text-[0.5rem]">
                  Coming soon
                </button>
              </NavLink>
              <NavLink
                to="/service/railcargo"
                className="py-2 flex justify-between items-center"
              >
                Railway cargo services
                <button className="px-1 border text-secondary-200 border-secondary-200 rounded-xl text-[0.625rem] md:text-[0.5rem]">
                  Coming soon
                </button>
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-body">Marketplace</h2>
            <ul className="mt-2.5 md:mt-6 text-sm font-body flex flex-col">
              <NavLink to="/marketplace/manufacturers" className="py-2">
                For manufacturers
              </NavLink>
              <NavLink to="/marketplace/transporters" className="py-2">
                For transporters
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-body">Company</h2>
            <ul className="mt-2.5 md:mt-6 text-sm font-body flex flex-col">
              <NavLink to="/company#about" className="py-2">
                About us
              </NavLink>
              <NavLink to="/company#advisory" className="py-2">
                Our team
              </NavLink>
              <NavLink to="/company#advisory" className="py-2">
                Our advisory board
              </NavLink>
              <NavLink to="/company#faq" className="py-2">
                FAQ
              </NavLink>
              <div className="py-2 flex justify-between items-center">
                <span>Hiring</span>
                <button className="px-1 border text-secondary-200 border-secondary-200 rounded-xl text-[0.625rem] md:text-[0.5rem]">
                  Coming soon
                </button>
              </div>
            </ul>
          </div>
          <div>
            <div>
              <ul className="flex justify-between items-center pr-20 md:pr-0">
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tryhage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/tryhagetoday"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/naijawaysglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedIn" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-6 text-sm font-body flex flex-col">
              <button className="text-left py-2" onClick={handleMapClick}>
                Palm Avenue, Mushin, 102215, Lagos
              </button>
              <button
                className="text-left  py-2 italic"
                onClick={handleEmailClick}
              >
                contact@hage.com
              </button>

              <button className="text-left  py-2" onClick={handlePhoneClick}>
                +234 0000000000
              </button>
            </div>
          </div>
        </div>
        <div className="text-white-100 mt-10 md:mt-28  border-t border-white-100">
          <div className="pt-6 md:pt-8 md:flex justify-between items-center">
            <div className="text-sm pb-4 md:pb-0">
              © 2024 Hage. All rights reserved.
            </div>
            <div className=" pt-3">
              <ul className="flex md:justify-between items-center text-xs md:text-sm">
                <li className="underline">Privacy Policy</li>
                <li className="px-4 underline">Terms of Service</li>
                <li className="underline">Cookies Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
