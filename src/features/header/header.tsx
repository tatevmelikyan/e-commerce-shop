import React from 'react'
import './styles.css'


import { Link } from 'react-router-dom'
import CustomerNav from '../customerNav/customerNav'
import DepartmentsNav from '../departmentsNav/departmentsNav'

const Header = () => {
    
  return (
    
        <div className='sticky-header'>
          <header>
        <div className='logo-nav'> 
          <div className="brand-logo">
            <Link to='/'>ALIAS</Link>
          </div>
          <div className="customer-nav-container">
          <CustomerNav />
          </div>
        </div> 
        <div className='nav-container'>
      <DepartmentsNav />
    </div>
    </header>
        </div>
  )
}

export default Header