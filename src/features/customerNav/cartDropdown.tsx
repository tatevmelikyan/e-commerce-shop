import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getCartItems,calcCartSubtotal } from '../slices/cartSlice'



const CartDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cartItems.cartItems)
  const subtotal = useAppSelector((state) => state.cartItems.subtotal)

  const handleSubtotal = () => {
    dispatch(calcCartSubtotal())
  }

  useEffect(() => {
    handleSubtotal()
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  return (
    <div className='cart-dropDown-container'>
      <div className='cart-dropDown-list'>
        {cartItems.map((item) => (
          <div
            onClick={() => navigate(`/products/${item.product.id}`)}
            className='dropDownListItem'
            key={Math.random()}
          >
            <img
              src={item.product.imageUrls[0]}
              alt=''
            />
            <span className='dropDownListItemTitle'>{item.product.title}</span>
            <span className='dropDownListItemPrice'>
              ${item.product.price} x {item.qty}
            </span>
          </div>
        ))}
      </div>
      <div className='cart-dropDown-button'>
        <div>Subtotal: ${subtotal.toLocaleString()}</div>
        <button onClick={() => navigate('/shoppingcart')}>VIEW CART</button>
      </div>
    </div>
  )
}

export default CartDropdown
