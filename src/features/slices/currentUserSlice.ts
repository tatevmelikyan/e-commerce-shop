import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    name: null,
    email: null,
    id: null
}



const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.id = action.payload.id
        },
        removeCurrentUser: (state) => {
            state.email = null
            state.id = null
            state.name = null
        }
    }
})


export const {setCurrentUser, removeCurrentUser} = currentUserSlice.actions

export default currentUserSlice.reducer