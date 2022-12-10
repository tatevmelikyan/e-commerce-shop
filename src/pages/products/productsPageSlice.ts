import { TOrder } from './sortBy'
import { IProduct } from '../productPage/productPage'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductsByCategory } from '../../firebase/queries'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (categoryId: string) => {
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

interface ISortAction {
  type: string
  payload: TOrder
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortByPrice(state, action: ISortAction) {
      if (action.payload === 'asc') {
        state.products = state.products.sort((a, b) => a.price - b.price)
      } else if (action.payload === 'desc') {
        state.products = state.products.sort((a, b) => b.price - a.price)
      } else {
        state.products = state.products.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
      }
    },
  },
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
export const { sortByPrice } = productsSlice.actions
