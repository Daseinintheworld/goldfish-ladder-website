"use client";

import PodcastCard from "./cards/PodcastCard";
import podcast1 from "@/assets/podcasts/podcast1.png";
import podcast2 from "@/assets/podcasts/podcast2.png";
import podcast3 from "@/assets/podcasts/podcast3.png";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import FadeInSection from "@/Animations/FadeInSection";

const Podcast = () => {
  const podcasts = [podcast1, podcast2, podcast3];
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

  // Create duplicated array for infinite scroll effect - add enough copies to ensure smooth infinite scrolling
  const duplicatedPodcasts = [...podcasts, ...podcasts, ...podcasts];

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("podcast-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Calculate container width and card width on mount and window resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerScrollWidth = containerRef.current.scrollWidth;
        const singleCardWidth =
          containerScrollWidth / duplicatedPodcasts.length;
        setCardWidth(singleCardWidth);
        setContainerWidth(singleCardWidth * podcasts.length);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [podcasts.length, duplicatedPodcasts.length]);

  // Handle auto-scroll animation
  useEffect(() => {
    // Auto scroll for podcast cards with infinite loop
    let animationId: number;

    if (isVisible && containerWidth > 0 && !isPaused) {
      const animate = () => {
        setScrollPosition((prev) => {
          // When we scroll past the width of all cards, reset to beginning
          if (prev >= containerWidth) {
            return 0;
          }
          return prev + 1.0;
        });
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isVisible, containerWidth, isPaused]);

  // Handle navigation actions
  const handleNav = (direction: "left" | "right") => {
    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Set pause state
    setIsPaused(true);

    // Calculate next position
    setScrollPosition((prev) => {
      let newPosition;
      if (direction === "left") {
        newPosition = prev - cardWidth;
        // If we're at the beginning, jump to the end
        if (newPosition < 0) {
          newPosition = containerWidth - cardWidth;
        }
      } else {
        newPosition = prev + cardWidth;
        // If we're at the end, jump to the beginning
        if (newPosition >= containerWidth) {
          newPosition = 0;
        }
      }
      return newPosition;
    });

    // Reset auto-scroll after 3 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="podcast-section"
      className="px-4 md:px-6 mt-20 md:mt-40 flex flex-col justify-center items-center"
    >
      <FadeInSection>
        <div className="lg:max-w-5xl  md:max-w-3xl max-w-[320px] md:mx-[30px] mt-16 md:mt-[272px] md:px-12 py-7 rounded-2xl bg-[#fff1db]">
          <div className="mb-12">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-7 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              Podcast
            </motion.h2>
            <motion.p
              className="font-semibold text-xl md:text-3xl text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              lorem ipsum lorem ipsum
            </motion.p>
          </div>

          <div className="relative">
            {/* Left Arrow - Responsive sizing and positioning */}
            <button
              onClick={() => handleNav("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 z-10 bg-white/80 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors focus:outline-none"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow - Responsive sizing and positioning */}
            <button
              onClick={() => handleNav("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 z-10 bg-white/80 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors focus:outline-none"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <motion.div
              className="overflow-hidden py-4 flex justify-center"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                ref={containerRef}
                className="whitespace-nowrap flex"
                animate={{
                  x: -scrollPosition,
                }}
                transition={{
                  duration: isPaused ? 0.3 : 0,
                  ease: isPaused ? "easeInOut" : "linear",
                }}
              >
                {duplicatedPodcasts.map((podcast, index) => (
                  <PodcastCard key={index} image={podcast} />
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 text-center md:text-left flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              className="bg-primaryColor text-[#6B3F2D] hover:bg-primaryTextColor/90 py-2 px-6 md:py-3 md:px-9 text-xl md:text-3xl rounded-2xl font-semibold"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </motion.div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Podcast;
