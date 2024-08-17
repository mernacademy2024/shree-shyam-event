import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import PriceCard from "./PriceCard";

const HoverCard = () => {
  return (
    <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <div className="flex justify-between  lg:gap-0 gap-10 lg:flex-row flex-col">
        {[1, 2, 3].map((item, idx) => (
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              transform,
            }}
            className="relative lg:w-[21vw] h-[63vh] rounded-xl "
          >
            <div
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-4 grid place-content-center rounded-xl  bg-white shadow-lg"
            >
              <PriceCard />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default HoverCard;
