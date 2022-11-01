import React,{useState} from 'react'
import './Navbarstyles.css'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navigation = () => {
     const[click,setClick]=useState('false');
     const handleclick=()=>{
        setClick(!click)
     }


     const [color,setColor]=useState(false);
     const changeColor=()=>{
        if(window.screenY >= 100){
            setColor(false)
        }
        else{
            setColor(true)
        }
     }


     window.addEventListener('scroll',changeColor)
       return (
    <div className={color ? 'header header-bg':'header'}>
        <Link to="/"><h1>GLX TRvL</h1></Link>
        <ul className={click?'nav-menu ':'nav-menu active'}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/pricing">Pricing</Link>
            </li>
            <li>
                <Link to="/training">Training</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

        <div className="hambugger" onClick={handleclick}>
            {click ?  <FaBars size={20} style={{color:'#fff'}}/> : <FaTimes size={20} style={{color:'#fff'}}   />}
        </div>
    </div>
  )
}

export default Navigation
