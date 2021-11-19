import ButtonIcon from "./ButtonIcon";
import { RiSearch2Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";

interface Props {
  listname: string;
  completed: number;
  total: number;
}

const Header = ({ listname, completed, total }: Props) => {
  return (
    <div className="py-6 px-4 flex items-center justify-between flex-wrap border-b lg:pt-8">
      <div>
        <p className="text-2xl font-medium mb-2">{listname}</p>
        <TodoProgress total={total} completed={completed} />
      </div>
      <div className="flex items-center flex-wrap">
        <ButtonIcon icon={<RiSearch2Line size={20} />} theme="secondary" />
        <ButtonIcon icon={<BsPlus size={24} />} className="ml-2" />
      </div>
    </div>
  );
};

export default Header;

const TodoProgress = ({ total, completed }: any) => {
  return (
    <div className="flex items-center flex-wrap">
      <span className="text-deep-gray font-medium text-xs leading-none mr-3 mb-2">
        {completed} of {total} completed
      </span>
      <div className="todo-progress mb-2">
        <span style={{ width: `${30}%` }}></span>
      </div>
    </div>
  );
};
