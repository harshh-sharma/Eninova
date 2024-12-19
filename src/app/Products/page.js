import React from "react";
import OurProducts from "@/components/Products/OurProducts";
import ForBusiness from "@/components/Products/ForBusiness";
import Features from "@/components/Products/Features";



const page = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Features/>



      {/* Background Section */}
      {/* <div
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
            borderImageSource:
              "linear-gradient(94.18deg, #0357CA 0%, #000204 100%)", // Gradient border
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
      </div> */}

      <OurProducts />
      {/* <ForBusiness /> */}
    </div>
  );
};

export default page;
