import React from "react";
import { Link } from "react-router-dom";
import keyImg from '../assets/images/key.png'

const UnlockPossibilities = () => {
  return (
    <div className="bg-gradient-to-r from-[#062533] via-[#024464] to-[#012130] py-[5rem] z-10">
     <div className="wrapper flex flex-col-reverse items-center md:grid grid-cols-[55%_45%] gap-10">
     <div className="flex flex-col items-center md:items-start h-full justify-between gap-5">
        <h2 className="text-[2rem] md:text-4xl leading-tight font-semibold text-center md:text-start text-white max-w-[40rem]">
          Unlock Infinite Possibilities with AI WebX
        </h2>
        <Link className="primary-btn">Read More</Link>
      </div>
      <img src={keyImg} alt="" className="w-full sm:w-4/6 aspect-video object-contain" />
     </div>
    </div>
  );
};

export default UnlockPossibilities;
