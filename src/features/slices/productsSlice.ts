import { TOrder } from '../../pages/products/sortBy'
import { IProduct } from '../../pages/productPage/productPage'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getProductsByCategory } from '../../firebase/queries'

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProducts',
  async (categoryId: string) => {
    const response = await getProductsByCategory(categoryId)
    return response
  },
)

export const fetchProductsForSearch = createAsyncThunk(
  'products/fetchAllProducts',
  async (keyword: string) => {
    const products = await getAllProducts()
    return { products, keyword }
  },
)


export const fetchAllProducts = createAsyncThunk('allProducts/fetchedProducts', async () => {
  const response = await getAllProducts()
  return response
})


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
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload.sort((a,b)=> a.title.localeCompare(b.title))
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchProductsForSearch.fulfilled, (state, action) => {
        const { products, keyword } = action.payload
        state.products = products.filter((product) => {
          return product.title
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(keyword.replace(/\s/g, '').toLowerCase())
        })
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload.sort((a,b)=> a.title.localeCompare(b.title))
      })
  },
})

export default productsSlice.reducer
export const { sortByPrice } = productsSlice.actions


