import { useEffect, useState } from "react";
import Header from "../../../components/ui/Header";
import Devider from "../../../components/ui/Devider";
import Todo from "./Todo";
import { useParams } from "react-router";
import { getListTodos, getListInfo } from "../../../db/api/todo.api";
import TodoI from "../../../db/interfaces/todo.interface";
import CircularProgress from "@mui/material/CircularProgress";
import { selectedListActions } from "../../../redux/reducers/selectedlist.slice";
import { useAppDispatch } from "../../../redux/store/app.store";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/app.store";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const TodoList = () => {
  const { listid }: any = useParams();
  const [loading, setLoading] = useState(true);
  const { todos, completed, name, incomplete } = useSelector(
    (state: RootState) => state.selectedList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([getListInfo(listid), getListTodos(listid)])
      .then((data) => {
        const [{ name }, todos] = data;
        dispatch(selectedListActions.initData({ name, todos }));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  function todoStatehandler(todoid: string, type = "complete") {
    dispatch(selectedListActions.completeTodo({ todoid }));
  }

  if (loading)
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
