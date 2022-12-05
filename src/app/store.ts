import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from '../features/departmentsNav/departmentsSlice'
import subDepartmentsReducer from '../pages/department/departmentPageSlice'
import categoriesReducer from '../pages/products/productsPageSlice'
import ProductPageReducer from '../pages/productPage/productPageSlice'


export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subDepartments: subDepartmentsReducer,
    products: categoriesReducer,
    product: ProductPageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
