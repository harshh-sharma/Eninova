import React from 'react'

const Top = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-[1179px] h-auto relative">
        {/* Title */}
        <div className="w-full flex justify-center items-center mb-4">
          <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-semibold text-[#172A44] text-center">
            Who we are!!
          </h1>
        </div>

        {/* Content Positioned at the Bottom */}
        <div className="w-full h-auto border-[4px] border-[#172A44] bg-[#A8D6FF] flex justify-center items-center p-4 rounded-xl">
          <div className="w-full max-w-[1058px] flex flex-col justify-center items-center space-y-4">
            <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.2] text-center font-semibold text-[#172A44]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-center text-[#172A44] leading-[1.6]">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
       
       

      </div>

  


    </div>
  )
}

export default Top