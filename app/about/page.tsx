"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeInSection from "@/Animations/FadeInSection";

export default function AboutPage() {
  return (
    <div>
      {/* About Us Section */}
      <motion.section
        className="sm:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:items-center md:gap-12">
          {/* Text */}
          <motion.div
            className="mt-10 md:mt-0 space-y-4 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              About Us
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Goldfish Ladder</strong> was born not in a boardroom, but
              in a classroom—from a scribbled idea, a sense of frustration, and
              a spark of rebellion. As students, we saw brilliant peers silenced
              not for lack of talent, but for lack of opportunity, constantly
              told to wait until they were “ready.” Tired of waiting, we
              questioned why young people couldn&apos;t start building something
              meaningful now. Goldfish Ladder emerged from that defiance—a
              platform to empower driven, creative youth whose ideas deserve a
              stage, not a delay.
            </p>
          </motion.div>
          {/* Image */}
          <motion.div
            className="relative w-full h-64 sm:h-80 md:h-[400px] md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/about/about_hero_01.png"
              alt="About illustration"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <FadeInSection>
        <section className="bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Our Team
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Meet the people behind the mission
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-start text-left space-y-4 bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 overflow-hidden rounded-full self-center">
                    <Image
                      src={`/about/about_people_0${i}.png`}
                      alt={`Team member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-semibold">Team Member {i}</h3>
                  <p className="text-sm font-medium text-gray-600">
                    Role or short bio goes here
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
