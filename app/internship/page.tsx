"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import FadeInSection from "@/Animations/FadeInSection";

export default function InternshipPage() {
  return (
    <div className="flex flex-col bg-white font-sans text-black text-[20px] leading-[1.4]">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center px-6 md:px-10 py-12 md:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="p-4 md:p-6 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/internship/internship_hero_01.png"
            alt="internship hero"
            width={500}
            height={500}
            className="object-contain max-w-full h-auto"
          />
        </motion.div>
        <motion.div
          className="mt-10 md:mt-0 md:ml-10 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-[32px] md:text-[48px] font-bold">
            Gain Experience
          </h2>
          <p className="text-[20px] md:text-[28px] max-w-xl mt-4">
            Intern with an AI-powered startup and take your skills to the next
            level
          </p>
        </motion.div>
      </motion.div>

      {/* Yellow Section */}
      <FadeInSection>
        <motion.div
          className="bg-primary-text px-6 md:px-10 py-16 md:py-20 mx-2 md:mx-20 text-black rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {["Filters", "Filters", "Filters", "Filters", "Filters"].map(
              (label, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-white text-black rounded-md text-[18px] md:text-[24px] px-4 md:px-6 py-2 md:py-3">
                    {label}
                  </button>
                </motion.div>
              )
            )}
            {/* Adding circular internship/filter.png block */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-white text-black rounded-full p-3">
                <Image
                  src="/internship/filter.png"
                  alt="filter icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
            </motion.div>
          </div>

          {/* Internship Cards */}
          <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
            {[
              {
                title: "Wave",
                description:
                  "Wave is a mental health tech startup dedicated to making emotional well-being more accessible through personalised, AI-driven support tools.",
                image: "/internship/wave.avif",
              },
              {
                title: "Project Clay",
                description:
                  "Project Clay is a mentorship platform that connects high school students with near-peer mentors.",
                image: "/internship/project-clay.png",
              },
              {
                title: "Junior Economics Club",
                description:
                  "The Junior Economic Club (JEC) is a student-led organisation dedicated to expanding high school students’ knowledge of economics.",
                image: "/internship/je.avif",
              },
              {
                title: "Finomic",
                description:
                  "Finomic is a youth-led organization specializing in increasing financial literacy among the youth.",
                image: "/internship/fin.avif",
              },
            ].map(({ title, description, image }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-8 md:py-12 rounded-none rounded-b-xl border-b-[15px] border-b-[#b17e11] text-black">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10">
                    <div>
                      <h3 className="font-bold text-[24px] md:text-[36px]">
                        {title}
                      </h3>
                      <p className="mt-4 text-[16px] md:text-[20px] max-w-3xl">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 self-center md:self-auto">
                    <Image
                      src={image}
                      alt={title}
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <button className="bg-[#6B3F2D] text-white px-8 md:px-10 py-3 md:py-4 text-[20px] md:text-[24px] rounded-xl">
              View more
            </button>
          </motion.div>
        </motion.div>
      </FadeInSection>

      {/* Emerging Startups Section */}
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

          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2  max-w-[1040px] m-auto">
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
    </div>
  );
}
