import {createSlice} from    '@reduxjs/toolkit'



const initialState={
    email:null,
    token:null,
    id:null,
};


const  userSlices =createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state,action){
            state.email=action.payload.email
            state.id=action.payload.id
            state.token=action.payload.token
        },
        removeUser(state){
            state.email=null
            state.id=null
            state.token=null
        }
    }
})

export const {setUser,removeUser}=userSlices.actions
export default userSlices.reducer