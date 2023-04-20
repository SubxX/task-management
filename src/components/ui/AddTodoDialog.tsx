import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonPill from "./ButtonPill";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../../db/api/todo.api";
import { selectedListActions } from "../../redux/reducers/selectedlist.slice";
import { RootState } from "../../redux/store/app.store";

const AddTodoDialog = ({ open, setOpen, listid }: any) => {
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.uid);

  const handleClose = () => {
    if (loading) return;
    setTodo("");
    setOpen(false);
  };

  async function createTodoList() {
    setLoading(true);
    createTodo(listid, { todo, createdBy: userId })
      .then((result) => {
        dispatch(selectedListActions.addTodo(result));
        setTodo("");
        setOpen(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  return (
    <Dialog open={open} onClose={handleClose} disableEscapeKeyDown={loading}>
      <DialogTitle>Add new todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Type you todo in the below input box
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="todo"
          label="Todo"
          type="text"
          fullWidth
          variant="filled"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          disabled={loading}
        />
      </DialogContent>
      <DialogActions>
        <ButtonPill theme="secondary" onClick={handleClose} disabled={loading}>
          Cancel
        </ButtonPill>
        <ButtonPill onClick={createTodoList} disabled={loading}>
          {loading ? (
            <CircularProgress
              style={{ width: "20px", height: "20px", color: "#fff" }}
            />
          ) : (
            "Add"
          )}
        </ButtonPill>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoDialog;
