import { Link } from "react-router-dom";
interface Props {
  icon: any;
  name: string;
  notification?: number;
  active: boolean;
  to: string;
}

const DefaultListItem = ({ icon, name, notification, active, to }: Props) => {
  const classes = active
    ? "bg-light-gray text-black"
    : "text-deep-gray hover:bg-light-gray hover:text-black";

  return (
    <Link
      to={to}
      className={`default-list-item flex items-center p-2 rounded-md cursor-pointer font-medium 
      ${classes}`}
    >
      {icon}
      <span className="flex-grow pl-3">{name}</span>
      {notification && <div className="notification-chip">{notification}</div>}
    </Link>
  );
};

export default DefaultListItem;
