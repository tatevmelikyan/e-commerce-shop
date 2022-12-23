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
    <div className='cart-dropdown'>
      <div className='table-container'>
        {
          <table>
            <thead></thead>
            <tbody>
              {cartItems?.map((item: ICartItem) => (
                <tr
                  className='cartTableTr'
                  key={Math.random()}
                  onClick={() => navigate(`/products/${item.product.id}`)}
                >
                  <td>
                    <img
                      className='cartDropdownImg'
                      src={item.product.imageUrls[0]}
                      alt=''
                    />
                  </td>
                  <td></td>
                  <td>{item.product.title}</td>
                  <td>${item.product.price}</td>
                  <td>x</td>
                  <td className='productCount'> {item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }

        <div className='viewToCart'>
          <div>Subtotal: ${subtotal.toLocaleString()}</div>
          <button onClick={() => navigate('/shoppingcart')}>VIEW CART</button>
        </div>
      </div>
    </div>
  )
}

export default CartDropdown
