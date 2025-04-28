import { motion } from "motion/react";
import React from "react";

function Marke({ imagesurls,direction }) {
  return (
    <div className="flex w-full overflow-hidden gap-0">
      <motion.div
        initial={{ x: direction ==='left'?"0" :"-100%"}}
        animate={{ x:direction ==='left'?"-100%" :"0"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 pr-20 py-5 gap-20"
      >
        {imagesurls.map((url, index) => (
          <img className="w-[90px]" src={url} key={index} alt={`image-${index}`}  />
        ))}</motion.div>
      <motion.div
        initial={{ x: direction ==='left'?"0" :"-100%"}}
        animate={{ x:direction ==='left'?"-100%" :"0"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 pr-20 py-5 gap-20"
      >
        {imagesurls.map((url, index) => (
          <img className="w-[90px]" src={url} key={index} alt={`image-${index}`} />
        ))}</motion.div>
    </div>
  );
}

export default Marke;
