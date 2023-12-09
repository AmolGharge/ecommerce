import { configureStore } from "@reduxjs/toolkit";
import  showName  from "./Slice";

const store = configureStore({
    reducer : {
        userName : showName
    }
})

export  default store