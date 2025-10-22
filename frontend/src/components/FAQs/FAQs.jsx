import React, { useState } from 'react';   
import './FAQs.css';                        

const faqData = [
  { q: "What is TechWeek 2025?", a: "TechWeek 2025 is IEEE DTU’s annual weekly event packed with beginner-friendly workshops and hands-on sessions celebrating technology, innovation, and creativity." },
  { q: "How do I register for TechWeek?", a: (
      <>
        You can register through <a href="https://techweek.ieeedtu.in" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>techweek.ieeedtu.in</a>, 
        and event-specific registration links will also be shared on Instagram (<a href="https://instagram.com/ieee.dtu" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>@ieee.dtu</a>) and other IEEE DTU social media platforms.
      </>
    ) },
  { q: " Is there any registration fee?", a: "All TechWeek events are free of cost." },
   { q: "Can non-IEEE members attend these sessions?", a: "Yes! TechWeek 2025 is open to all students, whether or not they are IEEE members. Everyone is welcome to register for the workshop, come and learn." },
  { q: "What type of workshops will be there in TechWeek 2025?", a: "Workshops will cover a wide range of exciting topics, including Hardware, Robotics, Artificial Intelligence, Machine Learning, Web Development, Cybersecurity, Design Thinking, and much more." },
  { q: "Are there any prerequisites required to attend the TechWeek sessions?", a: "Not at all ! All sessions are beginner-friendly, designed to introduce new domains and help students explore their technical interests." },
  { q: "Will we receive participation certificates?", a: "Yes, all participants will receive certificates of participation, and winners of various events will get special prizes." },
  { 
  q: "From where can I know about the updates for TechWeek 2025?", 
  a: (
    <>
    You can stay updated about TechWeek 2025 by clicking the Get Notified button on the website. 
Also follow IEEE DTU on{" "}
<a
  href="https://instagram.com/ieee.dtu"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "blue" }}
>
  @ieee.dtu
</a>{" "}
and visit{" "}
<a
  href="https://techweek.ieeedtu.in"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "blue" }}
>
  techweek.ieeedtu.in
</a>{" "}
for updates on DSA, Dev, ML, Electronics, and more.

    </>
    )
  }
,
  
  
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
              FAQs
            </span>
            <p className="text-[#191A23] text-sm sm:text-base">
              Got a question? Here are answers to some common queries to help you get ready for an amazing week of learning and innovation.
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
