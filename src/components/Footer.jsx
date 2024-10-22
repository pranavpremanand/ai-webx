import React from "react";
import bg from "../assets/images/footer-bg.png";
import logo from "../assets/images/logo/logo1.png";
import emailIcon from "../assets/images/icons/email.png";
import phoneIcon from "../assets/images/icons/phone.png";
import locationIcon from "../assets/images/icons/location.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-[2rem] bg-cover bg-top" style={{ backgroundImage: `url(${bg})` }}>
      <div className="wrapper grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[15%_45%_40%] gap-8">
        <div className="w-fit md:col-span-4 lg:col-span-1 md:place-self-center lg:place-self-auto">
          <img src={logo} alt="logo" className="w-[10rem] object-contain" />
        </div>
        <div className="md:col-span-2 lg:col-span-1 flex flex-col md:items-center gap-4">
          <h6 className="text-lg font-medium">Our Services</h6>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-sm">
            <ul className="flex flex-col gap-2">
              <li>Web Development</li>
              <li>App Development</li>
              <li>AI & ML Development</li>
              <li>Blockchain Solutions</li>
              <li>Cybersecurity Services</li>
              <li>Chatbot Development</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>VR & AR Development</li>
              <li>Cloud Computing Services</li>
              <li>IoT development</li>
              <li>CRM development</li>
              <li>UI/UX</li>
              <li>VR and AR development</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1 flex flex-col md:items-center gap-4">
          <h6 className="text-lg font-medium">Contact Info</h6>
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-6 text-sm">
              <li className="flex gap-2 items-center">
                <img
                  src={emailIcon}
                  alt="email"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <a href="mailto:XXXXXXXXX">
                  <strong>Email:</strong> XXXXXXXXX
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <img
                  src={phoneIcon}
                  alt="phone"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <a href="tel:+916301350318">
                  <strong>Phone:</strong> +91 6301350318
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <img
                  src={locationIcon}
                  alt="location"
                  className="w-[1.5rem] object-contain grayscale" 
                />
                <span className="max-w-xs text-wrap">
                  <strong>Location:</strong> Ammananbole, Narketpally <br /> 508254,
                  Nalgonda, Telangana
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link className="bg-primary/10 text-black/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r from-[#005DE0] to-[#CF00FE] hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaFacebookF />
              </Link>
              <Link className="bg-primary/10 text-black/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r from-[#005DE0] to-[#CF00FE] hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaInstagram />
              </Link>
              <Link className="bg-primary/10 text-black/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r from-[#005DE0] to-[#CF00FE] hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin />
              </Link>
              <Link className="bg-primary/10 text-black/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r from-[#005DE0] to-[#CF00FE] hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
