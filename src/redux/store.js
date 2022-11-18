import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth/AuthSlice";
import AuthMessage from './auth/AuthMessage'
import AnimasiReducer from "./animasi/AnimasiSlice";

export const store = configureStore({
    reducer: {
        auth:AuthSlice,
        animasiSlice:AnimasiReducer,
        message:AuthMessage
    },
    devTools:true
})