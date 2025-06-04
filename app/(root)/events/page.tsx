"use client";

import { motion } from "motion/react"; // Ensure this file uses named exports
import EventCard from "@/components/cards/event-card";

export default function EventsPage() {
  const activeEvents = [
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

  const exploreEvents = [
    {
      id: 1,
      title: "Fintech Mixer",
      image: "/events/fintech.png",
      desc: "WTFraud",
      date: "12th June 2025",
      location: "Mumbai, Maharashtra",
      time: "6:30 PM",
      link: "https://lu.ma/nichrswq",
    },
    {
      id: 2,
      title: "Powering Talent Acquisition Transformation with Gen AI",
      image: "/events/talent.png",
      desc: "TeamLease Digital",
      date: "22nd June, 2025",
      location: "Mumbai, Maharashtra",
      time: "",
      link: "https://lu.ma/rw49emp4",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      image: "/events/ml.png",
      desc: "Venance Castelino",
      date: "7th June, 2025",
      location: "Vasai-Virar, Maharashtra",
      time: "10:00 AM - 1:00 PM",
      link: "https://lu.ma/via72r1r",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section>
        <motion.div
          className="max-w-5xl rounded-2xl px-2 md:px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-4 mx-2 flex flex-col items-center gap-5 md:gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full text-3xl md:text-7xl font-bold text-white text-center leading-tight"
          >
            “Events to Pitch, Learn, and Connect”
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-white text-center leading-tight mt-4 md:mt-11"
          >
            Join pitch nights, startup jams, hackathons, and virtual meetups—all
            designed for young founders
          </motion.p>
        </motion.div>
      </section>

      {/* Currently Active Events */}
      <section className="mt-9 max-w-5xl">
        <motion.div
          className="mt-10 ml-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Currently Active
          </h1>
          <p className="text-xl font-medium">
            Discover exciting events happening now
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
          {activeEvents.map((item) => (
            <EventCard key={item.id} card={item} />
          ))}
        </div>
      </section>

      {/* Explore Events */}
      <section className="mt-9 max-w-5xl">
        <motion.div
          className="mt-10 ml-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Events
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
          {exploreEvents.map((item) => (
            <EventCard key={item.id} card={item} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primaryColor py-20 px-2 max-w-5xl rounded-xl my-24 mx-2 md:px-12">
        <motion.div
          className="flex flex-col w-full w-max-[1047px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            Next Generation Entrepreneurs
          </h1>
          <p className="text-xl font-medium">Explore Events</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto">
          {activeEvents.map((item) => (
            <EventCard key={item.id} card={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto ">
          {exploreEvents.map((item) => (
            <EventCard key={item.id} card={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
