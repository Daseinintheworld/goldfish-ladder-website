"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function PodcastPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center max-w-[1074px] mx-auto">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/podcast/Screen.png"
            alt="internship hero"
            width={1200} // Increased for better resolution
            height={1260}
            className="object-contain max-w-full mx-auto"
          />
        </motion.div>
      </section>

      {/* Voices of Young Founders */}
      <section>
        <motion.div
          className="max-w-[1047px] rounded-2xl px-6 md:px-14 py-[70px] bg-gradient-to-b from-[#ffb32c] to-[#b1662b] mt-[10px] sm:mx-[50px] mx-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center md:gap-10">
            <motion.div
              className="w-full max-w-[750px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-[70px] font-bold text-white text-center leading-tight">
                “Voices of Young Founders”
              </h1>
            </motion.div>

            <motion.div
              className="mt-[43px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="tex-lg md:text-2xl font-semibold text-white text-center leading-tight">
                Tune into candid conversations with high school and college
                founders as they share the ups, downs, and unexpected lessons
                from launching their first startups—with a little help from AI
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Episode */}
      <section className="text-black">
        <motion.div
          className="container mx-auto flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mt-[80px] text-center mb-4 text-3xl font-bold">
            Gain startup experience
          </h2>
          <p className="mb-8 text-2xl max-w-[600px] text-center">
            Discover AI startup ideas and connect with potential co-founders
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-2 w-full max-w-5xl mx-auto sm:px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              title: "Hear cutting-edge concepts",
              image: "/events/Rectangle 35.png",
            },
            {
              title: "Meet entrepreneurs and peers",
              image: "/events/Rectangle 35.png",
            },
            {
              title: "Stay up-to-date on trends",
              image: "/events/Rectangle 35.png",
            },
            { title: "Make Progress", image: "/events/Rectangle 35.png" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col min-w-[320px] md:min-w-[380px] max-w-xs mx-auto shadow-md pb-[20px] rounded-lg mt-[50px] bg-[#FEB22C]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={500}
                  className="max-w-full max-h-[280px]"
                />
              </div>
              <div className="w-full h-[40%] pl-[10px] pt-[10px] flex items-center">
                <h1 className="text-[24px] text-black mt-1">{item.title}</h1>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Recently Posted */}
      <section className="mt-[43px] w-max-[1047px]">
        <motion.div
          className="flex flex-col w-full mt-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-black">
            Recently Posted
          </h1>
          <p className="text-xl font-medium text-black">
            lorem ipsum lorem ipsum
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
            {[
              {
                title: "Lorem ipsum",
                image: "/podcast/audio.png",
                desc: "Lorem ipsum",
                date: "22nd April",
              },
              {
                title: "Lorem ipsum",
                image: "/podcast/audio.png",
                desc: "Lorem ipsum",
                date: "22nd April",
              },
              {
                title: "Lorem ipsum",
                image: "/podcast/audio.png",
                desc: "Lorem ipsum",
                date: "22nd April",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[20px] rounded-b-md mt-[50px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="object-contain max-w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]">
                    <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                      <Calendar size={22} strokeWidth={1.4} />
                      <span className="font-medium text-sm capitalize">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-[10px] h-[40%]">
                  <h1 className="text-3xl font-bold text-black mt-1">
                    {item.title}
                  </h1>
                  <p className="text-md font-medium text-black">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Curated for You */}
      <section className="mt-[43px] w-max-[1047px]">
        <motion.div
          className="flex flex-col w-full mt-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-black">
            Curated for you
          </h1>
          <p className="text-xl font-medium text-black">
            lorem ipsum lorem ipsum
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl mx-auto px-4">
            {[
              {
                title: "Lorem ipsum",
                image: "/podcast/tyrany.png",
                desc: "Lorem ipsum",
                date: "22nd April",
              },
              {
                title: "Lorem ipsum",
                image: "/podcast/cat.png",
                desc: "Lorem ipsum",
                date: "22nd April",
              },
              {
                title: "Lorem ipsum",
                image: "/podcast/s.png",
                desc: "Lorem ipsum",
                date: "22nd April",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-b-md mt-[50px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt="internship hero"
                    width={500}
                    height={600}
                    className="max-w-full h-[250px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 h-[40px] rounded-b-lg pl-[10px]">
                    <div className="flex flex-row items-center opacity-80 mt-2 text-white">
                      <Calendar size={22} strokeWidth={1.4} />
                      <span className="font-medium text-sm capitalize">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-[10px] h-[40%]">
                  <div className="flex flex-col mb-1">
                    <h1 className="text-3xl font-bold text-black max-w-[40px] mt-1">
                      {item.title}
                    </h1>
                    <p className="text-md font-medium text-black">
                      {item.desc}
                    </p>
                  </div>
                  <div className="container mx-auto px-1 mt-[20px]">
                    <button className="bg-[#854836] h-[40px] text-white hover:bg-[#FDBA3C]/90 w-[60%]">
                      View more
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Popular Speakers */}
      <section className="bg-[#FFB32C] py-20 text-white w-max-[1047px] rounded-xl mt-[100px] md:p-[50px] mb-[100px] mx-2 md:mx-12">
        <motion.div
          className="flex flex-col text-center w-full w-max-[1047px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-black">
            Popular Speakers
          </h1>
          <p className="text-xl font-medium text-black">
            lorem ipsum lorem ipsum
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center w-full max-w-4xl mx-auto px-1">
            {[
              {
                title: "Jesse Heathcote",
                image: "/podcast/Ellipse 4 (1).png",
                desc: "lorem ipsum lorem ipsum",
              },
              {
                title: "Ernest Schmeler",
                image: "/podcast/Ellipse 4 (2).png",
                desc: "lorem ipsum lorem ipsum",
              },
              {
                title: "Ernest Schmeler",
                image: "/podcast/Ellipse 4 (3).png",
                desc: "lorem ipsum lorem ipsum",
              },
              {
                title: "Ted Bruen",
                image: "/podcast/Ellipse 4 (4).png",
                desc: "lorem ipsum lorem ipsum",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col w-full max-w-[280px] min-w-[200px] mx-auto shadow-md pb-6 rounded-lg mt-8 mr-2 ml-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full max-w-[200px] mx-auto">
                  <Image
                    src={item.image}
                    alt="internship hero"
                    width={300}
                    height={300}
                    className="max-w-full h-auto rounded-full object-cover"
                  />
                </div>
                <div className="w-full px-4 mt-4">
                  <h1 className="text-[24px] font-bold text-black">
                    {item.title}
                  </h1>
                  <p className="text-[19.75px] font-medium text-black mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
