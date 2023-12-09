import { configureStore } from "@reduxjs/toolkit";
import showData from "./Slice";

const store = configureStore({
    reducer: {
        show: showData,
    }
})

export default store