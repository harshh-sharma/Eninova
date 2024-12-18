import React from 'react';

const Box = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div className="w-full max-w-[1178px] bg-[rgb(134,190,234)] border-[4px] border-[#172A44] p-6 sm:p-8 lg:p-12 rounded-lg">
        <div className="w-full">
          {/* Heading */}
          <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5] text-[#172A44] text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          {/* Paragraph */}
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-center text-[#172A44] leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
