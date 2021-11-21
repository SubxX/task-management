import Avatar from "../Avatar";
import { BiLogOutCircle } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useAppDispatch } from "../../redux/store/app.store";
import { authActions } from "../../pages/authentication/auth.slice";
import { logoutUser } from "../../pages/authentication/api/authentication.api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ConfirmationDialog from "../ConfirmationDialog";
import { createDelay } from "../../utils/helper.utils";

interface Props {
  userimg?: string;
  name: string;
  designation: string;
}

const UserInfo = ({ userimg, name, designation }: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function logoutHandler(): Promise<any> {
    setLoading(true);
    const response = await logoutUser();
    await createDelay(4000);
    setLoading(false);
    setOpen(false);
    if (response === "success") {
      dispatch(authActions.removeUser());
      history.push("/login");
    }
  }

  return (
    <div className="user-info flex items-center px-5">
      <Avatar type="user" image={userimg} />
      <div className="pl-2 flex-grow overflow-auto">
        <p className="leading-none font-medium truncate">{name}</p>
        <span className="text-deep-gray text-xs mt-1 truncate block">
          {designation}
        </span>
      </div>
      <Tooltip title="Logout" arrow placement="right">
        <IconButton
          color="secondary"
          size="medium"
          aria-label="logout"
          onClick={() => setOpen(true)}
          className="flex-none"
        >
          <BiLogOutCircle />
        </IconButton>
      </Tooltip>

      <ConfirmationDialog
        title="Are you sure ?"
        subtitle="you are about to logout from task manager"
        opened={open}
        closePopup={() => setOpen(false)}
        confirmAction={logoutHandler}
        loading={loading}
      />
    </div>
  );
};

export default UserInfo;
