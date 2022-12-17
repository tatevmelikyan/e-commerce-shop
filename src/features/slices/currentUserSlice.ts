import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
}

// const getCurrentUser = createAsyncThunk(
//     ''
// )

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            console.log(action.payload, 'payload');
            state.email = action.payload.email
            state.name = action.payload.name
        }
    }
})


export const {setCurrentUser} = currentUserSlice.actions

export default currentUserSlice.reducer