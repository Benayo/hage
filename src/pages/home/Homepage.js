import React from "react";

import Hero from "./sections/Hero";
import WhyChooseHage from "./sections/WhyChooseHage";
import SuccessCount from "./sections/SuccessCount";
import Marketplacesection from "./sections/Marketplacesection";
import Pricing from "./sections/Pricing";
import AdvisoryBoard from "./sections/AdvisoryBoard";
import TeamHage from "./sections/TeamHage";
import Hiring from "./sections/Hiring";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhyChooseHage />
      <SuccessCount />
      <Marketplacesection />
      <Pricing />
      <AdvisoryBoard />
      <TeamHage />
      <Hiring />
    </>
  );
};

export default Homepage;
