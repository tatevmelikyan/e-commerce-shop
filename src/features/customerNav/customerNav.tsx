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
  const favoriteItemsCount = useAppSelector((state) => state.favoriteItems.favoriteItems).length
  const cartItemsCount = useAppSelector((state) => state.cartItems.cartItems).length

  return (
    <nav className='customer-nav'>
      <ul>
        <li className='user-link'>
          <Link to={`/account${currentUser ? '' : '/signIn'}`}>
            <FaUserAlt />
          </Link>
          <UserDropdown />
        </li>
        <li className='text'>{currentUser ? 'My Account' : 'Sign In'}</li>
        <li className='favoritesCount'>
          <Link to={'/favorites'}>
            <FaHeart />
          </Link>
        </li>
        <li className='text'>
          Favorites({currentUser ? currentUser.favoriteItems.length : favoriteItemsCount})
        </li>
        <li className='cart-link'>
          <Link to={'/shoppingcart'}>
            <HiShoppingCart />
          </Link>
          <CartDropdown />
        </li>
        <li className='text shoppingCartCount'>
          Shopping Cart({currentUser ? currentUser.cartItems.length : cartItemsCount})
        </li>
      </ul>
    </nav>
  )
}

export default CustomerNav
