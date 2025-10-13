import React, { useState } from 'react';   
import './FAQs.css';                        

const faqData = [
  { q: "What is TechWeek?", a: "TechWeek is an IEEE event that celebrates technology and innovation." },
  { q: "How can I participate?", a: "You can register through our website and join various events and workshops." },
  { q: "Who can attend?", a: "All students interested in tech, coding, or innovation can attend!" },
   { q: "What is TechWeek?", a: "TechWeek is an IEEE event that celebrates technology and innovation." },
  { q: "How can I participate?", a: "You can register through our website and join various events and workshops." },
  { q: "Who can attend?", a: "All students interested in tech, coding, or innovation can attend!" },
  
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Set first FAQ open initially
  React.useEffect(() => {
    setOpenIndex(0);
  }, []);

  return (
    <section className="container font-grotesk">
      <div className="max-w-6xl mx-auto font-grotesk">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
            <span className="inline-block bg-[#B9FF66] text-[#191A23] font-bold px-6 py-3 rounded-md text-2xl sm:text-3xl mb-3 sm:mb-0 w-fit">
              About Us
            </span>
            <p className="text-[#191A23] text-sm sm:text-base">
              A week packed with friendly, hands-on workshops on AI, ML, DSA,
              Design, and more. No prerequisites, just curiosity!
            </p>
          </div>
        </div>
      </div>
      <h2 className="heading">Frequently Asked Questions</h2>
      {faqData.map((item, i) => (
        <div key={i} className={`item`}>
          <button className={`${openIndex === i ? 'questionBef' : 'question'}`} onClick={() => toggle(i)}>
            <span>{item.q}</span>
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className={`answer ${openIndex === i ? 'open' : ''}`}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
