// import Image from "next/image";

// const WebsiteShowcase = () => {
//   const images = [
//     "/design1.png",
//     "/design2.png",
//     "/design3.png",
//     "/design4.png",
//   ];

//   return (
//     <section className="max-w-[1260px] mx-auto py-10 px-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {images.map((img, index) => (
//           <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src={img}
//               alt={`Design ${index + 1}`}
//               width={300}
//               height={369}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WebsiteShowcase;



"use client";
import { useState } from "react";
import Image from "next/image";

const WebsiteShowcase = () => {
  const imageSets = [
    ["/show1.jpg", "/show2.jpg", "/show2.jpg"],
    ["/sho3.jpg", "/design2b.png", "/show4.jpg"],
    ["/show7.jpg", "/design4b.png", "/show8.jpg"],
    ["/show5.jpg", "/design3b.png", "/show6.jpg"],
    
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <section className="max-w-[1250px] mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {imageSets.map((images, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[370px] rounded-lg overflow-hidden shadow-lg group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {images.map((img, imgIndex) => (
              <Image
                key={imgIndex}  
                src={img}
                alt={`Design ${index + 1} - Image ${imgIndex + 1}`}
                width={300}
                height={369}
                priority
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-100 ${
                  hoveredIndex === index
                    ? imgIndex === 2
                      ? "opacity-100"
                      : "opacity-0"
                    : imgIndex === 0
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebsiteShowcase;
