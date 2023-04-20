import { FcTodoList } from "react-icons/fc";

const TodoHome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 w-full text-center">
      <div>
        <FcTodoList size={50} className="inline-block" />
        <div className="text-2xl mt-2">
          welcome to
          <span className="font-bold block">TODO MANAGER</span>
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
