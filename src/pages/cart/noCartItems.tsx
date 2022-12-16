import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const NoCartItems = () => {
  const navigate = useNavigate()
  return (
    <div className='empty-cart-container'>
      <h1>your shopping cart is empty</h1>
<div className='cart-icon'>
  <FaCartPlus />
</div>
<button className='cart-sign-in-btn' onClick={() => navigate('/loginPage')}>Sign In</button>
<p className='sign-in-text'>Have an account? Sign in to view your added items in your account</p>
    </div>
  )
}

export default NoCartItems