
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full font-grotesk h-screen flex flex-row items-center justify-center bg-white relative overflow-hidden font-main pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left h-full">
              <div className="space-y-1 sm:space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
                  TechWeek '25
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                  By IEEE-DTU
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black leading-snug">
                Tech Up Your Skills
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-md sm:max-w-lg lg:max-w-xl">
                TechWeek by IEEE DTU is the annual workshop event for aspiring
                engineers to get a glimpse into the latest and upcoming
                technologies. Join us and become a tech trailblazer!
              </p>

              <a href="https://ieeedtu.in" target="blank" className="mt-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Register Now
                </button>
              </a>
            </div>

            {/* Right SVG Image */}
            <div className="lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0 h-full">
              <img
                src="/landing.svg"
                alt="TechWeek illustration"
                className="w-48 sm:w-64 md:w-80 lg:w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float"
              />
            </div>

          </div>
          {/* <div><Sponsor></Sponsor></div> */}
        </div>
        
        
      </section>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .fontmain {
          font-family: 'Space Grotesk', sans-serif;
        }
      `}</style>
    </>
  );
}

