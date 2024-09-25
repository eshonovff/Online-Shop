import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../reducer/TodoList";



export const store = configureStore({
    reducer:{
        counterSlice, 
    },
})