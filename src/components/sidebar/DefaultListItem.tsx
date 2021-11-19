interface Props {
  icon: any;
  name: string;
  notification?: number;
  active?: boolean;
}

const DefaultListItem = ({
  icon,
  name,
  notification,
  active = false,
}: Props) => {
  return (
    <div className="default-list-item flex items-center text-deep-gray p-2 rounded-md cursor-pointer font-medium hover:bg-light-gray hover:text-black">
      {icon}
      <span className="flex-grow pl-3">{name}</span>
      {notification && <div className="notification-chip">{notification}</div>}
    </div>
  );
};

export default DefaultListItem;
