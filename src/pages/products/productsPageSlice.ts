import { IProduct } from './../productPage/productPage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductsByCategory } from '../../firebase/queries'
import { PayloadAction } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk<IProduct[],string>(
  'products/fetchProducts',
  async (categoryId) => {
    const response = await getProductsByCategory(categoryId)    
    return response
  },
)

export interface ProductsState {
  products: IProduct[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | undefined | string
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default productsSlice.reducer
