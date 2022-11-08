import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import AuthService from './AuthService'

const initialState = {
    user:null,

}
export const loginAuth = createAsyncThunk('auth/login', async(userData) => {
    try {
        return await AuthService.loginFunc(userData)
    } catch (error) {
        console.log(error)
    }
}) 
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginReducer:(state, action) => {
            state.user = action.payload
        }
    }
})

export const {loginReducer} = authSlice.actions
export default authSlice.reducer