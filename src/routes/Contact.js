import React from 'react'
import Footer from '../component/Footer'
import HeroImage from '../component/HeroImage'
import Navigation from '../component/Navigation'
import Form from "../component/Form"

const Contact = () => {
  return (
    <div>
      <Navigation/>
      <HeroImage heading="CONTACT." text="Contact GLX Travel"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
