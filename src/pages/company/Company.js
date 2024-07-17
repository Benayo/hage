import React, { useEffect } from "react";

import AboutusFeatures from "./sections/AboutusFeatures";
import BookDemo from "../../components/Bookdemo/BookDemo";
import AdvisoryBoard from "../home/sections/AdvisoryBoard";
import TeamHage from "../home/sections/TeamHage";
import Faqs from "../../components/FAQs/Faqs";
import SuccessCount from "../home/sections/SuccessCount";
import { useLocation } from "react-router-dom";

const faqsData = {
  "What is Hage?":
    "Hage is a logistics marketplace that connects manufacturers, distributors, and transporters for efficient and cost-effective freight movement.",
  "Who can benefit from using Hage?": `
   
     Manufacturers: Find reliable transporters, manage shipments easily, and gain real-time tracking visibility. 

     Distributors: Track orders, generate reports, and ensure on-time deliveries. 

     Transporters: Find loads efficiently, optimize routes, and manage jobs effectively. 
  
  `,
  "How do I find out more about pricing for shipments?":
    "Transporters can set their own rates, and manufacturers can compare quotes from different carriers to find the best option for their needs. You can request quotes directly through our platform.",
  "How secure is my information on Hage?":
    "Hage takes data security very seriously. We use industry-standard security measures to protect your information.",

  "How can I contact Hage for support?":
    "You can contact our support team through our website's contact form or by emailing us at support@naijawaysglobal.com",

  "What happens if there's a problem with my shipment?":
    "Our platform allows for clear communication between all parties involved. You can report any issues directly through the platform, and our support team is available to assist in resolving any disputes or unexpected situations.",

};

const Company = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const targetSection = document.getElementById(hash.slice(1));
      if (targetSection) {
        let navbarHeight = document.querySelector("nav").offsetHeight;

        // Adjust navbarHeight for mobile view (if necessary)
        if (window.innerWidth <= 768) {
          navbarHeight = 100; // Example height for mobile navbar, adjust as needed
        }

        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
     <section id="about"><AboutusFeatures />
     <BookDemo demoButtonText="Check it out" /></section>
        


      <section id="advisory">
        <AdvisoryBoard />
      </section>

      <section id="team">
        <TeamHage />
        <BookDemo
          signUpButtonText="Sign up today"
          demoButtonText="Book a demo"
        />
      </section>

      <section id="faq">
        <Faqs faqsData={faqsData} />
      </section>

      <SuccessCount />
    </>
  );
};

export default Company;
