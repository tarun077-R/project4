import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Markes from './components/Markes'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full text-zinc-900 bg-zinc-300 '>
   <Navbar/>
<Work/>
<Stripes/>
<Products/>
<Markes/>
<Cards/>
<Footer/>
    </div>
  )
}

export default App
