import { configureStore} from "@reduxjs/toolkit";
import todoSlice from './Slice' 

const store = configureStore({
    reducer : {
        todo : todoSlice
    }
});

export default store