
import Arrow4 from '/Schedule/Arrow 4.svg';
import Arrow5 from '/Schedule/Arrow 5.svg';
export default function Schedule() {
  return (
    <div className="w-full font-grotesk bg-white py-28 px-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
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
      <div className="max-w-5xl font-grotesk mx-auto">
                    
        {/* Event 1 - Left Side */}
        <div className="flex items-center w-full">

          {/* --- Left Column: The Card --- */}
          <div className="w-2/5 flex justify-end">
            <div className="w-full max-w-sm h-[100px] lg:h-[135.2px]">
              <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6 block text-center">
                <div className="mb-3">
                  <span 
                    className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[17px] lg:text-[26px] sm:text-[23px] md:text-[21px] leading-tight">
                      DSA, Robotics
                  </span>
                </div>
                <div>
                  <span 
                    className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[17px] lg:text-[26px] sm:text-[20px] md:text-[21px] leading-tight">
                      3 Nov, Monday
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* --- Right Column: The Image --- */}
        <div className="h-[97.88px] lg:w-[370px] md:w-[300px] sm:w-[240px] w-[150px] ">
          <img src={Arrow4} alt="Timeline Connector" className="w-full h-auto relative translate-y-[69px] lg:translate-y-[20px] lg:translate-x-[0px] md:translate-y-[30px] sm:translate-y-[47px]" />
        </div>

      </div>

        {/* Event 2 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0">
          <div className="w-3/5 h-[120px]">
            <img src={Arrow5} className="lg:w-[370px] lg:h-[97.88px] md:w-[300px] sm:w-[240px] w-[150px] ml-auto relative lg:translate-x-0 lg:translate-y-[35px] md:translate-x-[2px] md:translate-y-[50px] sm:translate-x-[2px] sm:translate-y-[63px] translate-x-[1px] translate-y-[85px]"/>
            
          </div>
          <div className="w-2/5 max-w-md h-[100px] lg:h-[135.2px]">
            <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6 block text-center">
              <div className="mb-3">
                <span 
                  className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[16px] lg:text-[26px] sm:text-[23px] md:text-[21px] leading-tight">
                    CP, Electronics
                </span>
              </div>
              <div>
                <span 
                  className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[15px] lg:text-[26px] sm:text-[20px] md:text-[21px] leading-tight">
                    4 Nov, Tuesday
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event 3 - Left Side */}
        <div className="flex items-center w-full">

          {/* --- Left Column: The Card --- */}
          <div className="w-2/5 flex justify-end">
            <div className="w-full max-w-sm h-[100px] lg:h-[135.2px]">
              <div className="bg-[#191A23] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6 block text-center">
                <div className="mb-3">
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[16px] lg:text-[26px] sm:text-[19px] md:text-[21px] leading-tight">
                      Cyber Security
                  </span>
                </div>
                <div>
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black  text-[15px] lg:text-[26px] sm:text-[19px] md:text-[20px]  leading-tight">
                      5 Nov, Wed (Online)
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* --- Right Column: The Image --- */}
        <div className="h-[97.88px] lg:w-[370px] md:w-[300px] sm:w-[240px] w-[150px] h-[35.8px]">
          <img src={Arrow4} alt="Timeline Connector" className="w-full h-auto relative translate-y-[69px] lg:translate-y-[20px] lg:translate-x-[0px] md:translate-y-[30px] sm:translate-y-[47px]" />
        </div>

      </div>

        {/* Event 4 - Right Side */}
        <div className="flex font-grotesk items-center justify-between mb-0">
          <div className="w-3/5 h-[120px]">
            <img src={Arrow5} className="lg:w-[370px] lg:h-[97.88px] md:w-[300px] sm:w-[240px] w-[150px] ml-auto relative lg:translate-x-0 lg:translate-y-[35px] md:translate-x-[2px] md:translate-y-[50px] sm:translate-x-[2px] sm:translate-y-[63px] translate-x-[1px] translate-y-[85px]"/>
            
          </div>
          <div className="w-2/5 max-w-md h-[100px] lg:h-[135.2px]">
            <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6 block text-center">
              <div className="mb-3">
                <span 
                  className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[17px] lg:text-[26px] sm:text-[20px] md:text-[21px] leading-tight">
                    Data Analytics, WebDev
                </span>
              </div>
              <div>
                <span 
                  className="inline-block px-2 font-medium bg-[#B9FF66] text-black text-[17px] lg:text-[26px] sm:text-[21px] md:text-[21px] leading-tight">
                    6 Nov, Thursday
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event 5 - Left Side */}
        <div className="flex items-center w-full">

          {/* --- Left Column: The Card --- */}
          <div className="w-2/5 flex justify-end">
            <div className="w-full max-w-sm h-[100px] lg:h-[135.2px]">
              <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-3xl px-6 py-4 sm:py-5 md:py-6 block text-center">
                <div className="mb-3">
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[18px] lg:text-[26px] sm:text-[23px] md:text-[22px] leading-tight">
                      ML, Design
                  </span>
                </div>
                <div>
                  <span 
                    className="inline-block px-2 font-medium bg-[#FFFFFF] text-black text-[18px] lg:text-[26px] sm:text-[23px] md:text-[22px]  leading-tight">
                      7 Nov, Friday
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>


      </div>
    </div>
  );
}