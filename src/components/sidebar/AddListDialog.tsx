import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BsPlus } from "react-icons/bs";
import Fab from "@mui/material/Fab";
import ButtonPill from "../ButtonPill";

export default function AddListDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        sx={{ position: "absolute", bottom: "20px", right: "20px" }}
        onClick={handleClickOpen}
      >
        <BsPlus size={24} />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create new list</DialogTitle>
        <DialogContent>
          <DialogContentText>
            List is just a collection of todo's you can create, edit & delete a
            list any time.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="list_name"
            label="List name"
            type="text"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <ButtonPill theme="secondary" onClick={handleClose}>
            Cancel
          </ButtonPill>
          <ButtonPill onClick={handleClose}>Confirm</ButtonPill>
        </DialogActions>
      </Dialog>
    </>
  );
}
