interface Props {
  text: string;
  active?: boolean;
}

const AddedListItem = ({ text, active = false }: Props) => {
  return (
    <div className={`added-list ${active ? "active" : ""}`}>
      <div className="w-2 h-2 rounded-full flex-none bg-deep-gray"></div>
      <span className="flex-grow ml-5 font-medium">{text}</span>
    </div>
  );
};

export default AddedListItem;
