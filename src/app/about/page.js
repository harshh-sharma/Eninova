import React from 'react';

const LeftBox = ({ imgSrc, text }) => {
  return (
    <div className="w-full sm:w-[292px]  h-auto md-[281.14px] flex flex-col gap-10 md:my-[10px] py-[10px] justify-center items-center">
      <div>
        <img src={imgSrc} alt="image" className="w-[70px] sm:w-auto" />
      </div>
      <div>
        <p className="text-center text-[16px] sm:text-[20px] font-[700]">{text}</p>
      </div>
    </div>
  );
};

const RightBox = ({ imgSrc, text }) => {
  return (
    <div className="w-full md:w-[597px] h-auto flex flex-col md:flex-row gap-5 justify-center items-center my-5">
      <div className="w-full md:w-[245px] h-[200px] md:h-[300px]">
        <img src={imgSrc} alt="image" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-[294px] h-auto md:h-[300px]">
        <p className="leading-[30px] md:leading-[45px] text-[18px] md:text-[24px] font-[400]">{text}</p>
      </div>
    </div>
  );
};

const rightBoxData = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/aboutRight.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/aboutRight.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/aboutRight.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/aboutRight.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/aboutRight.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSrc: '/aboutRight.png',
  },
  // ...more data
];

const leftBoxData = [
  {
    imgSrc: '/aboutLeft1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imgSrc: '/aboutLeft2.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imgSrc: '/aboutLeft3.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imgSrc: '/aboutLeft4.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imgSrc: '/aboutLeft5.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imgSrc: '/aboutLeft6.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // ...more data
];

const page = () => {
  return (
    <div className="px-4 md:px-8">
      {/* Header */}
      <div className="h-auto my-[30px]">
        <p className="text-[32px] sm:text-[60px] font-[600] text-center text-[#172A44]">
          Advertise With <span>Us!!</span>
        </p>
        <p className="text-center text-[18px] sm:text-[32px] text-[#172A44]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellendus!
        </p>
      </div>

      {/* Placeholder section */}
      <div className="h-[300px] sm:h-[900px]  w-full"></div>

      {/* Key Benefits */}
      <div>
        <p className="text-[24px] sm:text-[40px] my-[10px] font-[600] text-center">
          Key <span>Benefits!!</span>
        </p>
        <div className="flex justify-center items-center py-[5px] my-[10px] md:my-[30px]">
          <p className="w-full sm:w-[1160px] h-auto text-center text-[16px] sm:text-[24px] font-[500] leading-[28px] sm:leading-[48px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi cumque dolor quibusdam harum? Mollitia, ipsa asperiores vel tempore veniam ea. Maxime nostrum aliquam distinctio libero laudantium tenetur aspernatur aliquid!
          </p>
        </div>

        {/* Boxes Section */}
        <div className="w-full flex flex-wrap justify-center gap-5">
          <div className="w-full md:w-[682px] flex flex-col items-center">
            {leftBoxData?.map((item, index) => (
              <LeftBox key={index} imgSrc={item?.imgSrc} text={item?.text} />
            ))}
               <p className='text-center underline text-[27.4px] text-[#53BC69]'>Know more</p>
          </div>
          <div className="w-full md:w-[682px] flex flex-col items-center rounded-[35px] shadow-xl mb-[10px]">
            {rightBoxData?.map((item, index) => (
              <RightBox key={index} imgSrc={item?.imgSrc} text={item?.text} />
            ))}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
