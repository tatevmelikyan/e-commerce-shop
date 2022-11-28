import { RootState } from '../../app/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface departmentsState {
    departments: {
        id: string,
        name: string
    }[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null | undefined | string
  }


  const initialState = {
    departments: [],
    status: 'idle',
    error: null
  } as departmentsState


  export const fetchDepartments = createAsyncThunk(
    'departments/fetchAllDepartmentsStatus', 
    async () => {
        const response = await fetch('http://localhost:4000/departments').then(res => res.json())
        return response
    }
  )

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
    }
})



export default departmentsSlice.reducer

export const departmentsSelector = (state: RootState) => state.departments.departments