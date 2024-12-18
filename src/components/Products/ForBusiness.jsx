import React from 'react'
import Box from '../Box'
import Image from 'next/image'

const cardData = [
  {
    image: "/Picture1.png",
    text: `<p><span>Municipalities/ Government,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
  },
  {
    image: "/Picture2.png",
    text: `<p><span>Recreational,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
  },
  {
    image: "/Picture3.png",
    text: `<p><span>Commercial,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
  }
]

const Card = ({ image, text }) => {
  return (
    <div className='w-full md:w-[1160px] h-auto flex flex-col md:flex-row justify-center items-center gap-2 border-[4px] border-[#172A44] p-4 rounded-xl my-2'>
      <div className='w-full md:w-[220px] h-auto'>
        <Image
          src={image}
          alt="Product Image"
          width={848}
          height={364}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className='w-full md:w-[766px] h-auto flex justify-center items-start text-sm md:text-base p-4' dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

const ForBusiness = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <div className='w-full md:w-[1178px] h-auto flex flex-col justify-center items-center gap-[5px] p-4'>
        {/* <h1 className='text-[40px] sm:text-[60px] font-semibold text-center text-[#172A44] mb-6'>
          For Business
        </h1>
        <Box /> */}
        {cardData?.map((item, index) => (
          <Card key={index} image={item?.image} text={item?.text} />
        ))}
      </div>
    </div>
  )
}

export default ForBusiness
