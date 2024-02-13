import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../../../components/navbar-appDrawer";

import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const defaultTheme = createTheme();
export default function AddTask() {
  // dueDate with default value
  // const [dueDate, setDueDate] = React.useState<Dayjs | null>(
  //   dayjs("2022-04-17T15:30")
  // );
  // dueDate without default value
  const [dueDate, setDueDate] = React.useState<Dayjs | null>(null);
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");
  const assignerId = localStorage.getItem("staffId");
  const { staffId } = useParams();

  const handleSubmit = () => {
    const taskData = {
      taskTitle,
      taskDescription,
      assigneeId: parseInt(staffId),
      assignerId: parseInt(assignerId),
      dueDate: dueDate?.format("YY-MM-DD HH:mm"),
      assignDate: dayjs().format("YY-MM-DD HH:mm"),
    };
    console.log(taskData);
    sendTaskData(taskData);
  };
  const { mutate: sendTaskData } = useMutation({
    mutationKey: ["sendTaskData"],
    mutationFn: (data) => {
      axios
        .post(`http://localhost:4500/tasks`, data)
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
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Add New Task" />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Grid
                    container
                    spacing={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={6}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Task Title"
                        fullWidth
                        onChange={(e) => {
                          setTaskTitle(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Task Description"
                        multiline
                        rows={3}
                        fullWidth
                        onChange={(e) => {
                          setTaskDescription(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginTop: "-10px" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DateTimePicker", "DateTimePicker"]}
                        >
                          <DateTimePicker
                            label="Set Due Date For The Task"
                            value={dueDate}
                            onChange={(newValue) => setDueDate(newValue)}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="outlined-read-only-input"
                        label="Role Of The Assignee"
                        defaultValue="Nurse"
                        fullWidth
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Button variant="contained" onClick={handleSubmit}>
                        Add Task
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
