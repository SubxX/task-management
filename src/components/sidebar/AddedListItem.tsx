import { NavLink } from "react-router-dom";
interface Props {
  text: string;
  active: boolean;
  to: string;
}

const AddedListItem = ({ to, text, active = false }: Props) => {
  return (
    <NavLink to={to} className={`added-list ${active ? "active" : ""}`}>
      <div className="w-2 h-2 rounded-full flex-none bg-deep-gray"></div>
      <span className="flex-grow ml-5 font-medium">{text}</span>
    </NavLink>
  );
};

export default AddedListItem;
