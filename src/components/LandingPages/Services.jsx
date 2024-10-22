import React from "react";
import line from "../../assets/images/line.png";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../constants";
import { useLocation } from "react-router-dom";

const Services = () => {
  const { pathname } = useLocation();
  return (
    <div
      id="services"
      className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
    >
      <div className="blurred-blue left-[-10%] top-[-10%]"></div>
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <img src={line} alt="line" className="w-[3rem] grayscale" />
          <h6 className="font-medium text-primary">
            {/* Popular Services */}
            {pathname === "/web-development" && "Web Development Services"}
            {pathname === "/app-development" && "App Development Services"}
          </h6>
        </div>
        <h1
          data-aos="fade-up"
          className="text-[2rem] md:text-4xl leading-tight font-semibold text-center max-w-2xl"
        >
          {/* We provide the Best IT solution services */}
          {pathname === "/web-development" &&
            "High-Quality Web Development to Transform Your Online Identity"}
          {pathname === "/app-development" &&
            "Cutting-Edge App Development Services for Powerful Mobile Solutions"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl">
          {pathname === "/web-development" &&
            "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."}
          {pathname === "/app-development" &&
            "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mx-auto max-w-6xl"
        >
          {pathname === "/web-development" &&
            webDevelopmentServices.map((item) => (
              <div className="flex flex-col gap-2 items-start bg-[#F6F6F6] hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-gradient-to-tr from-white to-primary/10 rounded-lg border border-black p-5">
                <div className="w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="w-[3rem] grayscale" />
                </div>
                <h6 className="font-medium text-lg">{item.title}</h6>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}

          {pathname === "/app-development" &&
            appDevelopmentServices.map((item) => (
              <div className="flex flex-col gap-2 items-start bg-[#F6F6F6] hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-gradient-to-tr from-secondary/30 to-primary/30 border-2 border-black/40 p-5">
                <div className="w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="w-[3rem]" />
                </div>
                <h6 className="font-medium text-lg">{item.title}</h6>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
