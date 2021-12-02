import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import List from "../../db/interfaces/list.interface";

const initialState: List[] = []

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        initList: (state, action: PayloadAction<List[]>) => action.payload,
        addList: (state, action: PayloadAction<List>) => {
            state.push(action.payload)
        }
    },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
