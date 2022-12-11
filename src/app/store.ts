import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from '../features/departmentsNav/departmentsSlice'
import subdepartmentsReducer from '../pages/department/subdepartmentsSlice'
import productsReducer from '../pages/products/productsPageSlice'
import favoriteReducer from '../pages/favorites/favoriteSlice'


import userReducer  from  '../pages/login/userSlices'
export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subdepartments: subdepartmentsReducer,
    products: productsReducer,
    user:userReducer,
    favorites:favoriteReducer,
  }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




