import React from "react";

export default function SVGCraftsSection() {
    return (
        <section className="max-w-[1260px] mx-auto py-10 px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Side - Background Video with Overlay Text */}
                <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg ">
                    <video
                        src="/banner.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-opacity-30 flex items-center px-6">
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
                <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
                    <iframe
                        src="https://www.youtube.com/embed/dhN4YHLF9qo?autoplay=1&mute=0&loop=1&playlist=dhN4YHLF9qo&controls=1"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full pointer-events-auto"
                    ></iframe>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-opacity-30 flex items-center px-6">
                        {/* <div>
                            <h2 className="text-white text-2xl md:text-3xl font-bold">
                                3D SVG Crafts
                            </h2>
                            <p className="text-white mt-2">
                                Create amazingly detailed <strong>DIY 3D paper crafts</strong> with these 3D SVGs and laser cut files.
                            </p>
                        </div> */}
                    </div>
                    </div>

            </div>


        </section>
    );
}