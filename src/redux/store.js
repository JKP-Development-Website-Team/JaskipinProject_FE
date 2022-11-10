import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth/AuthSlice";
import AnimasiReducer from "./animasi/AnimasiSlice";

export const store = configureStore({
    reducer: {
        auth:AuthSlice,
        animasiSlice:AnimasiReducer
    }
})