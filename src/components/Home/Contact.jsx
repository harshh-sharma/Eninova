"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Contact = () => {
  // Slider Data
  const images = [
    "https://images.pexels.com/photos/7527874/pexels-photo-7527874.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7512594/pexels-photo-7512594.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7499787/pexels-photo-7499787.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7488839/pexels-photo-7488839.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7527874/pexels-photo-7527874.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7512594/pexels-photo-7512594.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7499787/pexels-photo-7499787.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7488839/pexels-photo-7488839.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4); // Default number of visible items

  // Adjust visible items based on screen width
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleItems(4); // Large screens
      else if (width >= 768) setVisibleItems(3); // Medium screens
      else if (width >= 480) setVisibleItems(2); // Small screens
      else setVisibleItems(1); // Extra small screens
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // Handle Slider Navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-10 px-5">
      {/* Heading */}
      <h1 className="text-[32px] sm:text-[50px] md:text-[60px] font-bold text-[#172A44] text-center mb-5">
        Contact Us
      </h1>

      {/* Reviews Section */}
      {/* <div className="text-center my-10">
        <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-800">
          Reviews
        </h2>
      </div> */}

      {/* Carousel */}
      <div className="relative w-full h-auto flex items-center justify-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <IoIosArrowBack size={20} />
        </button>

        {/* Images */}
        <div
  className="flex transition-transform duration-500"
  style={{
    width: `${270 * visibleItems}px`, // Dynamically adjust width based on visible items
    transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
  }}
>
  {images.map((image, index) => (
    <div
      key={index}
      className="relative w-[270px] sm:w-[300px] lg:w-[270px] h-[400px] flex-shrink-0 mx-2 rounded-3xl hover:rounded-none shadow-xl overflow-hidden group hover:scale-105"
      style={{
        flex: `0 0 ${(100 / visibleItems)}%`, // Adjust the size of each image dynamically
      }}
    >
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover rounded-md"
      />
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-transparent bg-opacity-70 text-white text-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <p><span className="font-bold">Lorem ipsum dolor sit amet  </span> adipisicing elit. Molestiae, fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ad!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ad!</p>
      </div>
    </div>
  ))}
</div>


        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
