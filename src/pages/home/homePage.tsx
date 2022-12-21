import React from 'react'
import { useNavigate } from 'react-router'
//@ts-ignore
import vid from '../../assets/pexels-tima-miroshnichenko-5834599.mp4'
import './styles.css'
import './homePageMedia.css'


const HomePage = () => {
  const navigate = useNavigate()
  return <div>
<div className='main-video-container'>
  <video src={vid} muted autoPlay loop></video>
  <div className='video-ad-container'>
    <div className='text-shop'>
      <span>Bring The Christmas <br /> Spirit To Your Home</span>
      <button onClick={() => navigate('/holidays')}>SHOP NOW</button>
    </div>
  </div>
 
</div>
  </div>
}

export default HomePage
