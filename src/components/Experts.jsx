"use client";
import React from "react";

const OurExperts = () => {
  const experts = [
    {
      name: "John Doe",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      info: "Senior Software Engineer with 10+ years of experience in web development.",
    },
    {
      name: "Jane Smith",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      info: "UI/UX Designer with a passion for creating intuitive digital experiences.",
    },
  ];

  return (
    <div className="my-10 px-5">
      {/* Section Title */}
      <h1 className="text-[40px] md:text-[60px] font-[600px] text-[#172A44] text-center mb-10">
        Our Experts
      </h1>

      {/* Experts Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {experts?.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-5 w-full sm:w-[300px] md:w-[370px] flex flex-col items-center"
          >
            {/* Expert Image */}
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[370px] md:h-[370px] mb-5">
              <img
                src={item?.image}
                alt={item?.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            {/* Expert Name */}
            <h2 className="text-[20px] md:text-[24px] font-[600px] text-[#172A44] mb-3">
              {item?.name}
            </h2>

            {/* Expert Info */}
            <p className="text-[14px] md:text-[16px] text-gray-700 text-center">
              {item?.info}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex w-full justify-center my-5">
        <p className="flex justify-center items-center text-center text-[16px] md:text-[20px] leading-[27.3px] 
          bg-[radial-gradient(96.43%_174.93%_at_50%_50%,_#53BC69_0%,_#0A745F_100%)] 
          bg-clip-text text-transparent decoration-[#53BC69] underline decoration-2 font-[700px]">
          Know more
        </p>
      </div>
    </div>
  );
};

export default OurExperts;
