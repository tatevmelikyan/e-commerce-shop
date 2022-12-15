import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from '../features/slices/departmentsSlice'
import subdepartmentsReducer from '../features/slices/subdepartmentsSlice'
import productsReducer from '../features/slices/productsSlice'
import productsForAdminSlice from '../features/slices/productSlice'
import favoritesReducer from '../features/slices/favoritesSlice'
import recentlyViewedReducer from '../features/slices/recentlyViewedSlice'
import categoriesForAdminSlice from '../features/slices/categoriesToFilterSlice'

import userReducer  from  '../features/slices/userSlices'
import cartItemsReducer from '../features/slices/cartSlice'

export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subdepartments: subdepartmentsReducer,
    products: productsReducer,
    user:userReducer,
    allProductsForAdmin:productsForAdminSlice,
    recentlyViewed: recentlyViewedReducer,
    allCategories:categoriesForAdminSlice,
    favoriteItems: favoritesReducer,
    cartItems: cartItemsReducer
  }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




