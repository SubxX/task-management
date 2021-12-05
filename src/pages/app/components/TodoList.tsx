import { useEffect } from "react";
import Header from "../../../components/ui/Header";
import Devider from "../../../components/ui/Devider";
import Todo from "./Todo";
import { useParams } from "react-router";
import { getListTodos } from "../../../db/api/todo.api";

const TodoList = () => {
  const { todoid }: any = useParams();

  useEffect(() => {
    getListTodos(todoid)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-grow container mx-auto">
      <Header listname="Directory" completed={2} total={5} />

      <div className="todo-list mt-5 px-4">
        <Todo isimportant={true} completed={false} />
        <Todo isimportant={true} completed={false} />
        <Todo isimportant={false} completed={false} />
        <Devider classname="my-5" />
        <Todo isimportant={false} completed={true} />
      </div>
    </div>
  );
};

export default TodoList;
