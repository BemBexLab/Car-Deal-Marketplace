'use client';
import { useState } from "react";

export default function AboutOurCar() {
  const faqs = [
    {
      question: "How does car deal marketplace come up with its car valuations?",
      answer:
        "Car Deal Marketplace uses market data, historical trends, and vehicle condition to determine valuations.",
    },
    {
      question: "How accurate are car deal marketplace values?",
      answer:
        "Our values are updated frequently using real-world data to ensure accuracy for trade-ins and private sales.",
    },
    {
      question:
        "How to use car deal marketplace vehicle values when buying a car?",
      answer:
        "You can compare listings against our values to ensure you're getting a fair deal before making a purchase.",
    },
    {
      question:
        "How to use car deal marketplace vehicle values when selling your car?",
      answer:
        "Use our pricing to list your car competitively and attract more buyers while knowing your car's worth.",
    },
    {
      question:
        "What's the difference between trade-in, private sale value, instant cash offer, and car deal marketplace Instant Market Value (IMV)?",
      answer:
        "Trade-in is typically lower, private sale is higher. IMV is the average fair price. Instant cash offers are immediate buyout options.",
    },
    {
      question: "What determines my value?",
      answer:
        "Condition, mileage, location, seasonality, and demand are major factors in calculating your car's value.",
    },
    {
      question: "Can I trade in my car if it's not paid off?",
      answer:
        "Yes, but the remaining loan balance will be subtracted from your trade-in value or rolled into a new loan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-full md:max-w-[1612px] mx-auto items-center gap-12 px-4 md:px-0 mt-20">
      <div className="flex w-full max-w-[1586px] flex-col items-center gap-11 px-2">
        <div className="self-stretch text-[#282828] text-center font-['Helvetica_Now_Display'] text-xl sm:text-2xl md:text-[32px] font-bold capitalize">
          Browse by category
        </div>
        <div className="w-[120px] border-t-4 border-[#7800B0] mx-auto" />

        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-4 sm:px-5 py-3 border border-[#7800B0] rounded-full cursor-pointer hover:bg-[#7800B0] hover:text-white text-[#282828] transition-colors"
              >
                <span className="font-['Helvetica_Now_Display'] text-sm sm:text-base lg:text-[18px] font-normal leading-snug">
                  {faq.question}
                </span>
                <svg
                  className={`!w-5 !h-5 flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="mt-2 px-5 text-[#555] text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="bg-[#7800B0] text-white border-2 border-transparent hover:bg-white hover:text-[#7800B0] hover:border-[#7800B0] rounded-full w-[200px] h-[50px] transition-colors duration-300">
  Load More
</button>

      </div>
    </section>
  );
}
