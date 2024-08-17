import React from 'react';
import abt1 from '/images/abt-2.jpg'
import abt2 from '/images/abt-1.png'
import {motion} from "framer-motion"
 

function About() {
  return (
    <div className="flex h-full  lg:h-[70vh] lg:flex-row flex-col w-full  ">
      <motion.div initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 4 } }}
        viewport={{ once: true }} > 
        <img
          className=" lg:w-[40vw] w-full lg:h-full h-[40vh] object-cover "
          src={abt1}
          alt=""
        />
      </motion.div>

      <div className=" lg:w-[60vw] w-full lg:h-full h-[85vh] relative">
        <img
          className=" w-full h-full object-cover bg-zinc-100 "
          src={abt2}
          alt=""
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.5 }}
          className="flex flex-col px-[15px]  lg:px-28 gap-5 absolute top-10 lg:top-20 left-0"
        >
          <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} viewport={{ once: true }} className="text-zinc-800 text-3xl font-bold">About</motion.h1>
          
          <motion.h1 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }} className="text-zinc-400 text-lg font-medium ">
            Who I am and what I do
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true }} className="h-[4px] w-16 bg-[#08c1b8]"></motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }} className="text-lg text-zinc-700  leading-8">
            Hi, my name is
            <span className="font-medium text-zinc-800 text-lg ">
              Martin Vegas
            </span>
            . I am an artist and photographer. Nemo enim ipsam voluptatem quia
            voluptas aspernatur aut odit aut fugit. Vivamus at nibh tincidunt,
            bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem.
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2.5 } }}
            viewport={{ once: true }} className="flex gap-4">
            <button className="bg-[#08c1b8] text-white px-4 font-medium">
              Read More
            </button>
            <button className="text-white border-2 border-white font-medium bg-zinc-800 hover:bg-zinc-100 hover:text-zinc-700 duration-500 p-3">
              Hire Me !
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About
