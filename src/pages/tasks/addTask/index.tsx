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
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Navbar from "../../../components/navbar-appDrawer";
import BackgroundLetterAvatars from "../../residents/residentProfile/LettersAvatar";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { NavLink, useParams } from "react-router-dom";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const defaultTheme = createTheme();
export default function AddTask() {
  // dueDate with default value
  // const [dueDate, setDueDate] = React.useState<Dayjs | null>(
  //   dayjs("2022-04-17T15:30")
  // );
  // dueDate without default value
  const [dueDate, setDueDate] = React.useState<Dayjs | null>();
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Task Description"
                        multiline
                        rows={3}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6} sx={{ marginTop: "-10px" }}>
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
                    <Grid item xs={6}>
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
                      <Button variant="contained">Add Task</Button>
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
