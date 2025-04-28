import React from "react";
import Button from "./Button";

function Product({ val, mover, index }) {
  return (
    <div className="w-full py-20 h-[23rem]">
      <div
        onMouseEnter={() => mover(index)}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-[55px] capitalize text-zinc-900 font-semibold">
          {val.title}
        </h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.discription}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
