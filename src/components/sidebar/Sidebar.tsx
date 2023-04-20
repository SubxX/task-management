import { forwardRef, useEffect, useState, useRef, useMemo } from "react";
import UserInfo from "./UserInfo";
import DefaultListItem from "./DefaultListItem";
import { FcHome, FcTodoList } from "react-icons/fc";
import Devider from "../ui/Devider";
import AddedListItem from "./AddedListItem";
import { useLocation } from "react-router";
import AddListDialog from "./AddListDialog";
import { RootState } from "../../redux/store/app.store";
import { useSelector } from "react-redux";
import List from "../../db/interfaces/list.interface";
import ConfirmationDialog from "../ui/ConfirmationDialog";
import { randomNumber } from "../../utils/helper.utils";

const Sidebar = forwardRef<HTMLDivElement, any>((props, ref) => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth);
  const { data: lists, isLoading } = useSelector(
    (state: RootState) => state.list
  );
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const deletableListId = useRef<string>("");
  const staticArray = useMemo(
    () => Array.from(new Array(randomNumber(1, 6))),
    []
  );

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
      setOpen(false);
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
            name={user?.name}
            designation={user?.designation}
            userimg="/keneki.jpg"
          />

          <div className="px-3 mt-5 pb-1">
            <DefaultListItem
              icon={<FcHome size={24} />}
              name="Home"
              to="/app"
              active={location.pathname === "/app"}
            />

            <DefaultListItem
              icon={<FcTodoList size={24} />}
              name="Important"
              to="/app/important"
              active={location.pathname === "/app/important"}
            />
          </div>

          <Devider classname="m-5" />

          <div className="added-items">
            {isLoading && !lists.length && (
              <div className="px-4 space-y-1">
                {staticArray.map((_, i) => (
                  <div className="h-10 bg-gray-100 rounded-md" key={i} />
                ))}
              </div>
            )}

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
          subtitle="you are about to delete this list (WILL NOT WORK)"
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
