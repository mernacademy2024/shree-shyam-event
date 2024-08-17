import React from "react";
import homeBg from "/bg/bg8.jpg";
import WithLayout from "../Layout/WithLayout";
import About from "./About";
import Gallery from "./Gallery";
import Price from "./Price";
import Para from "./Para";
import Blog from "./Blog";
import Navsm from "./Navsm";
import Footer from "./Footer";
import HorizontalCarousel from "../component/HorizontalCarousel";
import HoverCard from "../component/HoverCard";
import { motion } from "framer-motion";
import Carousel from "../component/Carousel";

function Home() {
  return (
    <div>
      <Navsm />
      <div
        className="relative h-[100vh] lg:h-screen w-full bg-cover bg-fi bg-center "
        style={{ backgroundImage: `url(${homeBg})` }}
      ></div>

      {/* <Carousel /> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.5 }}
        className="absolute inset-0   bg-zinc-800  bg-opacity-20 gap-10 lg:w-[70vw] text-white flex-col flex items-start justify-center lg:px-40 px-[30px]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="font-bold text-6xl lg:text-6xl"
        >
          Shree Shyam Events
        </motion.h1>

        <div className="flex flex-col gap-3 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="lg:text-3xl text-2xl font-bold"
          >
            we manage all type of Events
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
            className="lg:text-[22px] text-[20px] "
          >
            Lorem ipsum dolor sit amet consectetur elit. Quos quae aliquid
            voluptates. Molestiae fugiat corpor itationem labore quod quos
            expedita?
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <button className="bg-[#08c1b8] text-white px-4 font-medium">
            Buy It Now !
          </button>
          <button className="text-white border-2 border-white font-medium bg-transparent hover:bg-zinc-100 hover:text-zinc-700 duration-500 p-3">
            Discover More
          </button>
        </motion.div>
      </motion.div>
      <About />
      <Gallery />
      <Price />
      {/* <HoverCard /> */}
      <HorizontalCarousel />
      <Blog />
      <Para />
      <Footer />
    </div>
  );
}

export default WithLayout(Home);
