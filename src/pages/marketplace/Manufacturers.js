import React from "react";

import MarketplaceFeatures2 from "./sections/MarketplaceFeatures2";
import BookDemo from "../../components/Bookdemo/BookDemo";

const Manufacturers = () => {
  return (
    <>
      <MarketplaceFeatures2 />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book demo" />
    </>
  );
};

export default Manufacturers;
