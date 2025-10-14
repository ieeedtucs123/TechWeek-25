import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { useInView } from "react-intersection-observer"; // You may need to install this: npm install react-intersection-observer
import dsa from "../../../public/dsa.jpg"
import ML from "../../../public/ML.jpg"
import design from "../../../public/design.jpg"
import CP from "../../../public/CP.jpg"
import electronics from "../../../public/electronics.jpg"
import genAI from "../../../public/genAI.jpg"
import nontech from "../../../public/nontech.jpg"
import development from "../../../public/development.jpg"
import robotics from "../../../public/robotics.jpg"
import bgImage from "../../../public/page.svg"
import cover from "../../../public/cover.svg"
// A reusable Page component for the main content.
const Page = React.forwardRef(({ sigName, description, imageUrl, style }, ref) => {
  return (
    <div className="page p-6 shadow-inner flex flex-col h-full overflow-hidden  bg-contain bg-no-repeat bg-center" ref={ref} style={{...style,  backgroundImage: "url('/page.svg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
        }}
      
        >
      {/* Top section: Title and Description */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 pb-3 mb-4 border-b border-gray-200 truncate">
          {sigName}
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4 h-20 overflow-auto">
          {description}
        </p>
      </div>

      {/* Middle section: Image (This will grow to fill available space) */}
    <div className="w-full flex-shrink-0 h-40 bg-gray-50 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={sigName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-xs">Image Not Available</span>
          </div>
        )}
      </div>
      <div className="mt-auto flex flex-row gap-3">
        <button className="w-full bg-[#B9FF66] text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-lime-400">Join Group</button>
        <button className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300">Get Notified</button>
      </div>
      
    </div>
  );
});

// --- COVER PAGE (Updated for Full Height) ---
const CoverPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={props.style}
      className="page h-full bg-black flex flex-col items-center justify-center text-center relative overflow-hidden rounded-xl border-y border-gray-200"
    >
      {/* Lime Side Borders */}
      <div />
      <div  />

      {/* Soft Lime Glow */}
      <div className="absolute w-[260px] mt-[30%] mx-[20%] h-[260px] bg-[#B9FF66]/25 rounded-full blur-3xl"></div>

      {/* Centered Text */}
      <h1 className="text-5xl mt-[45%] font-semibold text-[#B9FF66]/60 z-10">
        SIGs Handbook
      </h1>
      <p className="text-gray-200 mt-3 text-lg z-10">
        Explore Our Communities
      </p>
    </div>
  );
});

// --- BACK PAGE (Updated for Full Height) ---
const BackPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={props.style}
      className="page h-full bg-black flex flex-col items-center justify-center text-center relative overflow-hidden rounded-xl border-y border-gray-200"
    >
      {/* Lime Side Borders */}
      <div />
      <div />

      {/* Subtle Background Glow */}
      <div className="absolute w-[260px] mt-[30%] mx-[20%] h-[260px] bg-[#B9FF66]/25 rounded-full blur-3xl"></div>

      {/* Centered Text */}
      <h2 className="text-3xl mt-[45%] font-semibold text-[#B9FF66]/60 z-10">
        Find Your Passion
      </h2>
      <p className="text-gray-200 mt-2 z-10 text-base">
        Join a SIG and start your journey.
      </p>
    </div>
  );
});



// Main component that holds the book
export default function Sigs() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);
  const bookWrapperRef = useRef(null);
  const pageFlipRef = useRef(null);

  const { ref: viewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  // This effect runs to make the book responsive
  useEffect(() => {
    const updateSize = () => {
      if (bookWrapperRef.current) {
        const parentWidth = bookWrapperRef.current.clientWidth;
        const singlePageWidth = Math.max(Math.min(parentWidth * 0.45, 400), 280); 
        const singlePageHeight = singlePageWidth * (5 / 4); 
        setSize({ width: singlePageWidth, height: singlePageHeight });
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Effect 1: Trigger the FIRST flip 1 second after scrolling into view
  useEffect(() => {
    if (inView && !hasFlippedOnce && pageFlipRef.current) {
      setTimeout(() => {
        pageFlipRef.current.getPageFlip().flipNext();
        setHasFlippedOnce(true);
      }, 1000); // 1-second delay
    }
  }, [inView, hasFlippedOnce]);

  // Effect 2: Start the 20-second auto-flip interval AFTER the first flip
  useEffect(() => {
    let autoFlipInterval;
    if (hasFlippedOnce) {
      autoFlipInterval = setInterval(() => {
        if (pageFlipRef.current) {
          pageFlipRef.current.getPageFlip().flipNext();
        }
      }, 20000); // 20-second interval
    }
    return () => clearInterval(autoFlipInterval);
  }, [hasFlippedOnce]);

  const sigsData = [
    { sigName: "Machine Learning", description: "A branch of AI where systems learn patterns from data to make predictions or decisions.", imageUrl:ML },
    { sigName: "DSA", description: "Organizing data efficiently and designing step-by-step computational solutions.", imageUrl: dsa },
    { sigName: "Development and DevOps", description: "Creating software applications and managing their deployment and maintenance..", imageUrl: development },
    { sigName: "Robotics", description: "Designing and programming machines that can perform automated tasks.", imageUrl: robotics },
     { sigName: "Analytics and management ", description: "Studying data to make informed business or technical decisions..", imageUrl: nontech },
      { sigName: "Into to Competitive Programming", description: "Solving algorithmic and coding problems efficiently under time constraints.", imageUrl: CP },
       { sigName: "Electronics and Embedded Systems", description: "Building and programming circuits and small computing devices.", imageUrl:electronics },
        { sigName: "Generative AI", description: "AI techniques that create new content like text, images, or music", imageUrl: genAI },
         { sigName: "Design", description: "Crafting visual and interactive elements for usability and aesthetics.", imageUrl:design },
  ];

  return (
    <><div className="max-w-6xl mx-auto font-grotesk">
      {/* Header */}
      <div className="my-10 pt-24 sm:mb-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-block mb-5 bg-[#B9FF66] text-[#191A23] font-bold px-6 py-3 rounded-md text-2xl sm:text-3xl  sm:mb-0 w-fit">
            About SIGs
          </span>
          <p className="text-[#191A23] text-sm sm:text-base">
            Explore diverse tech domains like ML, Web Dev, DSA, AI with practical demonstration and hands on experience
          </p>
        </div>
      </div>
    </div>
    <div className="h-fit w-full flex items-center justify-center p-8 sm:p-8 font-grotesk" ref={viewRef}>

        {/* This is the single wrapper div. It has the ref for sizing and the box-shadow for the border.
      The HTMLFlipBook is its DIRECT child, which is why this works.
    */}
       <div
          ref={bookWrapperRef}
          className="w-full max-w-5xl h-[70vh] md:h-auto flex justify-center items-center shadow-[0_0_0_8px_#B9FF66,0_0_0_10px_#000] rounded-2xl"
        >
          {size.width > 0 && (
            <HTMLFlipBook
              ref={pageFlipRef}
              width={size.width}
              height={size.height}
              size="fixed"
              showCover={true} // Enable cover
              className="rounded-lg" // Important for fitting inside the shadow border
            >
              {/* Page 0: The Front Cover */}
              <CoverPage />

              {/* The rest of the pages are mapped from data */}
              {sigsData.map((sig, index) => (
                <Page key={index} {...sig} />
              ))}

              {/* The Final Page: The Back Cover */}
              <BackPage />
            </HTMLFlipBook>
          )}
        </div>
      </div></>
  );
}