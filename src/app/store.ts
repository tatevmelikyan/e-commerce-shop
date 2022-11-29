import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import departmentsReducer from '../features/departmentsNav/departmentsSlice'
import subDepartmentsReducer from '../pages/departmentPage/departmentPageSlice'

export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    subDepartments: subDepartmentsReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

