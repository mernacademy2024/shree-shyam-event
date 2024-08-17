import React from "react";
import { Link } from "react-router-dom";
import GalleryImg from "../component/GalleryImg";
import { ClientData } from "../data.js/galleryData";
import {motion} from "framer-motion"
function Gallery() {
  return (
    <div className=" w-full h-full bg-white justify-center items-center ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.5 }}
        className=" w-full h-full justify-center items-center flex flex-col gap-5 py-20"
      >
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} viewport={{ once: true }} className="text-zinc-800 font-bold text-4xl">Latest Works</motion.h1>

        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} viewport={{ once: true }} className=" text-zinc-400 font-medium text-sm lg:text-lg">
          My latest photo projects /
          <span className=" text-sm text-[#08c1b8] lg:text-lg">
            <Link to={"/contacts"}>View All</Link>
          </span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }} viewport={{ once: true }} className="h-[4px] w-16 bg-[#08c1b8]"></motion.div>
      </motion.div>

      <div className=" w-full h-full flex-col ">
        {/* <div className=" w-full lg:flex-row flex-col h-full flex-wrap  ">
          {ClientData.map((item, idx) =>
            idx > 3 ? (
              <GalleryImg
                className="w-full lg:w-1/4 p-2"
                img={item.img}
                heading={item.heading}
                subheading={item.subheading}
              />
            ) : (
              ""
            )
          )}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full">
          {ClientData.map((item, idx) => (
            <GalleryImg
              key={idx}
              img={item.img}
              heading={item.heading}
              subheading={item.subheading}
              className="w-full h-full"
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Gallery;
