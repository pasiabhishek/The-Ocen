import React from 'react'
import Header from '../common/Header'
import HeroMiddle from '../common/HeroMiddle'
import { Wave1, Wave2 } from '../common/Wave1'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  useGSAP(() => {
    gsap.from(".middel-hero-gsap, .wave-top, .nav", {
      y: -500,
      opacity: 0,
      duration: 2
    })

    gsap.to(".middel-hero-gsap , .nav", {

      x: 1000,
      scrollTrigger: {
        trigger: ".hero",
        start: 0,
        end: "bottom top",
        scrub: true,
        markers: false
      }
    })

     gsap.from(" .wave-bottom", {
      y: 500,
      opacity: 0,
      duration: 2
    })
    gsap.to(" .wave-top", {

      y: -100,
      scrollTrigger: {
        trigger: ".hero",
        start: 0,
        end: "bottom top",
        scrub: true,
        markers: false
      }
    })

    gsap.from("video",{
      scale:3,
      duration: 2,
      opacity:0
    })


  }, [])

  return (
    <div className='hero bg-gray-950 flex justify-center relative overflow-hidden h-[100vh]'>
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
      <div className='absolute inset-0 overlay z-1'>
        <HeroMiddle className="heroMiddle" />
      </div>
      <Header />


      <Wave1 />
    </div>
  )
}

export default Hero
