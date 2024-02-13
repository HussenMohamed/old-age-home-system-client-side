import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Box,
  Toolbar,
  Grid,
  Paper,
  Chip,
  Stack,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../../components/navbar-appDrawer";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import DialogChooseStaff from "./chooseStaffMember";
import AllUncompletedTasks from "./components/AllUncompletedTasks";
const defaultTheme = createTheme();
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AllCompletedTasks from "./components/AllCompletedTasks";

export default function Tasks() {
  const navigate = useNavigate();
  const { data: uncompletedTasks, isSuccess: isUncompletedTasksSuccess } =
    useQuery({
      queryKey: ["uncompletedTasks"],
      queryFn: () =>
        axios.get("http://localhost:4500/tasks/uncompleted").then((res) => {
          console.log(res.data);
          return res.data;
        }),
    });
  const { data: completedTasks, isSuccess: isCompletedTasksSuccess } = useQuery(
    {
      queryKey: ["completedTasks"],
      queryFn: () =>
        axios.get("http://localhost:4500/tasks/completed").then((res) => {
          console.log(res.data);
          return res.data;
        }),
    }
  );
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Tasks" />
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
          {/* Content here */}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <StaffTable /> */}
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} position="relative">
                      <Typography
                        variant="h4"
                        color="primary"
                        textAlign="center"
                      >
                        To Do
                      </Typography>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                        }}
                      >
                        <DialogChooseStaff />
                      </div>
                    </Grid>
                    {isUncompletedTasksSuccess &&
                      uncompletedTasks.map((task, index) => (
                        <AllUncompletedTasks key={index} task={task} />
                      ))}
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        textAlign="center"
                      >
                        Completed
                      </Typography>
                    </Grid>
                    {/*  */}
                    {isCompletedTasksSuccess &&
                      completedTasks.map((task, index) => (
                        <AllCompletedTasks key={index} task={task} />
                      ))}
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
