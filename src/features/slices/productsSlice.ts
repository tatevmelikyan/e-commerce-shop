import { TOrder } from '../../pages/products/sortBy'
import { IProduct } from '../../pages/productPage/productPage'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getProductsByCategory } from '../../firebase/queries'
import { type } from 'os'

export const fetchProductsByCategory = createAsyncThunk<
 {
  pages: number;
  products: IProduct[];
},
{
  pages:number;
  categoryId:string
}
>(
  'products/fetchProducts',
  async ({pages,categoryId}) => {
    const response = await getProductsByCategory(pages,categoryId )
    return response
  },
)

export const fetchProductsForSearch = createAsyncThunk(
  'products/fetchAllProducts',
  //@ts-ignore
  async (pages:number,keyword: string) => {
    const products = await getAllProducts(pages)
    return { products, keyword }
  },
)


export const fetchAllProducts = createAsyncThunk('allProducts/fetchedProducts', async (pages:number) => {
  const response = await getAllProducts(pages)
  return response
})


export interface ProductsState {
  products: IProduct[]
  pages:number
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | undefined | string
}

const initialState: ProductsState = {
  products: [],
  pages:10, 
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
    // sortByPages(state, action:ISortPages) {
    //   console.log(state.products);

    //   console.log('!!!!!!!!!!!im in a slice');
    //   let count = 0
    //   //@ts-ignore
    //   state.products = state.products.map(product=>{
    //     if(count !== action.payload) {
    //       count++
    //       return product
    //     }
    //   })
    //   state.products.length = action.payload
    //   console.log(state.products);
      
    // },
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
        state.products = action.payload.products.sort((a,b)=> a.title.localeCompare(b.title))
        state.products.length = action.payload.pages
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchProductsForSearch.fulfilled, (state, action) => {
        const { products, keyword } = action.payload
        //@ts-ignore
        state.products = products.filter((product) => {
          return product.title
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(keyword.replace(/\s/g, '').toLowerCase())
        })
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload.products.sort((a,b)=> a.title.localeCompare(b.title))
        state.products.length = action.payload.pages
      })
  },
})

export default productsSlice.reducer
export const { sortByPrice } = productsSlice.actions


