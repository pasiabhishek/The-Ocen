import React from 'react'

function OceanCardHeader() {
    return (
        <div>

            {/* Heading */}
            <div className="mx-auto mb-12 max-w-7xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0099ff]">
                    Discover the Ocean
                </p>

                <h1 className="text-4xl font-bold text-white md:text-6xl">
                    Dive Into The{" "}
                    <span className="text-[#0099ff]">
                        Blue
                    </span>
                </h1>

                <p className="mt-4 max-w-xl text-white/60">
                    Explore the beauty, movement and mystery of the ocean.
                </p>
            </div>


        </div>
    )
}

export default OceanCardHeader
