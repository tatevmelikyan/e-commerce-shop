import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from '../features/slices/departmentsSlice'
import subdepartmentsReducer from '../features/slices/subdepartmentsSlice'
import productsReducer from '../features/slices/productsSlice'
import favoritesReducer from '../features/slices/favoritesSlice'
import recentlyViewedReducer from '../features/slices/recentlyViewedSlice'
import categoriesForAdminSlice from '../features/slices/categoriesSlice'

import cartItemsReducer from '../features/slices/cartSlice'
import currentUserReducer from '../features/slices/currentUserSlice'
import usersToDisplaySlice from '../features/slices/usersSlice'

export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subdepartments: subdepartmentsReducer,
    products: productsReducer,
    recentlyViewed: recentlyViewedReducer,
    allCategories:categoriesForAdminSlice,
    favoriteItems: favoritesReducer,
    cartItems: cartItemsReducer,
    currentUser: currentUserReducer,
    users:usersToDisplaySlice
  }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




