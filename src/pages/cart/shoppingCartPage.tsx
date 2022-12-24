import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import NoCartItems from './noCartItems'
import './shoppingCart.css'
import './shoppingCartMedia.css'
import {RiVisaLine} from 'react-icons/ri'
import { ReactComponent  as MastercardLogo } from '../../assets/mastercardLogo.svg'
import { ReactComponent  as VisaLogo } from '../../assets/Visa_Inc.-Logo.wine.svg'



import {
  addQtyToCartItem,
  calcCartSubtotal,
  removeCartItem,
  removeQtyFromCartItem,
} from '../../features/slices/cartSlice'
import { IProduct } from '../productPage/productPage'
import { Link } from 'react-router-dom'
import {CiSquareRemove} from 'react-icons/ci'
import { calcUserCartSubtotal, updateUserCartItems } from '../../features/slices/currentUserSlice'



const ShoppingCartPage = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(state => state.currentUser.currentUser)
  const localCartItems = useAppSelector(state => state.cartItems.cartItems)
  const localSubtotal = useAppSelector(state => state.cartItems.subtotal)
  const userCartSubtotal = useAppSelector(state => state.currentUser.userCartSubTotal)
  const subtotal = currentUser ? userCartSubtotal : localSubtotal
  const cartItems = currentUser ? currentUser.cartItems : localCartItems

useEffect(() => {
  handleSubtotal()
}, [cartItems])


  const handleMinusQty = (product: IProduct ) => {
    if(currentUser) {
      dispatch(updateUserCartItems({product, actionType: 'removeQty'}))
    } else {
      dispatch(removeQtyFromCartItem(product))
    }
  }

  const handleAddQty = (product: IProduct) => {
    if(currentUser) {
      dispatch(updateUserCartItems({product, actionType: 'addQty'}))
    } else {
      dispatch(addQtyToCartItem(product))
    }
  }

  const handleRemoveItem = (product: IProduct) => {
    if(currentUser) {
      dispatch(updateUserCartItems({product, actionType: 'removeFromCart'}))
    } else {
      dispatch(removeCartItem(product))
    }
  }

  const handleSubtotal = () => {
    if(currentUser) {
      dispatch(calcUserCartSubtotal())
    } else {
      dispatch(calcCartSubtotal())
    }
  }


  
  return (
    <div>
      <h3 className='shopping-cart-header'>SHOPPING CART</h3>
      {cartItems.length ? (
        <div className='cart-main-grid'>
          <div>
            <div className='cart-items-header'>
              <span>product</span>
              <span>qty</span>
              <span>total price</span>
            </div>
            {cartItems.map((item) => {
              return (
                <div
                  key={item.product.id}
                  className='cart-item-grid'
                >
                  <div className='cart-item-product-container'>
                    <div className='cart-item-product'>
                      <Link to={`/products/${item.product.id}`}>
                        <img
                          src={item.product.imageUrls[0]}
                          alt='product'
                        />
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
                    <button onClick={() => handleRemoveItem(item.product)}>
                      <CiSquareRemove />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='cart-summary-wrapper'>
            <div className='cart-summary'>
              <h3>order summary</h3>
              <div className='summary-container'>
                <div>Discount
                  <span className='apply-discount'>Apply discount</span>
                </div>
                <div>Delivery
                  <span>FREE</span>
                </div>
               <div className='summary-subtotal'> Subtotal:
                <span>${subtotal.toLocaleString()}</span></div>
              </div>
              <div className='checkout'>
                <button className='checkout-btn'>checkout now</button>
              </div>
              <div className='accepted-payments-container'>
                <span>We accept</span>
                <div className='accepted-payments'>
                  <ul>
                    <li><span><VisaLogo width={50} height='auto' title='Visa'/></span></li>
                    <li><span><MastercardLogo width={50} height='auto' title='Mastercard' /></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoCartItems />
      )}
    </div>
  )
}

export default ShoppingCartPage
