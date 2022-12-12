import React,{FC,useState,useEffect} from 'react'
import { IProduct } from '../productPage/productPage'
import './shoppingCart.css'

interface ICartItem {
    product:IProduct;
    qty:number
}
const  AddToCart:FC<{ product: IProduct }> = ({product}) => {
    const[addedToCart,setAddedTocart] = useState(false)

    const handleAddToCard = () => {
        const cards = localStorage.getItem('cards')
        let cartItemsArr:ICartItem[] = []
        if(cards){
            cartItemsArr = JSON.parse(cards)
        } 
       
        const cartItem = cartItemsArr.find((item:ICartItem)=>item.product.id === product?.id)

        if(!cartItem){
            cartItemsArr.push({product,qty: 1})
            localStorage.setItem('cards',JSON.stringify(cartItemsArr))
            console.log('add');
        } else {
            cartItem.qty++
            localStorage.setItem('cards',JSON.stringify(cartItemsArr))
        }
    }
  return (
     <div className='add-cart-div'>
        <button onClick={handleAddToCard} className='button-add-cart'>ADD TO CART</button>
        {
            addedToCart?<span className='productAddedCart'>product added to cart</span>:''
        }
    </div>
  )
}

export default AddToCart