// import Image from "next/image";


// const fonts = [
//   { name: "Script Fonts", image: "/font1.jpg" },
//   { name: "Display Fonts", image: "/font2.png" },
//   { name: "Sans Serif Fonts", image: "/font3.png" },
//   { name: "Serif Fonts", image: "/font4.jpg" },
//   { name: "Blackletter Fonts", image: "/fonnt5.jpg" },
//   { name: "Slab Serif Fonts", image: "/font6.png" },
//   { name: "Decorative Fonts", image: "/font7.png" },
//   { name: "Dingbats Fonts", image: "/font8.png" },
//   { name: "Colorful Fonts", image: "/font9.jpg" },
//   { name: "Wedding Fonts", image: "/font10.jpg" }
// ];

// export default function FontsSection() {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto text-center mt-12">
//   <h2 className="text-3xl font-playfair font-bold text-gray-900">Learn the Art of Calligraphy</h2>
//   <p className="text-gray-600 mt-4">
//     Master the timeless beauty of calligraphy with our expert-led classes. Whether you're a beginner or an experienced artist, 
//     our courses are designed to enhance your skills and creativity.
//   </p>
//   <p className="text-gray-600 mt-2">
//     Join our <span className="font-semibold text-gray-900">online and offline</span> sessions and explore a variety of calligraphy styles, from 
//     elegant script fonts to artistic decorative lettering.
//   </p>
//   <p className="text-gray-600 mt-2">
//     Start your journey today and transform your handwriting into an art form!
//   </p>
//   <div className="mt-6">
//     <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
//       Enroll Now
//     </button>
//   </div>
// </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[1250px] mx-auto mt-8 px-4">
//         {fonts.map((font, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <Image
//               src={font.image}
//               alt={font.name}
//               width={400}
//               height={300}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold text-gray-800">{font.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

const fonts = [
  { name: "Script Fonts", image: "/font1.jpg" },
  { name: "Display Fonts", image: "/font2.png" },
  { name: "Sans Serif Fonts", image: "/font3.png" },
  { name: "Serif Fonts", image: "/font4.jpg" },
  { name: "Blackletter Fonts", image: "/font5.jpg" },
  { name: "Slab Serif Fonts", image: "/font6.png" },
  { name: "Decorative Fonts", image: "/font7.png" },
  { name: "Dingbats Fonts", image: "/font8.png" },
  { name: "Colorful Fonts", image: "/font9.jpg" },
  { name: "Wedding Fonts", image: "/font10.jpg" },
];

export default function FontsSection() {
  return (
    <section className="relative w-full h-full py-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://cdn.pixabay.com/video/2017/02/22/7895-205257266_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="relative max-w-6xl mx-auto text-center text-white px-6">
        <h2 className="text-7xl font-playfair font-bold">Learn the Art of Calligraphy</h2>
        <p className="mt-4 text-3xl">
          Master the timeless beauty of calligraphy with our expert-led classes. Whether you're a beginner or an experienced artist, 
          our courses are designed to enhance your skills and creativity.
        </p>
        <p className="mt-2 text-2xl">
          Join our <span className="font-semibold">online and offline</span> sessions and explore a variety of calligraphy styles, from 
          elegant script fonts to artistic decorative lettering.
        </p>
        <p className="mt-2 text-2xl">
          Start your journey today and transform your handwriting into an art form!
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Fonts Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[1250px] mx-auto mt-8 px-4">
        {fonts.map((font, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={font.image}
              alt={font.name}
              width={400}
              height={300}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{font.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
