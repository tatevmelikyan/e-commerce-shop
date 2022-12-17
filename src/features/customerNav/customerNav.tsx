import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import { FaUserAlt, FaHeart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import CartDropdown from './cartDropdown'
import UserDropdown from './userDropdown'



const CustomerNav = () => {
  const [hideCartDropDown, setHideCartDropDown] = useState(true)

  const handleCartHover = () => {
    setHideCartDropDown(prevState => !prevState)
  }


  return (
    <nav className='customer-nav'>
      <ul>
        <li className='user-link'>
          <Link to={'/account/signIn'}>
            <FaUserAlt />
          </Link>
          <UserDropdown />
        </li>
        <li>
          <Link to={'/favorites'}>
            <FaHeart />
          </Link>
        </li>
        <li className='cart-link'>
          <Link to={'/shoppingcart'}>
            <HiShoppingCart />
          </Link>
          <CartDropdown/>
        </li>
      </ul>
      {
        !hideCartDropDown && <CartDropdown /> 
      }
    </nav>
  )
}

export default CustomerNav
