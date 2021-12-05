import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
  text: string;
  active: boolean;
  id: string;
  deleteList: Function;
}

const AddedListItem = ({ id, text, active = false, deleteList }: Props) => {
  function handleDelete(e: any) {
    e.preventDefault();
    deleteList(id);
  }

  return (
    <NavLink
      to={`/app/${id}`}
      className={`added-list relative ${active ? "active" : ""}`}
    >
      <div className="w-2 h-2 rounded-full flex-none bg-deep-gray"></div>
      <span className="flex-grow ml-5 font-medium truncate pr-6">{text}</span>
      <IconButton onClick={handleDelete}>
        <AiOutlineDelete size={18} />
      </IconButton>
    </NavLink>
  );
};

export default AddedListItem;
