import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import List from "../../db/interfaces/list.interface";

const initialState: List[] = []

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        initList: (state, action: PayloadAction<List[]>) => action.payload,
    },
});

export const authActions = listSlice.actions;
export default listSlice.reducer;
