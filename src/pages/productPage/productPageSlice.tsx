import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (productId: string) => {
      const response = await axios.get(`http://localhost:4000/products/${productId}`)
      console.log(response.data, 'res data');
      return response.data
    },
  )

  interface Product {
    title?: string;
    imageUrls?: string[];
    price?: {numbers:[]};
    description?: string;
    details?: string[]
    id?:string
  }

  interface ProductPage {
    product:Product;
    status:string;
    error:string|null|undefined
  }

  const initialState:ProductPage = {
    product: {},
    status: 'idle',
    error: null,
  }


  const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProduct.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.product = action.payload
        })
        .addCase(fetchProduct.rejected, (state, action) => {
          state.status = 'failed'
        //   state.error = action.error.message
        })
    },
  })
  
  export default ProductSlice.reducer