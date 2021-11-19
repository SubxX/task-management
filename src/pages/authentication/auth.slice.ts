import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "./interfaces/user.interface";

const initialState: User = {
    name: '',
    email: '',
    profilepic: '',
    designation: '',
    authenticated: false
}

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => action.payload,
        removeUser: (state) => initialState,
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
