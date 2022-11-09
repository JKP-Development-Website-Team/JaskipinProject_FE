import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = false;


export const Animasi = createSlice({
    name:"animated",
    initialState : {value : initialStateValue},
    reducers:{
        animatedReducers : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {animatedReducers} = Animasi.actions
export default Animasi.reducer