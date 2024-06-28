import React from "react";

import MarketplaceFeatures from "./sections/MarketplaceFeatures";
import BookDemo from "../../components/Bookdemo/BookDemo";

const Manufacturers = () => {
  return (
    <>
      <MarketplaceFeatures />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book demo" />
    </>
  );
};

export default Manufacturers;
