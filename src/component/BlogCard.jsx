import React from "react";
import b1 from "/images/blog-1.jpg";
import { RiHeart3Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";

function BlogCard() {
  return (
    <div className="lg:w-[28vw] h-full flex flex-col shadow-lg ">
      <img src={b1} alt="" className="w-full h-68 object-cover" />

      <div className="flex flex-col items-center gap-5 p-4 justify-center">
        <div className="flex items-center justify-between w-full">
          <h1 className=" text-white bg-[#08c1b8] rounded p-2">
            Travel Photography
          </h1>

          <div className="flex gap-2 text-zinc-400  items-center">
            <RiHeart3Line size={20} />
            <FaRegComment size={18} />
          </div>
        </div>

        <div className=" flex flex-col gap-5 ">
          <h1 className="text-zinc-800 hover:text-[#08c1b8] font-bold text-2xl">
            ducimus dolor cum nemo even, mollitia rem.
          </h1>
          <h1 className="text-zinc-400 text-sm ">
            May 26 ,2024 - by Martien Vages
          </h1>
          <h1 className="text-zinc-500 text-[17px]">
            Lorem ipsum dolor sit amet, consectetur koekl Lorem ipsum dolor sit.
            adipisicing elit. Alias consectetur adipisicing, in.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
