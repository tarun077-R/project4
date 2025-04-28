import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  const products = [
    {
      title: "arqitel",
      discription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae impedit ipsa eaque odit, quam ab? Est vitae facilis nostrum at harum, iste alias eligendi cumque ipsa ab facere, voluptatem laboriosam.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      discription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae impedit ipsa eaque odit, quam ab? Est vitae facilis nostrum at harum, iste alias eligendi cumque ipsa ab facere, voluptatem laboriosam.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      discription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae impedit ipsa eaque odit, quam ab? Est vitae facilis nostrum at harum, iste alias eligendi cumque ipsa ab facere, voluptatem laboriosam.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      discription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae impedit ipsa eaque odit, quam ab? Est vitae facilis nostrum at harum, iste alias eligendi cumque ipsa ab facere, voluptatem laboriosam.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(-1); // start with -1 so no image is shown initially
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} index={index} mover={mover} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        {pos >= 0 && (
          <motion.div
            initial={{ y: pos + "rem" }}
            animate={{ y: pos + "rem" }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.6 }}
            className="window absolute w-[32rem] h-[23rem] left-[40%] -translate-x-[50%] overflow-hidden"
          >
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.4 }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1572509018340-1fc13b5df491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.4 }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1610758758803-e97eb9837638?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.4 }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1635612768877-0da3e05e9c04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.4 }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1560252771-4f4a8dcea42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Products;
