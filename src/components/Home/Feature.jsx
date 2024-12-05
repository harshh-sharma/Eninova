import React from "react";
import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";

const features = [
  {
    feature:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, voluptatem.",
    icon: <img src="/feature1.png" alt="feature1" className="w-[72px] h-[72px]" />,
  },
  {
    feature: "Seamless and fast Wi-Fi connectivity.",
    icon: <img src="/feature2.png" alt="feature2" className="w-[72px] h-[72px]" />,
  },
  {
    feature: "High-definition TV compatibility.",
    icon: <img src="/feature3.png" alt="feature3" className="w-[72px] h-[72px]" />,
  },
  {
    feature: "Crystal clear audio with powerful speakers.",
    icon: <img src="/feature4.png" alt="feature4" className="w-[72px] h-[72px]" />,
  },
  {
    feature: "Advanced power management system.",
    icon: <img src="/feature5.png" alt="feature5" className="w-[72px] h-[72px]" />,
  },
  {
    feature: "User-friendly interface for all users.",
    icon: <img src="/feature6.png" alt="feature6" className="w-[72px] h-[72px]" />,
  },
  {
    feature: "High-performance processing capabilities.",
    icon: <img src="/feature7.png" alt="feature7" className="w-[72px] h-[72px]" />,
  },
  {
    feature: "Portable and lightweight design.",
    icon: <img src="/feature8.png" alt="feature8" className="w-[72px] h-[72px]" />,
  },
];

const Feature = () => {
  return (
    <div className="flex justify-center items-center min-h-screen border-2 border-red-400 bg-gray-50">
      <div className="w-full max-w-[1008px] border-2 border-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full h-[192px] border-2 border-green-500 p-4"
          >
            <div
  className="w-[140px] h-[140px] rounded-full border-[4px] border-[#192A44] flex flex-col justify-center items-center bg-[radial-gradient(56.79%_56.79%_at_50%_50%,_#8BF2A1_0%,_#53BC69_54.01%,_#0A745F_100%)] "
>
  {item?.icon}
  
</div>
<div className="w-[140px] h-[140px] border-red-500">
    <p>{item?.feature}</p>
  </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
