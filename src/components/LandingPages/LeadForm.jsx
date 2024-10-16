import React from "react";
import img from "../../assets/images/contact.png";

const LeadForm = () => {
  return (
    <div id="contact" className="w-full py-[5rem] relative">
      <div className="blurred-green right-[-10%] top-[-30%] -z-10"></div>
      <div data-aos="fade-up" className="wrapper grid md:grid-cols-2 items-center gap-10">
        <div className="">
          <h2 className="text-[2rem] md:text-4xl font-semibold mb-3">
            Get in touch with us
          </h2>
          <p className="text-gray-700 text-sm mb-5">
            We are always open to discuss your project, improve your online
            presence
          </p>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Name
              </label>
              <input
                type="text"
                className="border-2 outline-none border-primary rounded-sm p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Email
              </label>
              <input
                type="email"
                className="border-2 outline-none border-primary rounded-sm p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Subject
              </label>
              <input
                type="text"
                className="border-2 outline-none border-primary rounded-sm p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Message
              </label>
              <textarea
                type="text"
                className="border-2 outline-none border-primary rounded-sm p-2"
                rows="4"
              />
            </div>
            <button type="button" className="primary-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          <img src={img} alt="contact-us" className="h-[50vh] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
