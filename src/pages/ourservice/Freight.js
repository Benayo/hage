import React from "react";

import Layout from "../../components/Layout/Layout";
import container from "../../assests/container.png";
import containerMobile from "../../assests/containerMobile.png";
import ServiceFeatures from "./sections/ServiceFeatures";
import WhyChooseUs from "./sections/WhyChooseUs";
import Marketplacesection from "../home/sections/Marketplacesection";
import BookDemo from "../../components/Bookdemo/BookDemo";

const Freight = () => {
  return (
    <Layout>
      <ServiceFeatures
        titleB="seamless delivery"
        spanTitle="Global reach,"
        subTitle="Ship your cargo internationally with our reliable air freight and shipping solutions."
        image={container}
        imageMobile={containerMobile}
        buttonText="Coming soon"
      />
      <WhyChooseUs />
      <Marketplacesection />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book a demo" />
    </Layout>
  );
};

export default Freight;
