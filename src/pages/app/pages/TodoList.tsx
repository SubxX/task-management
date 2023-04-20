import { useEffect, useMemo } from "react";
import Header from "../../../components/ui/Header";
import Devider from "../../../components/ui/Devider";
import Todo from "../components/Todo";
import { useParams } from "react-router";
import TodoI from "../../../db/interfaces/todo.interface";
import CircularProgress from "@mui/material/CircularProgress";
import { selectedListActions } from "../../../redux/reducers/selectedlist.slice";
import { useAppDispatch } from "../../../redux/store/app.store";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/app.store";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { fetchTodosByListThunk } from "../../../redux/async-actions/todo-actions";
import { sortTodos } from "../utils/app.utils";

const TodoList = () => {
  const { listid }: any = useParams();
  const dispatch = useAppDispatch();
  const { todos, name, isLoading } = useSelector(
    (state: RootState) => state.selectedList
  );
  const [completed, incomplete] = useMemo(() => sortTodos(todos), [todos]);

  useEffect(() => {
    dispatch(fetchTodosByListThunk(listid));
  }, []);

  function todoStatehandler(todoid: string, type = "complete") {
    dispatch(selectedListActions.completeTodo({ todoid }));
  }

  if (isLoading)
    return (
      <div className="min-h-screen grid place-items-center w-full">
        <CircularProgress />
      </div>
    );

  return (
    <div className="flex-grow container mx-auto">
      <Header
        listid={listid}
        name={name}
        total={todos.length}
        completed={completed.length}
      />

      <div className="todo-list mt-5 px-4">
        {!Boolean(todos.length) && (
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            No todos found— <strong>Please add one!</strong>
          </Alert>
        )}

        {incomplete.map((todo: TodoI) => (
          <Todo key={todo.uid} todo={todo} todoStatehandler={todoStatehandler}>
            {todo.todo}
          </Todo>
        ))}

        {Boolean(completed.length) && Boolean(incomplete.length) && (
          <Devider classname="my-5" />
        )}

        {Boolean(completed.length) &&
          completed.map((todo: TodoI) => (
            <Todo
              key={todo.uid}
              todo={todo}
              todoStatehandler={todoStatehandler}
            >
              {todo.todo}
            </Todo>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
