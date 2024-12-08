import React from "react";

const ContactForm = () => {
  return (
    <div
      className="relative flex justify-center items-center min-h-screen px-6 py-10"
      style={{
        backgroundImage: `url('/background-image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div> */}

      {/* Form Container */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl w-[90%] sm:w-[800px] lg:w-[1160px] p-8 lg:p-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Have a <span className="text-[#19BC69]">Question?</span>
        </h2>
        <p className="text-gray-600 text-center text-lg lg:text-xl mb-8">
          Fill out the form below, and we’ll get back to you shortly.
        </p>

        <form className="space-y-6">
          {/* Row 1: Name and Contact */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="text-gray-700 font-semibold mb-2 text-lg"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="contact"
                className="text-gray-700 font-semibold mb-2 text-lg"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your contact number"
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
              />
            </div>
          </div>

          {/* Row 2: Email and Location */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold mb-2 text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="location"
                className="text-gray-700 font-semibold mb-2 text-lg"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
              />
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 font-semibold mb-2 text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#19BC69] text-white font-semibold px-6 py-3 rounded-lg shadow-md  focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
