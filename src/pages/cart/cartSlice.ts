import { ICartItem } from './addToCart';
import { IProduct } from './../productPage/productPage';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    cartItems: ICartItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string
}

const initialState: CartState = {
    cartItems: [],
    status: 'idle',
    error: null
}

const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        getCartItems: (state) => {
            const cartItems = localStorage.getItem('cartItems')
        if(cartItems){
            state.cartItems = JSON.parse(cartItems)
        } 
        },
        updateCartItems: (state, action: {payload: IProduct, type: string}) => {
            const product = action.payload
            const cartItem = state.cartItems.find((item)=>item.product.id === product.id)
            if(!cartItem){
                state.cartItems.push({product, qty: 1})
            } else {
                cartItem.qty++
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        }
    }
})


export const {getCartItems,updateCartItems} = cartSlice.actions

export default cartSlice.reducer