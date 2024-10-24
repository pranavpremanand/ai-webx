import React from "react";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LandingPages/LeadForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import Header from "../../components/Website/Header";
import Banner from "../../components/Website/Banner";
import line from "../../assets/images/line.png";
import { industriesCompanyServe, services } from "../../constants";
import { Link } from "react-router-dom";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import aboutImg from "../../assets/images/home-aboutus.jpg";

const Home = () => {
  return (
    <div className="landing-bg">
      <WhatsAppIcon />
      <Header />
      <Banner />
      <div
        id="services"
        className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
      >
        <div className="blurred-blue left-[-10%] top-[-10%]"></div>
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <img src={line} alt="line" className="w-[3rem] grayscale" />
            <h6 className="font-medium text-primary capitalize">
              our services
            </h6>
          </div>
          <h1
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center max-w-2xl"
          >
            We provide the Best IT solution services
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl">
            At AI WebX, we offer a full range of advanced technology services
            designed to empower businesses with scalable, intelligent, and
            secure solutions.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mx-auto max-w-6xl"
          >
            {services.map((item) => (
              <div
                className="h-full flex flex-col justify-between gap-5 bg-[#F6F6F6] hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-gradient-to-tr from-white to-primary/10 rounded-lg border border-black p-5"
                key={item.id}
              >
                <div className="flex flex-col gap-2 items-start">
                  <div className="w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-[3rem] grayscale"
                    />
                  </div>
                  <h6 className="font-medium text-lg">{item.title}</h6>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
                <Link className="text-primary underline text-sm flex gap-5 items-center">
                  Know More <PiCaretDoubleRightBold />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wrapper py-[2rem] flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h2
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center"
          >
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="mt-2 text-center mb-3">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
          {industriesCompanyServe.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-white/70"></div>
              <p className="text-center text-[1.3rem] font-medium relative z-10">
                {item.title}
              </p>
              <p className="text-gray-800 text-md mt-2 relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <img src={line} alt="line" className="w-[3rem] grayscale" />
            <h6 className="font-medium text-primary">About Company</h6>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
            <div className="relative">
              <img src={aboutImg} alt="about company" className="rounded-lg h-[20rem] md:h-full md:max-h-[30rem] w-full object-cover object-right" />
              <div className="w-full sm:w-fit sm:max-w-[18rem] text-white h-full sm:h-fit absolute md:-bottom-[5rem] bottom-0 left-0 bg-primary/70 sm:bg-primary p-5 rounded-lg">
                <h1 className="text-5xl font-bold">2+</h1>
                <p className="font-medium mt-3">3 Years of Experience</p>
                <p className="pl-5 border-l-2 border-white text-md mt-3">
                  The trusted choice for your software development solutions
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-medium">
                Our Vision: Empowering Global Businesses with Intelligent
                Technology
              </h3>
              <p>
                At AI WebX, we are committed to delivering innovative AI,
                Machine Learning, and Blockchain solutions that help businesses
                adapt and excel in an increasingly complex and competitive
                marketplace.
              </p>
              <button className="primary-btn mt-7 w-fit">Know More</button>
            </div>
          </div>
        </div>
      </div>
      {/* <WorkFlow /> */}
      <Experience />
      <Testimonials />
      <LeadForm />
      <AssociatedWith />
      <Footer />
    </div>
  );
};

export default Home;
