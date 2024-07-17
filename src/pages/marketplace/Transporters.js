import React from "react";

import MarketplaceFeatures from "./sections/MarketplaceFeatures";
import BookDemo from "../../components/Bookdemo/BookDemo";

const Transporters = () => {
  return (
    <>
      <MarketplaceFeatures />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book demo" />
    </>
  );
};

export default Transporters;
