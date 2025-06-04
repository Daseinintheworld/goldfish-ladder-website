import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  id: number;
  title: string;
  image: string;
  desc: string;
  date: string;
  location: string;
  money?: string;
  time?: string;
  link: string;
};

const EventCard = ({ card }: { card: EventCardProps }) => {
  return (
    <motion.div
      className="flex flex-col w-full max-w-xs mx-auto shadow-md pb-[30px] rounded-b-md mt-[50px] bg-white min-h-[478px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: card.id * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link href={card.link} target="_blank">
        {/* Image container */}
        <div className="relative w-full">
          <Image
            src={card.image}
            alt={card.title}
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
                {card.date}
              </span>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="w-full pl-[10px] h-[40%]">
          <div className="flex flex-col mb-1">
            <h1 className="text-3xl font-bold text-black mt-1">{card.title}</h1>
            <p className="text-md font-medium text-black">{card.desc}</p>
          </div>

          <div className="flex flex-row items-center opacity-80 mt-2">
            <div className="mr-3">
              <MapPin size={22} strokeWidth={1.4} />
            </div>
            <span className="font-medium text-sm capitalize">
              {card.location}
            </span>
          </div>

          <div className="flex flex-row items-center mt-4">
            <div className="mr-3">
              {card.money ? (
                <Image
                  src="/events/MoneyWavy.png"
                  alt="Money Icon"
                  width={22}
                  height={22}
                  className="object-contain max-w-full h-auto"
                />
              ) : (
                <Clock size={22} />
              )}
            </div>
            <span className="font-medium text-sm">
              {card.money ? card.money : card.time}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
