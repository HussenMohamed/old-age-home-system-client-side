import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function AddNewRoleDialog({ rolesRefetch }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // States for the input
  const [roleName, setRoleName] = React.useState("");
  const [roleDescription, setRoleDescription] = React.useState("");
  const handleSubmit = () => {
    const roleData = {
      roleName: roleName,
      roleDescription: roleDescription,
    };
    // console.log(roleData);
    sendRoleData(roleData);
    setTimeout(() => {
      rolesRefetch();
    }, 200);
    setOpen(false);
  };
  const { mutate: sendRoleData } = useMutation({
    mutationKey: ["sendResidentData"],
    mutationFn: (roleData) => {
      axios
        .post("http://localhost:4500/roles", roleData)
        .then((response) => {
          console.log(response);
          toast.success(response.data.success);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    },
  });
  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        onClick={handleClickOpen}
        sx={{ height: "100%", width: "100%" }}
      >
        Add New Role
      </Button>
      <Dialog
        open={open}
        // fullScreen={fullScreen}
        onClose={handleClose}
        // PaperProps={{
        //   component: "form",
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries((formData as any).entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        // }}
      >
        <DialogTitle>Add New Role</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Role Name</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="RoleName"
            name="RoleName"
            label="Role Name"
            type="text"
            fullWidth
            onChange={(e) => {
              setRoleName(e.target.value);
            }}
          />
          <DialogContentText sx={{ marginTop: "20px" }}>
            Add Role Description
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="RoleDescription"
            name="RoleDescription"
            label="Role Description"
            type="text"
            multiline
            fullWidth
            rows={4}
            onChange={(e) => {
              setRoleDescription(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Role</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
