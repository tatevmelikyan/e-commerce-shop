import React from 'react'
import './styles.css'
import ContuctUs from './contuctUs/contuctUs'
import Follows from './follows/follows'
import { Link } from 'react-router-dom'
const Footer: React.FC = () => {
  return (
    <div className='footerContainer'>
      <div className='footer'>
        <ul className='footer-column'>
          <li className='footer-heading'>About US</li>
          <li>
          <Link to='/about' >Our Story </Link>
          </li>
          <li>
            <Link to='/location'>Location</Link>
          </li>
        </ul>
        <ContuctUs />
        <Follows />
        <div className='footer-bottom'>
          <p>© 2022 ALIAS, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
