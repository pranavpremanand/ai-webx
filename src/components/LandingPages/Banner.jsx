import React from "react";
import bannerImg from "../../assets/images/landingpages/banner/banner.png";
import { Link, useLocation } from "react-router-dom";
import vid from "../../assets/videos/banner.mp4";
import ReactPlayer from "react-player";

const Banner = () => {
  const { pathname } = useLocation();
  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-10 lg:gap-5">
        <div className="flex flex-col gap-4 items-start justify-center">
          <p data-aos="fade-right" className="bg-[#ECECF2] p-1 text-gray-500 text-sm">
            {pathname === "/web-development" && "Web Development"}
            {pathname === "/app-development" && "App Development"}
          </p>
          <h1 data-aos="fade-right" className="text-[2.5rem] md:text-5xl font-bold leading-tight">
            {pathname === "/web-development" &&
              "AI WebX - Shaping the Future with Advanced AI Solutions"}
            {pathname === "/app-development" &&
              "AI WebX - Elevating Your Business with Cutting-Edge App Development"}
          </h1>
          <p data-aos="fade-right" className="text-sm text-gray-500">
            {pathname === "/web-development" &&
              "Unlock the full potential of your online presence with our state-of-the-art web development services. At AI WebX, we combine creativity, innovation, and the latest technologies to build custom web solutions that captivate users, boost engagement, and drive business growth. Whether you need a dynamic website, an interactive platform, or a robust e-commerce solution, we deliver tailored digital experiences designed for the future."}
            {pathname === "/app-development" &&
              "Harness the power of innovative app development to reach your audience anytime, anywhere. At AI WebX, we specialize in crafting custom mobile and web applications that deliver seamless user experiences, boost engagement, and drive growth. From intuitive interfaces to robust functionalities, our tailored app solutions are designed to help your business thrive in the digital age, empowering you to stay ahead of the competition."}
          </p>
          <Link data-aos="fade-right" className="primary-btn mt-10">Get Started</Link>
        </div>
        <div data-aos="fade-left" className="bg-[#7320E333] pl-5 pt-4 pb-2 h-[40vh] w-fit">
          <ReactPlayer
            url={vid}
            width="100%"
            height="100%"
            controls={false}
            muted={true}
            playsinline={true}
            playing={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
