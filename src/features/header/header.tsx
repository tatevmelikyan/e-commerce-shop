import React from 'react'
import NavContainer from '../navContainer/navContainer'
import { homePageRouteLink } from '../../routeLinks'
import { Link } from 'react-router-dom'

const Header = () => {
    
  return (
    <header>
        <div className="brand-logo">
          <Link to={homePageRouteLink}>ALIAS</Link>
        </div>
        <NavContainer />
    </header>
  )
}

export default Header