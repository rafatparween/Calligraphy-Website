import React from "react";

export default function SVGCraftsSection() {
  return (
    <section className="max-w-[1260px] mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Side - Background Video with Overlay Text */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://media.istockphoto.com/id/1440170322/video/writing-kakizome-a-traditional-piece-of-calligraphy-for-the-new-year.mp4?s=mp4-640x640-is&k=20&c=bhzFCf53CA5cUI0Ip44h7XCu6iANbqU3FWlnd_h6FAc=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center px-6">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                3D SVG Crafts
              </h2>
              <p className="text-white mt-2">
                Create amazingly detailed <strong>DIY 3D paper crafts</strong> with
                these 3D SVGs and laser cut files.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="bg-green-500 text-white p-6 md:p-8 rounded-lg h-[320px]">
          <p className="font-semibold leading-relaxed">
            GET EFFORTLESSLY ARTISTIC WITH EYE-CATCHING DIY CRAFTS, FROM THE MOST 
            INTRICATE 3D SVG CUT FILES TO THE DAINTIEST 3D FLOWER SVG CRAFTS AND 
            MORE. EXPLORE OUR 3D SVG PROJECTS AND BE INSPIRED TO CREATE.
          </p>
        </div>
      </div>
    </section>
  );
}
