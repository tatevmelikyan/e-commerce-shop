import React, { useState, useEffect } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import { FaUserAlt, FaHeart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import CartDropdown from './cartDropdown'
import UserDropdown from './userDropdown'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '../../firebase/auth'
import { setCurrentUser } from '../slices/currentUserSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'



const CustomerNav = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(state => state.currentUser)


 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      console.log('auth state changed, user is :', user);
      dispatch(setCurrentUser({name: user.displayName, email: user.email, id: user.uid}))
    } else {
      console.log('no user :');
    }
  })
}, [])
  return (
    <nav className='customer-nav'>
      <ul>
        <li className='user-link'>
          <Link to={`/account${currentUser.id ? '' : '/signIn'}`}>
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
    </nav>
  )
}

export default CustomerNav
