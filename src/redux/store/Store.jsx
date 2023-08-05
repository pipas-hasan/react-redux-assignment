import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../state/todo/TodoSlice';



export default  configureStore({
    reducer: {
       todo:TodoReducer
    }
})

