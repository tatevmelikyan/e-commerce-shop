import React from 'react'
import { useNavigate } from 'react-router'
import { useAppSelector } from '../../app/hooks'
import { ICartItem } from '../../pages/cart/addToCart'

const CartDropdown: React.FC = () => {
  const navigate = useNavigate()
  const currentUser = useAppSelector((state) => state.currentUser.currentUser)
  const localCartItems = useAppSelector((state) => state.cartItems.cartItems)
  const cartItems = currentUser ? currentUser.cartItems : localCartItems
  const localSubtotal = useAppSelector((state) => state.cartItems.subtotal)
  const userCartSubTotal = useAppSelector((state) => state.currentUser.userCartSubTotal)
  const subtotal = currentUser ? userCartSubTotal : localSubtotal


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
