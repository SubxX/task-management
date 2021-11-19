import { forwardRef } from "react";
import { BsPlus } from "react-icons/bs";
import ButtonIcon from "../ButtonIcon";
import UserInfo from "./UserInfo";
import DefaultListItem from "./DefaultListItem";
import { FcHome, FcCalendar, FcTodoList } from "react-icons/fc";
import Devider from "../Devider";
import AddedListItem from "./AddedListItem";

const Sidebar = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <aside
      className="fixed left-0 top-0 bg-white z-30 transform -translate-x-full transition-transform lg:static lg:transform-none"
      ref={ref}
    >
      <div className="h-screen overflow-y-auto pt-8 pb-10 w-64 relative border-r">
        <UserInfo
          name="John C."
          designation="Art Director"
          userimg="/keneki.jpg"
        />

        <div className="px-3 mt-5 pb-1">
          <DefaultListItem
            icon={<FcHome size={24} />}
            name="Home"
          ></DefaultListItem>
          <DefaultListItem
            icon={<FcCalendar size={24} />}
            name="Calender"
          ></DefaultListItem>
          <DefaultListItem
            icon={<FcTodoList size={24} />}
            name="Tasks"
            notification={2}
          ></DefaultListItem>
        </div>

        <Devider classname="m-5" />

        <div className="added-items">
          <AddedListItem text="Directory" active={true} />
          <AddedListItem text="Onboarding" />
          <AddedListItem text="Offboarding" />
          <AddedListItem text="Timme-off" />
        </div>

        <ButtonIcon
          icon={<BsPlus size={24} />}
          className="absolute bottom-5 left-5"
        ></ButtonIcon>
      </div>
    </aside>
  );
});

export default Sidebar;
