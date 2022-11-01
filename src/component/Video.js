import React from 'react';
import video from '../assets/space.mp4';
import './video.css';
import{Link} from'react-router-dom'
const Video = () => {
  return (
    <div className='hero'>
      <video muted autoPlay id='video' loop>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="content">
        <h1>Galaxy. Travel.</h1>
        <p>First World's Civilian Space Travel.</p>
        <Link to='/training' className='btn'>Training</Link>
        <Link to='/contact' className='btn btn-light'>Launch</Link>

      </div>
    </div>
  )
}

export default Video
