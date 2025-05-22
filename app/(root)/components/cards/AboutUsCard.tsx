import React from "react";
import AnimatedCard from "../../../../Animations/AnimatedCards";

interface AboutUsCardProps {
  title: string;
  content: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ title, content }) => {
  return (
    <AnimatedCard>
      <div className="bg-white rounded-xl p-6  shadow-md h-[224px] w-[254px] flex  flex-col items-center justify-center mx-[10px] lg:mx-[6px] md:mx-[80px] mb-[30px]">
        <div className=" mb-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{content}</p>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default AboutUsCard;
