import React from 'react'
import { getAllProducts } from '../../../../firebase/queries'
import { IProduct } from '../../../productPage/productPage'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchedProducts = createAsyncThunk('allProducts/fetchedProducts', async () => {
  const response = await getAllProducts()
  return response
})

export interface ProductsState {
  allProducts: IProduct[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | undefined | string
}

const initialState: ProductsState = {
  allProducts: [],
  status: 'idle',
  error: null,
}

const productsForAdminSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchedProducts.pending, (state) => {
        state.status = 'loading'        
      })
      .addCase(fetchedProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        //@ts-ignore
        state.allProducts = action.payload.sort((a,b)=> a.title.localeCompare(b.title))
      })
      .addCase(fetchedProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})


export default productsForAdminSlice.reducer

