"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "contact" && value?.length > 10) return;

    setFormData((prev) => ({ ...prev, [id]: value }));

    // Real-time validation
    const newErrors = { ...errors };
    switch (id) {
      case "name":
        newErrors.name = value.trim() ? "" : "Name is required";
        break;
      case "contact":
        newErrors.contact = /^\d+$/.test(value) ? "" : "Contact must be a valid number";
        break;
      case "email":
        newErrors.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? ""
          : "Enter a valid email";
        break;
      case "location":
        newErrors.location = value.trim() ? "" : "Location is required";
        break;
      case "message":
        newErrors.message = value.trim() ? "" : "Message is required";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d+$/.test(formData.contact)) newErrors.contact = "Contact must be a valid number";
    if (
      !formData.email.match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      )
    )
      newErrors.email = "Enter a valid email";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data submitted: ", formData);
      // Add your form submission logic here
    }
  };

  return (
    <div
      className="relative flex justify-center items-center min-h-screen px-6 py-10"
      style={{
        backgroundImage: `url('/background-image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl w-[90%] sm:w-[800px] lg:w-[1160px] p-8 lg:p-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Have a <span className="text-[#19BC69]">Question?</span>
        </h2>
        <p className="text-gray-600 text-center text-lg lg:text-xl mb-8">
          Fill out the form below, and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-5 py-3 border rounded-lg focus:ring-2 ${
                  errors.name ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                } focus:outline-none text-gray-800 shadow-sm`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className={`w-full px-5 py-3 border rounded-lg focus:ring-2 ${
                  errors.contact ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                } focus:outline-none text-gray-800 shadow-sm`}
              />
              {errors.contact && (
                <p className="text-red-500 text-sm">{errors.contact}</p>
              )}
            </div>
          </div>

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
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-5 py-3 border rounded-lg focus:ring-2 ${
                  errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                } focus:outline-none text-gray-800 shadow-sm`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
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
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className={`w-full px-5 py-3 border rounded-lg focus:ring-2 ${
                  errors.location ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                } focus:outline-none text-gray-800 shadow-sm`}
              />
              {errors.location && (
                <p className="text-red-500 text-sm">{errors.location}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 font-semibold mb-2 text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your message"
              className={`w-full px-5 py-3 border rounded-lg focus:ring-2 ${
                errors.message ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
              } focus:outline-none text-gray-800 shadow-sm`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                Object.values(errors).every((error) => !error) &&
                Object.values(formData).every((value) => value.trim())
                  ? "bg-[#19BC69] text-white"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              } font-semibold px-6 py-3 rounded-lg shadow-md transition-all`}
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
