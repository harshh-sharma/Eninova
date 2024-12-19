import React from 'react'

const images = [
  {
    name:'/coursel1.png'
  },
  {
    name:'/coursel2.png'
  },
  {
    name:'/coursel3.png'
  },
  {
    name:'/coursel4.png'
  },
  {
    name:'/coursel5.png'
  },
  {
    name:'/coursel6.png'
  },
  {
    name:'/coursel1.png'
  },
  {
    name:'/coursel2.png'
  },
  {
    name:'/coursel3.png'
  },
  {
    name:'/coursel4.png'
  },
  {
    name:'/coursel5.png'
  },
  {
    name:'/coursel6.png'
  }
]

const client = () => {
  return (
    <div className='logos'>
      <h1 className="text-center text-[#172A44] my-10 font-semibold text-[32px] sm:text-[40px] md:text-[60px]">Our Clients</h1>
      <div className='border-b-[3px] border-[rgb(83,183,105)]'></div>
        <div className='logos-slide'>
          {
            images?.map((item,index) => <img src={item?.name} key={index} alt='img' className='mx-10' />)
          }
        </div>
        <div className='border-t-[3px] border-[rgb(83,183,105)]'></div>
    </div>
  )
}

export default client