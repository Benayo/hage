import React from "react";

const Faqs = ({ faqsData }) => {
  return (
    <div id="#faq" className="bg-white-100 py-8 md:py-28">
      <div className="px-4 md:px-16">
        <div className="flex justify-center items-center pb-8 md:pb-16">
          <h1 className="font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            FAQs
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 md:gap-y-20 gap-12">
          {Object.entries(faqsData).map(([question, answer]) => (
            <div
              key={question}
              className="grid grid-row-4 gap-4 text-primary-300"
            >
              <div>
                <h3 className="font-body text-base font-semibold text-center leading-6">
                  {question}
                </h3>
              </div>
              <div>
                <p className="font-body font-light text-sm md:text-base leading-7">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
