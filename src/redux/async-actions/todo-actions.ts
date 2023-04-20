import { getListTodos, getListInfo, toggleTodoImportance, getImportantTodos } from "../../db/api/todo.api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectedListActions } from "../reducers/selectedlist.slice";
import Todo from "../../db/interfaces/todo.interface";
import { importantListActions } from "../reducers/importantlist.slice";


export const fetchTodosByListThunk = createAsyncThunk('todos/list-todos', async (listId: string, { dispatch }) => {
    dispatch(selectedListActions.setLoading(true))
    Promise.all([getListInfo(listId), getListTodos(listId)])
        .then((data) => {
            const [{ name }, todos] = data;
            dispatch(selectedListActions.initData({ name, todos }));
        })
        .catch((err) => dispatch(selectedListActions.setErr(err)))
        .finally(() => dispatch(selectedListActions.setLoading(false)));
}
)

export const fetchImportantTodosThunk = createAsyncThunk('todos/list-todos-important', async (user_id: string, { dispatch }) => {
    dispatch(importantListActions.setLoading(true))
    getImportantTodos(user_id)
        .then((todos) => {
            dispatch(importantListActions.initData({ todos }));
        })
        .catch((err) => dispatch(importantListActions.setErr(err)))
        .finally(() => dispatch(importantListActions.setLoading(false)));
}
)

export const toggleTodoImportanceThunk = createAsyncThunk(
    'todos/list-todos/importance',
    async (todo: Todo, { dispatch }
    ) => {
        const callerPl = { listId: todo.list, todoId: todo.uid, value: !todo.important }
        const response = await toggleTodoImportance(callerPl)
        if (response) {
            dispatch(selectedListActions.todoImportant({ todoid: callerPl.todoId, value: callerPl.value }))
        }
    }
)