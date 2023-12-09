import { createSlice } from "@reduxjs/toolkit";
import UserData from "./UserData";

const userSlice = createSlice({
    name: 'user',
    initialState: UserData,
    reducers: {
        showName: (state, action) => {
            let result = state.filter((item) => {
                return item.name == 'Amol Gharge'
            })
            return [...result]
        }

    }
})

export const { showName } = userSlice.actions
export default userSlice.reducer