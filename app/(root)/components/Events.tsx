"use client";

import EventCard from "@/components/cards/event-card";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import FadeInSection from "@/Animations/FadeInSection";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const events = [
    {
      id: 1,
      title: "Startup Sprint",
      image: "/events/startup-sprint.png",
      desc: "Showcase your startup ideas",
      date: "",
      location: "Online",
      money: "Free",
      link: "https://lu.ma/ai3i02qx",
    },
    {
      id: 2,
      title: "From idea to impact",
      image: "/events/impact.png",
      desc: "Github",
      date: "",
      location: "Online",
      money: "Free",
      link: "https://lu.ma/ty6u5nz0",
    },
    {
      id: 3,
      title: "AI-DRIVEN FULL STACK DEV. WORKSHOP",
      image: "/events/workshop.png",
      desc: "",
      date: "31st May, 2025",
      location: "Bhawwan Talkies, Agra",
      money: "Free",
      link: "https://lu.ma/721l5jp1",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("events-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="events-section"
      className="max-w-6xl mx-auto mt-20 md:mt-64 px-4 md:px-6 ]"
    >
      <FadeInSection>
        <div className="mb-20">
          <motion.h2
            className="text-4xl md:text-6xl  font-bold mb-4 md:mb-7 md:text-center text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            Events
          </motion.h2>
          <motion.p
            className="font-[400] text-xl text-center md:text-left md:text-3xl  "
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            lorem ipsum lorem ipsum
          </motion.p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-1 w-full max-w-6xl  ">
        {events.map((event) => (
          <EventCard key={event.id} card={event} />
        ))}
      </div>

      <motion.div
        className="mt-8 text-center md:text-left flex justify-center lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.button
          className="bg-primaryColor text-[#6B3F2D] hover:bg-primaryColor/90 py-2 px-6 md:py-3 md:px-9 text-xl md:text-3xl rounded-2xl font-semibold"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          View More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Events;
