import React from 'react';

// Use a default export for easier importing
export default function Sponsor() {
    
    // The list of logos is duplicated to create the seamless scroll effect
    const logos = [...Array(8)].map((_, idx) => (
        <img
            key={idx}
            src={"/logo.svg"} // Assuming logo.svg is in your public folder
            alt={`Sponsor logo ${idx + 1}`}
            className="h-14 object-contain" // Use Tailwind classes for styling
        />
    ));

    return (
        <section className="w-full py-12 font-grotesk bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* ## 1. Added Sponsors Heading ## */}
                <h2 className="text-center text-2xl font-bold text-gray-700 mb-8">
                    Our Sponsors
                </h2>

                {/* This is the container that hides the overflow */}
                <div className="group w-full overflow-hidden">
                    <div 
                        className="flex items-center gap-20 md:gap-60 sm:gap-20 animate-scroll group-hover:pause"
                    >
                        {/* ## 2. The loop is now perfect because it's CSS-driven ## */}
                        {logos}
                    </div>
                </div>
            </div>
        </section>
    );
}