import React from 'react'
import { Wave1, Wave3 } from '../common/Wave1'

const SupportSection = () => {
  return (
    <div className='support relative w-full h-[100vh] '>
      <Wave3/>
      <video
        autoPlay
        muted
        loop
        playsInline
        className='section-bg h-full absolute inset-0 object-cover w-full z-0'
      >
        <source src="/section-bg.mp4" type='video/mp4' />
      </video>

      {/* Overlay */}
      <div className='absolute inset-0 overlay z-1 flex flex-col items-center justify-center text-center px-6'>

        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0099ff]'>
          Join The Movement
        </p>

        <h1 className='text-4xl font-bold text-white md:text-6xl'>
          Support The <span className='text-[#0099ff]'>Ocean</span>
        </h1>

        <p className='mt-4 max-w-xl text-white/60'>
          Every dive, every donation, every voice helps protect the seas
          and the countless lives that depend on them.
        </p>

        <button className='mt-6 px-6 py-2.5 rounded-full border border-[#0099ff] text-sm font-semibold text-white transition-all duration-300 hover:text-[#0099ff] hover:bg-white hover:border-amber-50 hover:shadow-[0_0_20px_#0099ff]'>
          Get Involved
        </button>

      </div>
      <Wave1/>

    
    </div>
  )
}

export default SupportSection
