import React from "react";
import HTMLFlipBook from "react-pageflip";

export default function Sigs() {
  
  return (
    
    <div className="w-1/2 flex flex-col mx-auto items-center justify-center">
      
      <HTMLFlipBook
        width={400}
        height={500}
        showCover={true}
        size="fixed"
        
        autoSize={true}
      >

        <div className="page bg-slate-100 border rounded-l-[2rem] border-slate-300 shadow-inner flex flex-col p-6">
          <div className="flex-grow flex flex-col items-center justify-center">
         <h1 className="text-3xl font-bold text-slate-700 mb-8">SIG NAME</h1>
            <div className="w-64 h-40 bg-black flex items-center justify-center text-lime-300 font-mono text-xl">
              IMAGE
            </div>
          </div>
        </div>

        {/* ✅ Left Page */}
        <div className="page relative rounded-l-[2rem]  p-6 border-r border-[#B9FF66] ">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Page 1</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            It was a rat's nest. Not a literal one, but that is what her hair seemed to
            resemble every morning when she got up. It was going to take at least an hour
            to get it under control and she was sick and tired of it.
          </p>
        </div>

        {/* ✅ Right Page */}
        <div className="page relative rounded-r-[2rem]  p-6 border-l border-[#9de94f] shadow-inner shadow-green-400 bg-gradient-to-bl from-[#B9FF66] via-[#c8ff85] to-[#a8ff55] before:content-[''] before:absolute before:inset-y-0 before:right-0 before:w-6 before:bg-gradient-to-l before:from-black/10 before:to-transparent">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Page 2</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            She peered into the mirror and wondered if it was worth it. It wasn't. She
            opened the drawer and picked up the hair clippers.
          </p>
        </div>

        {/* ✅ Another Page */}
        <div className="page relative rounded-l-[2rem] rounded-r-[1rem] p-6 border-r border-[#9de94f] shadow-inner shadow-green-400 bg-gradient-to-br from-[#B9FF66] via-[#c8ff85] to-[#a8ff55] before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-6 before:bg-gradient-to-r before:from-black/10 before:to-transparent">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Page 3</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            Another story section here...
          </p>
        </div>

        {/* ✅ Back Cover */}
        <div className="page flex flex-col items-center justify-center rounded-2xl border border-[#8bcf45] shadow-[0_0_40px_-5px_#8bcf45_inset] bg-gradient-to-tl from-[#B9FF66] via-[#adf35c] to-[#a2e859]">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Back Cover</h2>
          <p className="text-gray-700">End of the book — made with ❤️ using React Pageflip.</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
