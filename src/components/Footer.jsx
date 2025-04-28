import React from 'react'
import Button from "./Button"
function Footer() {
  return (
    <div className='w-full'>
<div className="max-w-screen-xl mx-auto py-10 flex gap-32">
    <div className="basis-1/2">
    <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>tarun.</h1></div>
    <div className="basis-1/2 flex gap-4">
    <div className='basis-1/3'>
        <h4 className='mb-10 text-zinc-900 font-medium'>Socials</h4>
       { ["instagram","twitter (x)","LinkedIn"].map((item,index)=><a key={index} className='block mt-3 text-zinc-800 capitalize'>{item}</a>)}
    </div>
    <div className='basis-1/3'>
        <h4 className='mb-10 text-zinc-900 font-medium'>Contact</h4>
       { ["7088835899","tarunrawat83@gmail.com","rwt45@gmail.com"].map((item,index)=><a key={index} className='block mt-3 text-zinc-800 capitalize'>{item}</a>)}
    </div >
    <div className='basis-1/2 flex flex-col items-end'><p className='text-right mb-7'>Lorem ipsum dolor sit, amet tarun rawat is hero you know elit. Corporis quod minima dolorum explicabo.</p>
    <Button/></div>
    </div>
</div>
    </div>
  )
}

export default Footer
