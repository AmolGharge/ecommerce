import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 96 }

const showSlice = createSlice({
    name: 'show_Data',
    initialState,
    reducers: {
        showData: (state, action) => {
            state.value = state.value
        },

        increment: (state, action) => {
            state.value = state.value + 1
        }
    }
})

export const { showData, increment } = showSlice.actions
export default showSlice.reducer

