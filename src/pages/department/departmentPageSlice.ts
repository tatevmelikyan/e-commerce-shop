import { RootState } from '../../app/store'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface SubDepartmentsState {
  subDepartments: {
    id: string
    name: string
    departmentId: string
    categories: {
      id: string
      name: string
      imageUrl: string
      subDepartmentId: string
    }[]
  }[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | undefined | string
}

const initialState: SubDepartmentsState = {
  subDepartments: [],
  status: 'idle',
  error: null,
}

export const fetchSubDepartments = createAsyncThunk(
  'subDepartments/fetchSubDepartments',
  async (departmentId: string) => {
    const response = await axios.get(
      `http://localhost:4000/departments/${departmentId}/subDepartments?_embed=categories`,
    )
    return response.data
  },
)

const subDepartmentsSlice = createSlice({
  name: 'subDepartments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubDepartments.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSubDepartments.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.subDepartments = action.payload
      })
      .addCase(fetchSubDepartments.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default subDepartmentsSlice.reducer

export const selectSubDepartmentsByDepartment = (state: RootState) =>
  state.subDepartments.subDepartments
export const selectSubDepartmentsStatus = (state: RootState) => state.subDepartments.status
export const selectSubDepartmentsError = (state: RootState) => state.subDepartments.error
