import industryExpertiseIcon from "../../assets/icons/industry-expertise.png";
import tailoredStrategies from "../../assets/icons/tailored-strategies.png";
import cuttingEdgeTechnology from "../../assets/icons/cutting-edge-technology.png";
import agileDevelopment from "../../assets/icons/agile-development.png";
import twentyfourSeven from "../../assets/icons/24-7.png";
import provenTrackRecord from "../../assets/icons/proven-track-record.png";
import fullStackDevelopment from "../../assets/icons/full_stack_development.png";
import mobileDevelopment from "../../assets/icons/mobile_development.png";
import aiMachineLearning from "../../assets/icons/ai_machine_learning.png";
import dataEngineeringServices from "../../assets/icons/data_engineering_services.png";
import cloudSolutions from "../../assets/icons/cloud_solutions.png";
import seo from "../../assets/icons/seo.png";
import digitalMarketing from "../../assets/icons/digital_marketing.png";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Header Section */}
      <section className="relative bg-blue-500 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-[2.3rem]">
            Empowering Businesses with Cutting-Edge Technology
          </h1>
          <p className="mt-4 text-lg">
            We transform ideas into scalable solutions with expertise in
            development, cloud, AI, and beyond.
          </p>
          <button className="mt-6 bg-teal-600 text-white py-2 px-6 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300">
            <div className="flex items-center gap-1">
              <p>Get In Touch</p>
              <GoArrowUpRight />
            </div>
          </button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl mb-10">Our Mission & Vision</h2>
          <div className="md:flex md:space-x-20 space-y-8 md:space-y-0 items-center">
            {/* Left Side - Mission Statement + Tagline */}
            <div className="md:w-1/2 text-gray-700 space-y-6">
              <p className="text-blue-600 font-semibold italic text-lg">
                Innovate, Evolve, Succeed – Your Vision, Our Mission.
              </p>
              <p className="text-lg">
                At our core, we strive to empower businesses by delivering
                innovative, high-quality solutions. Our mission is to make
                technology accessible, scalable, and impactful.
              </p>
            </div>

            {/* Right Side - Vision Points */}
            <div className="space-y-6 md:w-1/2 text-gray-700">
              <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg">
                Innovation-Driven Solutions
              </div>
              <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg">
                Client-Centric Approach
              </div>
              <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg">
                Commitment to Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl mb-8">Our Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Industry Expertise",
                description:
                  "Our team has extensive experience delivering solutions across industries, from finance to healthcare.",
                icon: industryExpertiseIcon,
              },
              {
                title: "Tailored Strategies",
                description:
                  "We customize our approach to fit your business needs and goals, ensuring maximum impact.",
                icon: tailoredStrategies,
              },
              {
                title: "Cutting-Edge Technology",
                description:
                  "We leverage the latest technologies, including AI, machine learning, and cloud computing.",
                icon: cuttingEdgeTechnology,
              },
              {
                title: "Agile Development",
                description:
                  "Our agile processes ensure flexibility and faster delivery without compromising quality.",
                icon: agileDevelopment,
              },
              {
                title: "24/7 Support",
                description:
                  "Our dedicated support team is available around the clock to address your concerns.",
                icon: twentyfourSeven,
              },
              {
                title: "Proven Track Record",
                description:
                  "We’ve successfully implemented projects for startups, SMEs, and large enterprises.",
                icon: provenTrackRecord,
              },
            ].map((edge, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-lg text-center shadow-lg bg-white hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <img src={edge.icon} alt={edge.title} className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{edge.title}</h3>
                <p className="text-gray-600">{edge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Full-Stack Development",
                description:
                  "Robust front-to-back solutions tailored to your needs.",
                icon: fullStackDevelopment,
                link: "full-stack-development",
              },
              {
                title: "Mobile Development",
                description:
                  "Intuitive mobile experiences for Android and iOS.",
                icon: mobileDevelopment,
                link: "mobile-development",
              },
              {
                title: "Cloud Solutions",
                description: "Secure, scalable, and efficient cloud services.",
                icon: cloudSolutions,
                link: "cloud-solutions",
              },
              {
                title: "AI & ML Solutions",
                description: "AI-driven insights for smarter decision-making.",
                icon: aiMachineLearning,
                link: "ai-machine-learning-services",
              },
              {
                title: "Data Engineering",
                description: "Organized, optimized, and scalable data systems.",
                icon: dataEngineeringServices,
                link: "data-engineering-services",
              },
              {
                title: "SEO",
                description:
                  "Improve your search engine rankings and drive organic traffic.",
                icon: seo,
                link: "seo",
              },
              {
                title: "Digital Marketing",
                description:
                  "Boost your online presence with data-driven marketing.",
                icon: digitalMarketing,
                link: "digital-marketing",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-lg  shadow-lg bg-white hover:shadow-xl transition duration-300"
              >
                <div className="mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  to={`/services/${service.link}`}
                  className="inline-block mt-4  text-teal-600 "
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8 ">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dodo",
                description:
                  "Simplify workforce management with our intuitive platform.",
                link: "dodo",
              },
              {
                title: "Horizon",
                description: "Streamline customer relationships with ease.",
                link: "horizon",
              },
              {
                title: "Algorithmic Trading Platform",
                description:
                  "Optimize trading strategies with AI-powered automation.",
                link: "algorithmic-trading-platform",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-lg bg-white text-gray-800 shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <Link
                  to={`/products/${product.link}`}
                  className="inline-block mt-4  text-teal-600 "
                >
                  <div className="flex items-center gap-1">
                    <p>Explore {product.title}</p>
                    <GoArrowUpRight />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl mb-8 ">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Client A",
              "Client B",
              "Client C",
              "Client D",
              "Client E",
              "Client F",
              "Client G",
              "Client H",
            ].map((client, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center bg-teal-600 text-white">
        <h2 className="text-3xl mb-4">Let’s Innovate Together</h2>
        <Link to="/contact-us">
          <button className="bg-white text-teal-600 px-5 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 mt-6 shadow-lg">
            <div className="flex items-center gap-1">
              <p>Contact Us</p>
              <GoArrowUpRight />
            </div>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUsPage;
