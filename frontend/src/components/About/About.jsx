import React from 'react';
// No need to import useNavigate since we are linking to an external site.

export default function About() {
    const handleReload = () => {
    window.location.reload();
  };

  return (
    <section className="bg-white sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 mt-12 font-grotesk">
      <div className="max-w-6xl mx-auto">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* IEEE DTU Card */}
          <div className="border-2 border-[#191A23] rounded-3xl p-6 sm:p-8 bg-[#F3F3F3] shadow-lg flex flex-col">
            <div className="text-center">
              <span className="inline-block bg-[#B9FF66] text-[#191A23] font-bold px-6 py-3 rounded-md text-xl sm:text-2xl mb-4 sm:mb-6">
                IEEE DTU
              </span>
            </div>
            
            <p className="text-[#191A23] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-left">
              Welcome to the IEEE Student Branch at Delhi Technological 
              University (DTU), a vibrant community where technology and 
              curiosity converge. As a chapter of the world's largest 
              technical professional organization, IEEE DTU is a hub for 
              aspiring engineers, developers, and innovators to connect, learn, 
              and grow.
            </p>

            <p className="text-[#191A23] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-left">
              Our mission is to bridge the gap between classroom theory and 
              real-world application. We are a community run by students, for 
              students, dedicated to fostering a culture of technical excellence 
              and collaborative innovation.
            </p>
            
            {/* ✅ FIX: Use an <a> tag for the external link */}
            <a 
              href="http://ieeedtu.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-transparent text-[#191A23] px-0  hover:opacity-80 transition-opacity "
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                </svg>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                  <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                </svg>
              </div>
              <span className="text-base font-medium">Learn more</span>
            </a>
          </div>

          {/* TECHWEEK Card */}
          <div className="border-2 border-[#191A23] rounded-3xl p-6 sm:p-8 bg-[#F3F3F3] shadow-lg flex flex-col">
            <div className="text-center">
              <span className="inline-block bg-[#B9FF66] text-[#191A23] font-bold px-6 py-3 rounded-md text-xl sm:text-2xl mb-4 sm:mb-6">
                TECHWEEK
              </span>
            </div>
            
            <p className="text-[#191A23] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-left">
              Techweek is a week-long festival of technology designed to be the 
              perfect introduction to the most exciting domains in the 
              engineering world. What makes TechWeek truly special is its 
              peer-to-peer learning model, where every hands-on workshop from 
              AI & Machine Learning and DSA to Web Development and Design is 
              conceptualized and conducted entirely by experienced seniors.
            </p>

            <p className="text-[#191A23] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-left">
              This creates a uniquely friendly and approachable environment, 
              making it perfect for beginners with no prior experience to ask 
              questions, explore their interests, and discover their passion.
            </p>

            <button onClick={handleReload} className="flex items-center gap-3 bg-transparent text-[#191A23] px-0 py-2 hover:opacity-80 transition-opacity mt-auto">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                </svg>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                  <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                </svg>
              </div>
              <span className="text-base font-medium">Learn more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}