import React from "react";
import logo from "/images/logo.png"

function Nav() {
  return (
    <div className=" w-full h-[100vh] bg-red-500 flex justify-between items-center lg:px-28 px-[1-px] fixed z-10 top-0 left-0">
      <div className="flex items-center shadow-xl">
        <img className="w-16  object-cover " src={logo} alt="" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-">
            <span className="text-[#08c1b8] text-xl tracking-tighter">Y</span>ogi.
          </h1>
          <div className="bg-gradient-to-r from-[#08c1b8] h-[3px] w-16 "></div>
        </div>
      </div>

      <div className="flex items-center gap-8 font-medium text-zinc-800 ">
        <a
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
          href=""
        >
          Home
        </a>
        <a
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
          href=""
        >
          About
        </a>
        <a
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
          href=""
        >
          Portfolio
        </a>
        <a
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
          href=""
        >
          Services
        </a>
        <a
          className="hover:text-[#08c1b8] hover:tracking-[2px] duration-500 p-2 "
          href=""
        >
          Contact{" "}
        </a>
      </div>
    </div>
  );
}

export default Nav;
