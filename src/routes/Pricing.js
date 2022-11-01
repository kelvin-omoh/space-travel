import React from 'react'
import"./pricing.css"
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import HeroImage from '../component/HeroImage'
import PricingCard  from '../component/Pricing'
const Pricing = () => {
  return (
    <div>
      <Navigation/>
      <HeroImage heading="PRICING"  text="Choose your trip "/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Pricing
