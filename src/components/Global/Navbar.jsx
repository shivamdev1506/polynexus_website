import { Link } from "react-router-dom";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import down from "../../assets/icons/down.png";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-white">
      <Link to="/">
        <h1 className="text-2xl cursor-pointer">POLYNEXUS</h1>
      </Link>
      <div className="flex gap-10">
        <Link to="/about-us">
          <p className="text-lg cursor-pointer">About Us</p>
        </Link>

        {/* Products with Hover Dropdown */}
        <div className="relative group cursor-pointer">
          <Link
            to="/products"
            className="flex justify-center items-center gap-[0.3rem]"
          >
            <p className="text-lg">Products</p>
            <img
              src={down}
              className="w-4 h-4 mt-[0.2rem] transition-transform duration-300 group-hover:rotate-180"
            />
          </Link>

          {/* Dropdown */}
          <div className="absolute top-9 left-0 w-[20rem] bg-black text-white z-50 rounded-[0.3rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {/* Triangle */}
            <div className="absolute top-[-0.5rem] left-[12%] transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-black"></div>
            <div className="p-5">
              <h2 className="text-xl mb-4">Explore Our Products</h2>
              <ul>
                <li>
                  <Link to="/products/dodo" className="hover:underline">
                    Dodo
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/products/horizon" className="hover:underline">
                    Horizon
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/products/algorithmic-trading-platform"
                    className="hover:underline"
                  >
                    Algorithmic Trading Platform
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services with Hover Dropdown */}
        <div className="relative group cursor-pointer">
          <Link
            to="/services"
            className="flex justify-center items-center gap-[0.3rem]"
          >
            <p className="text-lg">Services</p>
            <img
              src={down}
              className="w-4 h-4 mt-[0.2rem] transition-transform duration-300 group-hover:rotate-180"
            />
          </Link>

          {/* Dropdown */}
          <div className="absolute top-9 left-0 w-[20rem] bg-black text-white z-50 rounded-[0.3rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {/* Triangle */}
            <div className="absolute top-[-0.5rem] left-[10%] transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-black"></div>
            <div className="p-5">
              <h2 className="text-xl mb-4">Explore Our Services</h2>
              <ul>
                <li>
                  <Link
                    to="/services/full-stack-development"
                    className="hover:underline"
                  >
                    Full Stack Development
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/services/mobile-development"
                    className="hover:underline"
                  >
                    Mobile Development
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/services/ai-machine-learning-services"
                    className="hover:underline"
                  >
                    AI & Machine Learning Solutions
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/services/data-engineering-services"
                    className="hover:underline"
                  >
                    Data Engineering Services
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/services/cloud-solutions"
                    className="hover:underline"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/services/seo" className="hover:underline">
                    SEO
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/services/digital-marketing"
                    className="hover:underline"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link to="/careers">
          <p className="text-lg cursor-pointer">Careers</p>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex gap-2">
          <img src={linkedin} className="w-8 h-8 cursor-pointer" />
          <img src={twitter} className="w-8 h-8 cursor-pointer" />
        </div>
        <Link to="/contact-us">
          <div className="flex items-center gap-1 text-lg px-4 py-1 border bg-[#0f0c0c] text-white rounded-3xl cursor-pointer">
            <p>Contact</p>
            <GoArrowUpRight className="mt-[0.1rem]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
