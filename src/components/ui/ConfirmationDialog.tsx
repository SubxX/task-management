import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import CircularProgress from "@mui/material/CircularProgress";
import ButtonPill from "./ButtonPill";
import DialogActions from "@mui/material/DialogActions";

interface Props {
  closePopup: () => any;
  opened: boolean;
  confirmAction: () => any;
  title: string;
  subtitle: string;
  loading: boolean;
}

const ConfirmationDialog = ({
  closePopup,
  opened,
  title,
  subtitle,
  confirmAction,
  loading,
}: Props) => {
  function handleClosePopup() {
    if (loading) return;
    closePopup();
  }

  return (
    <Dialog
      onClose={handleClosePopup}
      open={opened}
      disableEscapeKeyDown={true}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonPill theme="secondary" onClick={closePopup} disabled={loading}>
          Cancel
        </ButtonPill>
        <ButtonPill onClick={confirmAction} disabled={loading}>
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
  );
};

export default ConfirmationDialog;
