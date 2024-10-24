import React from "react";
import logo from "../../assets/images/logo/logo1.png";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { websitePagesLinks } from "../../constants";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="fixed top-0 z-50 w-full bg-white/30 backdrop-blur-sm text-black">
      <div className="flex wrapper items-center gap-8 justify-between">
        <Link
          to="banner"
          className="cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={logo} loading="lazy" alt="logo" className="h-[4.5rem] md:h-[6.5rem] object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {websitePagesLinks.map((item) => (
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70}
              activeClass="active-item"
              className="text-sm cursor-pointer text-gray-700 hover:text-black transition-all duration-300"
              key={item.id}
              to={item.link}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div
          className="block lg:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger
            color="#000000"
            size="26"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem]">
          <img src={logo} alt="logo" className="h-[2.5rem] object-contain" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4">
          {websitePagesLinks.map(({ label, link, id }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-2xl font-mediumduration-300 link"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              {label}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;