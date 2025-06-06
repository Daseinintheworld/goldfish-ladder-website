"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeInSection from "@/Animations/FadeInSection";
import Link from "next/link";

export default function InternshipPage() {
  const internships = [
    {
      id: 1,
      title: "Wave",
      description:
        "Wave is a mental health tech startup dedicated to making emotional well-being more accessible through personalised, AI-driven support tools.",
      image: "/internship/wave.avif",
    },
    {
      id: 2,
      title: "Project Clay",
      description:
        "Project Clay is a mentorship platform that connects high school students with near-peer mentors.",
      image: "/internship/project-clay.png",
    },
    {
      id: 3,
      title: "Junior Economics Club",
      description:
        "The Junior Economic Club (JEC) is a student-led organisation dedicated to expanding high school students’ knowledge of economics.",
      image: "/internship/je.avif",
    },
    {
      id: 4,
      title: "Finomic",
      description:
        "Finomic is a youth-led organization specializing in increasing financial literacy among the youth.",
      image: "/internship/fin.avif",
    },
    {
      id: 5,
      title: "EconUnited",
      description:
        "EconUnited helps high school students worldwide learn about economics, finance, and business...",
      image: "/internship/eco.avif",
    },
    {
      id: 6,
      title: "Cognify Wealth",
      description:
        "Cognify Wealth is an international nonprofit focused on bringing financial literacy to neurodivergent individuals...",
      image: "/internship/cog.avif",
    },
    {
      id: 7,
      title: "Humara Pundit",
      description:
        "Humara Pandit is a Bengaluru-based faith-tech startup that offers a range of services including booking pandits...",
      image: "/internship/ham.avif",
    },
    {
      id: 8,
      title: "TEEMEUP",
      description:
        "Teemeup is a student-led custom T-shirt brand that blends creativity, youth-driven design, and quality apparel...",
      image: "/internship/tec.avif",
    },
    {
      id: 9,
      title: "Women Up",
      description:
        "WomenUp is dedicated to supporting and empowering women in business. They aim to build a strong community...",
      image: "/internship/wom.avif",
    },
    {
      id: 10,
      title: "Pinkface",
      description:
        "Pinkface is a youth-led organisation focused on teenage mental health...",
      image: "/internship/tee.avif",
    },
  ];

  return (
    <div className="pb-10">
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
          className="container mx-auto bg-primaryTextColor px-6 md:px-10 py-20  text-black rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Internship Cards */}
          <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
            {internships.map(({ id, title, description, image }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-8 md:py-12 rounded-none rounded-b-xl border-b-[15px] border-b-[#b17e11] text-black">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10">
                      <div>
                        <h3 className="font-bold text-[24px] md:text-[36px]">
                          {title}
                        </h3>
                        <p className="mt-4 text-[16px] md:text-[20px] max-w-3xl">
                          {description}
                        </p>
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
                    <Link
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScu16FfFYR-CZpP51IfeMMbwZYxBz0R3ccqD60oeXx4kCELcg/viewform"
                      className="bg-[#6B3F2D] text-white px-8 md:px-10 py-3 md:py-4 text-[20px] md:text-[24px] rounded-xl"
                    >
                      Apply Now
                    </Link>
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
    </div>
  );
}
