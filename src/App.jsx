import React from 'react'
import Hero from './component/Home/Hero'
import "./App.css"
import { Wave1, Wave2 } from './component/common/Wave1'
import Section from './component/Home/Section'
import SmoothScroll from './component/Effects/SmoothScroll'
import Slider from './component/Home/Swiper'
import MarinLife from './component/Home/MarinLife'
import Support from './component/Home/Support'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

const App = () => {
    useGSAP(() => {
        gsap.from(".from-left", {
            x: -100,
            scrollTrigger: {
                trigger: ".sec-1",
                start: "top bottom",
                end: "+500",
                scrub: true,
                markers: false
            }
        });

        gsap.from(".card-swiper", {
             x: 1000,
                scrollTrigger: {
                    trigger: ".sec-1",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                    markers: false
                }
            }
        );
    }, []);
  
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
