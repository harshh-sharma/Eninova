import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";
import Image from "next/image";
import ClientCarousel from "@/components/client";
import OurExperts from "@/components/Experts";
import Contact from "@/components/Contact";
import GetInTouch from "@/components/GetInTouch";
import LastComp from "@/components/lastComp";

export default function Home() {
  const features = [
    {
      feature:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, voluptatem.",
      icon: <RiBattery2ChargeFill className="w-6 h-6" />,
    },
    {
      feature: "Seamless and fast Wi-Fi connectivity.",
      icon: <FaWifi className="w-6 h-6" />,
    },
    {
      feature: "High-definition TV compatibility.",
      icon: <FiTv className="w-6 h-6" />,
    },
    {
      feature: "Crystal clear audio with powerful speakers.",
      icon: <HiSpeakerWave className="w-6 h-6" />,
    },
    {
      feature: "Advanced power management system.",
      icon: <RiBattery2ChargeFill className="w-6 h-6" />,
    },
    {
      feature: "User-friendly interface for all users.",
      icon: <FaWifi className="w-6 h-6" />,
    },
    {
      feature: "High-performance processing capabilities.",
      icon: <FiTv className="w-6 h-6" />,
    },
    {
      feature: "Portable and lightweight design.",
      icon: <HiSpeakerWave className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[rgb(255,255,255)]">
      {/* Title */}
  
  {/* features section */}
      <div className="text-center py-12">
        <p
          className="text-4xl font-semibold leading-[43.84px] text-gray-800"
          style={{ fontFamily: "Noto Sans Lao SemiCondensed, sans-serif" }}
        >
          Features
        </p>
      </div>

      {/* Features Container */}

      <div
  className="w-full md:w-[1440px] h-[633px] flex justify-center items-center"
  style={{
    background: "linear-gradient(180deg, #FFFFFF 5%, rgba(255, 255, 255, 0) 23.4%, rgba(255, 255, 255, 0) 80.4%, #FFFFFF 95%)",
  }}
>
  <div className="relative w-full md:w-[825px] h-[580px] overflow-y-auto scrollbar-none">
    {/* Top Blur */}
    <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none z-10"></div>

    {/* Scrollable Content */}
    <div className="relative w-full h-full overflow-y-auto scrollbar-none">
      {features?.map((item, index) => (
        <div
          key={index}
          className="w-full md:w-[825px] h-[120px] flex justify-center items-center rounded-[30px] mb-4"
        >
          <div className="w-full md:w-[763px] h-[91px] border-2 border-[#182C47] rounded-[30px] flex justify-center items-center">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[rgb(83,188,94)] text-white rounded-full relative left-[-35px]">
              {item.icon}
            </div>
            <div className="w-[666px] h-[49px] px-4">
              <p className="text-[16px] sm:text-[20px] leading-[24.76px] font-[600] text-[#182C47]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde molestias mollitia cupiditate optio odio sapiente!
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Blur */}
    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10"></div>
  </div>
</div>



      {/* Additional Content (Text + Image) */}
      <div className="mt-12 text-center px-4">
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet,. Facere, expedita.
        </p>
        <img
          src="/featureImage.png"
          alt="Feature"
          className="w-full max-w-[600px] rounded-lg shadow-md"
        />
      </div>

      <p className="text-center underline py-5 font-semibold text-[rgb(83,188,94)]">
        Know more
      </p>

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
            <img
              src="/featureImage3.png"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-[326px] h-[550px] sm:h-[400px]">
            <img
              src="/featureImage2.png"
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Second Row of Images (2 images) */}
        <div className="flex flex-wrap gap-5 my-5">
          <div className="w-[736px] h-[281px] sm:h-[200px]">
            <img
              src="/featureImage3.png"
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-[326px] h-[281px] sm:h-[200px]">
            <img
              src="/featureImage4.png"
              alt="Image 4"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Third Row (1 Image Spanning 2 Columns) */}
        <div className="w-full h-[214px] col-span-2">
          <img
            src="/featureImage5.png"
            alt="Image 5"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <p className="text-center underline py-5 font-semibold text-[rgb(83,188,94)]">
        Know more
      </p>

      {/* cross shape */}
      <div className="w-full h-[700px]  mt-[100px]">
        <div className="h-[700px] flex bg-[url('https://tse3.mm.bing.net/th?id=OIP.ZwpSwAlHaczkzbFEKCKCVwHaEQ&pid=Api&P=0&h=180')] bg-cover bg-center filter  relative overflow-hidden ">
          <div className="w-[420px] md:w-[820px] h-[300px] flex justify-center items-center relative top-52 md:left-[12%]">
            <div className="w-[654px] h-[224px] bg-[rgb(255,242,188)] flex justify-center items-center px-5 rounded-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
          </div>

          <Image
            src="/shapeInImage.png"
            width={430}
            height={430}
            className="absolute top-36 left-[60%] z-50"
            style={{ filter: "none" }}
            
          />
           <span className="bg-white text-[#182C47] absolute bottom-40 right-[200px] z-[500] px-5 py-2 border-[3px] border-[#182C47] rounded-[7px] text-[20px] font-[600]">Know more</span>

          {/* Isolated Shape Div */}
          <div
            className="shape w-[486px] md:w-[786px] bg-[#172A44] bg-opacity-50 absolute right-0 top-0 h-full flex justify-center items-center z-[-10px]"
            style={{ filter: "none" }}
          ></div>
        </div>

        <div className="w-full max-w-[90%] md:max-w-[820px] h-auto flex flex-col justify-center items-center mx-auto my-10 relative -mt-12 md:-mt-24 z-20 bg-[#86BEED] border-[2px] md:border-[4px] border-[#172A44] rounded-md shadow-lg">
  <div className="w-full px-5 py-8">
    <p className="text-[20px] md:text-[28px] lg:text-[32px] font-bold text-center text-[#172A44] mb-4">
      Lorem ipsum dolor sit amet.
    </p>
    <p className="text-[14px] sm:text-[16px] md:text-[20px] font-medium leading-relaxed text-center text-[#172A44]">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptas
      ipsum ullam exercitationem cupiditate sapiente error eum sunt eos at.
    </p>
    <div className="flex justify-center items-center mt-6">
      <button className="bg-white px-6 md:px-10 py-4 md:py-5 text-[16px] md:text-[20px] lg:text-[22px] font-semibold border-[2px] md:border-[3px] rounded-md border-[#172A44] hover:bg-[#172A44] hover:text-white transition-all">
        Connect with us
      </button>
    </div>
  </div>
</div>

      </div>

      {/* green container */}
      <div  className="w-full h-auto relative pt-[100px] md:pt-[250px]" style={{
  background: `
    radial-gradient(126.28% 126.28% at 50% 50%, #53BC69 0%, #265630 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0) 54.54%, #FFFFFF 100%)
  `
}}>
  <div className="w-full max-w-[1280px] h-auto flex justify-center items-center flex-col mx-auto px-4">
    {/* Title Section */}
    <div className="w-full max-w-[920px] h-auto text-center mb-10">
      <h1
        className="text-[36px] md:text-[48px] lg:text-[60px] text-white leading-tight"
        style={{
          fontFamily: "Noto Sans Lao SemiCondensed",
          textUnderlinePosition: "from-font",
        }}
      >
        Conventional Vs Our Products
      </h1>
      <p className="mt-4 text-white font-[300] text-[18px] md:text-[24px] lg:text-[32px] leading-[1.5]">
        Lorem ipsum dolor sit amet consectetur{" "}
        <span className="font-[500]">,</span>
      </p>
    </div>

    {/* Image Section */}
    <div
      className="h-[200px] sm:h-[300px] md:h-[500px] lg:h-[731px] w-full bg-[url('/greenImage.png')] bg-cover bg-center"
    ></div>
  </div>

  {/* Expert Opinion Section */}
  <div className="w-full flex justify-center mt-[50px] px-4">
    <div className="w-full max-w-[1159px] h-auto flex flex-col justify-center items-center">
      {/* Title */}
      <div className="w-full max-w-[920px] h-auto text-center mb-10">
        <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold text-white leading-tight">
          Expert Opinion
        </h1>
        <p className="mt-4 text-white font-semibold text-[18px] md:text-[24px] lg:text-[32px] leading-[1.5]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Row 1 */}
        <div className="h-[200px] sm:h-[240px] md:h-[320px] w-full flex justify-center items-center">
          <img
            src="/expertOpinion1.png"
            alt="Image 1"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="h-[200px] sm:h-[240px] md:h-[320px] w-full flex justify-center items-center">
          <img
            src="/expertOpinion2.png"
            alt="Image 2"
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        {/* Row 2 */}
        <div className="h-[200px] sm:h-[240px] md:h-[320px] w-full flex justify-center items-center">
          <img
            src="/expertOpinion3.png"
            alt="Image 3"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="h-[200px] sm:h-[240px] md:h-[320px] w-full flex justify-center items-center">
          <img
            src="/expertOpinion4.png"
            alt="Image 4"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</div>


<ClientCarousel/>

{/* another component */}
<div className="w-full max-w-[90%] lg:max-w-[1303px] mx-auto h-auto flex flex-col">
  {/* Background Section */}
  <div 
    className="w-full h-[200px] sm:h-[300px] lg:h-[330px] bg-[url('https://images.pexels.com/photos/7527874/pexels-photo-7527874.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center"
  >
    {/* Content inside the background (if needed) */}
  </div>

  {/* Text Section */}
  <div className="flex flex-col items-center justify-center px-4 py-8">
    <div className="w-full max-w-[873px]">
      {/* Heading */}
      <p className="text-center text-[20px] sm:text-[28px] lg:text-[32px] text-[#172A44] leading-tight sm:leading-[40px] lg:leading-[56px] font-semibold">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      
      {/* Paragraph */}
      <p className="text-center text-[#172A44] leading-relaxed text-[14px] sm:text-[16px] lg:text-[20px] mt-4">
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      </p>
    </div>
  </div>
</div>


{/* image and box */}
<div className="w-full h-auto relative">
  {/* Content Section */}
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

  {/* Background Image Section */}
  <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] bg-[url('/group.png')] bg-cover bg-bottom">
    {/* Content can be added here if needed */}
  </div>
</div>


{/* blogs */}
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


{/* About us */}
<div className="w-full flex justify-center items-center px-4">
  <div className="w-full max-w-[1118px] h-auto ">
    {/* Heading */}
    <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] leading-[40px] sm:leading-[60px] lg:leading-[60px] text-center font-[600] text-[#172A44]">
      About Us
    </h1>

    {/* Box */}
    <div className="flex justify-center w-full my-8 sm:my-[80px]">
      <div className="w-full max-w-[820px] h-auto flex justify-center items-center bg-[rgb(134,190,234)] border-[4px] border-[#172A44] p-6 rounded-lg">
        <div className="w-full max-w-[737px]">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[600] leading-[40px] sm:leading-[48px] lg:leading-[56px] text-[#172A44] text-center">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-[500] text-center text-[#172A44] leading-[30px] sm:leading-[35px] lg:leading-[35px]">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex justify-between flex-wrap gap-4 md:gap-8 my-8">
      <div className="w-full sm:w-[508px] h-auto sm:h-[515px] bg-[url('/about1.png')] bg-cover bg-center rounded-lg"></div>
      <div className="w-full sm:w-[508px] h-auto sm:h-[515px] bg-[url('/about2.png')] bg-cover bg-center border-2 rounded-lg"></div>
    </div>

    {/* Additional Sections */}
    <OurExperts />
    <Contact />
    <GetInTouch/>
  </div>
  
</div>
<LastComp/>



    </div>
  );
}
