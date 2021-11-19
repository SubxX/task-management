import Header from "../../../components/Header";
import Devider from "../../../components/Devider";
import Todo from "./Todo";

const TodoList = () => {
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
