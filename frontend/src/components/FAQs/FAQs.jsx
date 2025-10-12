import React, { useState } from 'react';   
import './FAQs.css';                        

const faqData = [
  { q: "What is TechWeek?", a: "TechWeek is an IEEE event that celebrates technology and innovation." },
  { q: "How can I participate?", a: "You can register through our website and join various events and workshops." },
  { q: "Who can attend?", a: "All students interested in tech, coding, or innovation can attend!" },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="container">
      <h2 className="heading">Frequently Asked Questions</h2>
      {faqData.map((item, i) => (
        <div key={i} className="item">
          <button className="question" onClick={() => toggle(i)}>
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
