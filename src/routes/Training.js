import React from 'react'
import Footer from '../component/Footer'
import HeroImage from '../component/HeroImage'
import Navigation from '../component/Navigation'
import Trainingsection  from '../component/Training'
import './Training.css'
const Training = () => {
  return (
    <div>
      <Navigation/>
      <HeroImage heading="TRAINING" text="pre-flight & In-Flight Training"/>
      <Trainingsection/>
      <Footer/>
    </div>
  )
}

export default Training
