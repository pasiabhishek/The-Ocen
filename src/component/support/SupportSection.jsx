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
      <div className='absolute inset-0 overlay z=1'>    <h1>hello</h1>
</div>
      <Wave1/>

    
    </div>
  )
}

export default SupportSection
