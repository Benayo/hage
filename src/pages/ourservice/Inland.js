import React from "react";

import trucks from "../../assests/trucks.png";
import trucksMobile from "../../assests/trucksmobile.png";
import ServiceFeatures from "./sections/ServiceFeatures";
import WhyChooseUs from "./sections/WhyChooseUs";
import Marketplacesection from "../home/sections/Marketplacesection";
import Faqs from "../../components/FAQs/Faqs";
import BookDemo from "../../components/Bookdemo/BookDemo";

const faqsData = {
  "What types of goods can I ship using Inland Services?":
    "Our Inland Services can handle a wide range of goods for domestic transportation. Some include:  Machinery, building materials, furniture, appliances, electronics, clothing, packaged food, beverages.",
  "How do I get a quote for my shipment?":
    "To get a quick and accurate quote for your Inland shipment, we recommend signing up for a free account on our manufacturer platform.",
  "What is the estimated delivery time for my shipment?":
    "The estimated delivery time for your Inland shipment depends on several factors, like origin and destination, type of service, shipment size and weight.",
  // Add more questions and answers as needed
};

const Inland = () => {
  return (
    <>
      <ServiceFeatures
        titleA="Efficient"
        titleB="made easy"
        spanTitle="domestic transportation"
        subTitle="Connect with reliable carriers for your road freight needs across the country."
        image={trucks}
        imageMobile={trucksMobile}
      />
      <WhyChooseUs />
      <Marketplacesection />
      <Faqs faqsData={faqsData} />
      <BookDemo signUpButtonText="Sign up today" demoButtonText="Book a demo" />
    </>
  );
};

export default Inland;
