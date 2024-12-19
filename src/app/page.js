import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";
import Image from "next/image";
import ClientCarousel from "../components/Home/client";
import OurExperts from "../components/Experts";
import Contact from "../components/Home/Contact";
import GetInTouch from "../components/Home/GetInTouch";
import LastComp from "../components/LastComp";
import Box from "@/components/Box";
import Features from "@/components/Home/Features";
import OurPartnerShip from "@/components/Home/OurPartnerShip";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[rgb(255,255,255)]">
      {/* Title */}
      <Features />

      {/* Additional Content (Text + Image) */}
      <div className="flex justify-center w-full items-center">
        <div className="relative w-full max-w-[75%]">
          <img
            src="/featureImage.png"
            alt="Feature"
            className="w-full rounded-lg hover:rounded-none hover:scale-105 transition-transform ease-in-out duration-200 shadow-md"
          />
          <div className="absolute bottom-4 right-4  text-white p-4 rounded-lg w-[85%] md:w-[348px] h-auto">
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-tight">
              Lorem ipsum dolor sit amet{" "}
              <span className="underline cursor-pointer hover:text-gray-300 whitespace-nowrap">
                Read more...
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Who is it for? Section */}
      <div className="text-center pt-5 px-4">
        <p className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold text-[#172A44]">
          Who is it for?
        </p>
        <p className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] text-[#172A44] mt-4">
          This product is designed for tech enthusiasts, home entertainment
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="w-full max-w-[1128px] px-5 md:px-5">
        {/* First Row of Images (2 images) */}
        <div className="flex flex-wrap gap-5 my-5 group relative">
          {/* First Div */}
          <div className="relative w-[736px] h-[550px] sm:h-[400px] transition-all duration-300 group-hover:w-[326px] group-hover:h-[550px] hover:w-[736px] hover:h-[550px]">
            <img
              src="/featureImage3.png"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 flex pl-10 bg-gradient-to-t from-gray-100/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex-col justify-center items-start">
              <p className="text-[#172A44] text-3xl font-semibold mb-5">
                Businesses
              </p>
              <ul className="flex flex-col gap-5 justify-start items-start">
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Cafe Owners
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Socities
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Sports Complexes
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  IT Parks
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Malls
                </li>
              </ul>
            </div>
          </div>

          {/* Second Div */}
          <div className="relative w-full md:w-[326px] h-[550px] sm:h-[400px] transition-all duration-300 group-hover:w-[736px] group-hover:h-[550px] hover:w-[736px] hover:h-[550px]">
            <img
              src="/featureImage2.png"
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 flex pl-10 bg-gradient-to-r from-[#ffffff] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex-col justify-center items-start">
              <p className="text-[#172A44] text-3xl font-semibold mb-5">
                Businesses
              </p>
              <ul className="flex flex-col gap-5 justify-start items-start">
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Cafe Owners
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Socities
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Sports Complexes
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  IT Parks
                </li>
                <li className="list-none text-xl text-[#172A44] font-semibold text-start">
                  Malls
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Row of Images (2 images) */}
        <div className="flex flex-wrap gap-5 my-5 group relative">
          {/* First Div */}
          <div className="relative w-[736px] h-[281px] sm:h-[281px] transition-all duration-300 group-hover:w-[326px] group-hover:h-[281px] hover:w-[736px] hover:h-[281px]">
            <img
              src="/featureImage3.png"
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 flex pl-10 bg-gradient-to-r from-[#ffffff] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex-col justify-center items-start">
              <p className="text-[#172A44] text-4xl font-bold mb-5">
                Rural Communities
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="relative w-full md:w-[326px] h-[281px] sm:h-[281px] transition-all duration-300 hover:w-[736px] hover:h-[281px]">
            <img
              src="/featureImage4.png"
              alt="Image 4"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 flex pl-10 bg-gradient-to-r from-[#ffffff] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex-col justify-center items-start">
              <p className="text-[#172A44] text-4xl font-bold mb-5">
                Pilgriimage Trusts
              </p>
            </div>
          </div>
        </div>

        {/* Third Row (1 Image Spanning 2 Columns) */}
        <div className="relative w-full h-[214px] col-span-2 group">
          <div className="relative w-full h-[214px] transition-all duration-300 group-hover:h-[300px]">
            <img
              src="/featureImage5.png"
              alt="Image 5"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 flex pl-10 bg-gradient-to-r from-[#ffffff] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex-col justify-center items-start">
              <p className="text-[#172A44] text-4xl font-bold mb-5">
                Corporate Social Responsibility
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center underline py-5 font-semibold text-[rgb(83,188,94)]">
        Know more
      </p>

      {/* green container */}
      <div
        className="w-full h-auto relative mt-[10px] bg-gradient-to-b from-[#265630] to-[#53BC69] bg-opacity-90"
        style={{
          background: `
      radial-gradient(126.28% 126.28% at 50% 50%, #265630 0%, #53BC69 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 100%)
    `,
        }}
      >
        <div className="w-full max-w-[1280px] h-auto pb-10 flex justify-center items-center flex-col mx-auto px-4">
          {/* Title Section */}
          <div className="w-full max-w-[920px] h-auto text-center mb-10">
            <h1
              className="text-[36px] md:text-[48px] lg:text-[60px] text-white leading-tight font-semibold"
              style={{
                fontFamily: "Noto Sans Lao SemiCondensed",
                textUnderlinePosition: "from-font",
              }}
            >
              Conventional Vs Our Products
            </h1>
            <p className="text-white font-light text-[18px] md:text-[24px] lg:text-[32px] leading-[1.5] mt-4">
              Lorem ipsum dolor sit amet consectetur{" "}
              <span className="font-semibold">,</span>
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[200px] sm:h-[300px] md:h-[500px] lg:h-[511px] w-full bg-[url('/greenImage.png')] bg-cover bg-center rounded-xl shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out"></div>

          {/* Clients Section */}
        </div>
      </div>

      <ClientCarousel />

      {/* image and box */}
      <div className="w-full h-auto relative my-[15px]">
        {/* Content Section */}
        <h1 className="text-[#172A44] text-center font-semibold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
          Our Projects
        </h1>

        {/* Background Image Section */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] bg-[url('/group.png')] bg-cover bg-bottom">
          {/* Content can be added here if needed */}
        </div>
      </div>

      {/* blogs */}
      <div className="w-full h-auto flex flex-wrap px-4 md:px-10 justify-center items-center gap-8 md:gap-16 py-8">
        {/* Text Section */}
        <div className="w-full max-w-[611px] h-auto p-6">
          <p className="text-[24px] sm:text-[28px] md:text-[36px] font-[600] leading-[36px] sm:leading-[48px] md:leading-[54px] mb-4 text-[#172A44]">
            Becoming our partner is the best way to boost your business!
          </p>
          <p className="text-[20px] sm:text-[24px] md:text-[32px] text-[#172A44] leading-[35px] sm:leading-[48px] md:leading-[48px] font-[500px] mb-4">
            Interested in renewables, smart cities and urban development?
          </p>
          <p className="text-[20px] sm:text-[24px] md:text-[32px] font-[500] leading-[35px] sm:leading-[48px] md:leading-[48px] text-[#172A44]">
            Let’s partner up!
          </p>
          <button
            className="w-[170px] h-[60px] text-[16px] sm:text-[18px] md:text-[20px] font-[600] flex justify-center items-center text-[#172A44] rounded-md 
                transition-all ease-out duration-300 mt-4 border-[3px] border-[#172A44]"
          >
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-[url('/groupImg.png')] bg-cover bg-center rounded-2xl hover:rounded-none hover:scale-105 transition-all ease-in-out duration-100"></div>
      </div>

      {/* <OurExperts /> */}
      <OurPartnerShip />
      <Contact />
      <GetInTouch />
    </div>
  );
}
