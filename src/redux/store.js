// initialise this file as store

import { configureStore } from "@reduxjs/toolkit";
import slice from "./counterSlice";

export const store = configureStore({
    reducer:{
      Counter:slice,
    }
})