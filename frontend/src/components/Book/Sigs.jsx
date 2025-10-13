import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { useInView } from "react-intersection-observer"; // You may need to install this: npm install react-intersection-observer

// A reusable Page component for the main content.
const Page = React.forwardRef(({ sigName, description, imageUrl }, ref) => {
  return (
    <div className="page bg-white p-6 shadow-inner flex flex-col h-full" ref={ref}>
      <h2 className="text-xl font-bold text-gray-800 pb-3 mb-4 border-b border-gray-200">
        {sigName}
      </h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">{description}</p>
      <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden border border-dashed border-gray-200 mb-6">
        {imageUrl ? (
          <img src={imageUrl} alt={sigName} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400 text-xs">Image Section</span>
        )}
      </div>
      <div className="mt-auto flex flex-col gap-3">
        <button className="w-full bg-[#B9FF66] text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-lime-400">Join Group</button>
        <button className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300">Get Notified</button>
      </div>
    </div>
  );
});

// A simple component for the front cover.
const CoverPage = React.forwardRef((props, ref) => {
    return (
      <div className="page bg-slate-100 p-6 flex flex-col items-center justify-center shadow-lg" ref={ref}>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">SIGs Handbook</h1>
        <p className="text-gray-600 mt-4 text-center">Explore Our Communities</p>
      </div>
    );
});

// A simple component for the back cover.
const BackPage = React.forwardRef((props, ref) => {
    return (
      <div className="page bg-slate-100 p-6 flex flex-col items-center justify-center shadow-lg" ref={ref}>
        <h2 className="text-2xl font-bold text-gray-800">Find Your Passion</h2>
        <p className="text-gray-600 mt-2">Join a SIG Today!</p>
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
    { name: "AI & Machine Learning", description: "Explore artificial intelligence, deep learning, and neural networks. Join us for workshops and projects.", imageUrl: "https://picsum.photos/seed/ai/400/200" },
    { name: "Cybersecurity", description: "Dive into ethical hacking, network security, and cryptography. A community passionate about protecting digital info.", imageUrl: "https://picsum.photos/seed/cyber/400/200" },
    { name: "Web Development", description: "From modern frontend frameworks like React to powerful backend tech, we cover the full stack.", imageUrl: "https://picsum.photos/seed/webdev/400/200" },
    { name: "Game Development", description: "Join fellow creators to design and build video games. We work with engines like Unity and explore all aspects of game design.", imageUrl: "https://picsum.photos/seed/gamedev/400/200" },
  ];

  return (
    <><div className="max-w-6xl mx-auto font-grotesk">
      {/* Header */}
      <div className="my-10 pt-24 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-block bg-[#B9FF66] text-[#191A23] font-bold px-6 py-3 rounded-md text-2xl sm:text-3xl  sm:mb-0 w-fit">
            About SIGs
          </span>
          <p className="text-[#191A23] text-sm sm:text-base">
            Explore diverse tech domains like ML, Web Dev, DSA, AI with practical demonstration and hands on experience
          </p>
        </div>
      </div>
    </div>
    <div className="min-h-[80%] w-full flex items-center justify-center sm:p-8 font-grotesk" ref={viewRef}>

        {/* This is the single wrapper div. It has the ref for sizing and the box-shadow for the border.
      The HTMLFlipBook is its DIRECT child, which is why this works.
    */}
        <div
          ref={bookWrapperRef}
          className="w-full max-w-5xl h-[80%] flex justify-center items-center shadow-[0_0_0_8px_#B9FF66,0_0_0_10px_#000] rounded-2xl"
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