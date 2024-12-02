import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";
import Image from "next/image";

export default function Home() {
  const features = [
    { feature: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, voluptatem.", icon: <RiBattery2ChargeFill className="w-6 h-6" /> },
    { feature: "Seamless and fast Wi-Fi connectivity.", icon: <FaWifi className="w-6 h-6" /> },
    { feature: "High-definition TV compatibility.", icon: <FiTv className="w-6 h-6" /> },
    { feature: "Crystal clear audio with powerful speakers.", icon: <HiSpeakerWave className="w-6 h-6" /> },
    { feature: "Advanced power management system.", icon: <RiBattery2ChargeFill className="w-6 h-6" /> },
    { feature: "User-friendly interface for all users.", icon: <FaWifi className="w-6 h-6" /> },
    { feature: "High-performance processing capabilities.", icon: <FiTv className="w-6 h-6" /> },
    { feature: "Portable and lightweight design.", icon: <HiSpeakerWave className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[rgb(255,255,255)]">
      {/* Title */}
      <div className="text-center py-12">
        <p className="text-4xl font-semibold leading-[43.84px] text-gray-800" style={{ fontFamily: "Noto Sans Lao SemiCondensed, sans-serif" }}>
          Features
        </p>
      </div>

      {/* Features Container */}
      <div className="flex flex-col justify-center items-center w-full max-w-[825px]">
        <div className="overflow-hidden w-full">
          <div className="flex flex-col gap-4 overflow-y-auto scrollbar-none p-4 max-h-[580px] shadow-lg rounded-xl">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 shadow-md transition-all duration-300 transform bg-white border-2 border-gray-800 rounded-full "
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-[rgb(83,188,94)] text-white rounded-full relative left-[-30px]">
                  {item.icon}
                </div>

                {/* Feature Text */}
                <p className="text-lg font-medium text-gray-800">{item.feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Content (Text + Image) */}
      <div className="mt-12 text-center px-4">
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet,. Facere, expedita.
        </p>
        <img src="/featureImage.png" alt="Feature" className="w-full max-w-[600px] rounded-lg shadow-md" />
      </div>
      
      <p className="text-center underline py-5 font-semibold text-[rgb(83,188,94)]">Know more</p>

      {/* Who is it for? Section */}
      <div className="text-center py-12 px-4">
        <p className="text-2xl font-semibold text-gray-800">Who is it for?</p>
        <p className="text-lg text-gray-700 mt-4 mb-6">
          This product is designed for tech enthusiasts, home entertainment
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="w-full max-w-[1128px] px-5 md:px-5">
        {/* First Row of Images (2 images) */}
        <div className="flex flex-wrap gap-5 my-5">
            
        <div className="w-[736px] h-[550px] sm:h-[400px]">
          <img src="/featureImage3.png" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-[326px] h-[550px] sm:h-[400px]">
          <img src="/featureImage2.png" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>

        </div>

        {/* Second Row of Images (2 images) */}
        <div className="flex flex-wrap gap-5 my-5">
         
        <div className="w-[736px] h-[281px] sm:h-[200px]">
          <img src="/featureImage3.png" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-[326px] h-[281px] sm:h-[200px]">
          <img src="/featureImage4.png" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>

        </div>

        {/* Third Row (1 Image Spanning 2 Columns) */}
        <div className="w-full h-[214px] col-span-2">
          <img src="/featureImage5.png" alt="Image 5" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>

      <p className="text-center underline py-5 font-semibold text-[rgb(83,188,94)]">Know more</p>
      
      {/* cross shape */}
      <div 
  className="w-full h-[880px] border-2 border-black mt-[100px]"
>
  <div 
    className="h-[700px] border-2 flex bg-[url('https://tse3.mm.bing.net/th?id=OIP.ZwpSwAlHaczkzbFEKCKCVwHaEQ&pid=Api&P=0&h=180')] bg-cover bg-center filter  relative overflow-hidden "
  >

<div className="w-[420px] md:w-[820px] h-[300px] flex justify-center items-center relative top-52 md:left-[12%]">
    <div className="w-[654px] h-[224px] bg-[rgb(255,242,188)] flex justify-center items-center px-5 rounded-sm">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
    </div>
</div>
   
   <Image src='/shapeInImage.png' 
      width={430}
      height={430}
      className="absolute top-36 left-[60%] z-50"
      style={{filter:"none"}}
      />

    {/* Isolated Shape Div */}
    <div 
      className="shape w-[486px] md:w-[786px] bg-[#172A44] bg-opacity-50 absolute right-0 top-0 h-full flex justify-center items-center z-[-10px]"
      style={{ filter: "none" }}
    >
    </div>
  </div>
</div>



    </div>
  );
}
