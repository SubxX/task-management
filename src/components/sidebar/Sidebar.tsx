import { forwardRef, useEffect, useState, useRef } from "react";
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
import ConfirmationDialog from "../ui/ConfirmationDialog";

const Sidebar = forwardRef<HTMLDivElement, any>((props, ref) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId: string = useSelector((state: RootState) => state.auth.uid);
  const lists: List[] = useSelector((state: RootState) => state.list);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const deletableListId = useRef<string>("");

  useEffect(() => {
    fetchUserAddedLists();
  }, []);

  function fetchUserAddedLists() {
    getUserLists(userId)
      .then((lists) => dispatch(listActions.initList(lists)))
      .catch((err) => console.log(err));
  }

  // Delete a list

  function deleteListHandler(id: string): void {
    setOpen(true);
    deletableListId.current = id;
  }

  function closeDeleteListHandler(): void {
    deletableListId.current = "";
    setOpen(false);
  }

  function deleteList(): void {
    if (!deletableListId.current) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(deletableListId.current);
    }, 2000);
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
                id={list.uid}
                active={location.pathname === `/app/${list.uid}`}
                deleteList={deleteListHandler}
              />
            ))}
          </div>
        </div>
        <AddListDialog />
        <ConfirmationDialog
          title="Are you sure ?"
          subtitle="you are about to delete this list"
          opened={open}
          closePopup={closeDeleteListHandler}
          confirmAction={deleteList}
          loading={loading}
        />
      </div>
    </aside>
  );
});

export default Sidebar;
