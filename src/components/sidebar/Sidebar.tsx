import { forwardRef, useEffect } from "react";
import UserInfo from "./UserInfo";
import DefaultListItem from "./DefaultListItem";
import { FcHome, FcCalendar, FcTodoList } from "react-icons/fc";
import Devider from "../ui/Devider";
import AddedListItem from "./AddedListItem";
import { useLocation } from "react-router";
import AddListDialog from "./AddListDialog";
import { getUserLists } from "../../db/api/todolist.api";
import { RootState } from "../../redux/store/app.store";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../redux/reducers/list.slice";
import List from "../../db/interfaces/list.interface";

const Sidebar = forwardRef<HTMLDivElement, any>((props, ref) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId: string = useSelector((state: RootState) => state.auth.uid);
  const lists: List[] = useSelector((state: RootState) => state.list);

  useEffect(() => {
    fetchUserAddedLists();
  }, []);

  async function fetchUserAddedLists() {
    try {
      const lists = await getUserLists(userId);
      dispatch(listActions.initList(lists));
    } catch (error) {
      console.error(error);
    }
  }

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
            {lists.map((list: List) => (
              <AddedListItem
                key={list.uid}
                text={list.name}
                to={`/app/${list.uid}`}
                active={location.pathname === `/app/${list.uid}`}
              />
            ))}
          </div>
        </div>
        <AddListDialog />
      </div>
    </aside>
  );
});

export default Sidebar;
