import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { ICartItem } from '../../pages/cart/addToCart'

const CartDropdown = () => {
  const [cartItems,setCartItems] = useState<ICartItem[]>()
  const navigate = useNavigate()

  const carts = localStorage.getItem('cards')

  let cartItemsArr:ICartItem[] = []
  if(carts){
    cartItemsArr = JSON.parse(carts)
  }
  
  useEffect(()=>{
    setCartItems(cartItemsArr)
    console.log(cartItems );
  },[])
  console.log(cartItems );
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
     <div>Total Price {cartItems?.reduce((a,b:ICartItem)=>{
      return a+b.qty*b.product.price
     },0)}</div>
       <button onClick={()=>navigate('/shoppingcart')}>VIEW CART</button>
     </div>
     </div>
  </div>
     
  )
}

export default CartDropdown