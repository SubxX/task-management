import { forwardRef } from "react";
import UserInfo from "./UserInfo";
import DefaultListItem from "./DefaultListItem";
import { FcHome, FcCalendar, FcTodoList } from "react-icons/fc";
import Devider from "../Devider";
import AddedListItem from "./AddedListItem";
import { useLocation } from "react-router";
import AddListDialog from "./AddListDialog";

const Sidebar = forwardRef<HTMLDivElement, any>((props, ref) => {
  const location = useLocation();

  return (
    <aside
      className="fixed left-0 top-0 bg-white z-30 transform -translate-x-full transition-transform lg:static lg:transform-none"
      ref={ref}
    >
      <div className="relative">
        <div className="h-screen overflow-y-auto pt-8 pb-10 w-64 border-r">
          <UserInfo
            name="John C."
            designation="Art Director"
            userimg="/keneki.jpg"
          />

          <div className="px-3 mt-5 pb-1">
            <DefaultListItem
              icon={<FcHome size={24} />}
              name="Home"
              to="/app"
              active={location.pathname === "/app"}
            ></DefaultListItem>
            <DefaultListItem
              icon={<FcCalendar size={24} />}
              name="Calender"
              to="/app/due"
              active={location.pathname === "/app/due"}
            ></DefaultListItem>
            <DefaultListItem
              icon={<FcTodoList size={24} />}
              name="Tasks"
              notification={2}
              to="/app/important"
              active={location.pathname === "/app/important"}
            ></DefaultListItem>
          </div>

          <Devider classname="m-5" />

          <div className="added-items">
            <AddedListItem
              text="Directory"
              to="/app/directory"
              active={location.pathname === "/app/directory"}
            />
            <AddedListItem
              text="Onboarding"
              to="/app/onboarding"
              active={location.pathname === "/app/onboarding"}
            />
            <AddedListItem
              text="Offboarding"
              to="/app/offboarding"
              active={location.pathname === "/app/offboarding"}
            />
            <AddedListItem
              text="Time-off"
              to="/app/time-off"
              active={location.pathname === "/app/time-off"}
            />
          </div>
        </div>
        <AddListDialog />
      </div>
    </aside>
  );
});

export default Sidebar;
