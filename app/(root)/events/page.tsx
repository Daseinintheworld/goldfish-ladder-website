"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react"; // Ensure this file uses named exports
import { motion } from "motion/react"; // Ensure this file uses named exports

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
    },
    {
      id: 2,
      title: "From idea to impact",
      image: "/events/impact.png",
      desc: "Github",
      date: "",
      location: "Online",
      money: "Free",
    },
    {
      id: 3,
      title: "AI-DRIVEN FULL STACK DEV. WORKSHOP",
      image: "/events/workshop.png",
      desc: "",
      date: "31st May, 2025",
      location: "Bhawwan Talkies, Agra",
      money: "Free",
    },
  ];

  const exploreEvents = [
    {
      title: "Fintech Mixer",
      image: "/events/fintech.png",
      desc: "WTFraud",
      date: "12th June 2025",
      location: "Mumbai, Maharashtra",
      time: "6:30 PM",
    },
    {
      title: "Powering Talent Acquisition Transformation with Gen AI",
      image: "/events/talent.png",
      desc: "TeamLease Digital",
      date: "22nd June, 2025",
      location: "Mumbai, Maharashtra",
      time: "",
    },
    {
      title: "AI & Machine Learning",
      image: "/events/ml.png",
      desc: "Venance Castelino",
      date: "7th June, 2025",
      location: "Vasai-Virar, Maharashtra",
      time: "10:00 AM - 1:00 PM",
    },
  ];

  return (
    <div className="flex flex-col items-center mx-2 md:mx-9 my-9">
      {/* Hero Section */}
      <section>
        <motion.div
          className="max-w-[1047px] rounded-2xl px-2 md:px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-[10px] sm:mx-[30px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-10">
            {/* Title */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center leading-tight">
                Explore Events
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="mt-4 md:mt-11"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="md:text-2xl font-semibold text-white text-center leading-tight">
                Join pitch nights, startup jams, hackathons, and virtual
                meetups—all designed for young founders
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Currently Active Events */}
      <section className="mt-9 max-w-5xl">
        <motion.div
          className="mt-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl  font-bold mb-4 text-black lg:text-left">
            Currently Active
          </h1>
          <p className="text-xl font-medium text-black lg:text-left">
            Discover exciting events happening now
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
          {activeEvents.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-md mt-[50px] bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image container */}
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="object-contain max-w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]">
                  <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                    <div className="mr-2">
                      <Calendar size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-medium text-sm capitalize">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="w-full pl-[10px] h-[40%]">
                <div className="flex flex-col mb-1">
                  <h1 className="text-3xl font-bold text-black mt-1">
                    {item.title}
                  </h1>
                  <p className="text-md font-medium text-black">{item.desc}</p>
                </div>

                <div className="flex flex-row items-center opacity-80 mt-2">
                  <div className="mr-3">
                    <MapPin size={22} strokeWidth={1.4} />
                  </div>
                  <span className="font-medium text-sm capitalize">
                    {item.location}
                  </span>
                </div>

                <div className="flex flex-row items-center mt-4">
                  <div className="mr-3">
                    <Image
                      src="/events/MoneyWavy.png"
                      alt="Money Icon"
                      width={22}
                      height={22}
                      className="object-contain max-w-full h-auto"
                    />
                  </div>
                  <span className="font-medium text-sm">{item.money}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore Events */}
      <section className="mt-9 max-w-[1047px]">
        <motion.div
          className="flex flex-col w-full mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore Events
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
          {exploreEvents.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-b-md mt-[50px] bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image container */}
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="object-contain max-w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]">
                  <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                    <div className="mr-2">
                      <Calendar size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-medium text-sm capitalize">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="w-full pl-[10px] h-[40%]">
                <div className="flex flex-col mb-1">
                  <h1 className="text-3xl font-bold text-black mt-1">
                    {item.title}
                  </h1>
                  <p className="text-md font-medium text-black">{item.desc}</p>
                </div>

                <div className="flex flex-row items-center opacity-80 mt-2">
                  <div className="mr-3">
                    <MapPin size={22} strokeWidth={1.4} />
                  </div>
                  <span className="font-medium text-sm capitalize">
                    {item.location}
                  </span>
                </div>

                <div className="flex flex-row items-center mt-4">
                  <div className="mr-3">
                    <Clock />
                  </div>
                  <span className="font-medium text-sm">{item.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primaryColor py-20 max-w-[1047px] rounded-xl mt-24 md:px-12">
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
          <p className="text-xl font-medium lg:text-left text-center">
            Explore Events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
          {activeEvents.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-md mt-[50px] bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image container */}
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="object-contain max-w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]">
                  <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                    <div className="mr-2">
                      <Calendar size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-medium text-sm capitalize">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="w-full pl-[10px] h-[40%]">
                <div className="flex flex-col mb-1">
                  <h1 className="text-3xl font-bold mt-1">{item.title}</h1>
                  <p className="text-md font-medium">{item.desc}</p>
                </div>

                <div className="flex flex-row items-center opacity-80 mt-2">
                  <div className="mr-3">
                    <MapPin size={22} strokeWidth={1.4} />
                  </div>
                  <span className="font-medium text-sm capitalize">
                    {item.location}
                  </span>
                </div>

                <div className="flex flex-row items-center mt-4">
                  <div className="mr-3">
                    <Image
                      src="/events/MoneyWavy.png"
                      alt="Money Icon"
                      width={22}
                      height={22}
                      className="object-contain max-w-full h-auto"
                    />
                  </div>
                  <span className="font-medium text-sm">{item.money}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
          {exploreEvents.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-b-md mt-[50px] bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image container */}
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="object-contain max-w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]">
                  <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                    <div className="mr-2">
                      <Calendar size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-medium text-sm capitalize">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="w-full pl-[10px] h-[40%] text">
                <div className="flex flex-col mb-1">
                  <h1 className="text-xl font-bold mt-1">{item.title}</h1>
                  <p className="text-md font-medium">{item.desc}</p>
                </div>

                <div className="flex flex-row items-center opacity-80 mt-2">
                  <div className="mr-3">
                    <MapPin size={22} strokeWidth={1.4} />
                  </div>
                  <span className="font-medium text-sm capitalize">
                    {item.location}
                  </span>
                </div>

                <div className="flex flex-row items-center mt-4">
                  <div className="mr-3">
                    <Clock className="text-bl" />
                  </div>
                  <span className="font-medium text-sm text-black">
                    {item.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
