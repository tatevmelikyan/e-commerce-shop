import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from '../features/departmentsNav/departmentsSlice'
import subdepartmentsReducer from '../pages/department/subdepartmentsSlice'
import productsReducer from '../pages/products/productsPageSlice'


import userReducer  from  '../pages/login/userSlices'
export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subdepartments: subdepartmentsReducer,
    products: productsReducer,
    user:userReducer,
  }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




