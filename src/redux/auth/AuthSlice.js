import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import AuthService from './AuthService'
import {setMessage} from './AuthMessage'


const user = JSON.parse(localStorage.getItem('user'))

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}, thunkAPI) => {
        try {
          const data = await AuthService.loginFunc(email, password);
          return {user: data}  
        } catch (error) {
            const message = 
            (error.response && 
                error.response.data &&
                error.response.data.message) || 
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("auth/login", async () => {
    await AuthService.logoutFunc()
})

const initialState = user ? {isLoggedIn: true, user} : {isLoggedIn: false, user:null};

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers: {
        [login.fulfilled] : (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user; 
        },
        [login.rejected] : (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled] : (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
})

const {reducer} = AuthSlice;
export default reducer

// export const {loginReducer} = authSlice.actions
// export default authSlice.reducer