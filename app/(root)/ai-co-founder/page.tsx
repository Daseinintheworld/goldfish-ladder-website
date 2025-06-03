"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Chatbot from "../components/chabot/Chatbot";
import Sidebar from "../components/chabot/sidebar";

export default function AiCoFounderPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <section className="max-w-[965px] mx-auto mt-20 mb-20 md:mb-44 px-[40px] relative">

          {/* Header Section with Icons on Top */}
          <motion.div
            className="text-center max-w-[770px] mx-auto mb-5 md:mb-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icons Line */}
            <div className="flex justify-end gap-6 mb-6">
              {[1, 2, 3].map((icon) => (
                <div
                  key={icon}
                  className="w-12 h-12 rounded-full border border-[#854836] flex items-center justify-center bg-white shadow-sm"
                >
                  <img
                    src={`/icons/icon${icon}.png`}
                    alt={`Icon ${icon}`}
                    className="w-7 h-7 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Heading */}
            <h1 className="font-bold text-4xl md:text-6xl mb-4">
              Let&apos;s build together
            </h1>
            <p className="text-xl md:text-4xl">
              “Work with an AI Co-founder to Launch Your Startup Idea”
            </p>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="bg-[#854836] text-center text-white rounded-3xl py-3 text-sm px-2 md:text-xl font-bold mb-5 md:mb-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From idea to impact—AI helps you plan, build, and pitch.
          </motion.p>

          {/* Form Section Placeholder */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Add your form inputs here */}
          </motion.form>

          {/* Chatbot */}
          <div className="mt-12">
            <Chatbot />
          </div>
        </section>
      </main>
    </div>
  );
}
