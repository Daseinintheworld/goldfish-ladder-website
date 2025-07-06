"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeInSection from "@/Animations/FadeInSection";

export default function AboutPage() {
  const members = [
    {
      id: 1,
      img: "/placeholder-img.png",
      name: "Devarsh Bajoria",
      designation: "Founder",
    },
    {
      id: 2,
      img: "/placeholder-img.png",
      name: "Jatin Jain",
      designation: "Head of the operation",
    },
    {
      id: 3,
      img: "/placeholder-img.png",
      name: "Huma Abia Kanta",
      designation: "Collaborating via KindCodeWorks",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center my-10">
        About Us
      </h2>
      {/* About Us Section */}
      <motion.div
        className="container mx-auto flex items-center flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.div
          className="relative w-full h-64 sm:h-80 md:h-[400px] md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about/about_hero_01.png"
            alt="About illustration"
            fill
            className="object-contain"
          />
        </motion.div>
        {/* Text */}
        <motion.div
          className=" md:w-1/2 md:text-lg font-bold space-y-8 mx-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Goldfish Ladder started in a classroom—not a boardroom—with a simple
            question: why should young people wait to build something real? We
            saw our friends with amazing ideas but no platform to share them,
            and we felt the same frustration. So, we decided to create the space
            we wished we had.
          </p>
          <p>
            At Goldfish Ladder, high schoolers don&apos;t just dream—they build.
            We offer micro-grants, mentors, and tools to help students pitch,
            launch, and lead their own projects. Here, being 16 or 17 is a
            strength, not a setback.
          </p>
          <p>
            The name reminds us that even a goldfish can climb a ladder if the
            world around it is built right. With belief, support, and community,
            anything is possible. Goldfish Ladder is just getting started—and
            we&apos;re helping students start now, too.
          </p>
        </motion.div>
      </motion.div>

      {/* Our Team Section */}
      <FadeInSection>
        <div className="bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Our Team
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Meet the people behind the mission
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, i) => (
                <motion.div
                  key={member.id}
                  className="flex flex-col items-start text-left space-y-4 bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 overflow-hidden rounded-full self-center">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-semibold">{member.name}</h3>
                  <p className="text-sm font-medium ">{member.designation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
