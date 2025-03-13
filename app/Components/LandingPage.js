import Image from "next/image";
import NavBar from "./NavBar";


const LandingPage = () => {
  return (
    <div className="w-screen overflow-hidden">
      
      {/* Background Section */}
      <div className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat">
        
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2024/03/01/202582-918431489_tiny.mp4" type="video/mp4" />
        </video>
       

        {/* Background Image Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage:
              "url('/background.jpg')",
          }}
        />

        {/* Navbar */}
        <NavBar />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* <h1 className="text-4xl md:text-6xl font-normal text-black">
            Elevate Your Craftsmanship
          </h1> */}

          <a
            href="#/Shop"
            className="inline-block mt-[40vh] text-2xl md:text-3xl text-white underline bg-black px-5 py-2"
          >
           Start Your Calligraphy Journey
          </a>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default LandingPage;
