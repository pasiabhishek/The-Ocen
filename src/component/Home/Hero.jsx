import React from 'react'
import Header from '../common/Header'
import HeroMiddle from '../common/HeroMiddle'
import { Wave1, Wave2 } from '../common/Wave1'

const Hero = () => {
  return (
    <div className='hero bg-gray-950 flex justify-center relative'>
      <Wave2 />
      <video
        autoPlay
        muted
        loop
        playsInline
        className='hero-bg absolute inset-0 w-full h-full object-cover z-0'
      >
        <source src="/Hero-bg2.mp4" type='video/mp4' />
      </video>

      {/* Overlay */}
      <div className='absolute inset-0 overlay z-[1]'></div>

      <Header />
      <HeroMiddle />
      <Wave1 />

    </div>
  )
}

export default Hero