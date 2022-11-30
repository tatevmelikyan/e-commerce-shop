import React,{useState} from 'react'
import './styles.css'
import ContuctUs from './contuctUs/contuctUs'
import Follows from './follows/follows'
import Location from '../../pages/location/location'
const Footer:React.FC = () => {
  return (
    <div className='footerContainer'>
      <div className='footer'>
     <ul className='footer-column'>
      <li className='footer-heading'>About Us</li>
      <li>Our Story</li>
      <li>Locations</li> 
     </ul>
     <ContuctUs/>
     <Follows/>
     <div className='footer-bottom'>
      <p>
      © 2022 ALIAS, Inc. All Rights Reserved.
      </p>
      </div>
      </div>
    </div>
  )
}

export default Footer