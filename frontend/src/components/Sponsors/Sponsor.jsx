import React from "react";

export default function Sponsor() {
  return (
    <section className="w-full font-grotesk bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-8">Powered by</h2>

      
        <div className="relative flex border-[#00000036] border-2 p-4 items-center justify-center w-full overflow-hidden">
         
          <div className="absolute top-1/2 left-0 w-full h-[7px] rounded-3xl bg-gray-300 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#B9FF66] to-transparent animate-line" />
          </div>

          {/* Center logo */}
          <div className="relative bg-white px-6 z-10">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue.svg"
              alt="Unstop Logo"
              className="h-10 object-contain"
            />
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes moveLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-line {
          animation: moveLine 2s linear infinite;
        }
        `}
      </style>
    </section>
  );
}
