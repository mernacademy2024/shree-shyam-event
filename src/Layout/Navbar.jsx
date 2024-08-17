import React, { useEffect, useState } from "react";
import logo from "/logo/sslogowhite.png";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <div
      className={` w-full h-24 ${
        showNavbar ? " h-28" : "backdrop-blur-lg shadow-lg "
      } lg:flex hidden justify-between items-center duration-1000  lg:px-16 px-[1px] fixed z-10 top-0 left-0 drop-shadow`}
    >
      <div className="lg:flex items-center hidden   ">
        <img
          className="w-36  object-cover drop-shadow-md  "
          src={logo}
          alt=""
        />
        {/* <div className="flex flex-col">
          <h1 className="font-semibold text-">
            <span className="text-[#08c1b8] text-xl tracking-tighter">Y</span>
            ogi.
          </h1>
          <div className="bg-gradient-to-r from-[#08c1b8] h-[3px] w-16 "></div>
        </div> */}
      </div>

      <div className="lg:flex hidden items-center gap-8 font-medium text-zinc-800 ">
        <Link
          to={"/"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          Home
        </Link>
        <Link
          to={"/contacts"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          About
        </Link>
        <Link
          to={"/portfolio"}
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
