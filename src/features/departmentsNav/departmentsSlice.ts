import { RootState } from '../../app/store'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface DepartmentsState {
  departments: {
    id: string
    name: string
  }[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | undefined | string
}

const initialState = {
  departments: [],
  status: 'idle',
  error: null,
} as DepartmentsState

const DEPARTMENTS_URL = 'http://localhost:4000/departments'

export const fetchDepartments = createAsyncThunk('departments/fetchAllDepartments', async () => {
  const response = await axios.get(DEPARTMENTS_URL)  
  
  return response.data
})

const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.departments = action.payload
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default departmentsSlice.reducer

export const selectAllDepartments = (state: RootState) => state.departments.departments
export const selectDepartmentsStatus = (state: RootState) => state.departments.status
export const selectDepartmentsError = (state: RootState) => state.departments.error
