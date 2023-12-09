import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

export const fetchToDo = createAsyncThunk ('fethToDo', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
} )

const todoSlice  = createSlice ({
    name : 'ToDo',
    initialState : {
        isLoading : false,
        isError : false,
        data : []   // used in state.data
    },

    extraReducers : (builder) => {

        builder.addCase(fetchToDo.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchToDo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })

        builder.addCase(fetchToDo.rejected, (state, action) => {
            state.isError = true;
        })
    }
})

export default todoSlice.reducer