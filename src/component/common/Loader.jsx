import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function Loader() {
  const [visible, setVisible] = useState(true)
  const loaderRef = useRef(null)

  useEffect(() => {
    const hideLoader = () => {
      gsap.to(loaderRef.current, {
        yPercent: -100,
        duration: 1.1,
        ease: "power4.inOut",
        delay: 0.5,
        onComplete: () => setVisible(false)
      })
    }

    if (document.readyState === "complete") {
      const timer = setTimeout(hideLoader, 400)
      return () => clearTimeout(timer)
    }

    window.addEventListener("load", hideLoader)
    return () => window.removeEventListener("load", hideLoader)
  }, [])

  if (!visible) return null

  return (
    <div ref={loaderRef} className='loader fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#00141f] overflow-hidden'>

      <span className='loader-bubble absolute bottom-0 left-[12%] h-3 w-3 rounded-full bg-[#0099ff]/40' style={{ animationDelay: "0s" }}></span>
      <span className='loader-bubble absolute bottom-0 left-[28%] h-2 w-2 rounded-full bg-[#0099ff]/30' style={{ animationDelay: "0.6s" }}></span>
      <span className='loader-bubble absolute bottom-0 left-[46%] h-4 w-4 rounded-full bg-[#0099ff]/40' style={{ animationDelay: "1.1s" }}></span>
      <span className='loader-bubble absolute bottom-0 left-[64%] h-2.5 w-2.5 rounded-full bg-[#0099ff]/30' style={{ animationDelay: "0.3s" }}></span>
      <span className='loader-bubble absolute bottom-0 left-[80%] h-3 w-3 rounded-full bg-[#0099ff]/40' style={{ animationDelay: "1.6s" }}></span>
      <span className='loader-bubble absolute bottom-0 left-[92%] h-2 w-2 rounded-full bg-[#0099ff]/30' style={{ animationDelay: "0.9s" }}></span>

      <div className='loader-logo relative z-[1] mb-8 text-[17px] sm:text-[19px] font-extrabold tracking-widest text-amber-50'>
        <h1>THE OCEANIC</h1>
      </div>

      <div className='loader-ring relative z-[1] h-14 w-14 sm:h-16 sm:w-16'>
        <span className='absolute inset-0 rounded-full border-4 border-[#0099ff]/20'></span>
        <span className='absolute inset-0 rounded-full border-4 border-transparent border-t-[#0099ff] animate-spin'></span>
      </div>

      <p className='loader-text relative z-[1] mt-6 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-white/50'>
        Diving In...
      </p>

    </div>
  )
}

export default Loader
