import React from 'react'
import MarinLifeHeader from '../MarinLife/MarinLifeHeader'
import MarinLifeSlider from '../MarinLife/MarinLifeSlider'
import { Wave1 } from '../common/Wave1'
function MarinLife() {
    return (
        <section className="min-h-screen  bg-[#00141f] px-6 py-20">

            <MarinLifeHeader />
            <MarinLifeSlider/>
        </section>
    )
}

export default MarinLife
