import React from "react";
import PriceCard from "../component/PriceCard";
import { motion } from "framer-motion";

function Price() {
  return (
    <div className="flex flex-col py-20 lg:px-16 px-[15px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.5 }}
        className=" w-full h-full flex lg:flex-row flex-col justify-between items-center"
      >
        <div className=" w-full justify-center lg:items-start items-center flex flex-col gap-5 py-10 lg:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="text-zinc-800 font-bold text-5xl"
          >
            Services & Pricing
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className=" text-zinc-400 font-medium text-sm lg:text-lg"
          >
            Please choose your package
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="h-[4px] w-16 bg-[#08c1b8]"
          ></motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="text-lg lg:pb-0 pb-10 text-zinc-800"
        >
          Nunc euismod ipsum vel metus rhoncus, a accumsan sapien mollis. Donec
          malesuada lacus rhoncus ipsum dignissim, sed fringilla orci faucibus.
          Proin non odio dui. Donec ut tristique dolor, at interdum sem. Quisque
          finibus viverra lectus vitae pulvinar.
        </motion.h1>
      </motion.div>

      <div className="flex justify-between  lg:gap-0 gap-10 lg:flex-row flex-col">
        <PriceCard />
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
}

export default Price;
