"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import FadeInSection from "@/Animations/FadeInSection";
import Link from "next/link";
import { Play } from "lucide-react";

const Cofounder = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("cofounder-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="cofounder-section"
      className="max-w-6xl mx-auto mt-20 md:mt-28 mb-20 md:mb-36"
    >
      <FadeInSection>
        <div className=" mx-auto md:mx-0 space-y-6 py-10 text-center md:text-left">
          <motion.h1
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Co-Founder
          </motion.h1>
        </div>
      </FadeInSection>

      <motion.div
        className="rounded-xl bg-primary p-1"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-center md:px-28">
          <h1 className="text-8xl font-bold">Build With AI</h1>
          <p className="font-semibold text-2xl">
            Your ultimate guide to AI development tools and Frameworks
          </p>
        </div>
        <div
          className={`flex justify-center items-center flex-col md:flex-row gap-2 rounded-b-xl bg-white/20 bg-[url(/chatgpt.png)] bg-cover bg-center h-[600px] bg-blend-overlay`}
        >
          <Link
            href={"/ai-co-founder"}
            className="px-14 py-2.5 bg-primary text-4xl font-extrabold rounded-2xl text-white"
          >
            Get Started
          </Link>
          <button className="px-14 py-2.5 outline-2 outline-primary bg-white font-semibold text-4xl rounded-2xl flex gap-2 items-center">
            <Play className="text-primary h-10 w-10" />
            How it works
          </button>
        </div>
      </motion.div>

      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.button
          className="bg-primary text-lg md:text-3xl font-bold py-3 px-4 md:py-7 md:px-8 rounded-md"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          animate={
            isVisible
              ? {
                  boxShadow: [
                    "0px 0px 0px rgba(0,0,0,0)",
                    "0px 5px 15px rgba(0,0,0,0.3)",
                    "0px 0px 0px rgba(0,0,0,0)",
                  ],
                }
              : {}
          }
          transition={{
            boxShadow: { duration: 3, repeat: Infinity, delay: 0.5 },
          }}
        >
          Meet Your AI co-founder
        </motion.button>
      </motion.div>
    </section>
  );
};
export default Cofounder;
