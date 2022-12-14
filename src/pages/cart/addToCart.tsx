import React,{FC,useState} from 'react'
import { useAppDispatch } from '../../app/hooks';
import { IProduct } from '../productPage/productPage'
import { updateCartItems } from './cartSlice';
import './shoppingCart.css'

export interface ICartItem {
    product:IProduct;
    qty:number
}

const  AddToCart:FC<{ product: IProduct }> = ({product}) => {
    const[addedToCart,setAddedToCart] = useState(false)
    const dispatch = useAppDispatch()

    const handleAddToCard = () => {
        dispatch(updateCartItems(product))
        setAddedToCart(true)
        setTimeout(()=>{setAddedToCart(false)},800)
        // const cartItems = localStorage.getItem('cartItems')
        // let cartItemsArr:ICartItem[] = []
        // if(cartItems){
        //     cartItemsArr = JSON.parse(cartItems)
        // } 
       
        // const cartItem = cartItemsArr.find((item:ICartItem)=>item.product.id === product?.id)

        // if(!cartItem){
        //     cartItemsArr.push({product,qty: 1})
        //     localStorage.setItem('cartItems',JSON.stringify(cartItemsArr))
        //     console.log('add');
        // } else {
        //     cartItem.qty++
        //     localStorage.setItem('cartItems',JSON.stringify(cartItemsArr))
        // }
    }

  return (
     <div className='add-cart-div'>
        <button onClick={handleAddToCard} className='button-add-cart'>ADD TO CART</button>
        <div className='animDiv'>
        
            <img className={addedToCart?'added-productImage-to-cart ':'added-productImage-to-cart-Dnone'} src={product?.imageUrls[0]} alt="" />        
        </div>
      
    </div>
  )
}

export default AddToCart