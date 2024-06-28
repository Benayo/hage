import React from "react";

import Layout from "../../components/Layout/Layout";
import MarketplaceFeatures from "./sections/MarketplaceFeatures";
import BookDemo from "../../components/Bookdemo/BookDemo";

const Manufacturers = () => {
  return (
    <Layout>
      <MarketplaceFeatures />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book demo" />
    </Layout>
  );
};

export default Manufacturers;
