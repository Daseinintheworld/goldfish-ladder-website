// import Image, { StaticImageData } from "next/image";
// import React from "react";

// const PodcastCard = ({ image }: { image: StaticImageData }) => {
//   return (
//     <div className="md:inline-block md:mr-7 mb-4">
//       <div className="shadow-md rounded-xl">
//         <div className="relative">
//           <Image
//             src={image}
//             height={215}
//             width={380}
//             alt="Event Image"
//             className="h-[215px]"
//           />
//           <div className="absolute bottom-0 bg-black/50 w-full opacity-100 text-white p-4 flex gap-2 rounded-b-xl">
//             22nd April 2025
//           </div>
//         </div>
//         <div className="px-3 mt-2 space-y-1 pb-2">
//           <h3 className="font-bold text-xl md:text-3xl">Lorem Ipsum</h3>
//           <p className="text-sm md:text-base">Lorem Ipsum</p>
//           <div>
//             <button className="bg-[#6B3F2D] text-white hover:bg-[#FDBA3C]/90 py-[10px] px-7 rounded-md font-semibold -mb-10">
//               View More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PodcastCard;


import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PodcastCard = ({ image }: { image: StaticImageData }) => {
  return (
    <motion.div 
      className="w-[280px] md:w-[380px] flex-shrink-0 "
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="shadow-lg rounded-xl overflow-hidden h-full mr-[30px]">
        <div className="relative">
          <Image
            src={image}
            height={215}
            width={380}
            alt="Podcast Image"
            className="h-[180px] md:h-[215px] w-full object-cover"
          />
          <div className="absolute bottom-0 bg-black/60 w-full text-white p-2 md:p-4">
            <span className="text-sm md:text-base font-medium">22nd April 2025</span>
          </div>
        </div>
        <div className="p-3 md:p-4 bg-white">
          <h3 className="font-bold text-lg md:text-2xl mb-1 md:mb-2">Lorem Ipsum</h3>
          <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">Lorem Ipsum</p>
          <motion.button 
            className="bg-[#6B3F2D] text-white hover:bg-[#FFB32C] hover:text-[#6B3F2D] py-1 md:py-2 px-4 md:px-6 text-sm md:text-base rounded-md font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PodcastCard;



