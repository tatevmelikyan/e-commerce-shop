import React from 'react'
import NavContainer from '../navContainer/navContainer'
import './styles.css'


import { Link } from 'react-router-dom'

const Header = () => {
    
  return (
    <header>
        <div className="brand-logo">
          <Link to='/'>ALIAS</Link>
        </div>
        <NavContainer />
    </header>
  )
}

export default Header