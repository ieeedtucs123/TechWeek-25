import React from 'react'
import Arrow4 from '/Arrow 4.svg';
import Arrow5 from '/Arrow 5.svg';
export default function Schedule() {
  return (
    <div className="w-full font-grotesk bg-white py-28 px-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
            <span className="inline-block bg-[#B9FF66] text-[#191A23] font-bold px-6 py-3 rounded-md text-[20px] sm:text-3xl mb-3 sm:mb-0 w-fit ">
              Event Schedule
            </span>
            <p className="text-[#191A23] text-sm sm:text-base">
              Get ready for a week of immersive learning and get to know when you will meet the skill that you are passionate about!
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl font-grotesk mx-auto">
                    
        {/* Event 1 - Left Side */}
        <div className="flex items-center w-full">

          {/* --- Left Column: The Card --- */}
          <div className="w-2/5 flex justify-end">
            <div className="w-full max-w-md h-[100px] lg:h-[135.2px]">
              <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
                <div className="mb-3">
                  <span 
                    className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 1 NAME
                  </span>
                </div>
                <div>
                  <span 
                    className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[15px] sm:text-2xl md:text-3xl  leading-tight">
                    DATE AND DAY
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* --- Right Column: The Image --- */}
        <div className="h-[97.88px] lg:w-[370px] md:w-[300px] sm:w-[240px] w-[150px] h-[35.8px]">
          <img src={Arrow4} alt="Timeline Connector" className="w-full h-auto relative translate-y-[69px] lg:translate-y-[20px] lg:translate-x-[0px] md:translate-y-[40px] sm:translate-y-[47px]" />
        </div>

      </div>

        {/* Event 2 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0">
          <div className="w-3/5 h-[120px]">
            <img src={Arrow5} className="lg:w-[370px] lg:h-[97.88px] md:w-[300px] sm:w-[240px] w-[150px] ml-auto relative lg:translate-x-3 lg:translate-y-[34px] md:translate-x-[2px] md:translate-y-[57px] sm:translate-x-[2px] sm:translate-y-[63px] translate-x-[1px] translate-y-[85px]"/>
            
          </div>
          <div className="w-2/5 max-w-md h-[100px] lg:h-[135.2px]">
            {/* --- CHANGES APPLIED TO THIS LINE --- */}
            <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
              <div className="mb-3">
                <span 
                  className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 2 NAME
                </span>
              </div>
              <div>
                <span 
                  className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    DATE AND DAY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event 3 - Left Side */}
        <div className="flex items-center w-full">

          {/* --- Left Column: The Card --- */}
          <div className="w-2/5 flex justify-end">
            <div className="w-full max-w-md h-[100px] lg:h-[135.2px]">
              <div className="bg-[#191A23] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
                <div className="mb-3">
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 3 NAME
                  </span>
                </div>
                <div>
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl  leading-tight">
                    DATE AND DAY
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* --- Right Column: The Image --- */}
        <div className="h-[97.88px] lg:w-[370px] md:w-[300px] sm:w-[240px] w-[150px] h-[35.8px]">
          <img src={Arrow4} alt="Timeline Connector" className="w-full h-auto relative translate-y-[69px] lg:translate-y-[20px] lg:translate-x-[0px] md:translate-y-[40px] sm:translate-y-[47px]" />
        </div>

      </div>

        {/* Event 4 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0">
          <div className="w-3/5 h-[120px]">
            <img src={Arrow5} className="lg:w-[370px] lg:h-[97.88px] md:w-[300px] sm:w-[240px] w-[150px] ml-auto relative lg:translate-x-3 lg:translate-y-[34px] md:translate-x-[2px] md:translate-y-[57px] sm:translate-x-[2px] sm:translate-y-[63px] translate-x-[1px] translate-y-[85px]"/>
            
          </div>
          <div className="w-2/5 max-w-md h-[100px] lg:h-[135.2px]">
            {/* --- CHANGES APPLIED TO THIS LINE --- */}
            <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
              <div className="mb-3">
                <span 
                  className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 4 NAME
                </span>
              </div>
              <div>
                <span 
                  className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    DATE AND DAY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event 5 - Left Side */}
        <div className="flex items-center w-full">

          {/* --- Left Column: The Card --- */}
          <div className="w-2/5 flex justify-end">
            <div className="w-full max-w-md h-[100px] lg:h-[135.2px]">
              <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
                <div className="mb-3">
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 5 NAME
                  </span>
                </div>
                <div>
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl  leading-tight">
                    DATE AND DAY
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* --- Right Column: The Image --- */}
        <div className="h-[97.88px] lg:w-[370px] md:w-[300px] sm:w-[240px] w-[150px] h-[35.8px]">
          <img src={Arrow4} alt="Timeline Connector" className="w-full h-auto relative translate-y-[60px] lg:translate-y-[20px] lg:translate-x-[0px] md:translate-y-[40px] sm:translate-y-[38px]" />
        </div>

      </div>

        {/* Event 6 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0 md:h-[125px]">
          <div className="w-2/5 max-w-md h-[100px] lg:h-[135.2px] ml-auto">
            {/* --- CHANGES APPLIED TO THIS LINE --- */}
            <div className="bg-[#191A23] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
              <div className="mb-3">
                <span 
                  className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 6 NAME
                </span>
              </div>
              <div>
                <span 
                  className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    DATE AND DAY
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}