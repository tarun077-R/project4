import React from 'react'
import Button from './Button'


function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 flex items-center justify-between text-zinc-900 border-b-[1px] border-zinc-700 bg-zinc-300 font-semibold">
    <div className="left flex items-center">
    <div className='w-16 h-16 text-[20px] font-bold rounded-full bg-zinc-900 text-white flex items-center justify-center'>Tarun</div>
      <div className="Link flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className="w-1 h-7 bg-zinc-800 block"></span>
          ) : (
            <a key={index} className="text-sm flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: '0 0 0.45em #00FF19' }}
                  className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
    </div>
    <Button/>

    </div>
  )
}

export default Navbar
