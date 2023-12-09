import { configureStore } from "@reduxjs/toolkit";
import  showSlice, { addToCart } from "./Slice";

const store = configureStore({
    reducer : {
        products : showSlice
    }
})

export default store