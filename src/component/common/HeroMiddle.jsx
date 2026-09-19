import React from 'react'

function HeroMiddle() {
  return (
    <div 
      className='hero-middle absolute z-[2] top-1/3 left-1/2 -translate-x-1/2 text-amber-50 flex flex-col justify-center items-center flex-wrap w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] gap-2 sm:gap-3 text-center'
    >

      <h5 className='middel-hero-gsap  sm:text-base md:text-1xl  w-full mb-3 text-sm font-semibold uppercase tracking-[0.3em] hover:text-1.2xl hover:text-[#0099ff]'>
        The ocean is life
      </h5>

      <h1 className='middel-hero-gsap  sm:text-4xl leading-tight w-full text-4xl font-bold text-white md:text-6xl'>
        Deeper Than <span className='text-[#0099ff]'>You Imagine</span>
      </h1>

      <p className='middel-hero-gsap text-xs sm:text-sm md:text-[15px] sm:mt-4 md:mt-5 px-2 sm:px-6 md:pl-10 md:pr-10 font-light leading-relaxed w-full mt-4 max-w-xl text-white/60'>
        Covering over 70% of the planet, the ocean cradles hundreds of 
        thousands of known species while hiding millions more in its 
        uncharted depths.
      </p>

    </div>
  )
}

export default HeroMiddle