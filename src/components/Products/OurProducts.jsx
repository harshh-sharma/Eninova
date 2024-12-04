import React from "react";

const productsImages = [
  { image: "/product.png" },
  { image: "/product1.png" },
  { image: "/product2.png" },
  { image: "/product3.png" },
  { image: "/product4.png" },
  { image: "/product5.png" },
  { image: "/product6.png" },
  { image: "/product7.png" },
  { image: "/product8.png" },
  // { image: "/product9.png" },
];

const OurProducts = () => {
  return (
    <div className="w-full px-4">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-10 font-semibold text-gray-800 text-center"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsImages?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-auto overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item?.image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center my-[15px]">
        <div className="w-full sm:w-[90%] lg:w-[1207px] h-auto sm:h-auto flex flex-col justify-center items-center px-4">
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
            Lorem ipsum dolor sit amet consectetur.
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center text-[#172A44] mt-4 sm:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-[50px] sm:mt-[70px]">
        <button className="w-[200px] sm:w-[220px] md:w-[250px] my-[10px] text-[20px] sm:text-[24px] md:text-[28px] h-[60px] sm:h-[70px] border-[3px] sm:border-[5px] border-[#182C47] text-[#182C74] rounded-[20px] hover:bg-[#182C47] hover:text-white transition-all">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
