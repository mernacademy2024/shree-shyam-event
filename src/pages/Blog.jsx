import React from "react";
import BlogCard from "../component/BlogCard";
import { motion } from "framer-motion";

function Blog() {
  return (
    <div className=" w-full flex flex-col py-20  lg:px-16 px-[15px] items-center justify-center ">
      <div className=" w-full justify-center  items-center flex flex-col gap-5 ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          // viewport={{ once: true }}
          className="text-zinc-800 font-bold text-4xl"
        >
          Services & Pricing
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          // viewport={{ once: true }}
          className=" text-zinc-400 font-medium text-sm lg:text-lg"
        >
          Please choose your package
        </motion.h1>

        <div className="h-[4px] w-16 bg-[#08c1b8]"></div>
      </div>

      <div className=" w-full flex justify-between items-center  flex-col gap-10 lg:flex-row pt-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default Blog;
