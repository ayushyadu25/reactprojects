import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value += 1;
        },
        decrement:(state)=>{
            state.value -= 1;       

        },
        incrementBy5:(state)=>{
            state.value+=5;
        },
        decrementBy5:(state)=>{
            state.value-=5;
        },
        incrementByAmount:(state,actions)=>{
            state.value+=actions.payload;
        }

    }
    })



    export const {increment,decrement,incrementBy5,decrementBy5,incrementByAmount} = counterSlice.actions;
    export default counterSlice.reducer;
