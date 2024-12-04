import React from 'react'

const LastComp = () => {
  return (
    <div className="w-full h-[413px] bg-gradient-to-r from-[#53BC69] to-[#25826F] flex justify-center items-center p-4">
      <div className='w-full max-w-[906px] h-auto flex flex-col items-center'>
        <p className='text-[24px] sm:text-[32px] leading-[36px] sm:leading-[56px] text-white text-center font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>

        {/* Social Icons */}
        <div className='w-full flex justify-center my-5'>
          <div className='w-full sm:w-[449px] h-auto flex justify-between'>
            <img src="/linkedIn.png" alt="linkedin" className='w-[50px] md:w-[79px] h-[50px] md:h-[79px]' />
            <img src="/twitter (2).png" alt="twitter" className='w-[50px] md:w-[79px] h-[50px] md:h-[79px]' />
            <img src="/insta.png" alt="instagram" className='w-[50px] md:w-[79px] h-[50px] md:h-[79px]' />
          </div>
        </div>

        <p className='text-[24px] sm:text-[32px] leading-[36px] sm:leading-[56px] text-center text-white font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>
    </div>
  )
}

export default LastComp;
