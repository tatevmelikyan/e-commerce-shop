import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'
import CustomerNav from '../customerNav/customerNav'
import DepartmentsNav from '../departmentsNav/departmentsNav'
import SearchField from '../search/searchField'

const Header = () => {
  return (
    <div className='sticky-header'>
      <header>
        <div className='search-logo-customer'>
          <SearchField />
          <div className='brand-logo'>
            <Link to='/'>SAVILLA</Link>
          </div>
          <div className='customer-nav-container'>
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
