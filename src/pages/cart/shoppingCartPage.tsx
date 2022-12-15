import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import NoCartItems from './noCartItems'
import './shoppingCart.css'
import {AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai'
import { addQtyToCartItem, calcCartSubtotal, removeCartItem, removeQtyFromCartItem } from './cartSlice'
import { IProduct } from '../productPage/productPage'
import { Link } from 'react-router-dom'
import {CiSquareRemove} from 'react-icons/ci'



const ShoppingCartPage = () => {
  const cartItems = useAppSelector(state => state.cartItems.cartItems)
  const subtotal = useAppSelector(state => state.cartItems.subtotal)
const dispatch = useAppDispatch()

  const handleMinusQty = (product: IProduct ) => {
    dispatch(removeQtyFromCartItem(product))
  }

  const handleAddQty = (product: IProduct) => {
    dispatch(addQtyToCartItem(product))
  }

  const handleRemoveItem = (product: IProduct) => {
    dispatch(removeCartItem(product))
  }

  const handleSubtotal = () => {
    dispatch(calcCartSubtotal())
  }


  useEffect(() => {
    handleSubtotal()
  }, [cartItems])


  return (
    <div>
      <h3 className='shopping-cart-header'>SHOPPING CART</h3>
      {
        cartItems.length ? 
        <div className='cart-main-grid'>
          <div>
            <div className="cart-items-header">
                      <span>product</span>
                      <span>qty</span>
                      <span>total price</span>
                    </div>
            {
              cartItems.map(item => {
                return (
                  <div key={item.product.id} className='cart-item-grid'>
                    <div className='cart-item-product-container'>
                      <div className='cart-item-product'>
                        <Link to={`/products/${item.product.id}`}>
                          <img src={item.product.imageUrls[0]} alt='product' />
                        </Link>
                        <Link to={`/products/${item.product.id}`}>
                          <span>{item.product.title}</span>
                        </Link>
                        <span>${item.product.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className='cart-item-qty'>
                      <button onClick={() => handleMinusQty(item.product)}>&#8722;</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleAddQty(item.product)}>+</button>
                    </div>
                    <div className='cart-item-total-price'>
                      <span>${(item.qty * item.product.price).toLocaleString()}</span>
                    </div>
                    <div className='remove-cart-item'>
                      <button onClick={() => handleRemoveItem(item.product)}><CiSquareRemove /></button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='cart-summary-wrapper'>
           <div className='cart-summary'>
             <h3>order summary</h3>
             <div className='summary-container'>
               Subtotal:
               <span>${subtotal.toLocaleString()}</span>
             </div>
             <div className='checkout'>
              <button className='checkout-btn'>checkout now</button>
             </div>
           </div>
          </div>
        </div>
        : 
        <NoCartItems />
      }
    </div>
  )
}

export default ShoppingCartPage