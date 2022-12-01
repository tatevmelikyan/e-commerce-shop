import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from '../features/departmentsNav/departmentsSlice'
import subDepartmentsReducer from '../pages/departmentPage/departmentPageSlice'
import categoriesReducer from '../pages/productsPage/productsPageSlice'
export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subDepartments: subDepartmentsReducer,
    products: categoriesReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

