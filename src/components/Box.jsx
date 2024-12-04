import React from 'react'

const Box = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
    <div className="w-full max-w-[820px] bg-[rgb(134,190,234)] border-[4px] border-[#172A44] p-6 rounded-lg">
      <div className="w-full">
        {/* Heading */}
        <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] font-semibold leading-tight sm:leading-[40px] lg:leading-[56px] text-[#172A44] text-center">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        {/* Paragraph */}
        <p className="mt-4 text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-center text-[#172A44] leading-relaxed">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>
    </div>
  </div>
  )
}

export default Box