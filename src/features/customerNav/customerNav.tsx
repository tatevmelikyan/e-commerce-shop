import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import { FaUserAlt, FaHeart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import CartDropdown from './cartDropdown'



const CustomerNav = () => {
  const [hideCartDropDown, setHideCartDropDown] = useState(true)

  const handleCartHover = () => {
    setHideCartDropDown(prevState => !prevState)
  }


  return (
    <nav className='customer-nav'>
      <ul>
        <li className='user-link'>
          <Link to={'/loginPage'}>
            <FaUserAlt />
          </Link>
        </li>
        <li>
          <Link to={'/favorites'}>
            <FaHeart />
          </Link>
        </li>
        <li className='cart-link' onMouseOver={handleCartHover} onMouseOut={handleCartHover}>
          <Link to={'/shoppingcart'}>
            <HiShoppingCart />
          </Link>
        </li>
      </ul>
      {
        !hideCartDropDown && <CartDropdown /> 
      }
    </nav>
  )
}

export default CustomerNav
