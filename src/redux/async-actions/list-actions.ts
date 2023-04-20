import { getUserLists } from "../../db/api/todolist.api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { listActions } from "../reducers/list.slice";


export const fetchListsThunk = createAsyncThunk('todos/list', async (userId: string, { dispatch, getState }) => {
    dispatch(listActions.setLoading(true))
    getUserLists(userId)
        .then((data) => {
            dispatch(listActions.initList({ data }));
        })
        .catch((err) => dispatch(listActions.setErr(err)))
        .finally(() => dispatch(listActions.setLoading(false)));
}
)