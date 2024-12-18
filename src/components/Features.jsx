import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";

function CircleBoxAnimation({ feature, icon }) {
  return (
    <div className="relative w-[192px] h-[196px] flex justify-center items-center flex-wrap">
      {/* Circle */}
      <div
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-500 group-hover:top-10 group-hover:-translate-y-1/5 z-[100]
  w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[140px] lg:h-[140px] 
  group-hover:w-[80px] shadow-md group-hover:scale-110 group-hover:h-[80px] flex justify-center items-center border-[5px] group-hover:border-[0px] border-[#172A44]"
  style={{
    background:
      "radial-gradient(56.79% 56.79% at 50% 50%, #8BF2A1 0%, #53BC69 54.01%, #0A745F 100%)",
    boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.7)", // White glowing shadow around the icon
  }}
>
  {icon}
</div>


      {/* Box */}
      <div className="absolute top-[50px] left-0 h-0 w-[180px] overflow-hidden group-hover:border-[4px] border-[#172A44] transition-all duration-500 group-hover:h-[100px] md:group-hover:h-[120px]  group-hover:rounded-xl flex justify-center items-center pt-[5px]">
        <p className="text-xl font-bold text-[#172A44] text-center group-hover:block hidden">{feature}</p>
      </div>
    </div>
  );
}

import React from "react";

const Features = () => {
  const features = [
    {
      feature: "Long-lasting battery life",
      icon: <RiBattery2ChargeFill className="w-[57px] h-[52px] text-white" />,
    },
    {
      feature: "Seamless WiFi connectivity",
      icon: <FaWifi className="w-[57px] h-[52px] text-white" />,
    },
    {
      feature: "High-definition display",
      icon: <FiTv className="w-[57px] h-[52px] text-white" />,
    },
    {
      feature: "Immersive audio quality",
      icon: <HiSpeakerWave className="w-[57px] h-[52px] text-white" />,
    },
    {
      feature: "Fast charging support",
      icon: <RiBattery2ChargeFill className="w-[57px] h-[52px] text-white" />,
    },
    {
      feature: "Stable internet connection",
      icon: <FaWifi className="w-[57px] h-[52px] text-white" />,
    },
    {
      feature: "Smart TV compatibility",
      icon: <FiTv className="w-[57px] h-[52px] text-white" />,
    },
    {
      feature: "Crystal-clear sound",
      icon: <HiSpeakerWave className="w-[57px] h-[52px] text-white" />,
    },
  ];

  return (
    <div className="w-full text-center p-4 sm:p-6 md:p-8 my-[20px] md:my-[50px]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#172A44] mb-6 md:mb-10">
        Features
      </h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-x-6 md:gap-y-10 md:w-[60%] md:mx-auto">
        {features?.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-center items-center"
          >
            <CircleBoxAnimation feature={item?.feature} icon={item?.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
