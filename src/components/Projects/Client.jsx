import React from "react";

const Client = () => {
  return (
    <div>
      {/* another section */}
      <div className="hidden md:block">
        <div className="w-[1154px] h-[565px]  flex relative">
          {/* Red Div */}
          <div className="w-[510px] h-[510px]  absolute z-10">
            <img
              src="/profile1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Yellow Div */}
          <div className="w-[983px] h-[428px] bg-[#172A44] absolute bottom-0 right-0 z-0 px-5 flex justify-end p-[30px]">
            <div className="w-[557px] h-[342px]  flex flex-col justify-center items-center">
              <h1 className="text-[32px] font-semibold text-white ">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-[20px] font-light text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[1154px] h-[565px] flex relative my-[100px]">
          {/* Red Div */}
          <div className="w-[510px] h-[510px]  absolute right-0 z-10">
            <img
              src="/profile2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Yellow Div */}
          <div className="w-[983px] h-[428px] bg-[#172A44] absolute bottom-0 left-0 z-0 p-[30px] ">
            <div className="w-[557px] h-[342px] flex justify-center items-center flex-col py-[5px]">
              <h1 className="text-[32px] font-600 text-white">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-[20px] font-400 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="w-full h-auto flex flex-col relative">
          {/* Red Div */}
          <div className="w-full h-[250px] sm:h-[300px] mb-4 relative">
            <img
              src="/profile1.png"
              alt="Profile 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Yellow Div */}
          <div className="w-full bg-[#172A44] p-6 flex flex-col items-center text-white">
            <div className="max-w-[557px] w-full">
              <h1 className="text-[28px] sm:text-[32px] font-semibold mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-[16px] sm:text-[20px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col my-[100px]">
          {/* Red Div */}
          <div className="w-full h-[250px] sm:h-[300px] mb-4 relative">
            <img
              src="/profile2.png"
              alt="Profile 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Yellow Div */}
          <div className="w-full bg-[#172A44] p-6 flex flex-col items-center text-white">
            <div className="max-w-[557px] w-full">
              <h1 className="text-[28px] sm:text-[32px] font-semibold mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-[16px] sm:text-[20px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
