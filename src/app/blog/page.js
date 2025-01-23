"use client";

import axiosInstance from "@/helper/axiosInstance";
import React, { useEffect, useState } from "react";

const BlogCard = ({ img, title, content }) => {

  return (
    <div className="w-full max-w-[983px] h-auto md:h-[640px] flex flex-col justify-center items-center relative mx-auto my-5">
      <div className="w-full h-auto bg-[#A8DCFF] flex flex-col justify-center items-center py-6 md:h-[451px] border-[3px] md:border-[5px] border-[#172A44] rounded-2xl">
        {/* Top Image */}
        <div className="w-[90%] max-w-[852px] h-auto md:h-[300px] absolute -top-16 md:-top-8">
          <img
            src={img || "/featureImage.png"}
            alt="feature"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-[852px] mt-[100px] md:mt-[230px] px-4 pb-[20px]">
          <h1 className="text-[24px] md:text-[32px] font-[600] leading-[1.2] text-center text-[#172A44]">
            {title?.length > 0 ? title : "Lorem ipsum dolor sit amet."}
          </h1>
          <p className="text-center text-[16px] md:text-[19px] leading-[1.5] md:leading-[35px] font-[500] text-[#172A44] mt-4">
            {content?.length > 0
              ? content
              : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          </p>
          <div className="flex justify-center items-center py-[5px] md:pb-10">
            <button className="text-[#53BC69] text-[14px] md:text-[17px] font-[600] text-center underline">
              Go to Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="w-full max-w-[1440px] h-auto md:h-[469px] overflow-hidden relative border-2 border-black my-5 rounded-lg">
      {/* Carousel Slides */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex justify-center items-center transition-transform duration-700 ${
            currentIndex === index
              ? "transform translate-x-0"
              : index < currentIndex
              ? "transform -translate-x-full"
              : "transform translate-x-full"
          }`}
        >
          <img
            src={item.contentImg || "/placeholder.png"}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const carouselItems = [
  { contentImg: "/l1.png" },
  { contentImg: "/i2.png" },
  { contentImg: "/l1.png" },
  { contentImg: "/i2.png" },
];

const Page = () => {
  const [blogContent, setBlogContent] = useState([]);

 
  const domainId = '678f9360190d9d0207264322';
  const fetchContent = async () => {
     try {
      const response = await axiosInstance.get(`/website/${domainId}`);
      const contents = response?.data?.data?.pages[0].sections[0]?.contents;
      setBlogContent(contents);
      console.log(contents[0]);
      
     } catch (error) {
      console.log(error);
      
     }
  }

  useEffect(() => {
     fetchContent();
  },[])

  const truncateText = (text, maxWords) => {
    if (!text) return ""; // Handle empty or undefined text
    const words = text.split(" ");
    return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : text;
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-[#172A44] text-[40px] md:text-[60px] text-center font-semibold mb-10 drop-shadow-lg">
        Blog
      </h1>

      <div className="w-full min-h-screen flex flex-col justify-center items-center space-y-20 md:space-y-[100px] py-6 px-4">
        {blogContent?.map((item, index) => (
          <BlogCard
            key={index}
            img={item?.content_data?.image_url}
            title={item?.title}
            content={truncateText(item?.content_data?.text, 40)} // Example: Limit to 20 words
          />
        ))}

        {blogContent?.length === 0 && (
          <>
            {[...Array(6)].map((_, index) => (
              <BlogCard key={index} />
            ))}
          </>
        )}
      </div>

      <div className="flex justify-center items-center">
        <div
          className="w-full max-w-[1440px] h-auto md:h-[1319px] border-2 border-black gap-4 md:gap-[10px] p-4"
          style={{
            backgroundImage: "url('/blogBlur.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-center text-[40px] md:text-[60px] font-[600]">Follow Us</h1>
          <h2 className="text-center text-[24px] md:text-[32px] font-[400]">on Social Media!</h2>
          <div className="flex justify-center items-center mt-4">
            <img src="/instagramLogo.png" alt="Instagram Logo" className="h-[30px] md:h-[50px]" />
          </div>
          <Carousel items={carouselItems} />
          <Carousel items={carouselItems} />
        </div>
      </div>
    </div>
  );
};

export default Page;
