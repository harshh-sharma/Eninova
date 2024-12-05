import Choose from "@/components/Projects/Choose";
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

                <div className="">
                  <div className="w-[94.64px] h-[44.94px] shadow-md">
                    <img
                      src="/head.png"
                      alt="image"
                      className="w-full h-full object "
                    />
                  </div>
                  <div className="">
                      <p className="text-[14px] leading-[23px] font-[400] text-[#172A44]">Lorem, ipsum.</p>
                  </div>
                </div>
                </div>

                <div>
                    <p className="text-[14px] leading-[23px] text-center text-[#172A44] font-[600]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
    )
}

const firstLevelCard = [
    {},
    {},
    {},
    {},
    {}
]

const secondLevelCard = [
    {},
    {},
    {},
    {}
]

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Top />
      <Choose />

      <div className="w-full max-w-[1160px] h-[710px] flex flex-col my-[70px] px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="h-[170px] flex flex-col sm:flex-row w-full gap-5">
          {/* Our Mission Section */}
          <div className="h-full w-full sm:w-[568px] flex justify-center items-center bg-[#172A44]">
            <h1 className="text-[40px] sm:text-[60px] font-semibold text-white text-center">
              Our Mission
            </h1>
          </div>
          {/* Our Vision Section */}
          <div className="h-full w-full sm:w-[568px] flex justify-center items-center border-l-[5px] border-r-[5px] border-t-[5px] border-[#172A44]">
            <h1 className="text-[40px] sm:text-[60px] font-semibold text-center text-[#172A44]">
              Our Vision
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full h-[548px] border-[#172A44] border-[5px] flex justify-center items-center">
          <div className="w-full sm:w-[1050px] h-[452px] flex flex-col justify-center items-center px-4">
            <h1 className="text-[24px] sm:text-[32px] text-[#172A44] text-center font-semibold leading-[52px]">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-[16px] sm:text-[20px] text-[#172A44] text-center font-medium leading-[35px]">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* another */}
      <div className="w-[1440px] h-[517px]  bg-[#F6F6F6] flex  justify-center items-center">
        <div className="w-[1365px] h-[429px]  flex flex-col justify-center items-center">
          <div className="flex gap-[50px] my-10 justify-center items-center">
            {firstLevelCard?.map(item => <Card/>)}
          </div>

          <div className="flex gap-[50px] my-10 justify-center items-center">
            {secondLevelCard?.map(item => <Card/>)}
            {/* <div className="w-[197.12px] h-[94.12px] border-2 border-green-500"></div> */}
          </div>
        </div>
      </div>

      {/* another */}
      <div className="w-full flex justify-center items-center">
      <div className="h-[694.29px] w-[1370px]  flex items-center justify-center flex-col">
            <p className="text-[60px] font-600 text-[#172A44] text-center">Why <span className="text-[#53BC69]">Us!!</span></p>

            <p className="text-[40px] font-600 text-[#172A44] text-center mt-5">Business growth through Innovation</p>

           <div className="w-[1160px] h-[133px] flex justify-center items-center">
           <p className="text-center text-[24px] font-500 leading-[48px] text-[#172A44] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sint cupiditate accusamus tempore, deleniti nemo ducimus. Labore voluptatum sequi molestiae!</p>
           </div>

           <div className="flex justify-center gap-5 my-[50px]">
            <div className="w-[291px] h-[265.4px]  flex justify-center items-center flex-col gap-5 px-2">
                <img src="/Ad.png" alt=""/>
                <p className="text-center font-700 text-[20px] text-[#172A44]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corporis optio! Exercitationem ipsum atque in adipisci. Sapiente odit ducimus repellendus?</p>
            </div>
            <div  className="w-[291px] h-[265.4px] flex justify-center items-center flex-col gap-5 px-2">
                <img src="/growth.png" alt="" />
                <p className="text-center font-700 text-[20px] text-[#172A44]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corporis optio! Exercitationem ipsum atque in adipisci. Sapiente odit ducimus repellendus?</p>
            </div>
            <div  className="w-[291px] h-[265.4px] flex justify-center items-center flex-col gap-5 px-2">
                <img src="/bag.png" alt="" />
                <p className="text-center font-700 text-[20px] text-[#172A44]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corporis optio! Exercitationem ipsum atque in adipisci. Sapiente odit ducimus repellendus?</p> 
            </div>

           </div>
</div>

      </div>

      {/* another */}
      <div className="w-[1154px] h-[1255px] border-2 border-black  flex flex-col justify-between">
          <div className="w-full h-[567px] border-red-400 border-2">
              <div className="w-[983px] h-[482px] border-2 border-yellow-500 relative bottom-0">

              </div>
          </div>
          <div className="w-full h-[567px] border-red-400">
          <div className="w-[983px] h-[482px] border-2 border-yellow-500  relative bottom-0">

</div>

</div>
      </div>
    </div>
  );
};

export default Page;
