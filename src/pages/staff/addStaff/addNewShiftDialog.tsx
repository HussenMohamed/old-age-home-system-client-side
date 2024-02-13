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
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
export default function AddNewShiftDialog({ shiftsRefetch }) {
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
  const [startTime, setStartTime] = React.useState<Dayjs | null>(null);
  const [endTime, setEndTime] = React.useState<Dayjs | null>(null);
  const handleSubmit = () => {
    const shiftData = {
      startTime: startTime?.format("HH:mm:ss"),
      endTime: endTime?.format("HH:mm:ss"),
    };
    console.log(shiftData);
    sendShiftData(shiftData);
    setTimeout(() => {
      shiftsRefetch();
    }, 200);
    setOpen(false);
  };
  const { mutate: sendShiftData } = useMutation({
    mutationKey: ["sendShiftData"],
    mutationFn: (roleData) => {
      axios
        .post("http://localhost:4500/shift", roleData)
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
        Add New Shift
      </Button>
      <Dialog
        open={open}
        // fullScreen={fullScreen}
        onClose={handleClose}
      >
        <DialogTitle>Add New Role</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker", "TimePicker"]}>
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
              />

              <TimePicker
                label="End Time"
                value={endTime}
                onChange={(newValue) => setEndTime(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Add Shift
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
