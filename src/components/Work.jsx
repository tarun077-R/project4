import React, { useState, useEffect } from "react";
import { useScroll } from "motion/react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  const imageShow = (indexesToShow) => {
    setImages((prev) =>
      prev.map((item, index) => ({
        ...item,
        isActive: indexesToShow.includes(index),
      }))
    );
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const step = Math.floor(value * 100);

      switch (step) {
        case 0:
          imageShow([]);
          break;
        case 1:
          imageShow([0]);
          break;
        case 2:
          imageShow([0, 1]);
          break;
        case 3:
          imageShow([0, 1, 2]);
          break;
        case 4:
          imageShow([0, 1, 2, 3]);
          break;
        case 5:
          imageShow([0, 1, 2, 3, 4]);
          break;
        case 6:
          imageShow([0, 1, 2, 3, 4, 5]);
          break;
        default:
          break;
      }
    });

    return () => unsubscribe(); // clean up when component unmounts
  }, [scrollYProgress]);

  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (img, index) =>
              img.isActive && (
                <img
                  key={index}
                  src={img.url}
                  alt=""
                  className="absolute w-60 h-50 rounded-lg -translate-x-1/2 -translate-y-1/2"
                  style={{ top: img.top, left: img.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
