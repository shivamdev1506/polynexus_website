import { GoArrowUpRight } from "react-icons/go";
import fullStackDevelopment from "../../assets/icons/full_stack_development.png";
import mobileDevelopment from "../../assets/icons/mobile_development.png";
import aiMachineLearning from "../../assets/icons/ai_machine_learning.png";
import dataEngineeringServices from "../../assets/icons/data_engineering_services.png";
import cloudSolutions from "../../assets/icons/cloud_solutions.png";
import seo from "../../assets/icons/seo.png";
import digitalMarketing from "../../assets/icons/digital_marketing.png";

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end development for web applications, including front-end, back-end, and database architecture.",
    icon: fullStackDevelopment,
  },
  {
    title: "Mobile Development",
    description:
      "Custom mobile apps for iOS and Android, crafted to provide seamless user experiences.",
    icon: mobileDevelopment,
  },
  {
    title: "AI & Machine Learning Solutions",
    description:
      "Harnessing the power of AI & ML to deliver smart, data-driven insights and automation.",
    icon: aiMachineLearning,
  },
  {
    title: "Data Engineering Services",
    description:
      "Optimizing data architecture and pipelines to drive better analytics and decision-making.",
    icon: dataEngineeringServices,
  },
  {
    title: "Cloud Solutions",
    description:
      "Designing scalable cloud infrastructures and solutions for improved efficiency and flexibility.",
    icon: cloudSolutions,
  },
  {
    title: "SEO",
    description:
      "Boosting your website’s visibility through targeted SEO strategies and optimization.",
    icon: seo,
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing services to enhance online presence and drive growth.",
    icon: digitalMarketing,
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-[2.3rem]">Innovating Your Digital Future</h1>
          <p className="mt-4 text-lg">
            We provide cutting-edge solutions across industries, ensuring
            growth, efficiency, and success.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto ">
          <h2 className="text-3xl text-gray-800">
            Our Expertise in Technology
          </h2>
          <p className="mt-4 text-lg mb-12 text-gray-600">
            We offer a broad range of services tailored to help you grow and
            succeed in the digital world.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-100"
              >
                <div className="mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 text-teal-600 hover:text-teal-800">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl  text-gray-800">What Our Clients Say</h2>
          <div className="flex justify-center gap-10">
            <div className="mt-8 flex justify-center">
              <div className="max-w-lg p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">
                  This company transformed our business with their innovative
                  solutions. Highly recommend!
                </p>
                <span className="block mt-4 text-teal-500 font-semibold">
                  Jane Doe
                </span>
                <span className="text-sm text-gray-500">
                  CEO, Example Corp.
                </span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="max-w-lg p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">
                  This company transformed our business with their innovative
                  solutions. Highly recommend!
                </p>
                <span className="block mt-4 text-teal-500 font-semibold">
                  Jane Doe
                </span>
                <span className="text-sm text-gray-500">
                  CEO, Example Corp.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-semibold">
          Ready to Transform Your Digital Experience?
        </h2>
        <p className="mt-4 text-lg">
          Let’s discuss how our services can elevate your business.
        </p>
        <button className=" mt-6 bg-white text-teal-600 py-2 px-6 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300">
          <div className="flex items-center gap-1">
            <p>Talk to us</p>
            <GoArrowUpRight />
          </div>
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
