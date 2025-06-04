"use client";

import { motion } from "framer-motion";
import Chatbot from "./chabot/Chatbot";

export default function AiCoFounderPage() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <main className="flex-1 w-full">
        <section className="max-w-5xl mx-auto mt-5 mb-20 md:mb-44 px-5 relative">
          {/* Header Section with Icons on Top */}
          <motion.div
            className="text-center max-w-[770px] mx-auto mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h1 className="font-bold text-4xl md:text-6xl mb-4">
              Let&apos;s build together
            </h1>
            <p className="text-xl md:text-2xl">
              “Work with an AI Co-founder to Launch Your Startup Idea”
            </p>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="bg-[#854836] text-center text-white rounded-3xl py-3 text-sm px-2 md:text-xl font-bold mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From idea to impact—AI helps you plan, build, and pitch.
          </motion.p>

          {/* Chatbot */}
          <div className="mt-5">
            <Chatbot />
          </div>
        </section>
      </main>
    </div>
  );
}
