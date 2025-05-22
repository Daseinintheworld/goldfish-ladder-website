import Image, { StaticImageData } from "next/image";
import money from "@/assets/icons/money.svg";
import { Calendar, MapPin } from "lucide-react";
import AnimatedCard from "../../../../Animations/AnimatedCards";

interface EventCardProps {
  image: StaticImageData;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ image, index }) => {
  return (
    <AnimatedCard delay={index * 0.15}>
      <div className="shadow-md rounded-xl mb-5 mx-[10px] min-w-[290px]">
        <div className="relative">
          <Image
            src={image}
            className="w-full"
            height={280}
            width={300}
            alt="Event Image"
          />
          <div className="absolute bottom-0 bg-black/50 w-full opacity-100 text-white p-4 flex gap-2 rounded-b-xl">
            <Calendar />
            22nd April 2025
          </div>
        </div>
        <div className="px-3 mt-2 space-y-1 pb-2">
          <h3 className="font-bold text-3xl">Lorem Ipsum</h3>
          <p>Lorem Ipsum</p>
          <div className="flex items-center gap-1">
            <MapPin height={22} width={22} />
            <span>New Delhi</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={money} height={22} width={22} alt="Salary" />
            <span>46 $</span>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default EventCard;
