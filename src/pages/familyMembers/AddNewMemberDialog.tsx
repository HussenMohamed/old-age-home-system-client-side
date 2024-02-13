import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function AddNewFamilyMember({ refetch }) {
  // const { refetch } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // input states
  const [name, setName] = React.useState("");
  const [residentId, setResidentId] = React.useState();
  const [relationship, setRelationship] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    const familyMemberData = {
      familyMemberName: name,
      residentId: residentId,
      relationship: relationship,
      phoneNumber: phoneNumber,
      email: email,
    };
    console.log(familyMemberData);
    sendFamilyMemberData(familyMemberData);
    setTimeout(() => {
      refetch();
    }, 200);

    setOpen(false);
  };
  const { mutate: sendFamilyMemberData } = useMutation({
    mutationKey: ["sendFamilyMemberData"],
    mutationFn: (data) => {
      axios
        .post(`http://localhost:4500/familyMembers`, data)
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
      <Button variant="contained" onClick={handleClickOpen}>
        Add New Family Member
      </Button>
      {/* Start Of add new resident dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"New Family Member Details"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="familyMemberName"
                name="familyMemberName"
                label="Family Member Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6} paddingRight={4}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="residentId"
                name="residentId"
                label="Resident Id"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setResidentId(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="residentId"
                name="residentId"
                label="Relationship"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setRelationship(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6} paddingRight={4}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                type="phoneNumber"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="email"
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} autoFocus variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
