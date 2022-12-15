import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ICartItem } from '../../pages/cart/addToCart'
import { getCartItems } from '../../pages/cart/cartSlice'

const CartDropdown = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cartItems.cartItems)
  const subtotal = useAppSelector(state => state.cartItems.subtotal)


  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  return (
  <div className='cart-dropdown'>
    <div className='table-container'>
     {
      <table>
        <thead>
        </thead>
        <tbody>
          {
            cartItems?.map((item:ICartItem)=><tr
              className='cartTableTr' 
              key={Math.random()}
              onClick = {()=>navigate(`/products/${item.product.id}`)}
              >
              <td><img className='cartDropdownImg' src={item.product.imageUrls[0]} alt="" /></td>
              <td></td>
              <td>{item.product.title}</td>
              <td>${item.product.price}</td>
              <td>x</td>
              <td className='productCount'> {item.qty}</td>
            </tr>)
          }
        </tbody>
      </table>
     }
    
     <div className='viewToCart'>
      <div>Subtotal: ${subtotal.toLocaleString()}</div>
       <button onClick={()=>navigate('/shoppingcart')}>VIEW CART</button>
     </div>
     </div>
  </div>
     
  )
}

export default CartDropdown