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
        <section className="max-w-[965px] mx-auto mt-5 mb-20 md:mb-44 px-[20px] relative">

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
              {/* Share Icon */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#854836"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>

              {/* User Icon */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#854836"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/* Three Vertical Dots Icon */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#854836"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="19" r="2" />
                </svg>
              </div>
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
