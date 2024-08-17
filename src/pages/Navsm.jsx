import React from 'react'
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import logo from "/images/logo.png"
import {AnimatePresence, motion, stagger} from "framer-motion"
import { FaRegCircleXmark } from 'react-icons/fa6';

function Navsm() {
  const navlink = [{ heading: "home" }, { heading: "about" },
     { heading: "contactUs", },
      {heading:"address",},
       {heading:"service",},
  ];
  const [sidebar, setSidebar] = useState(false);
  const menuvariant = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };
  
  const linkvar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  const containerVar = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delay: 0.5,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };



  return (
    <div className="w-full h-22 z-20 flex pl-5 bg-white fixed top-0 left-0 lg:hidden drop-shadow-lg">
      <div className="lg:hidden  flex items-center  ">
        <img className="w-16  object-cover " src={logo} alt="" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-">
            <span className="text-[#08c1b8] text-xl tracking-tighter">Y</span>
            ogi.
          </h1>
          <div className="bg-gradient-to-r from-[#08c1b8] h-[3px] w-16 "></div>
        </div>
      </div>

      <div
        onClick={() => {
          setSidebar((prev) => !prev);
        }}
        className="text-white bg-[#08c1b8] fixed top-3  z-50 right-6 w-10 lg:hidden h-10 border p-1 cursor-pointer hover:shadow-lg rounded-lg flex items-center justify-center"
      >
        {/* {sidebar ? ("<RiMenu3Line size={22} className="text-white " />)" : ("<RiMenu3Line size={22} className="text-white " />"))} */}
        <RiMenu3Line size={22} className="text-white " />
      </div>

      <AnimatePresence>
        {sidebar && (
          <motion.div
            variants={menuvariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`
          w-60

         h-screen bg-[#08c1b8]  flex lg:hidden flex-col justify-center items-center z-50 origin-top  fixed top-0 right-0 text-zinc-100`}
          >
            <div
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              className="text-white fixed top-3  right-6 w-10 lg:hidden h-10  p-1 cursor-pointer hover:shadow-lg rounded-lg flex items-center justify-center"
            >
              {/* {sidebar ? ("<RiMenu3Line size={22} className="text-white " />)" : ("<RiMenu3Line size={22} className="text-white " />"))} */}

              <FaRegCircleXmark size={22} className="text-white " />
            </div>

            <motion.div
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="initial"
              className={`${
                sidebar ? "flex" : "hidden"
              } flex lg:hidden items-center flex-col  justify-center gap-8`}
            >
              {navlink.map((item, idx) => (
                <motion.div
                  variants={linkvar}
                  initial="initial"
                  animate="animate"
                  className="text-lg cursor-pointer px-4  hover:underline hover:tracking-widest hover:text-2xl "
                >
                  <h1 className='uppercase'> {item.heading}</h1>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navsm
