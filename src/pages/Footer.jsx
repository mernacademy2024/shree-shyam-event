import React from 'react'
import logo from "/images/logowhite.png";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import {motion} from "framer-motion"

function Footer() {
  return (
    <div className=" w-full flex lg:flex-row flex-col justify-between items-center bg-zinc-900 gap-8 py-20 px-16">
      <div className=" flex items-center  ">
        <img className="w-40  object-cover " src={logo} alt="" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-white text-4xl">
            <span className="text-[#08c1b8] text-5xl tracking-tighter">Y</span>
            ogi.
          </h1>
          <div className="bg-gradient-to-r from-[#08c1b8] h-[6px] w-36 "></div>
        </div>
      </div>

      <div className=" flex flex-col gap-6">
        <motion.h1 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
             className="text-zinc-300 font-bold text-xl">
          - Creative Photo Studio
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
             className="text-[17px] text-zinc-400 lg:w-[40vw] lg:text-left text-center">
          Sed non auctor magna. Nunc eu ultrices orci. Donec commodo ligula in
          massa ultricies volutpat. Fusce vel cursus lectus. Cras commodo odio
          mi, eu cursus nibh iaculis ut .
        </motion.h1>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex gap-4 text-white">
          <FaFacebookF   className='p-3   bg-zinc-700 rounded-lg  shadow-lg hover:shadow-[#08c1b8]' size={40} />
          <GrInstagram   className='p-3   bg-zinc-700 rounded-lg  shadow-lg hover:shadow-[#08c1b8]' size={40} />
          <IoLogoYoutube className='p-3   bg-zinc-700 rounded-lg  shadow-lg hover:shadow-[#08c1b8]' size={40} />
          <FaLinkedinIn  className='p-3   bg-zinc-700 rounded-lg  shadow-lg hover:shadow-[#08c1b8]' size={40} />
        </div>
      </div>
    </div>
  );
}

export default Footer
