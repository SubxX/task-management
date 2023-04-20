import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../db/interfaces/todo.interface";

interface ImportantListInteraface {
    todos: Todo[];
    isLoading: boolean
    err?: any
}

const initialState: ImportantListInteraface = {
    todos: [],
    isLoading: true,
}

const importantListSlice = createSlice({
    name: "todo-important",
    initialState,
    reducers: {
        initData: (state, action: PayloadAction<Omit<ImportantListInteraface, 'isLoading'>>) => {
            return { ...state, ...action.payload, err: null, isLoading: false }
        },
        completeTodo: (state, action: PayloadAction<{ todoid: string }>) => {
            state.todos.map(td => td.uid === action.payload.todoid ? td.completed = !td.completed : td)
        },
        todoImportant: (state, { payload }: PayloadAction<{ todoid: string; value: boolean }>) => {
            state.todos.map(td => td.uid === payload.todoid ? td.important = payload.value : td)
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setErr: (state, action: PayloadAction<any>) => {
            state.err = action.payload
        }
    }
});

export const importantListActions = importantListSlice.actions;
export default importantListSlice.reducer;

