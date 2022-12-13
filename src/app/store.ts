import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from '../features/departmentsNav/departmentsSlice'
import subdepartmentsReducer from '../pages/department/subdepartmentsSlice'
import productsReducer from '../pages/products/productsSlice'
import productsForAdminSlice from '../pages/admin/pagesForAdmin/productPage/productSlice'
import recentlyViewedReducer from '../features/recentlyViewed/recentlyViewedSlice'
import categoriesForAdminSlice from '../pages/admin/pagesForAdmin/productPage/filterByCategory/categoriesToFilterSlice'

import userReducer  from  '../pages/login/userSlices'
export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subdepartments: subdepartmentsReducer,
    products: productsReducer,
    user:userReducer,
    allProductsForAdmin:productsForAdminSlice,
    recentlyViewed: recentlyViewedReducer,
    allCategories:categoriesForAdminSlice,
  }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




