import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import { FaUserAlt, FaHeart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'

const CustomerNav = () => {
  return (
    <nav className='customer-nav'>
      <ul>
        <li className='user-link'>
          <Link to={'/account'}>
            <FaUserAlt />
          </Link>
        </li>
        <li>
          <Link to={'/favorites'}>
            <FaHeart />
          </Link>
        </li>
        <li>
          <Link to={'/shoppingcart'}>
            <HiShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default CustomerNav
