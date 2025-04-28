import React from 'react';

function Stripe({ val }) {
  return (
    <div className="w-[16.67%] px-10 py-3 border-t border-b border-r border-zinc-600 flex justify-between items-center">
      <img className="h-[33px] w-1/2" src={val.url} alt="logo" />
      <span className="font-semibold ">{val.number}</span>
    </div>
  );
}

export default Stripe;
