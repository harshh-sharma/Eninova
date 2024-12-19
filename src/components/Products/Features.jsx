import React from 'react';
import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";

const features = [
    {
      feature:
        "Lorem ipsum dolor sit, amet consectetur",
      icon: <RiBattery2ChargeFill className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Seamless and fast Wi-Fi connectivity.",
      icon: <FaWifi className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "High-definition TV compatibility.",
      icon: <FiTv className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Crystal clear audio with powerful speakers.",
      icon: <HiSpeakerWave className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Advanced power management system.",
      icon: <RiBattery2ChargeFill className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "User-friendly interface for all users.",
      icon: <FaWifi className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "High-performance processing capabilities.",
      icon: <FiTv className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Portable and lightweight design.",
      icon: <HiSpeakerWave className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Portable and lightweight design.",
      icon: <HiSpeakerWave className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Portable and lightweight design.",
      icon: <HiSpeakerWave className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Portable and lightweight design.",
      icon: <HiSpeakerWave className="w-[46.5px] h-[46.5px]" />,
    },
    {
      feature: "Portable and lightweight design.",
      icon: <HiSpeakerWave className="w-[46.5px] h-[46.5px]" />,
    }
  ];

const Features = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 py-4 px-4">
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#174A44]">
        Features
      </h1>
    </div>
    <div className="w-full max-w-[1240px] flex flex-wrap gap-4 justify-center items-center">
      {features?.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[300px] md:w-[400px] h-auto border-[3px] border-[#172A44] rounded-lg p-4 flex gap-4 items-center bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-[80px] h-[80px] flex-shrink-0">
            <div className="rounded-full bg-green-600 w-full h-full flex justify-center items-center">
              {item?.icon}
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg md:text-xl text-gray-800">
              {item?.feature}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Features