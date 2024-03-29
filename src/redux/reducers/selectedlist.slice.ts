import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../db/interfaces/todo.interface";

interface SelectedListInteraface {
    name: string;
    todos: Todo[];
    isLoading: boolean
    err?: any
}

const initialState: SelectedListInteraface = {
    name: '',
    todos: [],
    isLoading: true,
}

const selectedListSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        initData: (state, action: PayloadAction<Omit<SelectedListInteraface, 'isLoading'>>) => {
            return { ...state, ...action.payload, err: null, isLoading: false }
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
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

export const selectedListActions = selectedListSlice.actions;
export default selectedListSlice.reducer;

