import { useEffect, useMemo } from "react";
import Header from "../../../components/ui/Header";
import Devider from "../../../components/ui/Devider";
import Todo from "../components/Todo";
import TodoI from "../../../db/interfaces/todo.interface";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppDispatch } from "../../../redux/store/app.store";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/app.store";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { sortTodos } from "../utils/app.utils";
import { fetchImportantTodosThunk } from "../../../redux/async-actions/todo-actions";
import { importantListActions } from "../../../redux/reducers/importantlist.slice";

const ImportantList = () => {
  const userId = useSelector((state: RootState) => state.auth.uid);
  const { todos, isLoading } = useSelector(
    (state: RootState) => state.importantTodos
  );
  const [completed, incomplete] = useMemo(() => sortTodos(todos), [todos]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchImportantTodosThunk(userId));
  }, []);

  function todoStatehandler(todoid: string, type = "complete") {
    dispatch(importantListActions.completeTodo({ todoid }));
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
        name="Important Todo's"
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

export default ImportantList;
