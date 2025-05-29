"use client";

import bannerImage from "@/assets/banner-image.png";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import FadeInSection from "@/Animations/FadeInSection";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="max-w-6xl mx-auto mt-10 md:mt-28 px-4 md:px-6">
      <div className="flex flex-col-reverse items-center justify-between md:flex-row md:gap-10 lg:gap-20">
        <FadeInSection>
          <div className="max-w-lg space-y-6 md:py-10 py-20">
            <motion.h1
              className="text-3xl text-center font-[700] md:text-5xl md:text-left lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Build better with <br />
              <motion.span
                initial={{ color: "#000" }}
                animate={{ color: "#FFB32C" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                AI Co-Founder
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-center md:text-left md:px-[0px] text-sm px-[30px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              They told us to wait.
              <br />
              Wait until we&apos;re older. Smarter. More “ready.” But we were
              done waiting.
              <br />
              Goldfish Ladder was built by students who were tired of seeing
              incredible teenage ideas go unheard. We created a space where high
              schoolers could pitch real startups, get funded, and find mentors
              who actually believe in them.
              <br />
              Because why shouldn&apos;t a 16-year-old change the world?We
              called it Goldfish Ladder—because even if the world thinks we
              don&apos;t belong on the climb, we&apos;re doing it anyway.
              <br />
              Ready to build something real?
              <br />
              Explore. Dream. Pitch.This is your stage.
            </motion.p>
            <motion.div
              className="flex items-center justify-center md:justify-start sm:mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.button
                className="bg-primary text-[#6B3F2D] hover:bg-primary/90 py-1 px-8 md:py-3 md:px-9 text-xl md:text-3xl rounded-2xl font-medium"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ask AI
              </motion.button>
            </motion.div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <motion.div
            className="rounded-[50px] bg-gray-200"
            animate={
              !isMobile
                ? {
                    boxShadow: [
                      "0px 0px 0px rgba(0,0,0,0.1)",
                      "0px 10px 20px rgba(0,0,0,0.15)",
                      "0px 0px 0px rgba(0,0,0,0.1)",
                    ],
                    y: [0, -20, 0],
                  }
                : {
                    boxShadow: [
                      "0px 0px 0px rgba(0,0,0,0.1)",
                      "0px 10px 20px rgba(0,0,0,0.15)",
                      "0px 0px 0px rgba(0,0,0,0.1)",
                    ],
                  }
            }
            transition={
              !isMobile
                ? {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {
                    duration: 3,
                    repeat: Infinity,
                  }
            }
          >
            <Image
              src={bannerImage}
              alt="Banner Image"
              height={526}
              width={434}
            />
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Banner;
