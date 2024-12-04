import React from "react";
import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";
import OurProducts from "@/components/Products/OurProducts";
import ForBusiness from "@/components/Products/ForBusiness";

const page = () => {
  const features = [
    {
      feature:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, voluptatem.",
      icon: <RiBattery2ChargeFill className="w-6 h-6" />,
    },
    {
      feature: "Seamless and fast Wi-Fi connectivity.",
      icon: <FaWifi className="w-6 h-6" />,
    },
    {
      feature: "High-definition TV compatibility.",
      icon: <FiTv className="w-6 h-6" />,
    },
    {
      feature: "Crystal clear audio with powerful speakers.",
      icon: <HiSpeakerWave className="w-6 h-6" />,
    },
    {
      feature: "Advanced power management system.",
      icon: <RiBattery2ChargeFill className="w-6 h-6" />,
    },
    {
      feature: "User-friendly interface for all users.",
      icon: <FaWifi className="w-6 h-6" />,
    },
    {
      feature: "High-performance processing capabilities.",
      icon: <FiTv className="w-6 h-6" />,
    },
    {
      feature: "Portable and lightweight design.",
      icon: <HiSpeakerWave className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center">
      {/* Features Section */}
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[30px] md:text-[60px] font-[600] mt-[48px] text-center">
          Features
        </h1>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        {/* Grid Container */}
        <div className="w-full max-w-[1024px] grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-items-center px-[10px] py-[20px]">
          {features.map((item) => (
            <div
              className="w-full md:w-[450px] md:h-[150px] border-[2px] md:border-[4px] rounded-[4px] border-[#172A44] flex justify-center items-center gap-[10px] p-[10px] transition-all hover:shadow-lg"
              key={item.feature}
            >
              <div className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] flex justify-center items-center bg-green-600 rounded-full">
                <p className="text-[#172A44] text-3xl">{item.icon}</p>
              </div>
              <div className="w-[240px] flex justify-center items-center pl-[5px]">
                <p className="text-[16px] md:text-[18px] font-medium text-center">
                  {item.feature}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-[15px]">
          <button className="px-[20px] py-[10px] bg-white text-[#172A44] rounded-[7px] text-2xl font-[600px] hover:bg-[#172A44] hover:text-white border-[3px] border-[#172A44] transition-all">
            Contact Us
          </button>
        </div>
      </div>

      {/* Background Section */}
      <div
        className="w-full h-[501px] flex justify-center items-center mt-[25px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://tse2.mm.bing.net/th?id=OIP.gYzI4XN8UnAjNioU6mdQvQHaE8&pid=Api&P=0&h=180')",
        }}
      >
        <div
          className="w-full max-w-[1342px] h-[392px] relative flex flex-col justify-center items-center p-6"
          style={{
            border: "2px solid", // Solid border
            borderImageSource: "linear-gradient(94.18deg, #0357CA 0%, #000204 100%)", // Gradient border
            borderImageSlice: 1, // Apply the gradient to the border
            backdropFilter: "blur(7px)", // Apply blur effect to the background
            background: "#FCFCFC80", // Semi-transparent background color
            boxSizing: "border-box", // Ensure padding doesn't overlap border
          }}
        >
          <div className="w-full flex flex-col justify-center items-center text-center">
            <h1
              className="text-4xl md:text-6xl font-semibold text-gray-800 drop-shadow-lg z-10"
              style={{
                fontFamily: "Noto Sans New Tai Lue",
                fontWeight: 600,
              }}
            >
              Lorem ipsum dolor sit amet.
            </h1>
            <p
              className="text-lg md:text-2xl text-gray-600 mt-4 drop-shadow-lg z-10"
              style={{
                fontFamily: "Noto Sans New Tai Lue",
                fontWeight: 400,
                lineHeight: "43.58px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              possimus natus, facere veritatis ab animi sequi ut itaque omnis
              nostrum, veniam maiores quod repellendus exercitationem.
            </p>
          </div>
        </div>
      </div>

      <OurProducts/>
      <ForBusiness/>
    </div>
  );
};

export default page;
