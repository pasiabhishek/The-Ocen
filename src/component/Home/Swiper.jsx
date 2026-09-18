import React from "react";
import OceanCardHeader from "../Swiper/OceanCardHeader";
import ImageSlide from "../Swiper/imageSlide";

export default function OceanCards() {
    return (
        <section className="min-h-screen bg-[#00141f] px-6 py-20">
        <OceanCardHeader/>
        <ImageSlide/>
         </section>
    );
}