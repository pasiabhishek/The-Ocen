import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import oceanCards from '../data/OceanCard.json'

function ImageSlide() {
    return (

        <div className="mx-auto max-w-7xl">

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

                {oceanCards.map((card, index) => (
                    <SwiperSlide key={index}>

                        <article
                            className="
                                    group
                                    relative
                                    h-[420px]
                                    overflow-hidden
                                    rounded-[28px]
                                    border
                                    border-[#0099ff]/20
                                    bg-[#003b55]
                                    shadow-2xl
                                    shadow-[#0099ff]/10
                                "
                        >

                            {/* Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                        transition
                                        duration-700
                                        group-hover:scale-110
                                    "
                            />

                            {/* Ocean blue overlay */}
                            <div
                                className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#00141f]
                                        via-[#003b55]/40
                                        to-transparent
                                    "
                            />

                            {/* Blue glow */}
                            <div
                                className="
                                        absolute
                                        -right-20
                                        -top-20
                                        h-40
                                        w-40
                                        rounded-full
                                        bg-[#0099ff]/30
                                        blur-3xl
                                    "
                            />

                            {/* Content */}
                            <div
                                className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        p-7
                                    "
                            >

                                <span
                                    className="
                                            mb-4
                                            inline-block
                                            rounded-full
                                            border
                                            border-[#0099ff]/40
                                            bg-[#0099ff]/10
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium
                                            text-[#66ccff]
                                            backdrop-blur-md
                                        "
                                >
                                    OCEAN
                                </span>

                                <h2 className="text-3xl font-bold text-white">
                                    {card.title}
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-white/70">
                                    {card.description}
                                </p>

                                <button
                                    className="
                                            mt-5
                                            rounded-full
                                            bg-[#0099ff]
                                            px-5
                                            py-2.5
                                            text-sm
                                            font-semibold
                                            text-white
                                            transition
                                            duration-300
                                            hover:bg-[#007acc]
                                            hover:shadow-lg
                                            hover:shadow-[#0099ff]/40
                                        "
                                >
                                    Explore →
                                </button>

                            </div>

                        </article>

                    </SwiperSlide>
                ))}

            </Swiper>




        </div>
    )
}

export default ImageSlide
