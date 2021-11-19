import Avatar from "../Avatar";

interface Props {
  userimg?: string;
  name: string;
  designation: string;
}

const UserInfo = ({ userimg, name, designation }: Props) => {
  return (
    <div className="user-info flex items-center px-5">
      <Avatar type="user" image={userimg} />
      <div className="pl-2">
        <p className="leading-none font-medium">{name}</p>
        <small className="text-deep-gray text-xs font-medium">
          {designation}
        </small>
      </div>
    </div>
  );
};

export default UserInfo;
