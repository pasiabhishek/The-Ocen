import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import marineLife from "../data/MarinLife.json";

function MarinLifeSlider() {
    return (
        <div className="MarinLifeSlider mx-auto max-w-7xl">

            <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={500}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                className="!overflow-visible card-swiper"
            >

                {marineLife.map((animal) => (
                    <SwiperSlide key={animal.id}>

                        <article className="group relative h-[420px] overflow-hidden rounded-[28px] border border-[#0099ff]/20 bg-[#003b55] shadow-2xl shadow-[#0099ff]/10">

                            {/* Image */}

                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Ocean Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#00141f] via-[#003b55]/50 to-transparent" />

                            {/* Blue Glow */}

                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#0099ff]/30 blur-3xl" />

                            {/* Content */}

                            <div className="absolute bottom-0 left-0 right-0 p-7">

                                {/* Category */}

                                <span className="mb-3 inline-block rounded-full border border-[#0099ff]/40 bg-[#0099ff]/10 px-3 py-1 text-xs font-medium text-[#66ccff] backdrop-blur-md">
                                    {animal.category}
                                </span>

                                {/* Animal Name */}

                                <h2 className="text-3xl font-bold text-white">
                                    {animal.name}
                                </h2>

                                {/* Scientific Name */}

                                <p className="mt-1 text-xs italic text-[#66ccff]/80">
                                    {animal.scientificName}
                                </p>

                                {/* Description */}

                                <p className="mt-2 text-sm leading-6 text-white/70">
                                    {animal.shortDescription}
                                </p>

                                {/* Marine Information */}

                                <div className="mt-4 flex items-center gap-3 text-xs text-white/60">

                                    <span>
                                        🌊 {animal.habitat}
                                    </span>

                                    <span>
                                        🍽️ {animal.diet}
                                    </span>

                                </div>

                                {/* Explore Button */}

                                <button className="mt-5 rounded-full bg-[#0099ff] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#007acc] hover:shadow-lg hover:shadow-[#0099ff]/40">
                                    Explore →
                                </button>

                            </div>

                        </article>

                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    );
}

export default MarinLifeSlider;

