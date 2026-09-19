import React from 'react'
import Hero from './component/Home/Hero'
import "./App.css"
import { Wave1, Wave2 } from './component/common/Wave1'
import Section from './component/Home/Section'
import SmoothScroll from './component/Effects/SmoothScroll'
import Slider from './component/Home/Swiper'
import MarinLife from './component/Home/MarinLife'
import Support from './component/Home/Support'

const App = () => {
  return (
    <div>
      <SmoothScroll />

      <Hero />
      <Slider/>
      <Section />
      <MarinLife/>
          <Support />

    </div>
  )
}

export default App
