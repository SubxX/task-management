import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { IoMdClose } from "react-icons/io";

interface AlertWrapperPropTypes {
  isOpened: boolean;
  type: "error" | "info" | "warning" | "success";
  closeAlert?: () => any;
  children: any;
}

const AlertWrapper = ({
  isOpened,
  type = "success",
  closeAlert,
  children,
}: AlertWrapperPropTypes) => {
  return (
    <Collapse in={isOpened}>
      <Alert
        severity={type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={closeAlert}
          >
            <IoMdClose />
          </IconButton>
        }
        className="mt-4"
      >
        {children}
      </Alert>
    </Collapse>
  );
};

export default AlertWrapper;
