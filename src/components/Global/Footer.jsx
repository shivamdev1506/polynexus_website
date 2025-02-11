import { GoArrowUpRight } from "react-icons/go";
import linkedinWhite from "../../assets/icons/linkedin_white.png";
import twitterWhite from "../../assets/icons/twitter_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full  bg-black text-white px-[5rem] pt-[4rem] pb-[3rem]">
        <div className="flex justify-between border-b border-b-slate-400 pb-[2rem] pl-2 pr-10">
          <div className="pl-2">
            <h1 className="text-2xl">POLYNEXUS</h1>
            <h3 className="text-lg mt-4">
              Bringing your ideas to life with web, mobile, AI and cloud
              solutions.
            </h3>
            <div className="mt-7 w-[8.2rem] h-[2rem] bg-white text-black rounded-3xl flex justify-center items-center">
              <Link to="/contact-us">
                <div className="flex items-center gap-1 cursor-pointer">
                  <p>Get In Touch</p>
                  <GoArrowUpRight />
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-7">
              <img src={linkedinWhite} className="w-8 h-8 cursor-pointer"></img>
              <img src={twitterWhite} className="w-8 h-8 cursor-pointer"></img>
            </div>
          </div>
          <div className="text-white">
            <ul>
              <Link to="/about-us">
                <li className="text-lg">About Us</li>
              </Link>
              <Link to="/products">
                <li className="text-lg mt-4">Products</li>
              </Link>
              <Link to="/services">
                <li className="text-lg mt-4">Services</li>
              </Link>
              <Link to="/careers">
                <li className="text-lg mt-4">Careers</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-between mr-[0.5rem]">
            <p className="ml-[0.5rem] mt-5">
              &copy; PolyNexus. All rights reserved.
            </p>
            <div className="flex mt-5 gap-7">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
