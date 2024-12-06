import React from 'react'

const BlogCard = () => {
  return (
    <div className="w-full max-w-[983px] h-auto md:h-[640px] flex flex-col justify-center items-center relative mx-auto my-5">
      <div className="w-full h-[500px] bg-[#A8DCFF] flex flex-col justify-center items-center py-6 md:h-[451px] border-[3px] md:border-[5px] border-[#172A44]">
        {/* Top Image */}
        <div className="w-[90%] max-w-[852px] h-auto md:h-[300px] absolute -top-16 md:-top-8">
          <img
            src="/featureImage.png"
            alt="feature"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-[852px] mt-[100px] md:mt-[230px] px-4 pb-[20px]">
          <h1 className="text-[24px] md:text-[32px] font-[600] leading-[1.2] text-center text-[#172A44]">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-center text-[16px] md:text-[19px] leading-[1.5] md:leading-[35px] font-[500] text-[#172A44] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <div className='flex justify-center items-center py-[5px] md:pb-10'>
          <button className='text-[#53BC69] text-[14px] md:text-[17px] font-[600] text-center underline'>Go to Project</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div className='flex flex-col'>
       <h1 className="text-[#172A44] text-[60px] text-center font-semibold mb-[20px] drop-shadow-lg">
  Blog
</h1>

    <div className="w-full min-h-screen flex flex-col justify-center items-center  space-y-[100px] md:space-y-[10px] py-6 px-4">
      
      {/* Adding spacing between BlogCards */}
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
    </div>
  )
}

export default Page
