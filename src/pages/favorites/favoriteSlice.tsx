import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../productPage/productPage';

export interface IProductFav {
    categoryId?: string
    description: string
    details: string[]
    hashtags: string[]
    imageUrls: string[]
    price: number
    title: string
    inStock: number
  }

export interface favorit {
    favorits:IProduct[]
} 

const json = localStorage.getItem('favorites')


const initialState:favorit = {
    favorits:json?JSON.parse(json):[]
}

const favoriteSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        addFavorites(state,action:PayloadAction<IProduct>){
            state.favorits.push(action.payload)
        },
        removeFavorites(state,action){
            state.favorits = state.favorits.filter(fav=>fav.description !== action.payload.description)
        }
    }
})

export default favoriteSlice.reducer
export const {addFavorites,removeFavorites} = favoriteSlice.actions