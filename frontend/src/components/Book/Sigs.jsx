import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import SubscribeButton from "../../utils/subscribe";
import { useInView } from "react-intersection-observer";

const Page = React.forwardRef(({ sigName, description, imageUrl, style }, ref) => {
  return (
    <div
      ref={ref}
      className="page p-6 border-4 rounded-xl shadow-inner flex flex-col h-full overflow-hidden bg-[#f7f7f7]"
      style={{
        ...style,
        backgroundImage: "url('/page.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h2 className="text-xl font-bold text-gray-800 pb-3 mb-4 border-b border-gray-200 truncate">
          {sigName}
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4 h-20 overflow-auto">
          {description}
        </p>
      </div>

      <div className="w-full flex-shrink-0 h-40 bg-gray-50 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={sigName}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-xs">Image Not Available</span>
          </div>
        )}
      </div>

      <div className="mt-auto flex pt-2 flex-row gap-3">
        <button className="w-full bg-[#B9FF66] text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-lime-400 transition">
          Join Group
        </button>
        <SubscribeButton styleprop="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition" content="Get Notified" />
        
      </div>
    </div>
  );
});

const CoverPage = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={props.style}
    className="page h-full bg-black flex flex-col items-center justify-center text-center relative overflow-hidden rounded-xl border-y border-gray-200"
  >
    <div className="absolute w-[260px] mt-[30%] mx-[20%] h-[260px] bg-[#B9FF66]/25 rounded-full blur-2xl"></div>
    <h1 className="text-5xl mt-[45%] font-semibold text-[#B9FF66]/70 z-10">
      SIGs Handbook
    </h1>
    <p className="text-gray-200 mt-3 text-lg z-10">Explore Our Communities</p>
  </div>
));

const BackPage = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={props.style}
    className="page h-full bg-black flex flex-col items-center justify-center text-center relative overflow-hidden rounded-xl border-y border-gray-200"
  >
    <div className="absolute w-[260px] mt-[30%] mx-[20%] h-[260px] bg-[#B9FF66]/25 rounded-full blur-2xl"></div>
    <h2 className="text-3xl mt-[45%] font-semibold text-[#B9FF66]/70 z-10">
      Find Your Passion
    </h2>
    <p className="text-gray-200 mt-2 z-10 text-base">
      Join a SIG and start your journey.
    </p>
  </div>
));

export default function Sigs() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const bookWrapperRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);
  const { ref: viewRef } = useInView({ triggerOnce: true, threshold: 0.5 });

  const handleBookClick = () => setIsTooltipVisible(false);

  // ✅ Responsive book sizing
  useEffect(() => {
    const updateSize = () => {
      if (bookWrapperRef.current) {
        const parentWidth = bookWrapperRef.current.clientWidth;
        const singlePageWidth = Math.max(Math.min(parentWidth * 0.45, 400), 280);
        const singlePageHeight =
          singlePageWidth === 280
            ? singlePageWidth * (7 / 4)
            : singlePageWidth * (5 / 4);
        setSize({ width: singlePageWidth, height: singlePageHeight });
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const sigsData = [
     { sigName: "DSA", description: "Organizing data efficiently and designing step-by-step computational solutions.", imageUrl: "Sigs/dsa.jpg" },
     { sigName: "Robotics", description: "Designing and programming machines that can perform automated tasks.", imageUrl: "Sigs/robotics.jpg" },

        { sigName: "Cyber", description: "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access, attacks, or damage.", imageUrl: "Sigs/cyber.jpeg" },

      { sigName: "Into to Competitive Programming", description: "Solving algorithmic and coding problems efficiently under time constraints.", imageUrl: "Sigs/CP.jpg" },
      { sigName: "Electronics and Embedded Systems", description: "Building and programming circuits and small computing devices.", imageUrl:"Sigs/electronics.jpg" },

    { sigName: "Development and DevOps", description: "Creating software applications and managing their deployment and maintenance..", imageUrl:"/Sigs/development.jpg" },
     { sigName: "Analytics and management ", description: "Studying data to make informed business or technical decisions..", imageUrl:"/Sigs/nontech.jpg" },


         { sigName: "Design", description: "Crafting visual and interactive elements for usability and aesthetics.", imageUrl:"/Sigs/design.jpg" },
           { sigName: "Machine Learning", description: "A branch of AI where systems learn patterns from data to make predictions or decisions.", imageUrl:"/Sigs/genAI.jpg" },
];

  return (
    <>
      {/* Header */}
      <div className="max-w-6xl mx-auto font-grotesk">
        <div className=" sm:mb-12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <span className="inline-block mb-5 bg-[#B9FF66] text-[#191A23] font-bold px-6 py-3 rounded-md text-2xl sm:text-3xl sm:mb-0 w-fit">
              About SIGs
            </span>
            <p className="text-[#191A23] text-sm sm:text-base">
              Explore diverse tech domains like ML, Web Dev, DSA, AI with
              practical demonstrations and hands-on experience.
            </p>
          </div>
        </div>
      </div>

      {/* Flipbook */}
      <div
        className="h-fit w-full flex items-center justify-center p-8 sm:p-8 font-grotesk"
        ref={viewRef}
      >
        {isTooltipVisible && (
          <div className="absolute w-fit h-fit z-10 bg-[#000]">
            <span
              onClick={handleBookClick}
              className="text-white break-words bg-[#838383] cursor-pointer z-10 mx-auto text-center align-middle text-xs md:text-lg font-semibold px-4 py-2 rounded-lg shadow-lg"
            >
              Click on the book to explore the handbook
            </span>
          </div>
        )}

        <div
          ref={bookWrapperRef}
          onClick={handleBookClick}
          className={`w-full max-w-5xl ${
            isTooltipVisible ? "blur-sm" : ""
          } h-[70vh] cursor-pointer py-2 md:h-auto flex justify-center items-center shadow-[0_0_0_8px_#B9FF66,0_0_0_10px_#000] rounded-2xl transition-all`}
        >
          {size.width > 0 && (
            <HTMLFlipBook
              width={size.width}
              height={size.height}
              size="fixed"
              showCover={true}
              className="rounded-lg"
              flippingTime={1100} // smoother flip
            >
              <CoverPage />
              {sigsData.map((sig, index) => (
                <Page key={index} {...sig} />
              ))}
              <BackPage />
            </HTMLFlipBook>
          )}
        </div>
      </div>
    </>
  );
}
