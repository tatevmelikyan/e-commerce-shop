import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import { FaUserAlt, FaHeart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import CartDropdown from './cartDropdown'
import UserDropdown from './userDropdown'
import { useAppSelector } from '../../app/hooks'

const CustomerNav: React.FC = () => {
  const currentUser = useAppSelector((state) => state.currentUser.currentUser)

  return (
    <nav className='customer-nav'>
      <ul>
        <li className='user-link'>
          <Link to={`/account${currentUser ? '' : '/signIn'}`}>
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
          <CartDropdown />
        </li>
      </ul>
    </nav>
  )
}

export default CustomerNav
