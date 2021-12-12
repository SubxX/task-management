import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { RiSearch2Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import AddTodoDialog from "./AddTodoDialog";
interface Props {
  listid: string;
  name: string;
  total: number;
  completed: number;
}

const Header = ({ listid, name, total, completed }: Props) => {
  const [open, setOpen] = useState(false);
  const handleAddTodoOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="py-6 px-4 flex items-center justify-between flex-wrap border-b lg:pt-8">
        <div>
          <p className="text-2xl font-medium">{name}</p>
          {Boolean(total) && (
            <TodoProgress total={total} completed={completed} />
          )}
        </div>
        <div className="flex items-center flex-wrap">
          <ButtonIcon icon={<RiSearch2Line size={20} />} theme="secondary" />
          <ButtonIcon
            onClick={handleAddTodoOpen}
            icon={<BsPlus size={24} />}
            className="ml-2"
          />
        </div>
      </div>
      <AddTodoDialog open={open} setOpen={setOpen} listid={listid} />
    </>
  );
};

export default Header;

const TodoProgress = ({ total, completed }: any) => {
  return (
    <div className="flex items-center flex-wrap mt-2">
      <span className="text-deep-gray font-medium text-xs leading-none mr-3 mb-2">
        {completed} of {total} completed
      </span>
      <div className="todo-progress mb-2">
        <span style={{ width: `${(completed / total) * 100}%` }}></span>
      </div>
    </div>
  );
};
