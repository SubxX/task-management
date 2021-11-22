import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BsPlus } from "react-icons/bs";
import Fab from "@mui/material/Fab";
import ButtonPill from "../ui/ButtonPill";
import CircularProgress from "@mui/material/CircularProgress";
import { createList } from "../../db/api/todolist.api";
import store from "../../redux/store/app.store";

export default function AddListDialog() {
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (loading) return;
    setOpen(false);
  };

  async function createTodoList() {
    setLoading(true);
    const uid = store.getState().auth.uid;
    const response = await createList(uid, listName);
    setLoading(false);
    console.log(response);
  }

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
      <Dialog open={open} onClose={handleClose} disableEscapeKeyDown={loading}>
        <DialogTitle>Create new list</DialogTitle>
        <DialogContent>
          <DialogContentText>
            List is just a collection of todo's. You can create, edit & delete a
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
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            disabled={loading}
          />
        </DialogContent>
        <DialogActions>
          <ButtonPill
            theme="secondary"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </ButtonPill>
          <ButtonPill onClick={createTodoList} disabled={loading}>
            {loading ? (
              <CircularProgress
                style={{ width: "20px", height: "20px", color: "#fff" }}
              />
            ) : (
              "Confirm"
            )}
          </ButtonPill>
        </DialogActions>
      </Dialog>
    </>
  );
}
