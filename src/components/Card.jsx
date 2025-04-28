import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ width, start, para,hover="false"}) {

  return (
    <motion.div whileHover={{backgroundColor: hover ==="true" && '#0E0630',padding:"30px"}} className={`${width} min-h-[30rem] hover:${hover} bg-zinc-900 text-zinc-200 p-5 rounded-xl flex flex-col justify-between cursor-pointer`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5 ">Whatever Heading.</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            {" "}
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start project
            </h1>
            <button className="rounded-full cursor-pointer mt-5 py-2 px-5 border-[1px] border-r-0 border-l-0 border-zinc-400">
              Contact Us
            </button>
          </>
        )}
{
  para && (
    <p className="text-sm text-zinc-400 font-medium">
    Lorem ipsum dolor sit amet consectetur adipisicing.
  </p>
  )
}
       
      </div>
    </motion.div>
  );
}

export default Card;
