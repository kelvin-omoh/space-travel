import React from 'react'
import './Training.css'
import{Link} from "react-router-dom"
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
const Training = () => {
  return (
    <div className='training'>
        <div className="left">
            <h1>Training</h1>
            <h1> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi eaque, aut porro perferendis quidem fugiat voluptatibus repellat blanditiis quos            </h1>
            <Link to ="/contact"><button className="btn">Contact</button></Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="image-stack top">
                    <img src={Moon} className="img" alt="" />
                    
                </div>
                <div className="image-stack bottom">
                    <img src={Pod} className="img" alt="" />

                </div>
            </div>
        </div>

    </div>
  )
}

export default Training
