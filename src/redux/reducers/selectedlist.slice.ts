import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../db/interfaces/todo.interface";
import { sortTodos } from '../../pages/app/utils/app.utils'

interface SelectedListInteraface {
    name: string;
    todos: Todo[];
    completed?: Todo[];
    incomplete?: Todo[];
}

const initialState: SelectedListInteraface = {
    name: '',
    todos: [],
    completed: [],
    incomplete: [],
}

const selectedListSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        initData: (_, action: PayloadAction<SelectedListInteraface>) => {
            const [completed, incomplete] = sortTodos(action.payload.todos);
            return { completed, incomplete, ...action.payload }
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        completeTodo: (state, action: PayloadAction<{ todoid: string }>) => {
            state.todos.map(td => td.uid === action.payload.todoid ? td.completed = !td.completed : td)
            const [completed, incomplete] = sortTodos(state.todos);
            state.completed = completed;
            state.incomplete = incomplete;
        }
    }
});

export const selectedListActions = selectedListSlice.actions;
export default selectedListSlice.reducer;
