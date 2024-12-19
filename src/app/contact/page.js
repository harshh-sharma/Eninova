import Contact from '@/components/Home/Contact'
import ContactForm from '@/components/ContactForm'
import GetInTouch from '@/components/Home/GetInTouch'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactForm/>
        <GetInTouch/>
        
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
  <div className="w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-[url('/groupImg.png')] bg-cover bg-center"></div>
</div>
    </div>
  )
}

export default page