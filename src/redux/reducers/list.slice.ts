import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import List from "../../db/interfaces/list.interface";

const initialState = {
    data: [] as List[],
    isLoading: true,
    err: null
}


const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        initList: (state, action: PayloadAction<Partial<typeof initialState>>) => {
            return { ...state, ...action.payload, err: null }
        },
        addList: (state, action: PayloadAction<List>) => {
            state.data.push(action.payload)
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setErr: (state, action: PayloadAction<any>) => {
            state.err = action.payload
        }
    },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
