import React from 'react'

function Header() {
  return (
    <div className='nav absolute top-0 left-0 z-[2] flex flex-row items-center justify-between w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-7 text-gray-50 capitalize font-medium'>

      <div className='logo text-[17px] sm:text-[19px] font-extrabold tracking-widest'>
        <h1>THE OCEANIC</h1>
      </div>

      <div className='menu hidden md:block'>
        <ul className='flex flex-row items-center justify-between gap-6 lg:gap-9 capitalize text-[13px] lg:text-[14px]'>
          <li className='cursor-pointer transition-all duration-300 hover:bg-amber-50 p-3 rounded-4xl hover:text-[#0099ff]'>home</li>
          <li className='cursor-pointer transition-all duration-300 hover:bg-amber-50 p-3 rounded-4xl hover:text-[#0099ff]'>about</li>
          <li className='cursor-pointer transition-all duration-300 hover:bg-amber-50 p-3 rounded-4xl hover:text-[#0099ff]'>explore</li>
          <li className='cursor-pointer transition-all duration-300 hover:bg-amber-50 p-3 rounded-4xl hover:text-[#0099ff]'>contact</li>
        </ul>
      </div>

      <div className='button'>
        <button className='px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#0099ff] text-xs sm:text-sm font-semibold transition-all duration-300 hover:text-[#0099ff] hover:bg-white  hover:border-amber-50 hover:shadow-[0_0_20px_#0099ff]'>
          Dive
        </button>
      </div>

    </div>
  )
}

export default Header