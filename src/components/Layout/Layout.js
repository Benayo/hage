import React, { useState, useEffect } from "react";
import HeaderInfo from "../navigation/HeaderInfo";
import Navbar from "../navigation/Navbar";
import Footer from "../Footer/Footer";
import MobileMenu from "../navigation/MobileMenu";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
 <header
        className={`z-50 w-full transition-transform duration-300 ${
          isScrolled ? "fixed top-0 left-0 translate-y-0" : "relative translate-y-0"
        }`}>
        <HeaderInfo />
        <div className="hidden md:grid">
          <Navbar />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </header>
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
