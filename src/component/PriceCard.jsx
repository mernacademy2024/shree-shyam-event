import React from "react";
import cardImg from "/images/price-box-2.jpg";
import { PiCalendarHeart } from "react-icons/pi";
import {motion} from "framer-motion"

function PriceCard() {
  return (
    <motion.div
      initial={{ x: 20 }}
      whileInView={{ x: 20 }}
      transition={{ duration: 3 }}
      className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-slate-100  "
    >
      <div className="relative">
        <img
          src={cardImg}
          alt="Card Image"
          className=" lg:w-[21vw] h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black bg-opacity-50 text-white">
          <PiCalendarHeart size={60} className="mb-2" />
          <h1 className="font-bold text-4xl">Prewedding</h1>
          <h1>Prewedding Shoot</h1>
        </div>
      </div>
      <div className="px-4 py-10 flex flex-col items-center">
        <div className="flex flex-col space-y-2 items-center text-zinc-700 gap-3">
          <h className="text-6xl font-semibold"> $89</h>
          <h className="text-xl font-bold">Cunning Fuziness</h>
          <h className="text-gray-700">Lartem Sainter Omna</h>
          <h className="text-gray-500">Bullerti Naiten</h>
        </div>
        <button className="mt-4  py-3 px-10 bg-[#08c1b8] text-white font-bold duration-500 hover:bg-zinc-700">
          Read More
        </button>
      </div>
    </motion.div>
  );
}

export default PriceCard;
