"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PodcastPage() {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center max-w-[1074px] mx-auto">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/podcast/Screen.png"
            alt="internship hero"
            width={1200} // Increased for better resolution
            height={1260}
            className="object-contain max-w-full mx-auto"
          />
        </motion.div>
      </section>

      {/* Voices of Young Founders */}
      <section>
        <motion.div
          className="max-w-[1047px] rounded-2xl px-6 md:px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-[10px] sm:mx-[50px] mx-2 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center md:gap-10">
            <motion.div
              className="w-full max-w-[750px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-[70px] font-bold text-white text-center leading-tight">
                “Voices of Young Founders”
              </h1>
            </motion.div>

            <motion.div
              className="mt-[43px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="tex-lg md:text-2xl font-semibold text-white text-center leading-tight">
                Tune into candid conversations with high school and college
                founders as they share the ups, downs, and unexpected lessons
                from launching their first startups—with a little help from AI
              </p>
            </motion.div>
          </div>
        </motion.div>

              <div className="bg-primary/20 border border-primary mx-4 sm:mx-[50px] rounded-xl py-8 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">Upcoming</h1>
      </div>
      </section>
    </div>
  );
}
