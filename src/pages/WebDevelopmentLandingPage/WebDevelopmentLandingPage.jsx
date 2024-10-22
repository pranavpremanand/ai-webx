import React from "react";
import Header from "../../components/LandingPages/Header";
import Banner from "../../components/LandingPages/Banner";
import Services from "../../components/LandingPages/Services";
import Development from "../../components/LandingPages/Development";
import WorkFlow from "../../components/LandingPages/WorkFlow";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import UnlockPossibilities from "../../components/UnlockPossibilities";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LandingPages/LeadForm";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import aiImg from "../../assets/images/landingpages/ai.jpg";

const WebDevelopmentLandingPage = () => {
  return (
    <div className="landing-bg">
      <Link className="w-[4rem] z-30 hover:-translate-y-1 h-[4rem] cursor-pointer rounded-full border-4 border-white bg-[#25D366] hover:bg-[#0f0f0f] fixed bottom-7 right-7 flex items-center justify-center transition-all duration-300">
        <FaWhatsapp className="text-white text-4xl" />
      </Link>
      <Header />
      <Banner />
      <Services />
      <Development />
      <div className="wrapper py-[2rem] flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h2
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center"
          >
            Our Expertise
          </h2>
          <p data-aos="fade-up" className="mt-2 mb-3">
            At <strong>AI WebX</strong>, we leverage cutting-edge technology to
            deliver custom solutions that drive innovation and efficiency across
            industries. Our areas of expertise include:
          </p>
        </div>
        <ul className="list-disc pl-5 mt-3 flex flex-col gap-4">
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Artificial Intelligence & Machine Learning:
            </strong>{" "}
            We build intelligent systems that enhance decision-making, automate
            processes, and provide deep insights for businesses.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Blockchain Development: </strong>
            Secure and decentralized solutions for transactions, data integrity,
            and digital assets.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Web & Mobile App Development:{" "}
            </strong>{" "}
            Crafting high-performance, user-centric applications that drive
            engagement and revenue growth.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Cloud Computing Services:{" "}
            </strong>{" "}
            Optimizing operations with scalable, secure cloud infrastructure and
            seamless cloud migration services.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Cybersecurity Solutions: </strong>{" "}
            Comprehensive security measures to protect your business from cyber
            threats and ensure data privacy.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">AR/VR Development:</strong>{" "}
            Immersive virtual and augmented reality experiences that transform
            user interactions.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Data Analytics & Business Intelligence:
            </strong>{" "}
            Actionable insights from big data to drive informed decision-making
            and growth strategies.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">IoT Development: </strong>{" "}
            Connecting devices and systems to enhance automation and operational
            efficiency
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Natural Language Processing (NLP):
            </strong>{" "}
            Advanced text and speech recognition for enhanced customer service
            and communication.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Robotic Process Automation (RPA):
            </strong>{" "}
            Streamlining repetitive tasks to improve operational efficiency and
            reduce costs.
          </li>
        </ul>
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
          <img
            src={aiImg}
            className="w-full md:h-[60vh] mt-4 object-cover md:object-[100%_50%]"
            alt="ai"
          />
        </div>
        <ul className="list-disc pl-5 mt-6 flex flex-col gap-4">
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Healthcare:</strong> Transforming
            patient care and operations with AI-powered diagnostics, data
            analytics, and telemedicine solutions.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">E-commerce & Retail: </strong>
            Enhancing customer experiences with personalized recommendations,
            inventory management, and secure online transactions.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Finance & Banking: </strong>{" "}
            Streamlining processes with AI, blockchain, and machine learning for
            fraud detection, risk assessment, and smarter investment strategies.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Energy: </strong> Optimizing
            energy management, forecasting, and sustainability with IoT and
            data-driven AI solutions.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Real Estate: </strong>{" "}
            Revolutionizing property management, investment decisions, and
            customer engagement with AI and predictive analytics.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Manufacturing:</strong> Driving
            automation, predictive maintenance, and operational efficiency with
            AI, machine learning, and IoT technologies.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Data Analytics & Business Intelligence:
            </strong>{" "}
            Actionable insights from big data to drive informed decision-making
            and growth strategies.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">IoT Development: </strong>{" "}
            Connecting devices and systems to enhance automation and operational
            efficiency
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Logistics & Supply Chain:{" "}
            </strong>{" "}
            Enhancing logistics, inventory, and supply chain management with AI
            and IoT-enabled tracking and optimization.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Education: </strong> Personalized
            learning experiences, predictive analytics for student outcomes, and
            automated administrative processes using AI and ML.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Telecom: </strong> Boosting
            network efficiency, customer service, and fraud prevention through
            AI-driven solutions.
          </li>
        </ul>
      </div>
      <WorkFlow />
      <Experience />
      <Testimonials />
      <LeadForm />
      <AssociatedWith />
      <Footer />
    </div>
  );
};

export default WebDevelopmentLandingPage;
