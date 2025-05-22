"use client";

import Image from "next/image";
import { Calendar, MapPin } from "lucide-react"; // Ensure this file uses named exports
import { motion } from "motion/react"; // Ensure this file uses named exports

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center mx-2 md:mx-9 my-9">
      {/* Hero Section */}
      <section>
        <motion.div
          className="max-w-[1047px] rounded-2xl px-2 md:px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-[10px] mx-[30px]"
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
                &quot;Events to Pitch, Learn, and Connect&quot;
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
      <section className="mt-9 max-w-[1047px]">
        <motion.div
          className="flex flex-col w-full mt-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl   font-bold mb-4 text-black lg:text-left text-center">
            Currently Active
          </h1>
          <p className="text-xl font-medium text-black lg:text-left text-center">
            Discover exciting events happening now
          </p>
        </motion.div>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
            {[
              {
                title: "Pitch Night",
                image: "/Event/Rectangle 35.png",
                desc: "Showcase your startup ideas",
                date: "22nd April",
                location: "New Delhi",
                money: "Free",
              },
              {
                title: "Hackathon",
                image: "/Event/Rectangle 35.png",
                desc: "Collaborate and build solutions",
                date: "25th April",
                location: "Mumbai",
                money: "Free",
              },
              {
                title: "Startup Jam",
                image: "/Event/Rectangle 35.png",
                desc: "Network with like-minded founders",
                date: "30th April",
                location: "Bangalore",
                money: "Free",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
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
                    <p className="text-md font-medium text-black">
                      {item.desc}
                    </p>
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
                        src="/Event/MoneyWavy (1).png"
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
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mt-9 max-w-[1047px]">
        <motion.div
          className="flex flex-col w-full mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg font-medium">lorem ipsum lorem ipsum</p>
        </motion.div>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
            {[
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35t.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35s.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
              {
                title: "Lorem ipsum",
                image: "/Event/Rectangle 35c.png",
                desc: "Lorem ipsum",
                date: "22nd April",
                location: "New Delhi",
                money: "46$",
              },
            ].map((item, i) => (
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
                    <p className="text-md font-medium text-black">
                      {item.desc}
                    </p>
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
                        src="/Event/MoneyWavy.png"
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFB32C] px-10 py-20 text-white max-w-[1047px] rounded-xl mt-24 md:px-12">
        <motion.div
          className="flex flex-col w-full w-max-[1047px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black lg:text-left text-center">
            For Students
          </h1>
          <p className="text-xl font-medium text-black lg:text-left text-center">
            lorem ipsum lorem ipsum
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center sm:justify-between gap-2 w-full mt-8 md:px-4">
            {["Filters", "Filters", "Filters", "Filters"].map((label, i) => (
              <motion.button
                key={i}
                className="flex-1  min-w-[120px] max-w-[150px] px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
            <motion.button
              className="px-2 py-2 bg-white text-black rounded-full hover:bg-gray-100 w-[40px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/Event/tune.png"
                alt="tune icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              title: "Lorem ipsum",
              image: "/Event/Rectangle 35t.png",
              desc: "Lorem ipsum",
              date: "22nd April",
              location: "New Delhi",
              money: "46$",
            },
            {
              title: "Lorem ipsum",
              image: "/Event/Rectangle 35s.png",
              desc: "Lorem ipsum",
              date: "22nd April",
              location: "New Delhi",
              money: "46$",
            },
            {
              title: "Lorem ipsum",
              image: "/Event/Rectangle 35c.png",
              desc: "Lorem ipsum",
              date: "22nd April",
              location: "New Delhi",
              money: "46$",
            },
            {
              title: "Lorem ipsum",
              image: "/Event/Rectangle 35t.png",
              desc: "Lorem ipsum",
              date: "22nd April",
              location: "New Delhi",
              money: "46$",
            },
            {
              title: "Lorem ipsum",
              image: "/Event/Rectangle 35s.png",
              desc: "Lorem ipsum",
              date: "22nd April",
              location: "New Delhi",
              money: "46$",
            },
            {
              title: "Lorem ipsum",
              image: "/Event/Rectangle 35c.png",
              desc: "Lorem ipsum",
              date: "22nd April",
              location: "New Delhi",
              money: "46$",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col w-full max-w-xs min-w-[200px] mx-auto shadow-md pb-[30px] rounded-lg mt-[50px] bg-white"
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

                <div className="flex flex-row items-center opacity-80 mt-2 text-black">
                  <div className="mr-3">
                    <MapPin size={22} strokeWidth={1.4} />
                  </div>
                  <span className="font-medium text-sm capitalize">
                    {item.location}
                  </span>
                </div>

                <div className="flex flex-row items-center mt-4 text-black">
                  <div className="mr-3">
                    <Image
                      src="/Event/MoneyWavy.png"
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
        </motion.div>

        <motion.div
          className="container mx-auto px-4 text-center mt-[70px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-[#854836] h-[57px] text-white hover:bg-[#FDBA3C]/90 w-[316px]">
            View more
          </button>
        </motion.div>
      </section>
    </div>
  );
}
