import React from 'react'
import './Footer.css'
import { FaFacebook ,FaLinkedinIn, FaMailBulk, FaPhone,FaSearchLocation ,FaTwitter  } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'> 
       <div className="footer-container">
        <div className="left">
             <div className="location">
                <FaSearchLocation size={20} style={{color:"#fff",marginRight:"2rem"}}/>
           
             <div>
                  <p>123 Acme St.</p>
                  <h4>Huston, Tx</h4> 
             </div> 
             </div>

             <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/> +234-907-357-666-0</h4>
             </div>

            <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />trips@galaxy.com</h4>
            </div>
        </div>



        <div className="right">
           <h4>About the company</h4>
           <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex molestiae voluptas obcaecati beatae. Rerum quae quam iure consectetur assumenda. "</p>
           <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedinIn size={30} style={{color:"#fff",marginRight:"1rem"}}/>

           </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
