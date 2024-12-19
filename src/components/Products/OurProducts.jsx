import React from "react";

const productsImages = [
  { image: "/product1.png" },
  { image: "/product2.png" },
  { image: "/product3.png" },
  { image: "/product4.png" },
  { image: "/product5.png" },
  { image: "/product6.png" },
  { image: "/product7.png" },
  { image: "/product7.png" },
  { image: "/product7.png" },
  { image: "/product7.png" },
];

const OurProducts = () => {
  return (
    <div className="w-full px-4 pb-[10px]">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-10 font-semibold text-[#172A44] text-center"
        style={{
          fontFamily: "Noto Sans Lao SemiCondensed",
          fontWeight: 600,
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {productsImages?.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center w-full h-auto overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item?.image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* View Details Button */}
            <button className="absolute bottom-4 left-4 bg-[#182C47] text-white text-sm sm:text-base py-2 px-4 rounded-lg shadow-md hover:bg-[#1a3d60] transition-all">
              View Details
            </button>

            {/* Downward Arrow Icon */}
            <div className="absolute bottom-4 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white bg-[#182C47] rounded-full p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            {/* Star Icons */}
            <div className="absolute bottom-4 right-4 flex gap-1">
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gold"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l-6.187 3.25 1.182-6.9L2.5 9.25l6.938-1 3.062-6.25 3.062 6.25 6.938 1-5.095 4.35 1.182 6.9z"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center my-10">
          <button className="text-[#172A44] border-[3px] rounded-md w-[156px] h-[43px] border-[#172A44] font-[600] hover:bg-gradient-to-r hover:from-[#53BC69] hover:to-[#0A745F] hover:text-white hover:border-none transition-all duration-300">View more...</button>
      </div>

      <div className="w-full flex justify-center items-center my-[15px]">
        <div className="w-full sm:w-[90%] lg:w-[1207px] h-auto flex flex-col justify-center items-center px-4">
          <h1
            className="text-center font-semibold text-[#172A44] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "Noto Sans Lao SemiCondensed",
              fontWeight: 600,
              lineHeight: "131.6px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Have a project? Connect to us!
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center text-[#172A44] mt-4 sm:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-[50px] sm:mt-[70px]">
        <button className="w-[136px] h-[44px] border-[3px] border-[#172A44] font-[600] text-[#172A44] text-[20px] rounded-md hover:bg-gradient-to-r hover:from-[#53BC69] hover:to-[#0A745F] hover:text-white hover:border-none transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
