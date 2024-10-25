import React from "react";
import img from "../../assets/images/266699.jpg";
import { Link } from "react-router-dom";

const SolveITNeeds = () => {
  return (
    <div className="wrapper my-10">
      <div className="min-h-[10rem] flex items-center relative">
        <img
          src={img}
          alt="bg"
          className="w-full h-full object-cover object-center absolute"
        />
        <div className="absolute h-full w-full bg-black/20"></div>
        <div className="w-full p-10 relative z-10 text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <h2 className="heading-2 text-center">Solve your IT needs today!</h2>
          <Link to="/contact" className="primary-btn">
            Get Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolveITNeeds;