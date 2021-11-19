import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
interface Props {
  completed: boolean;
  isimportant: boolean;
}

const Todo = ({ completed, isimportant }: Props) => {
  return (
    <div
      className={`p-4 bg-light-gray rounded-md flex items-start mb-2 ${
        completed ? "" : ""
      }`}
    >
      <button className="flex-none mt-1">
        {!completed ? (
          <BsCheckCircle size={24} />
        ) : (
          <BsCheckCircleFill size={24} className="text-deep-purple" />
        )}
      </button>
      <div className="flex-grow px-3 text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        accusamus blanditiis obcaecati minus ab a, dolor autem, accusantium, sit
        error soluta unde id veritatis.
      </div>
      <button className="flex-none mt-1">
        {!isimportant ? (
          <BsStar size={20} />
        ) : (
          <BsStarFill size={20} className="text-deep-purple" />
        )}
      </button>
    </div>
  );
};

export default Todo;
