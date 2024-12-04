import React from "react";

const GetInTouch = () => {
  const contactDetails = [
    {
      image: "https://img.icons8.com/ios-filled/50/000000/home.png",
      title: "Address",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: "https://img.icons8.com/ios-filled/50/000000/phone.png",
      title: "Phone",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: "https://img.icons8.com/ios-filled/50/000000/email.png",
      title: "Email",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="w-full bg-transparent p-10">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <p className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold text-gray-800">
          <span>Get</span> In Touch
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="w-full flex flex-col justify-center items-center">
        {contactDetails?.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[1016px] h-auto  flex gap-6 justify-start items-center mx-auto p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {/* Icon */}
            <div className="flex justify-center items-center">
              <img
                src={item?.image}
                alt={item?.title}
                className="w-6 h-6 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {item?.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center my-10">
  <div
    className="w-full max-w-[958px] h-[264px] bg-[url('/locationImage.png')] bg-cover bg-center"
  ></div>

<button className="w-full sm:max-w-[300px] md:max-w-[335px] h-[82px] border-4 border-[#172A44] my-7 text-center text-[#172A44] text-[20px] font-[600px] leading-[32.9px] hover:bg-[#172A44] hover:text-white transition-all duration-300">
  Know more
</button>

</div>

    </div>
  );
};

export default GetInTouch;
