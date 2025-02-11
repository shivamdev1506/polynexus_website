import fullStackDevelopment from "../../assets/icons/full_stack_development.png";
import mobileDevelopment from "../../assets/icons/mobile_development.png";
import aiMachineLearning from "../../assets/icons/ai_machine_learning.png";
import dataEngineeringServices from "../../assets/icons/data_engineering_services.png";
import cloudSolutions from "../../assets/icons/cloud_solutions.png";
import seo from "../../assets/icons/seo.png";
import digital_marketing from "../../assets/icons/digital_marketing.png";
import homeAbout1 from "../../assets/images/home-about1.webp";
import homeAbout2 from "../../assets/images/home-about2.jpg";
import realEstate from "../../assets/icons/real-estate.png";
import enterprises from "../../assets/icons/enterprises.png";
import financeBanking from "../../assets/icons/finance-banking.png";
import education from "../../assets/icons/education.png";
import healthcare from "../../assets/icons/healthcare.png";
import hospitalityTourism from "../../assets/icons/hospitality-tourism.png";
import startups from "../../assets/icons//startups.png";
import smallMediumBusinesses from "../../assets/icons/small-medium-businesses.png";
import logisticsTransport from "../../assets/icons/logistics-transport.png";
import { Link } from "react-router-dom";
import MarqueeSection from "../../components/HomePage/MarqueeSection";

const HomePage = () => {
  return (
    <>
      {/* Main Section */}
      <div className="flex w-[85%] mx-auto my-[7.5rem] ">
        <div className="w-[70%]">
          <h2 className="text-[3rem]">
            Transforming complexities into seamless resolutions
          </h2>
          <p className="text-[1.3rem] mt-10 w-[90%]">
            Elevate your business with tailored full-stack, mobile, and cloud
            solutions, powered by AI, data engineering, and impactful SEO-driven
            digital marketing.
          </p>
          <div className="flex gap-10">
            <div
              className="w-[8.5rem] cursor-pointer border border-gray-500 p-3 mt-[4rem] text-center rounded-xl"
              onClick={() =>
                document
                  .getElementById("about-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>Learn More</p>
            </div>
            <div
              className="w-[12rem] cursor-pointer border border-gray-500 p-3 mt-[4rem] text-center rounded-xl"
              onClick={() =>
                document
                  .getElementById("services-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>Explore Our Services</p>
            </div>
          </div>

          <div className="mt-[8rem]">
            <div className="flex gap-5">
              <img src="partner1-logo.png" alt="Partner 1" className="h-12" />
              <img src="partner2-logo.png" alt="Partner 2" className="h-12" />
              <img src="partner3-logo.png" alt="Partner 3" className="h-12" />
              <img src="partner4-logo.png" alt="Partner 4" className="h-12" />
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-[50%] flex justify-center items-center ">
          <div>
            <div className="flex gap-5">
              <div className="w-[20rem] h-[15rem] bg-red-500 rounded-xl"></div>
              <div className="w-[10rem] h-[15rem] bg-red-500 rounded-xl"></div>
            </div>
            <div className="flex gap-5 mt-10">
              <div className="w-[10rem] h-[15rem] bg-red-500 rounded-xl"></div>
              <div className="w-[20rem] h-[15rem] bg-red-500 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-[6.5rem] " id="about-section">
        <div className="w-[85%] mx-auto flex  gap-16 items-center">
          {/* Left Side - Work Culture Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <img
              src={homeAbout1} // Replace with your image path
              alt="Collaborative Workspace"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <img
              src={homeAbout2} // Replace with your image path
              alt="Team Collaboration"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - About Company Information */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[2rem]  text-gray-800">Who are we?</h2>
            <p className="mt-6 text-lg text-gray-600">
              At PolyNexus, we specialize in transforming your business with
              innovative IT solutions. We blend cutting-edge technologies with a
              deep understanding of industry challenges to deliver tailored
              services and products that drive growth and efficiency.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl  text-gray-800">Our Expertise</h3>
              <p className="text-gray-600 text-lg mt-4">
                Our diverse team of experts excels in full-stack development,
                mobile app creation, AI and machine learning integration, cloud
                solutions, data engineering, and more.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl text-gray-800">Our Products</h3>
              <p className="text-gray-600 text-lg mt-4">
                We also offer tailored products such as Employee Management
                Systems, Real Estate CRM solutions, and Algorithmic Trading
                Platforms to empower businesses across various sectors.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <Link
                to="/about-us"
                className="inline-block px-8 py-3 rounded-full text-lg border border-gray-400"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Industries we Serve */}
      <div className="h-[115vh] ">
        <h3 className="text-[1.7rem] mb-[5rem] text-center pt-[3rem]">
          Industries & Companies We Empower
        </h3>

        <div className="grid grid-cols-3 gap-16">
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={realEstate} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">Real Estate</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={enterprises} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">Enterprises</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={financeBanking} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">Finance & Banking</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={education} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">Education</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={healthcare} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">Healthcare</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={hospitalityTourism} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">
              Hospitality & Tourism
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={startups} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">Startups</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={smallMediumBusinesses} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">
              Small and Medium-sized Businesses
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[10rem] h-[10rem] bg-green-100 flex items-center justify-center rounded-full">
              <img src={logisticsTransport} />
            </div>
            <p className="mt-2 text-[1rem] font-medium">
              Logistics & Transportation
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="w-[100%] h-[145vh] mx-auto px-[7rem] bg-gray-50"
        id="services-section"
      >
        <h2 className="text-center text-[1.7rem] text-gray-800 pt-[3rem] mb-[3rem]">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-between gap-[1.5rem] mb-[7rem]">
          {/* Full Stack Development Card */}
          <Link to="/services/full-stack-development">
            <div className="w-[25rem] h-[18rem] mb-10 rounded-lg shadow-xl shadow-gray-300 flex flex-col p-6 py-10 bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img
                src={fullStackDevelopment}
                alt="Full Stack Development"
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Full Stack Development
              </h3>
              <p className="text-gray-600">
                Build responsive, scalable, and modern websites and webapps
                tailored to your needs.
              </p>
              <Link
                to="/services/full-stack-development"
                className="mt-6 text-teal-600 "
              >
                Learn More
              </Link>
            </div>
          </Link>

          {/* Mobile Development Card */}
          <Link to="/services/mobile-development">
            <div className="w-[25rem] h-[18rem] rounded-lg shadow-xl shadow-gray-300 flex flex-col  p-6 py-10 bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img
                src={mobileDevelopment}
                alt="Mobile Development"
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-600">
                Create high-performance mobile applications for iOS and Android.
              </p>
              <Link
                to="/services/mobile-development"
                className="mt-6 text-teal-600 "
              >
                Learn More
              </Link>
            </div>
          </Link>

          {/* AI & Machine Learning Card */}
          <Link to="/services/ai-machine-learning">
            <div className="w-[25rem] h-[18rem] rounded-lg shadow-xl shadow-gray-300 flex flex-col p-6 py-10 bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img
                src={aiMachineLearning}
                alt="AI & Machine Learning"
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                AI & Machine Learning
              </h3>
              <p className="text-gray-600">
                Harness AI & ML to transform your data into valuable insights.
              </p>
              <Link
                to="/services/ai-machine-learning"
                className="mt-6 text-teal-600 "
              >
                Learn More
              </Link>
            </div>
          </Link>

          {/* Data Engineering Services Card */}
          <Link to="/services/data-engineering-services">
            <div className="w-[25rem] h-[18rem] mb-10 rounded-lg shadow-xl shadow-gray-300 flex flex-col p-6 py-10 bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img
                src={dataEngineeringServices}
                alt="Data Engineering"
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-600">
                Build scalable data infrastructure to process and store data.
              </p>
              <Link
                to="/services/data-engineering-services"
                className="mt-6 text-teal-600 "
              >
                Learn More
              </Link>
            </div>
          </Link>
          {/* Cloud Solutions Card */}
          <Link to="/services/cloud-solutions">
            <div className="w-[25rem] h-[18rem] rounded-lg shadow-xl shadow-gray-300 flex flex-col p-6 py-10 bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img
                src={cloudSolutions}
                alt="Cloud Solutions"
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">
                Leverage the cloud to scale your business and reduce costs.
              </p>
              <Link
                to="/services/cloud-solutions"
                className="mt-6 text-teal-600 "
              >
                Learn More
              </Link>
            </div>
          </Link>

          {/* SEO Card */}
          <Link to="/services/seo">
            <div className="w-[25rem] h-[18rem] rounded-lg shadow-xl shadow-gray-300 flex flex-col p-6 py-10 bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img src={seo} alt="SEO" className="w-14 h-14 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO</h3>
              <p className="text-gray-600">
                Improve your search engine rankings and drive organic traffic.
              </p>
              <Link to="/services/seo" className="mt-6 text-teal-600 ">
                Learn More
              </Link>
            </div>
          </Link>

          {/* Digital Marketing Card */}
          <Link to="/services/digital-marketing">
            <div className="w-[25rem] h-[18rem] rounded-lg shadow-xl shadow-gray-300 flex flex-col p-6 py-10 bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img
                src={digital_marketing}
                alt="Digital Marketing"
                className="w-14 h-14 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Drive targeted traffic and convert leads with digital marketing.
              </p>
              <Link
                to="/services/digital-marketing"
                className="mt-6 text-teal-600 "
              >
                Learn More
              </Link>
            </div>
          </Link>
        </div>
      </div>

      <MarqueeSection />

      {/* Products Section */}

      <div className="h-[70vh] ">
        <h3 className="text-[1.7rem] pt-[3rem] mb-[4rem] text-center text-gray-800 ">
          Our Products
        </h3>

        <div className="w-[100%] mx-auto flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-6 ">
            {/* Dodo */}
            <div className="w-[25rem] p-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-white">
              <img
                src="path-to-ems-image.jpg" // Replace with actual EMS image
                alt="Employee Management System"
                className="w-20 h-20 mb-6 object-cover rounded-full border-4 border-white"
              />
              <h4 className="text-xl font-semibold mb-4">Dodo</h4>
              <p className="text-sm text-opacity-80 mb-6">
                Streamline HR operations with our all-in-one employee management
                system. From onboarding to performance tracking, we&#39;ve got
                you covered.
              </p>
              <Link to="/products/employee-management-system">
                <p>Learn More</p>
              </Link>
            </div>

            {/* Horizon */}
            <div className="w-[25rem] p-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-white">
              <img
                src="path-to-crm-image.jpg" // Replace this with the actual image path for CRM
                alt="CRM"
                className="w-20 h-20 mb-6 object-cover rounded-full border-4 border-white"
              />
              <h4 className="text-xl font-semibold mb-4">Horizon</h4>
              <p className="text-sm text-opacity-80 mb-6">
                Our CRM solution helps businesses streamline processes, improve
                customer interactions, and boost overall productivity through
                powerful tools and insights.
              </p>
              <Link to="/products/customer-relationship-management">
                <p>Learn More</p>
              </Link>
            </div>

            {/* Algorithmic Trading Platform */}
            <div className="w-[25rem] p-8 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-white">
              <img
                src="path-to-trading-platform-image.jpg" // Replace with actual trading platform image
                alt="Algorithmic Trading Platform"
                className="w-20 h-20 mb-6 object-cover rounded-full border-4 border-white"
              />
              <h4 className="text-xl font-semibold mb-4">
                Algorithmic Trading Platform
              </h4>
              <p className="text-sm text-opacity-80 mb-6">
                Take your trading to the next level with our algorithmic trading
                platform. Automated strategies for smarter, faster trading
                decisions.
              </p>
              <Link to="/products/algorithmic-trading-platform">
                <p>Learn More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}

      <div className="h-[50vh] bg-gray-50">
        <h3 className="text-[1.7rem]  mb-[4rem] text-center pt-[2rem]">
          What People Say About Us
        </h3>

        <div className="flex gap-8 justify-center">
          {/* Testimonial 1 */}
          <div className="w-[25rem] p-6 border border-gray-200 rounded-lg shadow-lg bg-white flex items-center gap-6">
            <img
              src="path-to-image1.jpg"
              alt="Testimonial 1"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-[1rem] mb-2">John Doe</p>
              <p className="text-gray-600 text-[0.95rem]">
                &quot;The team exceeded our expectations! They provided
                innovative solutions that truly transformed our business.&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-[25rem] p-6 border border-gray-200 rounded-lg shadow-lg bg-white flex items-center gap-6">
            <img
              src="path-to-image2.jpg"
              alt="Testimonial 2"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-[1rem] mb-2">Sarah Lee</p>
              <p className="text-gray-600 text-[0.95rem]">
                &quot;A fantastic experience from start to finish. The solutions
                they provided were spot on for our needs.&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="w-[25rem] p-6 border border-gray-200 rounded-lg shadow-lg bg-white flex items-center gap-6">
            <img
              src="path-to-image3.jpg"
              alt="Testimonial 3"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-[1rem] mb-2">Michael Smith</p>
              <p className="text-gray-600 text-[0.95rem]">
                &quot;Great team to work with! Their professionalism and
                attention to detail made a huge difference in our project.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
