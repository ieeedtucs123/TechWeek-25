import React from 'react'
import Arrow4 from '/Arrow 4.svg';
import Arrow5 from '/Arrow 5.svg';
export default function Schedule() {
  return (
    <div className="w-full font-grotesk bg-white py-28 px-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 
          className="inline-block px-2 mb-6" 
          style={{ 
            backgroundColor: '#B9FF66',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Event Schedule
        </h2>
        <p 
          className="text-gray-700 max-w-2xl"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Get ready for a week of immersive learning and get to know when you will meet the skill that you are passionate about!
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl font-grotesk mx-auto">
                    
        {/* Event 1 - Left Side */}
        <div className="flex items-center w-full">

          {/* --- Left Column: The Card --- */}
          <div className="w-2/5 flex justify-end">
            <div className="w-full max-w-md h-[100px]">
              <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
                <div className="mb-3">
                  <span 
                    className="inline-block px-2 font-medium bg-white text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 1 NAME
                  </span>
                </div>
                <div>
                  <span 
                    className="inline-block px-2 font-medium bg-white text-black text-[15px] sm:text-2xl md:text-3xl  leading-tight">
                    DATE AND DAY
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* --- Right Column: The Image --- */}
        <div className="lg:w-[370px] lg:pt-10 md:w-[300px] md:pt-12 sm:w-[240px] sm:pt-11 w-[150px] pt-[70px]">
          <img src={Arrow4} alt="Timeline Connector" className="w-full h-auto" />
        </div>

      </div>

        {/* Event 2 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0">
          <div className="w-3/5">
            <img src={Arrow5} className="lg:w-[370px] lg:pt-10 md:w-[300px] md:pt-12 sm:w-[240px] sm:pt-11 w-[150px] pt-[70px] ml-auto"/>
            
          </div>
          <div className="w-2/5 max-w-md">
            {/* --- CHANGES APPLIED TO THIS LINE --- */}
            <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6">
              <div className="mb-3">
                <span 
                  className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[15px] sm:text-2xl md:text-3xl leading-tight">
                    SIG 2 NAME
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

        {/* Event 3 - Left Side */}
        <div className="flex font-grotesk items-center mb-0">
          <div className="lg:w-[450px]">
            <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-3xl px-6 py-4 inline-block lg:w-[450px] ;lg:h-[150px] md:w-[330px]">
              <div className="mb-3">
                <span className="inline-block px-2 font-medium bg-[#FFFFFF] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                  SIG 1 NAME
                </span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-2 font-medium bg-[#FFFFFF] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                
                </span>
              </div>
              <div>
                <span className="inline-block px-2 font-medium bg-[#FFFFFF] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                  DATE AND DAY
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <img src={Arrow4} className="lg:w-[450px] lg:h-[150px] lg:pt-8 md:w-[360px] md:pt-12"/>
          </div>
        </div>

        {/* Event 4 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0">
          <div className="w-[652px]">
            <img src={Arrow5} className="lg:w-[450px] lg:h-[150px] lg:pt-11 md:w-[360px] md:pt-12 justify-end ml-auto"/>
            
          </div>
          <div className="justify-end">
            <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl px-6 py-4 inline-block lg:w-[500px] lg:h-[150px] md:w-[330px]">
              <div className="mb-3">
                <span className="inline-block px-2 font-medium bg-[#B9FF66] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                  SIG 2 NAME
                </span>
              </div>
              <div>
                <span className="inline-block px-2 font-medium bg-[#B9FF66] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                
                </span>
              </div>
              <div>
                <span className="inline-block px-2 font-medium bg-[#B9FF66] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                  DATE AND DAY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event 5 - Left Side */}
        <div className="flex font-grotesk items-center mb-0">
          <div className="lg:w-[450px]">
            <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-3xl px-6 py-4 inline-block lg:w-[450px] ;lg:h-[150px] md:w-[330px]">
              <div className="mb-3">
                <span className="inline-block px-2 font-medium bg-[#FFFFFF] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                  SIG 1 NAME
                </span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-2 font-medium bg-[#FFFFFF] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                
                </span>
              </div>
              <div>
                <span className="inline-block px-2 font-medium bg-[#FFFFFF] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                  DATE AND DAY
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <img src={Arrow4} className="lg:w-[450px] lg:h-[150px] lg:pt-8 md:w-[360px] md:pt-12"/>
          </div>
        </div>

        {/* Event 6 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0">
          <div className="w-[652px]">
            <img src={Arrow5} className="lg:w-[450px] lg:h-[150px] lg:pt-11 md:w-[360px] md:pt-12 justify-end ml-auto"/>
            
          </div>
          <div className="justify-end">
            <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl px-6 py-4 inline-block lg:w-[500px] lg:h-[150px] md:w-[330px]">
              <div className="mb-3">
                <span className="inline-block px-2 font-medium bg-[#B9FF66] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                  SIG 2 NAME
                </span>
              </div>
              <div>
                <span className="inline-block px-2 font-medium bg-[#B9FF66] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
                
                </span>
              </div>
              <div>
                <span className="inline-block px-2 font-medium bg-[#B9FF66] text-black" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '100%' }}>
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