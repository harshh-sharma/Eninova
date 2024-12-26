import Choose from "@/components/Projects/Choose";
import Client from "@/components/Projects/Client";
import Top from "@/components/Projects/Top";
import React from "react";

const Card = () => {
  return (
    <div className="w-[197.12px] h-[94.12px] left-[464px]">
      <div className="flex flex-col">
        <div className="flex gap-2 justify-around">
          <div className="w-[67px] h-[67px]">
            <img
              src="/picture1.png"
              alt="Image description"
              className="w-full h-full object-cover rounded-full border-[1.2px] border-[#172A44]"
            />
          </div>

          <div>
            <div className="w-[94.64px] h-[44.94px] shadow-md">
              <img
                src="/head.png"
                alt="image"
                className="w-full h-full object"
              />
            </div>
            <div>
              <p className="text-[14px] leading-[23px] font-[400] text-[#172A44]">Lorem, ipsum.</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[14px] leading-[23px] text-center text-[#172A44] font-[600]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

const firstLevelCard = [{}, {}, {}, {}, {}];
const secondLevelCard = [{}, {}, {}, {}];

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Top />

      {/* Stats Section */}
      <div className="bg-[#172A44] flex justify-between items-center space-x-4 p-4 w-full max-w-[1444px] mx-auto h-[145px] mt-5">
        <div className="flex-1 text-center">
          <div className="text-2xl font-bold text-white">10K+</div>
          <div className="text-white">Total Installations</div>
        </div>
        <div className="flex-1 text-center border-l border-gray-300 h-[100%] flex flex-col justify-center items-center">
          <div className="text-2xl font-bold text-white">25K+</div>
          <div className="text-white">Active users</div>
        </div>
        <div className="flex-1 text-center border-l h-[100%] flex flex-col justify-center items-center border-gray-300">
          <div className="text-2xl font-bold text-white">$200K+</div>
          <div className="text-white">Total Revenue Earned</div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="w-full flex justify-center items-center px-4">
        <div className="h-auto max-w-[1370px] w-full flex items-center justify-center flex-col">
          <p className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold text-[#172A44] text-center">
            Why <span className="text-[#53BC69]">Us!!</span>
          </p>
          <p className="text-[30px] sm:text-[35px] md:text-[40px] font-semibold text-[#172A44] text-center mt-5">
            Business growth through Innovation
          </p>
          <div className="w-full max-w-[1160px] h-auto flex justify-center items-center px-4">
            <p className="text-center text-[16px] sm:text-[18px] md:text-[24px] font-medium leading-[30px] sm:leading-[36px] text-[#172A44]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sint cupiditate accusamus tempore, deleniti nemo ducimus. Labore voluptatum sequi molestiae!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 my-[50px]">
            <div className="w-full sm:w-[291px] h-auto flex justify-center items-center flex-col gap-4 px-4">
              <img src="/Ad.png" alt="Ad" className="w-full max-w-[100px] h-auto object-cover" />
              <p className="text-center font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#172A44]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corporis optio! Exercitationem ipsum atque in adipisci. Sapiente odit ducimus repellendus?
              </p>
            </div>
            <div className="w-full sm:w-[291px] h-auto flex justify-center items-center flex-col gap-4 px-4">
              <img src="/growth.png" alt="Growth" className="w-full max-w-[100px] h-auto object-cover" />
              <p className="text-center font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#172A44]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corporis optio! Exercitationem ipsum atque in adipisci. Sapiente odit ducimus repellendus?
              </p>
            </div>
            <div className="w-full sm:w-[291px] h-auto flex justify-center items-center flex-col gap-4 px-4">
              <img src="/bag.png" alt="Bag" className="w-full max-w-[100px] h-auto object-cover" />
              <p className="text-center font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#172A44]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corporis optio! Exercitationem ipsum atque in adipisci. Sapiente odit ducimus repellendus?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Choose />

      {/* Mission and Vision */}
      <div className="w-full max-w-[1160px] h-[540px] flex flex-col my-[70px] px-4 sm:px-6 lg:px-8">
        <div className="h-[170px] flex flex-col sm:flex-row w-full gap-5">
          <div className="h-full w-full sm:w-[568px] flex justify-center items-center bg-[#172A44] rounded-tl-lg rounded-tr-lg">
            <h1 className="text-[40px] sm:text-[60px] font-semibold text-white text-center">
              Our Mission
            </h1>
          </div>
          <div className="h-full w-full sm:w-[568px] flex justify-center items-center border-l-[5px] border-t-[5px] border-r-[5px] border-[#172A44] rounded-tr-lg">
            <h1 className="text-[40px] sm:text-[60px] font-semibold text-center text-[#172A44]">
              Our Vision
            </h1>
          </div>
        </div>
        <div className="w-full h-[548px] border-[#172A44] border-[5px] flex justify-center items-center">
          <div className="w-full sm:w-[1050px] h-[452px] flex flex-col justify-center items-center px-4">
            <h1 className="text-[24px] sm:text-[32px] text-[#172A44] text-center font-semibold leading-[52px]">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-[16px] sm:text-[20px] text-[#172A44] text-center font-medium leading-[35px]">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      {/* Client Section */}
      <div className="w-full max-w-[1440px] h-auto bg-[#F6F6F6] flex justify-center items-center px-4">
        <div className="w-full max-w-[1365px] h-auto flex flex-col justify-center items-center">
          <h1 className="text-center text-[#172A44] text-[60px] font-[600] my-5">
            Why our Clients Believe we&apos;re the best
          </h1>
          <div className="flex flex-wrap gap-[50px] my-10 justify-center items-center">
            {firstLevelCard.map((item, index) => (
              <Card key={index} />
            ))}
          </div>
          <div className="flex flex-wrap gap-[50px] my-10 justify-center items-center">
            {secondLevelCard.map((item, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="max-w-[1440px] w-full mx-auto px-4 py-8">
        <p className="text-center text-[40px] md:text-[60px] font-bold text-[#172A44] leading-tight">
          Our Awards and <span className="text-[#53BC69]">Achievements</span>
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center mt-8 gap-8">
          <div className="max-w-[495px] w-full h-auto flex flex-col gap-4 p-5">
            <h1 className="text-[24px] md:text-[36px] font-semibold leading-[1.2]">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-[18px] md:text-[24px] leading-[1.5] font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit pariatur natus facilis dolor ducimus et obcaecati sapiente dicta optio sequi.
            </p>
          </div>
          <div className="w-full max-w-[520px] h-auto">
            <img
              src="/award.png"
              alt="award"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
