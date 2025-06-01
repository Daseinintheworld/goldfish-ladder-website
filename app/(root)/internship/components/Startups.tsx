import FadeInSection from "@/Animations/FadeInSection";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const Startups = () => {
  return (
    <FadeInSection>
      <motion.div
        className="bg-white py-16 md:py-20 px-6 md:px-10 text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="m-auto lg:ml-[100px]">
          <h2 className="text-[32px] md:text-[40px] font-extrabold mb-4 lg:text-start text-center">
            Emerging Startups
          </h2>
          <p className="text-[20px] md:text-[28px] mb-[100px] lg:text-start text-center">
            Discover the next big thing in the startup world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2  max-w-[1040px] m-auto">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-0 shadow-lg rounded-xl overflow-hidden text-black min-w-[200px] max-w-[250px] m-auto mb-[15px]">
                {/* White image container */}
                <div className="bg-white p-6 flex justify-center">
                  <Image
                    src="/internship/ipsum.png"
                    alt="startup"
                    width={120}
                    height={200}
                    className="object-contain h-[70px]"
                  />
                </div>

                {/* Yellow content box */}
                <div className="bg-[#FFF7EB] text-left p-1 pb-[15px]">
                  <div className="w-full pl-[10px] h-[40%]">
                    <div className="flex flex-col mb-1">
                      <h1 className="text-3xl font-bold text-black max-w-[40px] mt-1">
                        Lorem ipsum
                      </h1>
                      <div className="flex flex-row items-center opacity-80 mt-2">
                        <div className="mr-2">
                          <MapPin size={22} strokeWidth={1.4} />
                        </div>
                        <span className="font-medium text-sm capitalize">
                          New Delhi
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="container mx-auto px-1  mt-[20px]">
                    <button className="bg-primary-text h-[40px] text-white hover:bg-primary-text/90  w-[60%]">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </FadeInSection>
  );
};

export default Startups;
