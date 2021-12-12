import { ReactNode } from "react";
import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import TodoInterface from "../../../db/interfaces/todo.interface";

interface Props {
  todo: TodoInterface;
  children: ReactNode;
  todoStatehandler: (todoid: string) => void;
}

const Todo = ({ children, todoStatehandler, todo }: Props) => {
  return (
    <div className="p-4 bg-light-gray rounded-md flex items-start mb-2">
      <button
        className="flex-none mt-1"
        onClick={() => todoStatehandler(todo.uid)}
      >
        {!todo.completed ? (
          <BsCheckCircle size={24} />
        ) : (
          <BsCheckCircleFill size={24} className="text-deep-purple" />
        )}
      </button>
      <div className="flex-grow px-3 text-base mt-1">{children}</div>
      <button className="flex-none mt-1">
        {!todo.important ? (
          <BsStar size={20} />
        ) : (
          <BsStarFill size={20} className="text-deep-purple" />
        )}
      </button>
    </div>
  );
};

export default Todo;
