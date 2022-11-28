import React from 'react'
import CustomerNav from '../customerNav/customerNav'
import DepartmentsNav from '../departmentsNav/departmentsNav'

const NavContainer = () => {
  return (
    <div className='nav-container'>
      <CustomerNav />
      <DepartmentsNav />
    </div>
  )
}

export default NavContainer