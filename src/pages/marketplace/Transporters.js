import React from "react";

import MarketplaceFeatures2 from "./sections/MarketplaceFeatures2";
import BookDemo from "../../components/Bookdemo/BookDemo";
import Layout from "../../components/Layout/Layout";

const Transporters = () => {
  return (
    <Layout>
      <MarketplaceFeatures2 />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book demo" />
    </Layout>
  );
};

export default Transporters;
