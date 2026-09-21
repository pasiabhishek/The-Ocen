import React from "react";
import OceanCardHeader from "../Swiper/OceanCardHeader";
import ImageSlide from "../Swiper/ImageSlide";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OceanCards() {
  

    return (
        <section id="dive" className="min-h-screen sec-1 bg-[#00141f] px-6 py-20">
            <OceanCardHeader />
            <ImageSlide />
        </section>
    );
}
