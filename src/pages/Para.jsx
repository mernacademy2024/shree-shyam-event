import React from "react";
import para from "/images/para-bg.jpg";
import t1 from "/images/agnt-5.jpg";
import { motion } from "framer-motion";

function Para() {
  return (
    <div
      className=" w-full h-[80vh]  bg-fixed bg-center bg-cover relative lg:h-[70vh]"
      style={{
        backgroundImage: `url(${para})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 flex w-full h-full flex-col gap-10 items-center justify-center bg-black bg-opacity-80 text-white">
        <img src={t1} className="h-28 w-28  rounded-full" alt="" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.5 }}
          className=" flex flex-col items-center gap-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="text-white text-2xl italic lg:w-[60vw] text-center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            quos dolorum, veritatis officia qui quisquam aliquam tempore soluta
            tempora culpa!
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="text-xl text-zinc-400 italic"
          >
            {" "}
            - Pratik Verma
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Para;
