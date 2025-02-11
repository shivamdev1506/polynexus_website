import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = { ...errors };

    // Validate form fields
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Please enter a valid email";
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    if (!formData.company)
      validationErrors.company = "Company name is required";
    if (!formData.services)
      validationErrors.services = "Please select a service or product";
    if (!formData.message) validationErrors.message = "Message is required";

    setErrors(validationErrors);
    isValid = Object.values(validationErrors).every((error) => error === "");

    if (isValid) {
      console.log("Form submitted:", formData);
      alert("Your message has been submitted!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-gray-50 pb-[4rem]">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Let&#39;s work together!</h1>
        <p className="mt-4 text-lg">
          Let us help you become even greater at what you do. Fill out the form
          and we will get back to you in the next 24 hours.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white p-[5rem] px-[8rem] mx-auto w-full lg:w-[80%] rounded-lg shadow-lg b-20">
        <div className="flex  gap-[13rem]">
          {/* Contact Form */}
          <div className="w-[50%]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your company name"
                />
                {errors.company && (
                  <p className="mt-1 text-red-500 text-sm">{errors.company}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="services"
                  className="block text-lg font-semibold text-gray-700"
                >
                  What services or products are you looking for?
                </label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Choose from a list here
                  </option>
                  <optgroup label="Services">
                    <option value="fullStackDevelopment">
                      Full Stack Development
                    </option>
                    <option value="mobileDev">Mobile Development</option>
                    <option value="cloud">Cloud</option>
                    <option value="aiMl">AI/ML</option>
                    <option value="dataEngineering">Data Engineering</option>
                    <option value="seo">SEO</option>
                    <option value="digitalMarketing">Digital Marketing</option>
                  </optgroup>
                  <optgroup label="Products">
                    <option value="dodo">Dodo</option>
                    <option value="horizon">Horizon</option>
                    <option value="algorithmicTradingPlatform">
                      Algorithmic Trading Platform
                    </option>
                  </optgroup>
                </select>
                {errors.services && (
                  <p className="mt-1 text-red-500 text-sm">{errors.services}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Write your message here"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-col mt-2">
            <div className="flex items-center space-x-4">
              <MdEmail className="w-8 h-8 " />
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  Email Support
                </p>
              </div>
            </div>
            <a
              href="mailto:info@company.com"
              className="text-lg text-blue-600 hover:underline ml-[3rem]"
            >
              polynexus@gmail.com
            </a>
            <div className="flex items-center space-x-4 mt-[2rem]">
              <MdCall className="w-8 h-8 0" />
              <p className="text-lg font-semibold text-gray-700">Call Us</p>
            </div>
            <p className="text-lg text-gray-700 ml-[3rem]">+91 7218123495</p>
            <div className="mt-[3rem] ml-[3rem] flex gap-3">
              <img src={linkedin} className="w-8 h-8 cursor-pointer" />
              <img src={twitter} className="w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
