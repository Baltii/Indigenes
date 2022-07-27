import React from 'react'
import { About } from '../sections/About/About'
import { Feature } from '../sections/Features/Feature'
import { Hero } from '../sections/Hero/Hero'
import Map from '../sections/Map/Map'
import { Pricing } from '../sections/Pricing/Pricing'

const Landing = () => {
  return (
    <>
    <Hero />
    <Map />
    <About />
    <Feature />
    <Pricing />
    </>
  )
}

export default Landing