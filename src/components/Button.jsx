import React from 'react';
import { IoIosReturnRight } from "react-icons/io";
import { motion } from 'framer-motion';

function Button({ title = "Get Started" }) {
  return (
    <motion.div
      whileHover="hover"
      className="max-w-40 px-5 py-2 flex items-center justify-between bg-zinc-900 text-zinc-200 rounded-full cursor-pointer hover:bg-zinc-700 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md perspective-1000"
    >
      <motion.span
        initial={{ rotateX: 0, opacity: 1 }}
        variants={{
          hover: { rotateX: 360, opacity: 0.8 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-sm font-medium pr-3"
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        {title}
      </motion.span>
      <IoIosReturnRight className="text-lg mt-[1px]" />
    </motion.div>
  );
}

export default Button;
