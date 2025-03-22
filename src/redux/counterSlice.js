import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        // action are difined in this reducer
        increment:(state,action)=>{
            state.value =state.value+action.payload
        },
        // function to decrement
        decrement:(state,action)=>{
            state.value = state.value-action.payload
        },
        // function to reset value
        reset:(state)=>{
            state.value=0
        }
    }
})
// actions is required by the component to perform increment, decrement, reset
export const {increment,decrement,reset} = counterSlice.actions;

// reducer is required by the store
export default counterSlice.reducer